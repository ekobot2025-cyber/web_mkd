import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, ExternalLink, Mail, Phone, MapPin, 
  GraduationCap, BookOpen, ShieldCheck, ArrowRight, Sparkles
} from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    { title: 'Beranda', path: '/' },
    {
      title: 'Tentang MKD',
      dropdown: [
        { title: 'Visi, Misi & Tujuan', path: '/visi-misi', desc: 'Arah strategis & komitmen mutu' },
        { title: 'Sambutan Koordinator Prodi', path: '/sambutan', desc: 'Pesan dari Dr. Syaikhul Falah' },
        { title: 'Struktur Organisasi', path: '/struktur-organisasi', desc: 'Pengelola program pascasarjana' },
        { title: 'Fasilitas & Lab', path: '/fasilitas', desc: 'Sarana perkuliahan & riset' },
      ],
    },
    { title: 'Tenaga Pengajar', path: '/dosen' },
    {
      title: 'Akademik',
      dropdown: [
        { title: 'Kurikulum & Mata Kuliah', path: '/kurikulum', desc: 'Struktur 4 semester & matrikulasi' },
        { title: 'Kalender Akademik', path: '/kalender', desc: 'Jadwal perkuliahan & ujian' },
        { title: 'Pedoman Penulisan Tesis', path: '/pedoman-tesis', desc: 'Panduan riset & karya ilmiah' },
        { title: 'Tracer Study Alumni', path: 'https://tracer.mkduncen.ac.id', isExternal: true, desc: 'Jejaring alumni pemda' },
      ],
    },
    { title: 'Berita', path: '/berita' },
    {
      title: 'Publikasi',
      dropdown: [
        { title: 'Jurnal KEUDA MKD', path: '/jurnal', desc: 'Jurnal berkala terakreditasi' },
        { title: 'Repository SLiMS', path: 'https://repository.mkduncen.ac.id', isExternal: true, desc: 'Koleksi tesis & pustaka digital' },
        { title: 'Portal E-Journal Uncen', path: 'https://ejournal.uncen.ac.id', isExternal: true, desc: 'Portal jurnal ilmiah universitas' },
      ],
    },
    { title: 'Kontak', path: '/kontak' },
  ];

  const isActive = (item) => {
    if (item.path && location.pathname === item.path) return true;
    if (item.dropdown) {
      return item.dropdown.some((sub) => location.pathname === sub.path);
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      {/* 1. Top Bar - Official Uncen Maroon & Edumint Gold */}
      <div className="bg-[#640404] text-white text-[12px] py-2 hidden md:block border-b border-[#450202]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left Contact Info */}
          <div className="flex items-center space-x-6 text-gray-200">
            <a href="mailto:data.mkduncen@gmail.com" className="flex items-center gap-1.5 hover:text-[#FFB013] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#FFB013]" />
              <span>data.mkduncen@gmail.com</span>
            </a>
            <a href="https://wa.me/62811481847" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#FFB013] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#FFB013]" />
              <span>+62 811-481-847</span>
            </a>
            <span className="flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-[#FFB013]" />
              <span>Kampus Pascasarjana Abepura, Jayapura - Papua</span>
            </span>
          </div>

          {/* Right Badges & Links */}
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#FFB013] text-[11px] font-bold border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5 text-[#FFB013]" />
              <span>Terakreditasi BAN-PT</span>
            </span>
            <span className="text-white/30">|</span>
            <a
              href="https://ejournal.uncen.ac.id/index.php/KEUDA"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gray-200 hover:text-[#FFB013] flex items-center gap-1 text-[11px] transition-colors"
            >
              <BookOpen className="w-3 h-3 text-[#FFB013]" />
              <span>E-Journal KEUDA</span>
              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-[88px]">
          
          {/* Brand Logo from data_dukung/icon/icon_MKD.png */}
          <Link to="/" className="flex items-center group flex-shrink-0 py-1" aria-label="Magister Keuangan Daerah Universitas Cenderawasih">
            <img
              src="/assets/img/icon_MKD.png"
              alt="Magister Keuangan Daerah Universitas Cenderawasih"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links (Spaced out & comfortable) */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-3" aria-label="Navigasi Utama">
            {navLinks.map((item, index) => {
              const active = isActive(item);
              if (item.dropdown) {
                return (
                  <div key={index} className="relative group py-2">
                    <button
                      className={`flex items-center gap-1 px-3 py-2 text-[14px] font-semibold transition-all rounded-md ${
                        active
                          ? 'text-[#640404] font-bold bg-[#640404]/5'
                          : 'text-gray-700 hover:text-[#640404] hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-gray-400 group-hover:text-[#640404]" />
                    </button>

                    {/* Edumint Style Dropdown Menu */}
                    <div className="hidden group-hover:block absolute left-0 top-full w-72 pt-2 z-50 animate-fadeIn">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 overflow-hidden ring-1 ring-black/5">
                        <div className="space-y-1">
                          {item.dropdown.map((sub, sIdx) => {
                            const subActive = location.pathname === sub.path;
                            if (sub.isExternal) {
                              return (
                                <a
                                  key={sIdx}
                                  href={sub.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/item flex items-start gap-2.5 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-[#640404]/5 hover:text-[#640404] transition-all"
                                >
                                  <div className="mt-0.5">
                                    <div className="flex items-center gap-1 font-bold text-gray-800 group-hover/item:text-[#640404]">
                                      <span>{sub.title}</span>
                                      <ExternalLink className="w-3 h-3 text-gray-400 group-hover/item:text-[#640404]" />
                                    </div>
                                    {sub.desc && (
                                      <p className="text-[11px] text-gray-500 font-normal mt-0.5">
                                        {sub.desc}
                                      </p>
                                    )}
                                  </div>
                                </a>
                              );
                            }
                            return (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                className={`group/item block px-3 py-2.5 rounded-xl text-sm transition-all ${
                                  subActive
                                    ? 'bg-[#640404]/10 text-[#640404] font-bold'
                                    : 'text-gray-700 hover:bg-[#640404]/5 hover:text-[#640404]'
                                }`}
                              >
                                <div className="font-bold text-gray-800 group-hover/item:text-[#640404]">
                                  {sub.title}
                                </div>
                                {sub.desc && (
                                  <p className="text-[11px] text-gray-500 font-normal mt-0.5">
                                    {sub.desc}
                                  </p>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`px-3 py-2 text-[14px] font-semibold transition-all rounded-md ${
                    active
                      ? 'text-[#640404] font-bold bg-[#640404]/5'
                      : 'text-gray-700 hover:text-[#640404] hover:bg-gray-50'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Right Call To Action (Edumint Style Golden Yellow Pill Button) */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/pendaftaran"
              className="inline-flex items-center gap-2 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] px-5 py-2.5 rounded-full font-extrabold text-sm tracking-wide shadow-md shadow-yellow-500/25 hover:shadow-lg hover:shadow-yellow-500/35 hover:-translate-y-0.5 transition-all duration-200"
            >
              <GraduationCap className="w-4 h-4 text-[#380202]" />
              <span>Admisi S2</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-[#640404] hover:bg-gray-100 transition-colors focus:outline-none"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            {navLinks.map((item, index) => {
              const active = isActive(item);
              if (item.dropdown) {
                const isOpen = openDropdown === item.title;
                return (
                  <div key={index} className="border-b border-gray-100 pb-1">
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className={`w-full flex items-center justify-between py-2.5 text-base font-semibold ${
                        active ? 'text-[#640404]' : 'text-gray-800'
                      }`}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180 text-[#640404]' : 'text-gray-400'}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.dropdown.map((sub, sIdx) => {
                          if (sub.isExternal) {
                            return (
                              <a
                                key={sIdx}
                                href={sub.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between py-2 text-sm text-gray-600 hover:text-[#640404]"
                              >
                                <span>{sub.title}</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            );
                          }
                          return (
                            <Link
                              key={sIdx}
                              to={sub.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`block py-2 text-sm ${
                                location.pathname === sub.path
                                  ? 'text-[#640404] font-bold'
                                  : 'text-gray-600 hover:text-[#640404]'
                              }`}
                            >
                              {sub.title}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2.5 text-base font-semibold border-b border-gray-100 ${
                    active ? 'text-[#640404]' : 'text-gray-800 hover:text-[#640404]'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}

            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                to="/pendaftaran"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#FFB013] text-[#380202] py-3 rounded-full font-black shadow-md hover:bg-[#E59800] transition-colors"
              >
                <GraduationCap className="w-5 h-5 text-[#380202]" />
                <span>Pendaftaran Mahasiswa Baru S2</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
