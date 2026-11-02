import { newsList as initialNewsList } from '../data/newsData';

const STORAGE_KEY = 'mkd_news_storage_v2';
const API_URL = '/api/news.php';

// Helper to generate a slug from a title
export function generateSlug(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

// Format today's date in Indonesian format: e.g. "03 November 2026"
export function getFormattedToday() {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  return `${day} ${month} ${year}`;
}

export const newsService = {
  // Get all news (from localStorage or initialNewsList)
  getAllNews() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Gagal membaca localStorage berita, menggunakan data bawaan:', e);
    }

    // Seed localStorage with initialNewsList
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialNewsList));
    } catch (e) {
      console.warn('Gagal menyimpan inisialisasi berita:', e);
    }
    return initialNewsList;
  },

  // Get single news by slug
  getNewsBySlug(slug) {
    const list = this.getAllNews();
    return list.find((item) => item.slug === slug) || null;
  },

  // Get single news by ID
  getNewsById(id) {
    const list = this.getAllNews();
    return list.find((item) => String(item.id) === String(id)) || null;
  },

  // Save news (Create or Update)
  saveNews(newsItem) {
    const list = this.getAllNews();
    let updatedList;

    if (newsItem.id) {
      // Update existing
      updatedList = list.map((item) => {
        if (String(item.id) === String(newsItem.id)) {
          return {
            ...item,
            ...newsItem,
            slug: newsItem.slug ? generateSlug(newsItem.slug) : generateSlug(newsItem.judul),
            updatedAt: new Date().toISOString()
          };
        }
        return item;
      });
    } else {
      // Create new
      const nextId = list.reduce((max, cur) => Math.max(max, Number(cur.id) || 0), 0) + 1;
      const newItem = {
        id: nextId,
        slug: generateSlug(newsItem.judul || `berita-${nextId}`),
        judul: newsItem.judul || 'Berita Baru MKD',
        kategori: newsItem.kategori || 'Akademik & Riset',
        tanggal: newsItem.tanggal || getFormattedToday(),
        ringkasan: newsItem.ringkasan || '',
        konten: newsItem.konten || '',
        gambar: newsItem.gambar || '/uploads/photos/1665095500.jpg',
        penulis: newsItem.penulis || 'Admin MKD UNCEN',
        createdAt: new Date().toISOString()
      };
      // Prepend so new article appears at the very top!
      updatedList = [newItem, ...list];
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      // Dispatch storage event for other components
      window.dispatchEvent(new Event('mkd_news_updated'));
    } catch (e) {
      console.error('Gagal menyimpan berita:', e);
      throw e;
    }

    // Also attempt to push to PHP backend if available
    this.syncToBackend(updatedList).catch(() => {});

    return updatedList;
  },

  // Delete news
  deleteNews(id) {
    const list = this.getAllNews();
    const updatedList = list.filter((item) => String(item.id) !== String(id));
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
      window.dispatchEvent(new Event('mkd_news_updated'));
    } catch (e) {
      console.error('Gagal menghapus berita:', e);
      throw e;
    }

    this.syncToBackend(updatedList).catch(() => {});
    return updatedList;
  },

  // Reset to original default news
  resetToDefault() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialNewsList));
      window.dispatchEvent(new Event('mkd_news_updated'));
    } catch (e) {
      console.error('Gagal reset berita:', e);
    }
    return initialNewsList;
  },

  // Export news data as downloadable JSON
  exportData() {
    const list = this.getAllNews();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `berita_mkd_uncen_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  // Optional background sync with PHP API
  async syncToBackend(data) {
    try {
      await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sync', news: data })
      });
    } catch (err) {
      // Offline or local dev without PHP server is completely fine
    }
  }
};
