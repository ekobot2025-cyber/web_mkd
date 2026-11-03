import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, ExternalLink, ShieldCheck, 
  GraduationCap, BookOpen, Clock, ArrowRight, Heart 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#5A0404] text-gray-200 text-sm border-t-2 border-[#7A0C0C]">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Identity with Official Uncen Crest (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img
                src="/assets/img/logo_uncen.png"
                alt="Lambang Universitas Cenderawasih"
                className="h-14 w-auto object-contain bg-white/10 p-1.5 rounded-2xl border border-white/20"
              />
              <div>
                <span className="block text-[11px] font-bold text-[#FFB013] uppercase tracking-wider">
                  Program Pascasarjana (S2)
                </span>
                <span className="block text-lg font-black text-white group-hover:text-[#FFB013] transition-colors leading-tight">
                  MAGISTER KEUANGAN DAERAH
                </span>
                <span className="block text-xs text-gray-400">
                  Program Pascasarjana • Universitas Cenderawasih
                </span>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed font-normal">
              Program Studi Magister Keuangan Daerah Pascasarjana Universitas Cenderawasih berkomitmen mencetak sumber daya manusia unggul yang profesional, beretika akademik, serta berkearifan lokal dalam mengelola keuangan negara dan daerah di Tanah Papua.
            </p>

            {/* Badges: Perfectly sejajar (side-by-side) with flex-nowrap */}
            <div className="pt-2 flex flex-row items-center gap-2.5 flex-nowrap whitespace-nowrap">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[#FFB013] text-[11px] font-bold border border-white/15 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FFB013]" />
                <span>Terakreditasi BAN-PT</span>
              </span>
              <a
                href="https://pasca.uncen.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                title="Kunjungi Portal Resmi Program Pascasarjana Universitas Cenderawasih (pasca.uncen.ac.id)"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 hover:bg-[#FFB013] text-white hover:text-[#380202] text-[11px] font-bold border border-white/20 hover:border-[#FFB013] transition-all duration-200 group/pasca shadow-sm shrink-0"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#FFB013] group-hover/pasca:text-[#380202] transition-colors" />
                <span>PASCASARJANA UNCEN</span>
                <ExternalLink className="w-3 h-3 opacity-70 group-hover/pasca:opacity-100" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi Akademik (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide border-b border-[#640404] pb-2">
              Akademik
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/kurikulum" className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                  <span>Struktur Kurikulum</span>
                </Link>
              </li>
              <li>
                <Link to="/kalender" className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                  <span>Kalender Akademik</span>
                </Link>
              </li>
              <li>
                <Link to="/pedoman-tesis" className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                  <span>Pedoman Tesis S2</span>
                </Link>
              </li>
              <li>
                <Link to="/dosen" className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                  <span>Tenaga Pengajar</span>
                </Link>
              </li>
              <li>
                <Link to="/visi-misi" className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                  <span>Visi, Misi & Tujuan</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Publikasi & Layanan (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide border-b border-[#640404] pb-2">
              Publikasi & Layanan
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/jurnal" className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                  <span>Jurnal Ilmiah KEUDA</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://ejournal.uncen.ac.id/index.php/KEUDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                    <span>Portal OJS KEUDA</span>
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://repository.mkduncen.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                    <span>Repository SLiMS</span>
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://tracer.mkduncen.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center justify-between"
                >
                  <span className="flex items-center gap-1.5">
                    <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                    <span>Tracer Study Alumni</span>
                  </span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
              <li>
                <Link to="/berita" className="text-gray-300 hover:text-[#FFB013] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#FFB013]" />
                  <span>Berita & Artikel Kebijakan</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sekretariat & Kontak (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-base font-bold tracking-wide border-b border-[#640404] pb-2">
              Sekretariat MKD
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-1" />
                <span>
                  Gedung Program Pascasarjana Universitas Cenderawasih, Kampus Abepura, Kota Jayapura, Papua
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                <a href="mailto:data.mkduncen@gmail.com" className="hover:text-white transition-colors">
                  data.mkduncen@gmail.com
                </a>
              </div>

              <div className="space-y-1 pt-0.5">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                  <span className="text-xs text-gray-300">Telp (fax): <a href="tel:0967586716" className="hover:text-[#FFB013] font-semibold">0967-586716</a></span>
                </div>
                <div className="flex items-center gap-2.5 pl-6.5 text-xs text-gray-300">
                  <span>Sekretariat: <a href="https://wa.me/62811481847" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB013] font-semibold">+62 811481847</a></span>
                </div>
                <div className="flex items-center gap-2.5 pl-6.5 text-xs text-gray-400">
                  <span>Narahubung: Klara (<a href="https://wa.me/6281234939326" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB013] font-semibold">081234939326</a>) • Hesty (<a href="https://wa.me/6285244494825" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB013] font-semibold">085244494825</a>)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1 text-xs text-gray-400">
                <Clock className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                <span>Senin - Jumat: 08.00 - 16.00 WIT</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar in Warm Rich Maroon */}
      <div className="border-t border-[#7A0C0C] bg-[#450202] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Program Studi Magister Keuangan Daerah (MKD) Universitas Cenderawasih. Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center space-x-6 text-gray-400">
            <Link to="/visi-misi" className="hover:text-[#FFB013] transition-colors">Visi & Misi</Link>
            <span>•</span>
            <Link to="/kurikulum" className="hover:text-[#FFB013] transition-colors">Kurikulum</Link>
            <span>•</span>
            <Link to="/kontak" className="hover:text-[#FFB013] transition-colors">Kontak</Link>
            <span>•</span>
            <Link to="/admin" className="hover:text-[#FFB013] transition-colors text-gray-500 hover:underline">Portal Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
