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
          {/* Tesis & Penyelesaian Studi Info */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-md space-y-4">
            <div className="p-3 bg-[#640404]/10 text-[#640404] rounded-2xl w-fit">
              <Award className="w-6 h-6 text-[#FFB013]" />
            </div>
            <div>
              <span className="text-[11px] font-black text-[#640404] uppercase tracking-wider block">
                Gelar Akademik: Magister Sains (M.Si.)
              </span>
              <h3 className="text-xl font-black text-gray-900 mt-0.5">
                Ketentuan Penyelesaian Pendidikan S2 MKD
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
              Mahasiswa dinyatakan selesai dan berhak menyandang gelar <strong>Magister Sains (M.Si.)</strong> bidang Keuangan Daerah bila memenuhi ketentuan resmi:
            </p>
            <ul className="space-y-2.5 text-xs text-gray-700 pt-1">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-0.5" />
                <span>Telah menyelesaikan seluruh perkuliahan (39 SKS teori & praktikum)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-0.5" />
                <span>Telah menyelesaikan Tesis (bobot 6 SKS) dan dinyatakan Lulus ujian sidang</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-0.5" />
                <span>Indeks Prestasi Kumulatif (IPK) minimal <strong>3.00</strong>, tanpa nilai C</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-0.5" />
                <span>Menempuh tes TOEFL dengan skor minimal <strong>400</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-0.5" />
                <span>Telah mengumpulkan Artikel atau Karya Ilmiah untuk publikasi jurnal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-0.5" />
                <span>Lulus Tes Potensi Akademik (TPA) dengan nilai minimal <strong>350</strong></span>
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
