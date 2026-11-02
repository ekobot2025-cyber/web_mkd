import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, Phone, CheckCircle2, ArrowRight, ShieldCheck, 
  Sparkles, Calendar, HelpCircle 
} from 'lucide-react';

export default function AdmissionSection() {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-[#640404] via-[#7B0808] to-[#500303] text-white relative overflow-hidden border-t-2 border-[#FFB013]/40">
      {/* Decorative Orbs in Golden Yellow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFB013]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Tag Pill in Gold */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFB013] text-xs font-black tracking-wide mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>PENERIMAAN MAHASISWA BARU TA 2026/2027</span>
        </div>

        {/* Big Bold Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-4xl mx-auto leading-tight">
          Tingkatkan Karir & Kompetensi Kebijakan Fiskal Bersama{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB013] to-[#FFE082]">
            MKD Pascasarjana Uncen
          </span>
        </h2>

        {/* Lead paragraph */}
        <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto mt-4 leading-relaxed font-normal">
          Pendaftaran program Magister (S2) Keuangan Daerah terbuka bagi aparatur sipil negara (ASN) Pemda, auditor Inspektorat/BPK, perencana Bappeda, akademisi, serta profesional umum di seluruh Tanah Papua.
        </p>

        {/* 3 Key Admission Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 my-8 text-sm text-gray-200">
          <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-[#FFB013]" />
            <span>Terbuka untuk S1 Segala Jurusan</span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-[#FFB013]" />
            <span>Tersedia Kelas Reguler & Kelas Kerjasama Pemda</span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-4 py-2 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-[#FFB013]" />
            <span>Gelar Resmi M.Ec. / M.Ak. Terakreditasi BAN-PT</span>
          </div>
        </div>

        {/* Action Buttons: Golden Yellow & WhatsApp */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/pendaftaran"
            className="inline-flex items-center gap-3 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] px-8 py-4 rounded-full font-black text-base shadow-xl shadow-yellow-500/30 hover:scale-105 transition-all"
          >
            <GraduationCap className="w-5 h-5 text-[#380202]" />
            <span>Daftar Online Sekarang</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <a
            href="https://wa.me/62811481847"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-4 rounded-full font-bold text-base backdrop-blur-sm transition-all"
          >
            <Phone className="w-5 h-5 text-[#25D366]" />
            <span>Konsultasi WhatsApp Admisi</span>
          </a>
        </div>

        {/* Bottom Helper Note */}
        <div className="mt-8 text-xs text-gray-300 flex items-center justify-center gap-2">
          <HelpCircle className="w-3.5 h-3.5 text-[#FFB013]" />
          <span>Sekretariat MKD Program Pascasarjana Kampus Uncen Abepura • Hotline: +62 811-481-847 • data.mkduncen@gmail.com</span>
        </div>

      </div>
    </section>
  );
}
