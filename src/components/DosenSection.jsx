import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, ExternalLink, Award, ArrowRight, Sparkles, 
  Search, X, Mail, Building2, UserCheck
} from 'lucide-react';
import { dosenList, dosenTamuList } from '../data/dosenData';

export default function DosenSection({ limit = null, showFilter = true }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // ALL, UNCEN, TAMU
  const [selectedRank, setSelectedRank] = useState('ALL');

  // Gabungkan seluruh pengajar resmi (21 Tetap + 6 Tamu)
  const allLecturers = [...dosenList, ...dosenTamuList];

  const rankFilters = [
    { id: 'ALL', label: 'Semua Jabatan' },
    { id: 'Guru Besar', label: 'Guru Besar' },
    { id: 'Lektor Kepala', label: 'Lektor Kepala' },
    { id: 'Lektor', label: 'Lektor' },
  ];

  const categoryFilters = [
    { id: 'ALL', label: 'Semua Pengajar', count: allLecturers.length },
    { id: 'UNCEN', label: 'Dosen Tetap UNCEN', count: dosenList.length },
    { id: 'TAMU', label: 'Dosen Tamu Mitra', count: dosenTamuList.length },
  ];

  const filteredDosen = allLecturers.filter((dosen) => {
    // Filter Kategori
    if (selectedCategory === 'UNCEN' && dosen.kategori !== 'Dosen Tetap UNCEN') return false;
    if (selectedCategory === 'TAMU' && dosen.kategori !== 'Dosen Tamu Mitra') return false;

    // Filter Jabatan Akademik (Rank)
    if (selectedRank !== 'ALL' && dosen.rank !== selectedRank) return false;

    // Search Term
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const matchName = dosen.nama.toLowerCase().includes(term);
    const matchNip = (dosen.nip || '').includes(term);
    const matchBidang = (dosen.bidang || '').toLowerCase().includes(term);
    const matchInstansi = (dosen.instansi || '').toLowerCase().includes(term);
    const matchDetails = (dosen.details || []).some((d) => d.toLowerCase().includes(term));

    return matchName || matchNip || matchBidang || matchInstansi || matchDetails;
  });

  const displayedDosen = limit ? filteredDosen.slice(0, limit) : filteredDosen;

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#640404]/10 border border-[#640404]/20 text-[#640404] text-xs font-bold tracking-wide mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
            <span>DIREKTORI TENAGA PENGAJAR & GURU BESAR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#640404] tracking-tight">
            Akademisi Berkualifikasi Doktor & Profesor
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed font-normal">
            Staf pengajar Program Studi Magister Keuangan Daerah Pascasarjana Universitas Cenderawasih terdiri dari 21 Dosen Tetap Uncen dan 6 Dosen Tamu Mitra (Unhas, Univ. Otow & Geisler, UKI Jakarta) bergelar Doktor dan Guru Besar.
          </p>
          <div className="w-16 h-1 bg-[#FFB013] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Search & Filter Bar */}
        {showFilter && (
          <div className="max-w-4xl mx-auto mb-10 space-y-4">
            {/* Category Switcher Tabs */}
            <div className="flex items-center justify-center gap-2 p-1 bg-gray-100 rounded-2xl max-w-lg mx-auto">
              {categoryFilters.map((cat) => {
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                      active
                        ? 'bg-[#640404] text-white shadow-sm'
                        : 'text-gray-700 hover:text-[#640404] hover:bg-white/60'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                        active ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama dosen, gelar, NIP, instansi, atau kepakaran (misal: Salle, Kambuaya, Pagalung, Syarifuddin)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#640404] focus:border-transparent transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Rank Filter Chips */}
            <div className="flex items-center justify-center gap-2 flex-wrap text-xs">
              {rankFilters.map((rf) => {
                const active = selectedRank === rf.id;
                return (
                  <button
                    key={rf.id}
                    onClick={() => setSelectedRank(rf.id)}
                    className={`px-3 py-1 rounded-lg font-semibold transition-all text-xs flex items-center gap-1.5 ${
                      active
                        ? 'bg-[#FFB013] text-[#380202] shadow-sm font-bold'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <span>{rf.label}</span>
                  </button>
                );
              })}
            </div>

            <p className="text-center text-[11px] text-gray-500">
              Menampilkan <span className="font-bold text-[#640404]">{filteredDosen.length}</span> Tenaga Pengajar
            </p>
          </div>
        )}

        {/* Lecturer Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {displayedDosen.map((dosen) => {
            const isGuruBesar = dosen.rank === 'Guru Besar';
            const isLektorKepala = dosen.rank === 'Lektor Kepala';
            const isTamu = dosen.kategori === 'Dosen Tamu Mitra';
            const educations = (dosen.details || []).filter((d) =>
              d.toLowerCase().startsWith('s1') ||
              d.toLowerCase().startsWith('s2') ||
              d.toLowerCase().startsWith('s3')
            );

            return (
              <div
                key={dosen.id}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Photo Frame - Compact aspect-[3/4] */}
                <div className="relative aspect-[3/4] max-h-60 overflow-hidden bg-gradient-to-t from-gray-100 to-gray-50 flex items-center justify-center p-2.5">
                  <img
                    src={dosen.foto}
                    alt={dosen.nama}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/uploads/photos/user.jpg';
                    }}
                    className="w-full h-full object-cover object-top rounded-xl transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Category Pill on top-left */}
                  <span className={`absolute top-3 left-3 inline-flex items-center gap-1 text-[9px] font-bold px-2 py-0.5 rounded-md shadow ${
                    isTamu 
                      ? 'bg-blue-900 text-blue-100 border border-blue-700' 
                      : 'bg-[#640404] text-white'
                  }`}>
                    {isTamu ? <Building2 className="w-2.5 h-2.5" /> : <UserCheck className="w-2.5 h-2.5" />}
                    {isTamu ? 'Dosen Tamu' : 'Dosen Uncen'}
                  </span>

                  {/* Rank Badges on Photo */}
                  {isGuruBesar && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-[#FFB013] text-[#380202] text-[10px] font-black px-2 py-0.5 rounded-md shadow border border-yellow-400">
                      <Award className="w-3 h-3 text-[#380202]" />
                      Guru Besar
                    </span>
                  )}
                  {isLektorKepala && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-0.5 bg-[#640404] text-white text-[9px] font-bold px-2 py-0.5 rounded-md shadow">
                      Lektor Kepala
                    </span>
                  )}
                  {!isGuruBesar && !isLektorKepala && (
                    <span className="absolute top-3 right-3 inline-flex items-center gap-0.5 bg-[#450202] text-white text-[9px] font-semibold px-2 py-0.5 rounded-md shadow border border-[#FFB013]/30">
                      {dosen.rank || 'Lektor'}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Instansi Asal Dosen Tamu */}
                    {dosen.instansi && (
                      <div className="mb-1.5">
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded leading-tight">
                          <Building2 className="w-2.5 h-2.5 shrink-0" />
                          <span className="truncate">{dosen.instansi}</span>
                        </span>
                      </div>
                    )}

                    {/* Name */}
                    <h3 className="text-xs sm:text-[13px] font-black text-gray-900 group-hover:text-[#640404] transition-colors line-clamp-2 leading-snug mb-1 min-h-[2.3rem]">
                      {dosen.nama}
                    </h3>

                    {/* NIP */}
                    {dosen.nip && (
                      <p className="text-[10px] font-mono text-gray-500 truncate" title={`NIP. ${dosen.nip}`}>
                        NIP. {dosen.nip}
                      </p>
                    )}

                    {/* Jabatan & Bidang */}
                    {dosen.jabatan && (
                      <div className="mt-1.5 flex flex-wrap gap-1">
                        <span className="inline-block text-[10px] font-bold text-[#8A5C00] bg-yellow-50 border border-yellow-200 px-1.5 py-0.5 rounded truncate max-w-full">
                          {dosen.jabatan}
                        </span>
                      </div>
                    )}

                    <p className="text-[11px] text-gray-600 line-clamp-2 mt-1 leading-relaxed">
                      {dosen.bidang}
                    </p>

                    {/* Compact Education History */}
                    {educations.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-100 space-y-0.5 text-[10px] text-gray-600">
                        {educations.map((edu, eIdx) => {
                          const parts = edu.split(/[:\-]/);
                          const level = parts[0]?.trim();
                          const campus = parts.slice(1).join('-').trim();
                          return (
                            <p key={eIdx} className="truncate" title={edu}>
                              <span className="font-bold text-gray-700">{level}:</span> {campus}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Scholar, SINTA, Scopus & Email Action Buttons */}
                  <div className="pt-2.5 mt-2.5 border-t border-gray-100 flex items-center justify-between gap-1 flex-wrap">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {/* Google Scholar Button */}
                      {dosen.scholarUrl && (
                        <a
                          href={dosen.scholarUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold bg-[#FFF8E7] text-[#8A5C00] hover:bg-[#FFB013] hover:text-[#380202] transition-all border border-[#FFB013]/40 shadow-xs"
                          title={`Google Scholar - ${dosen.nama}`}
                        >
                          <GraduationCap className="w-3 h-3 flex-shrink-0" />
                          <span>Scholar</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      )}

                      {/* SINTA Button */}
                      {dosen.sintaUrl && (
                        <a
                          href={dosen.sintaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold bg-[#fff3e0] text-[#e65100] hover:bg-[#e65100] hover:text-white transition-all border border-[#e65100]/20 shadow-xs"
                          title={`SINTA Kemdikbud - ${dosen.nama}`}
                        >
                          <BookOpen className="w-3 h-3 flex-shrink-0" />
                          <span>SINTA</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      )}

                      {/* Scopus Button */}
                      {dosen.scopusUrl && (
                        <a
                          href={dosen.scopusUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold bg-[#fdf3f3] text-[#640404] hover:bg-[#640404] hover:text-white transition-all border border-[#640404]/20 shadow-xs"
                          title={`Scopus - ${dosen.nama}`}
                        >
                          <Award className="w-3 h-3 flex-shrink-0" />
                          <span>Scopus</span>
                          <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                        </a>
                      )}
                    </div>

                    {/* Email Icon */}
                    {dosen.email && (
                      <a
                        href={`mailto:${dosen.email}`}
                        className="p-1 rounded-md text-gray-400 hover:text-[#640404] hover:bg-gray-100 transition-colors"
                        title={dosen.email}
                      >
                        <Mail className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button on Homepage */}
        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/dosen"
              className="inline-flex items-center gap-2 bg-[#640404] hover:bg-[#450202] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <span>Lihat Seluruh 27 Tenaga Pengajar & Guru Besar</span>
              <ArrowRight className="w-4 h-4 text-[#FFB013]" />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
