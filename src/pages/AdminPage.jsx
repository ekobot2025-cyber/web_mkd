import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Lock, User, Key, Eye, EyeOff, Plus, Edit3, Trash2, 
  ExternalLink, ArrowLeft, Search, Filter, CheckCircle2, 
  AlertCircle, Download, RefreshCw, Image, Calendar, Tag, 
  FileText, Sparkles, ShieldCheck, LogOut, Globe, X
} from 'lucide-react';
import { newsService, getFormattedToday, generateSlug } from '../services/newsService';

export default function AdminPage() {
  const navigate = useNavigate();

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // News list state
  const [newsList, setNewsList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  // Modal editor state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('create'); // 'create' or 'edit'
  const [activeEditorTab, setActiveEditorTab] = useState('form'); // 'form' or 'preview'
  const [formData, setFormData] = useState({
    id: null,
    judul: '',
    kategori: 'Kebijakan Nasional',
    customKategori: '',
    tanggal: getFormattedToday(),
    penulis: 'Admin MKD UNCEN',
    ringkasan: '',
    konten: '',
    gambar: '/uploads/photos/1665095500.jpg'
  });

  // Toast notification
  const [toast, setToast] = useState(null);

  // Check login session on mount
  useEffect(() => {
    const session = sessionStorage.getItem('mkd_admin_auth');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
    loadNews();
  }, []);

  const loadNews = () => {
    const data = newsService.getAllNews();
    setNewsList(data);
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');

    // Default credentials for MKD UNCEN Admin
    if (username.trim() === 'admin' && password === 'mkduncen2026') {
      sessionStorage.setItem('mkd_admin_auth', 'true');
      setIsAuthenticated(true);
      showToast('Login berhasil! Selamat datang di Portal Admin MKD UNCEN.');
    } else {
      setLoginError('Username atau kata sandi tidak sesuai. Silakan periksa kembali.');
    }
  };

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem('mkd_admin_auth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
    showToast('Anda telah keluar dari Portal Admin.', 'info');
  };

  // Categories list
  const standardCategories = [
    'Kebijakan Nasional',
    'Keuangan Daerah Papua',
    'Manajemen Anggaran',
    'Tata Kelola BUMD',
    'Akademik & Admisi',
    'Riset Pascasarjana',
    'Lainnya (Kustom)'
  ];

  const allCategories = ['Semua', ...new Set(newsList.map((item) => item.kategori))];

  // Open Create Modal
  const openCreateModal = () => {
    setModalMode('create');
    setFormData({
      id: null,
      judul: '',
      kategori: 'Kebijakan Nasional',
      customKategori: '',
      tanggal: getFormattedToday(),
      penulis: 'Admin MKD UNCEN',
      ringkasan: '',
      konten: '',
      gambar: '/uploads/photos/1665095500.jpg'
    });
    setActiveEditorTab('form');
    setIsModalOpen(true);
  };

  // Open Edit Modal
  const openEditModal = (article) => {
    setModalMode('edit');
    const isCustom = !standardCategories.includes(article.kategori);
    setFormData({
      id: article.id,
      judul: article.judul,
      kategori: isCustom ? 'Lainnya (Kustom)' : article.kategori,
      customKategori: isCustom ? article.kategori : '',
      tanggal: article.tanggal || getFormattedToday(),
      penulis: article.penulis || 'Admin MKD UNCEN',
      ringkasan: article.ringkasan || '',
      konten: article.konten || '',
      gambar: article.gambar || '/uploads/photos/1665095500.jpg'
    });
    setActiveEditorTab('form');
    setIsModalOpen(true);
  };

  // Handle Image Upload from Local Computer (File Reader)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Mohon pilih file bertipe gambar (JPG, PNG, atau WEBP).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData((prev) => ({
        ...prev,
        gambar: event.target.result
      }));
    };
    reader.readAsDataURL(file);
  };

  // Save News Article
  const handleSaveArticle = (e) => {
    e.preventDefault();

    if (!formData.judul.trim()) {
      alert('Judul berita tidak boleh kosong.');
      return;
    }

    if (!formData.ringkasan.trim()) {
      alert('Ringkasan singkat berita tidak boleh kosong.');
      return;
    }

    const finalCategory = formData.kategori === 'Lainnya (Kustom)'
      ? (formData.customKategori.trim() || 'Umum')
      : formData.kategori;

    const payload = {
      ...formData,
      kategori: finalCategory
    };

    try {
      newsService.saveNews(payload);
      loadNews();
      setIsModalOpen(false);
      showToast(
        modalMode === 'create' 
          ? 'Berita baru berhasil ditambahkan dan langsung terbit di website!' 
          : 'Perubahan berita berhasil disimpan!'
      );
    } catch (err) {
      alert('Terjadi kesalahan saat menyimpan berita.');
    }
  };

  // Delete News Article
  const handleDeleteArticle = (id, judul) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus berita:\n\n"${judul}"?\n\nTindakan ini tidak dapat dibatalkan.`)) {
      newsService.deleteNews(id);
      loadNews();
      showToast('Berita telah berhasil dihapus.', 'info');
    }
  };

  // Reset to default news
  const handleResetData = () => {
    if (window.confirm('Apakah Anda yakin ingin mengatur ulang daftar berita ke versi bawaan awal? Semua artikel tambahan Anda akan digantikan.')) {
      newsService.resetToDefault();
      loadNews();
      showToast('Daftar berita telah diatur ulang ke data awal.', 'info');
    }
  };

  // Filtered news
  const filteredList = newsList.filter((item) => {
    const matchCat = selectedCategory === 'Semua' || item.kategori === selectedCategory;
    const matchSearch = item.judul.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.ringkasan.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        item.penulis.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  // Preset default photos for quick selection
  const presetPhotos = [
    { label: 'Seminar Keuda', path: '/uploads/photos/1665095500.jpg' },
    { label: 'Rakor Aset Papua', path: '/uploads/photos/1665095665.jpg' },
    { label: 'Pengendalian Inflasi', path: '/uploads/photos/1665096551.jpg' },
    { label: 'Tata Kelola BUMD', path: '/uploads/photos/1665096620.jpg' },
    { label: 'Flayer Pendaftaran', path: '/uploads/Flayer_Baru.png' },
    { label: 'Fasilitas Kampus', path: '/uploads/fasilitas/1.jpg' },
    { label: 'Lab Multimedia', path: '/uploads/fasilitas/4.jpg' }
  ];

  // =========================================================================
  // 1. RENDER: LOGIN VIEW (Jika Belum Login)
  // =========================================================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          
          {/* Logo & Header */}
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <img 
              src="/icon_MKD.png" 
              alt="Logo MKD Uncen" 
              className="w-14 h-14 object-contain filter drop-shadow-md"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#640404]/10 text-[#640404] text-xs font-black tracking-wider uppercase mb-2">
            <Lock className="w-3.5 h-3.5 text-[#FFB013]" />
            <span>PORTAL ADMINISTRATOR MKD</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#640404] tracking-tight">
            Login Pengelola Berita
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-gray-600 font-medium">
            Program Studi Magister Keuangan Daerah • Pascasarjana UNCEN
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
          <div className="bg-white py-8 px-6 sm:px-10 shadow-xl border border-gray-200 rounded-3xl space-y-6">
            
            {loginError && (
              <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                  Username Pengelola
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Masukkan username admin"
                    className="block w-full pl-10 pr-3.5 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
                  Kata Sandi
                </label>
                <div className="relative rounded-xl shadow-xs">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Key className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi"
                    className="block w-full pl-10 pr-10 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] focus:border-transparent outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Info Kredensial Bawaan */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200/80 text-[11px] text-amber-900 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-950">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
                  <span>Kredensial Login Bawaan:</span>
                </div>
                <div className="flex justify-between font-mono pt-0.5">
                  <span>Username: <strong>admin</strong></span>
                  <span>Sandi: <strong>mkduncen2026</strong></span>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl shadow-md text-sm font-black text-[#450202] bg-[#FFB013] hover:bg-[#E59800] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFB013] transition-all transform active:scale-98 uppercase tracking-wider"
                >
                  Masuk ke Panel Berita
                </button>
              </div>
            </form>

            <div className="pt-4 border-t border-gray-100 text-center">
              <Link 
                to="/" 
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#640404] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Kembali ke Beranda Website MKD</span>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. RENDER: DASHBOARD VIEW (Setelah Login)
  // =========================================================================
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl shadow-2xl text-xs font-bold text-white ${
            toast.type === 'info' ? 'bg-gray-900' : 'bg-[#640404] border border-[#FFB013]'
          }`}>
            <CheckCircle2 className="w-4 h-4 text-[#FFB013]" />
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Top Admin Navbar */}
      <header className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#500303] text-white shadow-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Brand Identity */}
            <div className="flex items-center gap-3">
              <img 
                src="/icon_MKD.png" 
                alt="Logo MKD" 
                className="w-9 h-9 object-contain filter drop-shadow-sm" 
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-black text-sm tracking-wide">PORTAL ADMIN MKD</span>
                  <span className="bg-[#FFB013] text-[#450202] text-[10px] font-black px-2 py-0.5 rounded-full">
                    S2 PASCASARJANA
                  </span>
                </div>
                <div className="text-[10px] text-gray-300">
                  Manajemen Publikasi Berita & Pengumuman
                </div>
              </div>
            </div>

            {/* Right: Quick Actions & Logout */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                to="/"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#FFB013]" />
                <span className="hidden sm:inline">Lihat Website</span>
              </Link>

              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-950/60 hover:bg-red-900 text-xs font-bold transition-all text-red-200"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Keluar</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        
        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Total Artikel Berita</div>
              <div className="text-2xl sm:text-3xl font-black text-[#640404] mt-1">{newsList.length}</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Dipublikasikan di website</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#640404]/10 text-[#640404] flex items-center justify-center">
              <FileText className="w-6 h-6 text-[#FFB013]" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Kategori Berita Aktif</div>
              <div className="text-2xl sm:text-3xl font-black text-[#640404] mt-1">{allCategories.length - 1}</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Topik kebijakan & akademik</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-[#640404]/10 text-[#640404] flex items-center justify-center">
              <Tag className="w-6 h-6 text-[#FFB013]" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status Sinkronisasi</div>
              <div className="text-sm font-black text-green-700 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Tersimpan & Aktif</span>
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">Otomatis tayang di beranda</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-green-50 text-green-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Action Header & Filtering */}
        <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#640404]">
                Daftar Artikel & Berita MKD
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                Kelola, sunting, atau tambahkan warta akademik dan kebijakan fiskal baru.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={openCreateModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#640404] hover:bg-[#800505] text-white text-xs font-black shadow-md hover:shadow-lg transition-all"
              >
                <Plus className="w-4 h-4 text-[#FFB013]" />
                <span>+ Posting Berita Baru</span>
              </button>

              <button
                onClick={() => newsService.exportData()}
                title="Ekspor Data JSON"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ekspor JSON</span>
              </button>

              <button
                onClick={handleResetData}
                title="Atur Ulang ke Berita Awal"
                className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-full bg-gray-100 hover:bg-red-50 hover:text-red-700 text-gray-500 text-xs font-bold transition-all"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset Awal</span>
              </button>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-gray-100">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari berdasarkan judul berita, ringkasan, atau penulis..."
                className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none transition-all"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full sm:w-auto px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none font-bold text-gray-700"
              >
                {allCategories.map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* News Table / List */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xs overflow-hidden">
          {filteredList.length === 0 ? (
            <div className="text-center py-16 px-4">
              <FileText className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-base font-bold text-gray-700">Tidak ada berita yang sesuai</h3>
              <p className="text-xs text-gray-500 mt-1 max-w-sm mx-auto">
                Coba ubah kata kunci pencarian atau ganti filter kategori.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {filteredList.map((article) => (
                <div 
                  key={article.id}
                  className="p-5 sm:p-6 hover:bg-amber-50/20 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Article Info */}
                  <div className="flex items-start gap-4">
                    <img 
                      src={article.gambar} 
                      alt={article.judul}
                      className="w-20 h-20 sm:w-24 sm:h-20 rounded-2xl object-cover bg-gray-100 flex-shrink-0 border border-gray-200"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/uploads/photos/1665095500.jpg';
                      }}
                    />
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="bg-[#640404]/10 text-[#640404] text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {article.kategori}
                        </span>
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#FFB013]" />
                          <span>{article.tanggal}</span>
                        </span>
                        <span className="text-[11px] text-gray-400 hidden sm:inline">•</span>
                        <span className="text-[11px] text-gray-500 hidden sm:inline">
                          Oleh {article.penulis}
                        </span>
                      </div>

                      <h3 className="text-sm sm:text-base font-black text-gray-900 hover:text-[#640404] transition-colors leading-snug">
                        {article.judul}
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-1 max-w-2xl font-normal">
                        {article.ringkasan}
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 self-end sm:self-center flex-shrink-0">
                    <Link
                      to={`/berita/${article.slug}`}
                      target="_blank"
                      title="Lihat Tampilan Pembaca"
                      className="p-2 rounded-xl bg-gray-100 hover:bg-[#640404] hover:text-white text-gray-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => openEditModal(article)}
                      title="Sunting Berita"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-[#FFB013] text-amber-900 text-xs font-bold transition-all border border-amber-200/60"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

                    <button
                      onClick={() => handleDeleteArticle(article.id, article.judul)}
                      title="Hapus Berita"
                      className="p-2 rounded-xl bg-red-50 hover:bg-red-600 hover:text-white text-red-600 transition-colors border border-red-200/60"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>

      {/* =========================================================================
          3. MODAL: EDITOR FORM & LIVE PREVIEW
         ========================================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border-2 border-[#FFB013]/60 overflow-hidden animate-fadeIn">
            
            {/* Modal Header */}
            <div className="px-6 py-4 bg-gradient-to-r from-[#640404] to-[#500303] text-white flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFB013]" />
                  <span>{modalMode === 'create' ? 'Tambah & Publikasikan Berita Baru' : 'Sunting Berita'}</span>
                </h3>
                <p className="text-[11px] text-gray-300">
                  Program Magister Keuangan Daerah Universitas Cenderawasih
                </p>
              </div>

              {/* Tabs: Form vs Preview */}
              <div className="flex items-center gap-1 bg-black/30 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setActiveEditorTab('form')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeEditorTab === 'form' ? 'bg-[#FFB013] text-[#450202]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Formulir
                </button>
                <button
                  type="button"
                  onClick={() => setActiveEditorTab('preview')}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeEditorTab === 'preview' ? 'bg-[#FFB013] text-[#450202]' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Pratinjau
                </button>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors ml-2"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-5">
              
              {activeEditorTab === 'form' ? (
                <form id="news-editor-form" onSubmit={handleSaveArticle} className="space-y-5 text-xs">
                  
                  {/* Judul Berita */}
                  <div>
                    <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                      Judul Berita / Pengumuman <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.judul}
                      onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                      placeholder="Contoh: Kuliah Umum Tata Kelola Dana Otsus Bersama BPK RI"
                      className="w-full px-4 py-2.5 text-sm bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none font-bold text-gray-900"
                    />
                    <span className="text-[10px] text-gray-400 mt-1 block">
                      Slug URL: /{generateSlug(formData.judul || 'judul-berita')}
                    </span>
                  </div>

                  {/* Kategori & Tanggal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                        Kategori Berita <span className="text-red-600">*</span>
                      </label>
                      <select
                        value={formData.kategori}
                        onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none font-bold text-gray-800"
                      >
                        {standardCategories.map((cat, idx) => (
                          <option key={idx} value={cat}>{cat}</option>
                        ))}
                      </select>

                      {formData.kategori === 'Lainnya (Kustom)' && (
                        <input
                          type="text"
                          required
                          value={formData.customKategori}
                          onChange={(e) => setFormData({ ...formData, customKategori: e.target.value })}
                          placeholder="Ketik nama kategori baru..."
                          className="mt-2 w-full px-3 py-2 bg-yellow-50 border border-yellow-300 rounded-xl font-bold text-gray-800 outline-none"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                        Tanggal Publikasi <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.tanggal}
                        onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                        placeholder="Contoh: 03 November 2026"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none font-bold text-gray-800"
                      >
                      </input>
                    </div>
                  </div>

                  {/* Penulis & Gambar Sampul */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                        Nama Penulis / Humas
                      </label>
                      <input
                        type="text"
                        value={formData.penulis}
                        onChange={(e) => setFormData({ ...formData, penulis: e.target.value })}
                        placeholder="Contoh: Humas MKD UNCEN"
                        className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none font-bold text-gray-800"
                      />
                    </div>

                    <div>
                      <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                        Upload Gambar Sampul Baru
                      </label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full text-xs text-gray-500 file:mr-3 file:py-2 file:px-3 file:rounded-xl file:border-0 file:text-xs file:font-black file:bg-[#640404] file:text-white hover:file:bg-[#800505] cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Pilihan Cepat Gambar Template & Live Preview */}
                  <div>
                    <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                      Pratinjau Foto Sampul Terpilih:
                    </label>
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl border border-gray-200">
                      <img 
                        src={formData.gambar} 
                        alt="Pratinjau" 
                        className="w-24 h-16 rounded-xl object-cover border border-gray-300 bg-white"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/uploads/photos/1665095500.jpg';
                        }}
                      />
                      <div className="flex-1 space-y-1">
                        <div className="text-[11px] font-mono text-gray-500 truncate max-w-md">
                          {formData.gambar.startsWith('data:') ? 'Foto Lokal (Diunggah dari komputer)' : formData.gambar}
                        </div>
                        <div className="text-[10px] text-gray-400">
                          Atau pilih foto MKD yang tersedia:
                        </div>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {presetPhotos.map((p, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => setFormData({ ...formData, gambar: p.path })}
                              className={`text-[10px] px-2 py-0.5 rounded-md font-bold transition-all ${
                                formData.gambar === p.path ? 'bg-[#640404] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ringkasan Berita */}
                  <div>
                    <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                      Ringkasan Singkat (Lead Paragraf) <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={2}
                      value={formData.ringkasan}
                      onChange={(e) => setFormData({ ...formData, ringkasan: e.target.value })}
                      placeholder="Ringkasan 1-2 kalimat yang akan muncul pada kartu depan berita..."
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none font-normal text-gray-900 leading-relaxed"
                    />
                  </div>

                  {/* Isi Berita Lengkap */}
                  <div>
                    <label className="block font-black text-gray-700 uppercase tracking-wider mb-1.5">
                      Isi Lengkap Berita / Pengumuman <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={8}
                      value={formData.konten}
                      onChange={(e) => setFormData({ ...formData, konten: e.target.value })}
                      placeholder="Ketik isi berita lengkap di sini. Gunakan baris baru (Enter dua kali) untuk memisahkan setiap paragraf..."
                      className="w-full px-3.5 py-2.5 text-xs bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:ring-2 focus:ring-[#640404] outline-none font-normal text-gray-900 leading-relaxed font-mono"
                    />
                    <span className="text-[10px] text-gray-400 mt-1 block">
                      Tip: Pisahkan paragraf dengan menekan tombol Enter dua kali.
                    </span>
                  </div>

                </form>
              ) : (
                /* LIVE PREVIEW TAB */
                <div className="space-y-4 p-4 bg-gray-50 rounded-2xl border border-gray-200">
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                    Pratinjau Tampilan Pembaca:
                  </div>

                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
                    <span className="inline-block bg-[#640404] text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {formData.kategori === 'Lainnya (Kustom)' ? formData.customKategori || 'Umum' : formData.kategori}
                    </span>

                    <h1 className="text-xl sm:text-2xl font-black text-[#640404] leading-snug">
                      {formData.judul || 'Judul Berita Belum Diisi'}
                    </h1>

                    <div className="flex items-center gap-3 text-xs text-gray-500 border-b border-gray-100 pb-3">
                      <span>{formData.tanggal}</span>
                      <span>•</span>
                      <span>Oleh {formData.penulis}</span>
                      <span>•</span>
                      <span>MKD Pascasarjana UNCEN</span>
                    </div>

                    <div className="rounded-xl overflow-hidden aspect-video bg-gray-100">
                      <img 
                        src={formData.gambar} 
                        alt="Sampul" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/uploads/photos/1665095500.jpg';
                        }}
                      />
                    </div>

                    <div className="p-3.5 bg-amber-50/60 rounded-xl border-l-4 border-[#FFB013] text-xs font-semibold text-gray-800 leading-relaxed italic">
                      {formData.ringkasan || 'Ringkasan berita akan ditampilkan di sini.'}
                    </div>

                    <div className="space-y-3 text-xs text-gray-700 leading-relaxed">
                      {formData.konten ? (
                        formData.konten
                          .split('\n')
                          .filter((p) => p.trim() !== '')
                          .map((para, pIdx) => (
                            <p key={pIdx}>{para}</p>
                          ))
                      ) : (
                        <p className="text-gray-400 italic">Isi berita belum ditulis.</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Batal
              </button>

              <button
                type="submit"
                form="news-editor-form"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#640404] hover:bg-[#800505] text-[#FFB013] text-xs font-black shadow-md hover:shadow-lg transition-all uppercase tracking-wider"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FFB013]" />
                <span>Simpan & Terbitkan Berita</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
