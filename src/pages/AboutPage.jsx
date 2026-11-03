import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  ShieldCheck, Target, Compass, Award, Users, BookOpen, 
  Quote, CheckCircle2, ChevronRight, Building2, Monitor, 
  Wifi, Library, Sparkles, GraduationCap, ArrowRight, ExternalLink,
  Car, Coffee, ZoomIn, X, Eye, Check, Layers
} from 'lucide-react';

export default function AboutPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine initial tab from current route pathname
  const getTabFromPath = (path) => {
    if (path.includes('sambutan')) return 'sambutan';
    if (path.includes('struktur')) return 'struktur';
    if (path.includes('fasilitas')) return 'fasilitas';
    return 'visi-misi';
  };

  const [activeTab, setActiveTab] = useState(getTabFromPath(location.pathname));
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setActiveTab(getTabFromPath(location.pathname));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Handle ESC key for modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const handleTabChange = (tabId, targetPath) => {
    setActiveTab(tabId);
    navigate(targetPath);
  };

  const tabs = [
    { id: 'visi-misi', label: 'Visi, Misi & Sasaran', path: '/visi-misi', icon: Compass },
    { id: 'sambutan', label: 'Sambutan Koordinator Prodi', path: '/sambutan', icon: Quote },
    { id: 'struktur', label: 'Struktur Organisasi', path: '/struktur-organisasi', icon: Users },
    { id: 'fasilitas', label: 'Fasilitas & Lab', path: '/fasilitas', icon: Building2 },
  ];

  const missions = [
    {
      num: "A",
      title: "Pendidikan & Penyebarluasan Ilmu Keuangan & Aset",
      desc: "Menyelenggarakan pendidikan dan penyebarluasan ilmu bidang keuangan dan aset daerah yang berkualitas dan menjunjung tinggi etika akademik."
    },
    {
      num: "B",
      title: "Riset Kepakaran & Rujukan Keuangan Daerah",
      desc: "Mengembangkan kapasitas kepakaran melalui penelitian menyebarluaskan karya ilmiah, serta menjadi rujukan ilmu bidang keuangan dan asset daerah."
    },
    {
      num: "C",
      title: "Kolaborasi Kelembagaan Profesional",
      desc: "Mengembangkan kolaborasi dengan lembaga profesional di tingkat lokal, regional, nasional dan internasional melaksanakan pendidikan, penelitian dan pengabdian di bidang keuangan dan aset daerah."
    }
  ];

  const goals = [
    "Menghasilkan lulusan yang menguasai keilmuan dalam bidang manajemen keuangan daerah, sesuai dengan perkembangan ilmu dan tuntutan akuntabilitas pengelolaan keuangan pemerintahan.",
    "Meningkatkan kapasitas mahasiswa dalam pengembangan pengetahuan melalui proses pengajaran dan sistem yang terintegrasi dan kolaboratif.",
    "Tercapainya peningkatan kapasitas sumberdaya manusia yang memiliki pengetahuan teoritik dan kompetensi kerja sehingga mampu mengenali dan mendesain alternatif pemecahan dan merumuskan kebijakan masalah keuangan daerah.",
    "Meningkatkan dan mengembangkan metode alternatif dalam penyelesaian masalah pengelolaan keuangan daerah melalui pendekatan ilmiah.",
    "Mengembangkan penelitian yang mengacu kepada prinsip dan asas pengelolaan keuangan daerah yang memperhatikan Good Governance, dan New Public Management.",
    "Meningkatkan kapasitas dalam pengembangan pengetahuan melalui penelitian yang bermutu dan peningkatan publikasi ilmiah yang bermanfaat bagi pembangunan daerah.",
    "Mengembangkan kolaborasi dengan pemerintah dan lembaga lain dalam dan luar negeri dalam memajukan pengelolaan keuangan daerah."
  ];

  const coreFeatures = [
    {
      title: "Wifi Support",
      icon: Wifi,
      desc: "Jaringan internet nirkabel pita lebar berkecepatan tinggi yang mencakup seluruh ruang kuliah, laboratorium, dan area baca kampus untuk kelancaran studi."
    },
    {
      title: "Parkir Luas",
      icon: Car,
      desc: "Kapasitas area parkir kendaraan roda 2 dan roda 4 yang terkelola rapi, aman, teduh, dan diawasi petugas keamanan di Kampus Pascasarjana Uncen Abepura."
    },
    {
      title: "Pantri",
      icon: Coffee,
      desc: "Fasilitas pantri yang bersih dan higienis sebagai sarana penyedia air minum, teh, kopi, dan rehat mahasiswa serta pengajar di sela kegiatan perkuliahan."
    },
    {
      title: "Ruang Baca",
      icon: BookOpen,
      desc: "Ruang baca khusus pascasarjana yang tenang dengan koleksi pustaka referensi keuangan daerah, jurnal ilmiah KEUDA, dan arsip tesis magister lengkap."
    }
  ];

  const facilities = [
    {
      id: "1",
      title: "Ruang Perkuliahan Interaktif MKD",
      category: "kuliah",
      categoryName: "Ruang Kuliah",
      desc: "Ruang perkuliahan representatif berpendingin udara (AC) lengkap dengan whiteboard interaktif, proyektor beresolusi tinggi, audio visual, dan tata letak modular untuk menciptakan iklim belajar magister yang kondusif dan produktif.",
      image: "/uploads/fasilitas/1.jpg",
      tag: "Ruang Kuliah",
      badge: "Ruang Perkuliahan Interaktif",
      specs: [
        "Full AC & Pencahayaan Standar Akademik",
        "LCD Projector & Sistem Audio Terintegrasi",
        "Kapasitas 30 Mahasiswa Pascasarjana"
      ]
    },
    {
      id: "4",
      title: "Smart Multimedia Classroom",
      category: "multimedia",
      categoryName: "Multimedia & Lab",
      desc: "Fasilitas ruang kelas multimedia modern yang dilengkapi sistem penayangan digital berkualitas tinggi untuk seminar ilmiah, pemaparan hasil riset, serta perkuliahan materi komprehensif bersama dosen pakar.",
      image: "/uploads/fasilitas/4.jpg",
      tag: "Multimedia",
      badge: "Smart Classroom",
      specs: [
        "Proyektor Digital Kualitas Tinggi",
        "Screen Audio Integrasi Penuh",
        "Desain Modular untuk Seminar & Workshop"
      ]
    },
    {
      id: "5",
      title: "Laboratorium Komputer & Analisis Data",
      category: "multimedia",
      categoryName: "Multimedia & Lab",
      desc: "Laboratorium komputer dengan PC berkinerja tinggi dan koneksi internet cepat untuk pengolahan data statistik fiskal, riset ekonometrika kuantitatif (SPSS, EViews), serta pelatihan aplikasi SIPD Kemendagri.",
      image: "/uploads/fasilitas/5.jpg",
      tag: "Laboratorium",
      badge: "Lab Komputer & Analisis Data",
      specs: [
        "Unit PC Berkinerja Tinggi & Akses Cepat",
        "Software Analisis Statistik (SPSS, EViews)",
        "Simulasi Modul SIPD Keuangan Daerah"
      ]
    },
    {
      id: "6",
      title: "Ruang Ujian Tesis & Seminar Akademik",
      category: "sidang",
      categoryName: "Ruang Sidang & Pustaka",
      desc: "Ruang sidang representatif yang dirancang khusus untuk pelaksanaan ujian proposal tesis, seminar hasil riset empiris, dan ujian kelayakan tesis akhir mahasiswa Magister Keuangan Daerah.",
      image: "/uploads/fasilitas/6.jpg",
      tag: "Ruang Sidang",
      badge: "Ujian Tesis & Seminar",
      specs: [
        "Meja Khusus Dewan Penguji & Tamu Akademik",
        "Perangkat Presentasi Digital Interaktif",
        "Suasana Khidmat, Tenang & Representatif"
      ]
    },
    {
      id: "7",
      title: "Ruang Baca & Koleksi Referensi Pustaka",
      category: "sidang",
      categoryName: "Ruang Sidang & Pustaka",
      desc: "Pusat referensi pustaka ilmiah yang memuat ribuan koleksi buku teks manajemen keuangan publik, akuntansi pemerintahan, arsip tesis alumni MKD, dan akses berkala e-Journal KEUDA Pascasarjana Uncen.",
      image: "/uploads/fasilitas/7.jpg",
      tag: "Ruang Baca",
      badge: "Pusat Pustaka & Jurnal KEUDA",
      specs: [
        "Koleksi Buku Teks Manajemen Keuangan & Fiskal",
        "Arsip Lengkap Tesis Alumni MKD Uncen",
        "Akses Jurnal Nasional (SINTA) & Internasional"
      ]
    },
    {
      id: "8",
      title: "Ruang Diskusi & Focus Group Discussion",
      category: "kuliah",
      categoryName: "Ruang Kuliah",
      desc: "Ruang interaktif dan kolaboratif bagi mahasiswa dan tim periset dalam menyusun draf kebijakan, bedah kasus fiskal daerah Tanah Papua, serta bimbingan intensif bersama pembimbing tesis.",
      image: "/uploads/fasilitas/8.jpg",
      tag: "Ruang Diskusi",
      badge: "FGD & Diskusi Kelompok",
      specs: [
        "Konfigurasi Meja Diskusi Fleksibel",
        "Papan Diskusi Gagasan & Brainstorming",
        "Koneksi Internet Wi-Fi Dedicated"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Page Header Banner */}
      <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#550303] py-14 sm:py-20 text-white relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB013]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-red-900/20 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#FFB013] uppercase tracking-wider mb-2">
            <span>Program Pascasarjana</span>
            <span>•</span>
            <span>Universitas Cenderawasih</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            {activeTab === 'visi-misi' && 'Visi, Misi & Sasaran Program Studi'}
            {activeTab === 'sambutan' && 'Sambutan Koordinator Program Studi'}
            {activeTab === 'struktur' && 'Struktur Organisasi Pascasarjana'}
            {activeTab === 'fasilitas' && 'Sarana & Fasilitas Pembelajaran'}
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-3 max-w-2xl font-normal leading-relaxed">
            Program Studi Magister Keuangan Daerah (MKD), wadah pengembangan SDM unggul tata kelola keuangan dan pembangunan di Kawasan Timur Indonesia.
          </p>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-6 pt-6 border-t border-white/10">
            <Link to="/" className="hover:text-[#FFB013] transition-colors">Beranda</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-gray-300">Tentang MKD</span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#FFB013] font-bold">
              {tabs.find((t) => t.id === activeTab)?.label}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Interactive Navigation Tabs (Edumint Gold & Maroon Theme) */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 py-3 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id, tab.path)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-[#640404] text-white shadow-md shadow-[#640404]/20 scale-100'
                      : 'bg-gray-100/80 text-gray-700 hover:bg-[#640404]/10 hover:text-[#640404]'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#FFB013]' : 'text-gray-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Main Content Views */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        
        {/* ==================== TAB 1: VISI & MISI ==================== */}
        {activeTab === 'visi-misi' && (
          <div className="space-y-16 animate-fadeIn">
            {/* Visi Section */}
            <div className="relative bg-gradient-to-tr from-[#FFFDF8] via-[#FAF6EE] to-white p-8 sm:p-14 rounded-3xl border border-yellow-200/80 shadow-lg overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB013]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="max-w-4xl mx-auto text-center space-y-5 relative z-10">
                <div className="inline-flex p-3.5 bg-[#640404] text-[#FFB013] rounded-2xl shadow-md">
                  <Compass className="w-8 h-8" />
                </div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#640404]/10 text-[#640404] text-xs font-black tracking-wider uppercase">
                  Visi Program Studi
                </div>
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-black text-[#640404] leading-relaxed tracking-tight">
                  "MENJADI PUSAT UNGGULAN PENDIDIKAN BIDANG KEUANGAN DAN ASET DAERAH DI ERA OTONOMI KHUSUS PAPUA"
                </blockquote>
                <p className="text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto font-normal">
                  Visi resmi Program Studi Magister Keuangan Daerah (MKD) Program Pascasarjana Universitas Cenderawasih dalam menjawab tantangan tata kelola keuangan dan pengelolaan aset publik di Tanah Papua.
                </p>
              </div>
            </div>

            {/* Legalitas & Akreditasi Strip */}
            <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#450202] text-white p-6 sm:p-8 rounded-3xl shadow-lg border-2 border-[#FFB013]/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFB013] text-[#450202] flex items-center justify-center flex-shrink-0 shadow-md">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#FFB013] uppercase tracking-wider block">
                      Legalitas Pendirian
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      SK DIKTI NO. 134/E/O/2012
                    </h3>
                    <p className="text-xs text-gray-300">
                      Izin Operasional Penyelenggaraan Program Magister (S2)
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:border-l md:border-white/20 md:pl-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#FFB013] flex items-center justify-center flex-shrink-0 border border-white/20">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#FFB013] uppercase tracking-wider block">
                      Status Akreditasi BAN-PT
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      TER-AKREDITASI "B"
                    </h3>
                    <p className="text-xs text-gray-300 font-mono">
                      No. 13811/SK/BAN-PT/Ak-PPJ/M/XII/2021
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Misi Section (3 Misi Resmi Sesuai Brosur) */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-black text-[#640404] uppercase tracking-widest block mb-1">
                  Arah Kebijakan Strategis
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#640404] tracking-tight">
                  Misi Program Studi MKD
                </h2>
                <div className="w-16 h-1 bg-[#FFB013] mx-auto mt-3 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {missions.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200 shadow-sm hover:border-[#640404] hover:shadow-xl transition-all flex flex-col justify-between group hover:-translate-y-1"
                  >
                    <div className="space-y-4">
                      <span className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#640404] to-[#880808] text-[#FFB013] font-black text-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                        {m.num}
                      </span>
                      <h3 className="text-base font-black text-gray-900 group-hover:text-[#640404] transition-colors leading-snug">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tujuan Program Studi (7 Poin Resmi Sesuai Brosur) */}
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xs space-y-8">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <div className="p-3 bg-red-50 text-[#640404] rounded-2xl w-fit mx-auto shadow-xs">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-[#640404]">Tujuan Program Studi MKD</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Pembukaan Program Studi Magister Keuangan Daerah di lingkungan Universitas Cenderawasih bertujuan untuk menghasilkan lulusan yang memiliki kemampuan dan menguasai kompetensi keilmuan dalam bidang keuangan:
                </p>
                <div className="w-16 h-1 bg-[#FFB013] mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goals.map((goal, gIdx) => (
                  <div
                    key={gIdx}
                    className="bg-white p-5 rounded-2xl border border-gray-200/90 flex items-start gap-3.5 shadow-xs hover:border-[#640404] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-xl bg-[#640404]/10 text-[#640404] font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {gIdx + 1}
                    </span>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                      {goal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ==================== TAB 2: SAMBUTAN KOORDINATOR PRODI ==================== */}
        {activeTab === 'sambutan' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Photo & Profile Card (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-6">
                  <div className="relative mx-auto max-w-[380px]">
                    <div className="absolute -inset-3 bg-gradient-to-tr from-[#640404] to-[#FFB013] rounded-3xl transform -rotate-2 opacity-25"></div>
                    
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                      <img
                        src="/uploads/dosen_mkd/Syaikhul Falah.png"
                        alt="Dr. Syaikhul Falah, SE., M.Si., Ak., CA."
                        className="w-full h-[430px] object-cover object-top bg-gray-50"
                      />
                      <div className="p-5 bg-gradient-to-t from-[#450202] to-[#640404] text-white">
                        <h3 className="font-black text-lg leading-tight">
                          Dr. Syaikhul Falah, SE., M.Si., Ak., CA.
                        </h3>
                        <p className="text-xs text-[#FFB013] font-bold mt-1">
                          Koordinator Program Studi Magister Keuangan Daerah
                        </p>
                        <p className="text-[11px] text-gray-300 font-mono mt-0.5">
                          NIP. 197406122002121002
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Metadata Box */}
                  <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200 space-y-3 text-xs text-gray-700">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-500">Jabatan Akademik:</span>
                      <span className="font-black text-[#640404]">Lektor</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-500">Pendidikan Doktoral:</span>
                      <span className="font-bold text-gray-800">S3 Univ. Brawijaya (2018)</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                      <span className="font-semibold text-gray-500">Pendidikan Magister:</span>
                      <span className="font-bold text-gray-800">S2 Univ. Gadjah Mada (2002)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-500">Pendidikan Sarjana:</span>
                      <span className="font-bold text-gray-800">S1 Univ. Hasanuddin (1998)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Speech / Sambutan Body (7 Cols) */}
              <div className="lg:col-span-7 space-y-6 text-gray-800">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#640404]/10 text-[#640404] text-xs font-bold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
                  <span>PESAN KOORDINATOR PROGRAM STUDI</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#640404] tracking-tight leading-tight">
                  Membangun Ekosistem Keuangan Daerah yang Bersih, Kompeten & Bermanfaat bagi Masyarakat Papua
                </h2>

                <div className="prose text-sm sm:text-base text-gray-700 space-y-4 leading-relaxed font-normal">
                  <p>
                    <em>Salam sejahtera bagi kita semua,</em>
                  </p>
                  <p>
                    Puji dan syukur senantiasa kita panjatkan ke hadirat Tuhan Yang Maha Esa atas rahmat dan karunia-Nya, sehingga Program Studi Magister Keuangan Daerah (MKD) Program Pascasarjana Universitas Cenderawasih dapat terus menjalankan amanah mulia dalam mencetak sumber daya manusia unggul di bidang tata kelola keuangan publik.
                  </p>
                  
                  {/* Highlight Quote */}
                  <div className="relative bg-[#FFFDF8] border-l-4 border-[#FFB013] p-5 rounded-r-2xl my-4 text-gray-800 italic leading-relaxed shadow-xs border-y border-r border-yellow-200">
                    <Quote className="w-8 h-8 text-yellow-200 absolute top-2 right-3 -z-0 opacity-70" />
                    <p className="relative z-10 font-medium">
                      "Transformasi otonomi daerah dan pengelolaan Dana Otonomi Khusus menuntut aparatur yang tidak hanya mahir secara teknis anggaran, namun juga memiliki integritas etis serta pemahaman mendalam atas realitas sosial masyarakat di Tanah Papua."
                    </p>
                  </div>

                  <p>
                    Sebagai bagian integral dari <strong>Program Pascasarjana Universitas Cenderawasih</strong>, Program Magister Keuangan Daerah dirancang khusus untuk merespons dinamika perubahan regulasi keuangan negara, Standar Akuntansi Pemerintahan (SAP), serta percepatan digitalisasi sistem informasi pemerintah daerah (SIPD).
                  </p>
                  <p>
                    Kurikulum kami secara seimbang menggabungkan landasan teoritis makro-fiskal dengan pemecahan studi kasus empiris. Mahasiswa dibimbing langsung oleh Guru Besar dan Doktor berpengalaman nasional yang aktif meneliti serta menjadi narasumber kebijakan publik.
                  </p>
                  <p>
                    Kepada seluruh calon mahasiswa, baik aparatur sipil negara (ASN) pemerintah provinsi/kabupaten/kota se-Tanah Papua, auditor independen, akademisi, maupun praktisi lembaga keuangan, kami menyambut Anda dengan hangat untuk bergabung dan bertumbuh bersama kami di Kampus Pascasarjana Universitas Cenderawasih Abepura.
                  </p>
                  <p className="pt-2">
                    Mari bersama mewujudkan tata kelola keuangan daerah yang akuntabel, transparan, dan berdaya guna demi masa depan Papua yang lebih sejahtera.
                  </p>
                </div>

                {/* Signature Block */}
                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-gray-500">Jayapura, Papua</div>
                    <div className="font-black text-base text-[#640404]">Dr. Syaikhul Falah, SE., M.Si., Ak., CA.</div>
                    <div className="text-xs text-gray-600">Koordinator Program Studi Magister Keuangan Daerah</div>
                    <div className="text-xs text-gray-500">Program Pascasarjana Universitas Cenderawasih</div>
                  </div>

                  <Link
                    to="/pendaftaran"
                    className="inline-flex items-center gap-2 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                  >
                    <span>Daftar Admisi S2</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================== TAB 3: STRUKTUR ORGANISASI ==================== */}
        {activeTab === 'struktur' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black text-[#640404] uppercase tracking-widest block mb-1">
                Tata Kelola Kelembagaan
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#640404] tracking-tight">
                Struktur Organisasi Program Studi MKD
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 font-normal leading-relaxed">
                Struktur kepemimpinan dan manajemen operasional di bawah naungan Program Pascasarjana Universitas Cenderawasih.
              </p>
              <div className="w-16 h-1 bg-[#FFB013] mx-auto mt-3 rounded-full"></div>
            </div>

            {/* Hierarchical Org Card Layout */}
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Level 1: Rektor & Direktur Pascasarjana */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-5 rounded-2xl border-2 border-gray-200 text-center shadow-xs">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Pimpinan Universitas</div>
                  <div className="font-black text-base text-[#640404] mt-1">Rektor Universitas Cenderawasih</div>
                  <div className="text-xs text-gray-600 mt-0.5">Penanggung Jawab Utama Kebijakan Universitas</div>
                </div>
                <div className="bg-white p-5 rounded-2xl border-2 border-[#640404]/30 text-center shadow-xs">
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">Pimpinan Pascasarjana</div>
                  <div className="font-black text-base text-[#640404] mt-1">Direktur Program Pascasarjana UNCEN</div>
                  <div className="text-xs text-gray-600 mt-0.5">Pengarah Program Pendidikan Multidisiplin & Magister</div>
                </div>
              </div>

              {/* Connecting line */}
              <div className="w-0.5 h-6 bg-[#FFB013] mx-auto"></div>

              {/* Level 2: Koordinator Program Studi (Main Highlight) */}
              <div className="bg-gradient-to-r from-[#FFFDF8] via-[#FAF6EE] to-[#FFFDF8] p-6 sm:p-8 rounded-3xl border-2 border-[#FFB013] shadow-lg text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#640404] text-[#FFB013] text-xs font-black uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Koordinator Program Studi</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#640404]">
                  Dr. Syaikhul Falah, SE., M.Si., Ak., CA.
                </h3>
                <p className="text-xs text-gray-600 max-w-md mx-auto">
                  Memimpin penjaminan mutu kurikulum, kelancaran proses pembelajaran magister, kemitraan strategis pemda, dan tata kelola program studi.
                </p>
                <div className="flex justify-center items-center gap-3 pt-2">
                  <Link
                    to="/sambutan"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#640404] hover:text-[#FFB013] transition-colors"
                  >
                    <span>Baca Sambutan Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Connecting line */}
              <div className="w-0.5 h-6 bg-[#FFB013] mx-auto"></div>

              {/* Level 3: Pengelola Akademik, Dewan Pembina & Dosen */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-gray-200 text-center shadow-xs">
                  <div className="text-xs font-bold text-[#640404] uppercase">Pengelola Akademik & Guru Besar</div>
                  <div className="font-bold text-sm text-gray-900 mt-1">Prof. Dr. Agustinus Salle, SE., M.Si., Ak., CA.</div>
                  <div className="text-[11px] text-gray-500 mt-1">Koordinasi Perkuliahan, KRS, & Jadwal Ujian</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 text-center shadow-xs">
                  <div className="text-xs font-bold text-[#640404] uppercase">Dewan Guru Besar</div>
                  <div className="font-bold text-sm text-gray-900 mt-1">Prof. Dr. Baltasar Kambuaya, MBA</div>
                  <div className="text-[11px] text-gray-500 mt-1">& Guru Besar Program Pascasarjana</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-gray-200 text-center shadow-xs">
                  <div className="text-xs font-bold text-[#640404] uppercase">Tenaga Pendidik</div>
                  <div className="font-bold text-sm text-gray-900 mt-1">21 Dosen Pakar</div>
                  <div className="text-[11px] text-gray-500 mt-1">Kualifikasi Doktor (S3) & Profesor</div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ==================== TAB 4: FASILITAS & LAB ==================== */}
        {activeTab === 'fasilitas' && (
          <div className="space-y-16 animate-fadeIn">
            
            {/* Header Pengantar Fasilitas */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#640404]/10 text-[#640404] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
                <span>KOMITMEN MUTU SARANA & PRASARANA</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#640404] tracking-tight">
                Fasilitas Kami
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-medium leading-relaxed">
                Kami berkomitmen terhadap kenyamanan mahasiswa kami dengan menyediakan fasilitas yang terbaik.
              </p>
              <div className="w-20 h-1 bg-[#FFB013] mx-auto rounded-full"></div>
            </div>

            {/* 1. Feature Highlight Section (Tampilan Khas Sesuai mkduncen.ac.id/fasilitas) */}
            <div className="bg-gradient-to-br from-[#FFFDF8] via-[#FAF6EE] to-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-yellow-200/90 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB013]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
                {/* Left Column: Teks Komitmen & 4 Fitur Utama */}
                <div className="lg:col-span-6 space-y-8">
                  <div>
                    <span className="text-xs font-black text-[#640404] uppercase tracking-widest block mb-2">
                      Fasilitas Pembelajaran Representatif
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#640404] leading-tight">
                      Mendukung Kenyamanan & Produktivitas Akademik Pascasarjana
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">
                      Kami berkomitmen terhadap kenyamanan mahasiswa kami dengan menyediakan fasilitas yang terbaik. Seluruh ruang perkuliahan, laboratorium analisis data, ruang sidang tesis, dan sarana pendukung dirancang untuk menunjang kegiatan riset serta transfer ilmu pengetahuan secara optimal.
                    </p>
                  </div>

                  {/* 4 Fitur Utama Asli mkduncen.ac.id */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {coreFeatures.map((feat, idx) => {
                      const Icon = feat.icon;
                      return (
                        <div 
                          key={idx} 
                          className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:border-[#640404] hover:shadow-md transition-all group"
                        >
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#640404] to-[#880808] text-[#FFB013] flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-black text-gray-900 group-hover:text-[#640404] transition-colors">
                              {feat.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1 leading-snug">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: Kolase Foto Asli (4.jpg, 5.jpg, 7.jpg, 8.jpg) */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-12 gap-3.5 sm:gap-4">
                    {/* Item 1: 4.jpg */}
                    <div 
                      onClick={() => setSelectedImage(facilities.find(f => f.id === '4'))}
                      className="col-span-5 col-start-2 self-end cursor-pointer group"
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-gray-100 group-hover:shadow-xl transition-all">
                        <img 
                          src="/uploads/fasilitas/4.jpg" 
                          alt="Smart Multimedia Classroom" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#640404]/0 group-hover:bg-[#640404]/30 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-[#FFB013] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="absolute bottom-2 left-2 bg-[#640404]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          Multimedia
                        </span>
                      </div>
                    </div>

                    {/* Item 2: 5.jpg */}
                    <div 
                      onClick={() => setSelectedImage(facilities.find(f => f.id === '5'))}
                      className="col-span-6 self-end cursor-pointer group"
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-gray-100 group-hover:shadow-xl transition-all">
                        <img 
                          src="/uploads/fasilitas/5.jpg" 
                          alt="Laboratorium Komputer & Data" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#640404]/0 group-hover:bg-[#640404]/30 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-[#FFB013] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="absolute bottom-2 left-2 bg-[#640404]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          Lab Komputer
                        </span>
                      </div>
                    </div>

                    {/* Item 3: 7.jpg */}
                    <div 
                      onClick={() => setSelectedImage(facilities.find(f => f.id === '7'))}
                      className="col-span-7 col-start-1 cursor-pointer group"
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-gray-100 group-hover:shadow-xl transition-all">
                        <img 
                          src="/uploads/fasilitas/7.jpg" 
                          alt="Ruang Baca & Referensi Tesis" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#640404]/0 group-hover:bg-[#640404]/30 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-[#FFB013] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="absolute bottom-2 left-2 bg-[#640404]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          Ruang Baca
                        </span>
                      </div>
                    </div>

                    {/* Item 4: 8.jpg */}
                    <div 
                      onClick={() => setSelectedImage(facilities.find(f => f.id === '8'))}
                      className="col-span-5 cursor-pointer group"
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-white aspect-[4/3] bg-gray-100 group-hover:shadow-xl transition-all">
                        <img 
                          src="/uploads/fasilitas/8.jpg" 
                          alt="Ruang Diskusi & FGD" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-[#640404]/0 group-hover:bg-[#640404]/30 transition-colors flex items-center justify-center">
                          <ZoomIn className="w-6 h-6 text-[#FFB013] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="absolute bottom-2 left-2 bg-[#640404]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          Ruang Diskusi
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-3">
                    <span className="text-[11px] text-gray-500 italic">
                      * Klik foto untuk melihat tampilan pratinjau resolusi tinggi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Galeri Foto Lengkap Fasilitas & Lab (6 Foto Asli) */}
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gray-200 pb-5">
                <div>
                  <span className="text-xs font-black text-[#640404] uppercase tracking-widest block mb-1">
                    Dokumentasi Lengkap
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#640404] tracking-tight">
                    Galeri Sarana Kampus Magister
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Dokumentasi 6 fasilitas utama Program Studi Magister Keuangan Daerah Universitas Cenderawasih.
                  </p>
                </div>

                {/* Filter Kategori */}
                <div className="flex flex-wrap items-center gap-2">
                  {[
                    { id: 'all', label: 'Semua Fasilitas (6)' },
                    { id: 'kuliah', label: 'Ruang Perkuliahan' },
                    { id: 'multimedia', label: 'Multimedia & Lab' },
                    { id: 'sidang', label: 'Ruang Sidang & Pustaka' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`text-xs px-3.5 py-1.5 rounded-full font-bold transition-all duration-200 ${
                        activeCategory === cat.id
                          ? 'bg-[#640404] text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid 6 Kartu Fasilitas */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {facilities
                  .filter((f) => activeCategory === 'all' || f.category === activeCategory)
                  .map((facility) => (
                    <div
                      key={facility.id}
                      className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5"
                    >
                      {/* Media Container with Lightbox Trigger */}
                      <div 
                        onClick={() => setSelectedImage(facility)}
                        className="relative aspect-[16/10] overflow-hidden bg-gray-100 cursor-pointer"
                      >
                        <img
                          src={facility.image}
                          alt={facility.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#640404] text-[#FFB013] text-xs font-bold shadow-lg">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Perbesar Foto</span>
                          </span>
                        </div>
                        <span className="absolute top-3 left-3 bg-[#640404] text-[#FFB013] text-[11px] font-black px-3 py-1 rounded-full shadow-md">
                          {facility.badge}
                        </span>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h4 className="text-base sm:text-lg font-black text-[#640404] group-hover:text-[#880808] transition-colors leading-snug">
                            {facility.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                            {facility.desc}
                          </p>
                        </div>

                        {/* Specs List */}
                        <div className="pt-3 border-t border-gray-100 space-y-2">
                          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Spesifikasi & Keunggulan:
                          </div>
                          <ul className="space-y-1.5 text-xs text-gray-700">
                            {facility.specs.map((spec, sIdx) => (
                              <li key={sIdx} className="flex items-center gap-2">
                                <Check className="w-3.5 h-3.5 text-[#FFB013] flex-shrink-0" />
                                <span>{spec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Interactive Trigger Button */}
                        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                          <button
                            onClick={() => setSelectedImage(facility)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#640404] hover:text-[#FFB013] transition-colors"
                          >
                            <ZoomIn className="w-3.5 h-3.5" />
                            <span>Lihat Tampilan Penuh</span>
                          </button>
                          <span className="text-[11px] text-gray-400 font-medium">Standar Pascasarjana</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* 3. Banner Mutu Sarana & Fasilitas Akademik */}
            <div className="bg-gradient-to-r from-[#640404] via-[#500303] to-[#450202] text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB013]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs font-black text-[#FFB013] tracking-widest uppercase">
                    Kenyamanan & Keunggulan Fasilitas
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Standar Sarana Pembelajaran Pascasarjana UNCEN
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300">
                    Memenuhi ketentuan akreditasi BAN-PT dan standar tata kelola universitas terkemuka.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center pt-2">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-[#FFB013]">
                      <Wifi className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-sm text-white">Wi-Fi Berkecepatan Tinggi</div>
                    <div className="text-xs text-gray-300">Akses jaringan nirkabel di seluruh area gedung kampus</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-[#FFB013]">
                      <Library className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-sm text-white">SLiMS & Jurnal KEUDA</div>
                    <div className="text-xs text-gray-300">Pustaka digital, jurnal SINTA, & repositori tesis alumni</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-[#FFB013]">
                      <Monitor className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-sm text-white">Ruang Ujian & Sidang Tesis</div>
                    <div className="text-xs text-gray-300">Fasilitas proyektor pro & ruang seminar yang tenang</div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-[#FFB013]">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-sm text-white">Parkir Luas & Kampus Asri</div>
                    <div className="text-xs text-gray-300">Area parkir kendaraan tertata rapi & keamanan 24 jam</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Modal Lightbox untuk Pratinjau Resolusi Tinggi Foto */}
            {selectedImage && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn"
                onClick={() => setSelectedImage(null)}
              >
                <div 
                  className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-yellow-400/40"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    aria-label="Tutup Pratinjau"
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 hover:bg-[#640404] text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Image View */}
                  <div className="relative bg-black flex items-center justify-center max-h-[60vh] overflow-hidden">
                    <img 
                      src={selectedImage.image} 
                      alt={selectedImage.title}
                      className="w-full h-auto max-h-[60vh] object-contain"
                    />
                    <span className="absolute bottom-4 left-4 bg-[#640404] text-[#FFB013] text-xs font-black px-3.5 py-1 rounded-full shadow-lg">
                      {selectedImage.badge}
                    </span>
                  </div>

                  {/* Description & Details */}
                  <div className="p-6 sm:p-8 space-y-4 bg-white">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                      <div>
                        <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                          Program Studi Magister Keuangan Daerah • Pascasarjana UNCEN
                        </div>
                        <h3 className="text-xl sm:text-2xl font-black text-[#640404] mt-1">
                          {selectedImage.title}
                        </h3>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 bg-yellow-100 text-[#880808] rounded-full">
                        {selectedImage.tag}
                      </span>
                    </div>

                    <p className="text-sm text-gray-700 leading-relaxed font-normal">
                      {selectedImage.desc}
                    </p>

                    {selectedImage.specs && (
                      <div className="pt-2">
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                          Spesifikasi Fasilitas:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                          {selectedImage.specs.map((sp, idx) => (
                            <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-800">
                              <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                              <span>{sp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
}
