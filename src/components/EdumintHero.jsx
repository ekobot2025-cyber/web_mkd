import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, ArrowRight, BookOpen, Award, ShieldCheck, 
  Users, CheckCircle2, FileText, Sparkles, Star, Building2
} from 'lucide-react';

export default function EdumintHero() {
  return (
    <div className="relative bg-gradient-to-b from-[#FFFDF8] via-[#FAF6EE] to-white pt-8 pb-20 lg:pt-14 lg:pb-28 overflow-hidden">
      {/* Decorative Warm Background Elements (Edumint Gold & Maroon) */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFB013]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#640404]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 right-1/3 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Hero Copy & Calls-To-Action (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#640404]/10 border border-[#640404]/20 text-[#640404] text-xs sm:text-sm font-bold tracking-wide">
              <span className="flex h-2 w-2 rounded-full bg-[#FFB013] animate-ping" />
              <span>🎓 PROGRAM PASCASARJANA S2 TERAKREDITASI BAN-PT</span>
            </div>

            {/* Main Headline (Maroon with Golden Yellow Highlight) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#640404] tracking-tight leading-[1.18]">
              Mencetak Pemimpin & Analis{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB013] to-[#E08A00]">
                Tata Kelola Keuangan
              </span>{' '}
              di Tanah Papua
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl font-normal">
              Program Magister Keuangan Daerah (MKD) Pascasarjana Universitas Cenderawasih menyelenggarakan pendidikan pascasarjana unggulan yang memadukan teori fiskal modern, akuntansi sektor publik, dan kearifan lokal pembangunan Papua.
            </p>

            {/* Action Buttons: Golden Yellow & Rich Maroon */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/pendaftaran"
                className="inline-flex items-center gap-3 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] px-7 py-3.5 rounded-full font-black text-base shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/35 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Pendaftaran Mahasiswa Baru</span>
                <ArrowRight className="w-5 h-5 text-[#380202]" />
              </Link>
              
              <Link
                to="/kurikulum"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-[#640404]/5 text-[#640404] border-2 border-[#640404] px-6 py-3.5 rounded-full font-bold text-base shadow-sm hover:shadow transition-all duration-200"
              >
                <BookOpen className="w-5 h-5 text-[#FFB013]" />
                <span>Lihat Kurikulum S2</span>
              </Link>
            </div>

            {/* Trust Proof & Badges */}
            <div className="pt-4 border-t border-gray-200/80 flex flex-wrap items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="/uploads/dosen_mkd/Syaikhul Falah.png" alt="Dr. Syaikhul Falah" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
                  <img src="/uploads/dosen_mkd/Agustinus Salle.png" alt="Prof. Dr. Agustinus Salle" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
                  <img src="/uploads/dosen_mkd/Paulus.png" alt="Dr. Paulus K. Allo Layuk" className="w-9 h-9 rounded-full border-2 border-white object-cover shadow-sm bg-gray-100" />
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-[#640404] text-[#FFB013] text-xs font-black flex items-center justify-center shadow-sm">
                    +18
                  </div>
                </div>
                <div>
                  <div className="font-extrabold text-[#640404] leading-tight">21 Dosen Pakar</div>
                  <div className="text-xs text-gray-500">Guru Besar & Doktor</div>
                </div>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-yellow-50 border border-yellow-200 flex items-center justify-center text-[#FFB013]">
                  <Star className="w-5 h-5 fill-[#FFB013] text-[#FFB013]" />
                </div>
                <div>
                  <div className="font-extrabold text-[#640404] leading-tight">Terakreditasi BAN-PT</div>
                  <div className="text-xs text-gray-500">SK Resmi Kemendikbudristek</div>
                </div>
              </div>

              <div className="h-8 w-px bg-gray-200 hidden sm:block"></div>

              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-red-50 border border-red-200 flex items-center justify-center text-[#640404]">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-extrabold text-[#640404] leading-tight">Jurnal KEUDA SINTA</div>
                  <div className="text-xs text-gray-500">OJS Resmi Uncen</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Edumint Styled Graphic Frame with Floating Badges (5 Cols) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Outer Circular Rings */}
            <div className="relative w-full max-w-[460px] aspect-square">
              {/* Outer decorative dashed circle in Gold */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FFB013]/50 animate-[spin_60s_linear_infinite]" />
              
              {/* Maroon ring */}
              <div className="absolute inset-4 rounded-full border-2 border-[#640404]/25" />

              {/* Main Photo Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/uploads/campus/gambar-selamat-datang.png"
                  alt="Selamat Datang di Program Pascasarjana MKD Uncen"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge 1: Top Right - Akreditasi BAN-PT */}
              <div className="absolute -top-2 -right-2 sm:right-0 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FFB013] to-amber-400 flex items-center justify-center text-[#380202] shadow-md shadow-yellow-500/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Status Mutu</div>
                  <div className="text-sm font-extrabold text-[#640404]">Terakreditasi BAN-PT</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left - 14+ Dosen Pakar */}
              <div className="absolute -bottom-4 -left-2 sm:left-0 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#640404] to-[#880808] flex items-center justify-center text-[#FFB013] shadow-md shadow-red-900/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Tenaga Pendidik</div>
                  <div className="text-sm font-extrabold text-[#640404]">21 Dosen & Guru Besar</div>
                </div>
              </div>

              {/* Floating Badge 3: Center Left - Program Pascasarjana UNCEN (Clickable) */}
              <a
                href="https://pasca.uncen.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                title="Kunjungi Portal Resmi Program Pascasarjana Universitas Cenderawasih"
                className="hidden sm:flex absolute top-1/2 -left-6 -translate-y-1/2 bg-[#640404] hover:bg-[#FFB013] text-white hover:text-[#380202] px-3.5 py-2 rounded-xl shadow-lg items-center gap-2 border border-[#850606] hover:border-[#FFB013] transition-all group/badge"
              >
                <Sparkles className="w-4 h-4 text-[#FFB013] group-hover/badge:text-[#380202]" />
                <span className="text-xs font-black tracking-wider text-[#FFB013] group-hover/badge:text-[#380202]">PASCASARJANA UNCEN</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
