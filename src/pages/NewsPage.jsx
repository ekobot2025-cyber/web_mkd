import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsService } from '../services/newsService';
import { Calendar, User, ArrowRight, Search, Plus } from 'lucide-react';

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  useEffect(() => {
    const load = () => {
      setNews(newsService.getAllNews());
    };
    load();
    window.addEventListener('mkd_news_updated', load);
    return () => window.removeEventListener('mkd_news_updated', load);
  }, []);

  const categories = ['Semua', ...new Set(news.map((item) => item.kategori))];

  const filteredNews = news.filter((item) => {
    const matchCat = selectedCategory === 'Semua' || item.kategori === selectedCategory;
    const matchSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.ringkasan.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#500303] py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">
            Pusat Informasi & Warta
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Berita & Kebijakan Keuangan Daerah
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10">
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-normal">
              Kumpulan siaran pers, artikel ilmiah, analisis kebijakan APBD, dan kegiatan akademik MKD Universitas Cenderawasih.
            </p>
            <Link
              to="/admin"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFB013] hover:bg-[#E59800] text-[#380202] text-xs font-black shadow-md transition-all self-start sm:self-auto uppercase tracking-wider"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Posting Berita (Portal Admin)</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-200">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-maroon text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari judul berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover-lift border border-gray-100 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={item.gambar}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/uploads/L1.jpg';
                    }}
                    alt={item.judul}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-maroon text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow">
                    {item.kategori}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      <span>{item.tanggal}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-gold" />
                      <span>{item.penulis}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-primary group-hover:text-maroon transition-colors line-clamp-2 leading-snug">
                    <Link to={`/berita/${item.slug}`}>
                      {item.judul}
                    </Link>
                  </h3>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {item.ringkasan}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2">
                <Link
                  to={`/berita/${item.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-maroon hover:underline"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
