import React from 'react';
import CurriculumOverview from '../components/CurriculumOverview';
import { Download, FileText, CheckCircle2, Award, BookOpen } from 'lucide-react';

export default function CurriculumPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#550303] py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">
            Struktur Pendidikan S2
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Kurikulum & Mata Kuliah MKD
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl">
            Rancangan pembelajaran berstandar nasional yang memadukan teori makro-fiskal dengan studi kasus nyata tata kelola keuangan daerah di Papua.
          </p>
        </div>
      </div>

      {/* Main Tabbed Curriculum */}
      <CurriculumOverview />

      {/* Tesis & Download Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tesis Info */}
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
            <div className="p-3 bg-maroon/10 text-maroon rounded-xl w-fit">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-primary">Ketentuan Penulisan Tesis (6 SKS)</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Mahasiswa wajib menyusun karya ilmiah mandiri berupa Tesis yang mengkaji isu strategis keuangan daerah di bawah bimbingan 2 orang dosen pembimbing (Komisi Pembimbing) berkualifikasi Doktor/Guru Besar.
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Lulus seluruh mata kuliah semester I s/d III dengan IPK minimal 3.00</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Lolos uji orisinalitas/plagiarisme (Turnitin maksimal 20%)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Wajib publikasi di Jurnal Ilmiah (Jurnal KEUDA atau jurnal terindeks SINTA)</span>
              </li>
            </ul>
          </div>

          {/* Academic Calendar Download Card */}
          <div className="bg-gradient-to-br from-[#640404] via-[#7B0808] to-[#500303] p-8 rounded-3xl text-white shadow-xl space-y-4 flex flex-col justify-between border-2 border-[#FFB013]/40">
            <div className="space-y-3">
              <div className="p-3 bg-white/10 text-[#FFB013] rounded-2xl w-fit border border-white/20">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-white">Kalender Akademik Pascasarjana</h3>
              <p className="text-xs text-gray-200 leading-relaxed font-normal">
                Unduh dokumen jadwal kegiatan perkuliahan, masa registrasi kartu rencana studi (KRS), ujian tengah semester (UTS), ujian akhir semester (UAS), dan periode wisuda universitas.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="/file/KALENDER-AKADEMIK-2021-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] font-black px-6 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all"
              >
                <Download className="w-4 h-4 text-[#380202]" />
                <span>Unduh Kalender Akademik (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
