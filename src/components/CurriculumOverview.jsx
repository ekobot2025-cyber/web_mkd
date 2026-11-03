import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Clock, Award, FileText, ArrowRight, Download, CheckCircle, Sparkles, Monitor, Users 
} from 'lucide-react';
import { curriculumData, curriculumSchedule } from '../data/curriculumData';

export default function CurriculumOverview() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Semua Tahap", semesterIndex: null },
    { label: "Pra-Program (Non-SKS)", semesterIndex: 0 },
    { label: "Semester I", semesterIndex: 1 },
    { label: "Semester II", semesterIndex: 2 },
    { label: "Semester III", semesterIndex: 3 },
    { label: "Semester IV (Tesis)", semesterIndex: 4 },
  ];

  const displayedSemesters = activeTab === 0 
    ? curriculumData 
    : [curriculumData[activeTab - 1]];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Edumint Style) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#640404]/10 border border-[#640404]/20 text-[#640404] text-xs font-bold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
            <span>STRUKTUR KURIKULUM 42 SKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#640404] tracking-tight">
            Kurikulum & Mata Kuliah MKD UNCEN
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed font-normal">
            Program MKD dilaksanakan dengan sistem kredit Satuan Kredit Semester (SKS) sebanyak <strong>42 SKS</strong>, yang terdiri dari <strong>5 mata kuliah pra-program (non-SKS)</strong> dan <strong>14 mata kuliah inti termasuk tesis (42 SKS)</strong>.
          </p>
        </div>

        {/* Waktu Perkuliahan Card (Sesuai Brosur Resmi) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#640404]/20 shadow-md flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#640404] text-[#FFB013] flex items-center justify-center flex-shrink-0 shadow-md">
              <Users className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-black text-[#640404] uppercase tracking-wider block">
                Jadwal Perkuliahan Tatap Muka
              </span>
              <h3 className="text-base sm:text-lg font-black text-gray-900">
                Kelas Reguler (Wilayah Jayapura & Sekitarnya)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Dilaksanakan setiap <strong>Hari Senin – Jumat</strong> pukul <strong>17.00 – 19.00 WIT</strong> di Kampus Pascasarjana Uncen Abepura.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-7 rounded-3xl border-2 border-[#FFB013] shadow-md flex items-start gap-4 bg-gradient-to-br from-white to-amber-50/30">
            <div className="w-12 h-12 rounded-2xl bg-[#FFB013] text-[#450202] flex items-center justify-center flex-shrink-0 shadow-md">
              <Monitor className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-black text-[#640404] uppercase tracking-wider block">
                Sistem Hybrid Learning Fleksibel
              </span>
              <h3 className="text-base sm:text-lg font-black text-gray-900">
                Kelas Khusus (Luar Jayapura / Pemda)
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Dilaksanakan dengan sistem <strong>Hybrid Learning</strong> interaktif menggunakan platform resmi <strong>Office 365 (Microsoft Teams)</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Filters (Edumint Style: Golden Yellow & Maroon) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-[#FFB013] text-[#380202] shadow-md shadow-yellow-500/30 scale-105'
                  : 'bg-white text-gray-700 hover:text-[#640404] hover:bg-yellow-50/50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Semester Courses Grid */}
        <div className="space-y-10">
          {displayedSemesters.map((sem, sIdx) => (
            <div key={sIdx} className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-gray-100">
              {/* Semester Title Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-gray-100 gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-[#FFB013]"></span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#640404]">
                      {sem.semester}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 pl-6">
                    {sem.keterangan}
                  </p>
                </div>
                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="px-3.5 py-1 rounded-full bg-yellow-50 text-[#8A5C00] text-xs font-bold border border-yellow-200">
                    {sem.mataKuliah.length} Mata Kuliah
                  </span>
                </div>
              </div>

              {/* Course Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sem.mataKuliah.map((mk, mkIdx) => (
                  <div
                    key={mkIdx}
                    className="p-5 rounded-2xl bg-[#FFFDF9] hover:bg-white border border-gray-200/80 hover:border-[#FFB013]/60 hover:shadow-lg transition-all duration-200 group flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Code & SKS Tag */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-md bg-white border border-gray-200 text-gray-700">
                          {mk.kode}
                        </span>
                        <span className={`text-xs font-extrabold px-2.5 py-1 rounded-full ${
                          mk.sks > 0 
                            ? 'bg-yellow-100 text-[#8A5C00]' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {mk.sks > 0 ? `${mk.sks} SKS` : 'Non-SKS'}
                        </span>
                      </div>

                      {/* Course Title */}
                      <h4 className="text-base font-bold text-[#640404] group-hover:text-[#D99100] transition-colors leading-snug mb-2">
                        {mk.nama}
                      </h4>
                    </div>

                    {/* Sifat Course & Icon */}
                    <div className="pt-3 mt-3 border-t border-gray-200/60 flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1.5 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{mk.sifat}</span>
                      </div>
                      <span className="text-[11px] font-bold text-gray-400 group-hover:text-[#640404] transition-colors">
                        PASCASARJANA UNCEN
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA for Curriculum */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/kurikulum"
            className="inline-flex items-center gap-2 bg-[#640404] hover:bg-[#450202] text-white px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#FFB013]" />
            <span>Lihat Halaman Kurikulum Lengkap</span>
            <ArrowRight className="w-4 h-4 text-[#FFB013]" />
          </Link>

          <a
            href="/file/KALENDER-AKADEMIK-2021-2022.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-yellow-50 text-[#640404] border border-gray-300 px-6 py-3.5 rounded-full font-bold text-sm shadow-sm transition-all"
          >
            <Download className="w-4 h-4 text-[#FFB013]" />
            <span>Unduh Kalender Akademik (PDF)</span>
          </a>
        </div>

      </div>
    </section>
  );
}
