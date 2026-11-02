import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, ExternalLink, Award, FileText, CheckCircle2, 
  ArrowRight, Sparkles, ShieldCheck 
} from 'lucide-react';

export default function KeudaJournalSection() {
  const indexers = [
    { name: 'SINTA Kemdikbud', logo: '/uploads/images/sinta.png', desc: 'Science and Technology Index' },
    { name: 'Google Scholar', logo: '/uploads/images/google-scholar.png', desc: 'Riset & Sitasi Ilmiah' },
    { name: 'GARUDA Ristekbrin', logo: '/uploads/images/garuda.png', desc: 'Garba Rujukan Digital' },
    { name: 'Neliti Indonesia', logo: '/uploads/images/neliti.png', desc: 'Repositori Riset Nasional' },
    { name: 'Mendeley', logo: '/uploads/images/mendeley.png', desc: 'Reference Manager' },
    { name: 'OneSearch Perpusnas', logo: '/uploads/images/onesearch.png', desc: 'Perpustakaan Nasional RI' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFDF9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card Showcase in Warm Uncen Maroon & Edumint Gold */}
        <div className="bg-gradient-to-br from-[#640404] via-[#7B0808] to-[#500303] rounded-3xl text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border-2 border-[#FFB013]/30">
          {/* Decorative glowing circles in Gold */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB013]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FFB013] text-xs font-black tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PUBLIKASI RISET ILMIAH & AKREDITASI SINTA</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
                Jurnal Keuangan Daerah{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB013] to-[#FFD56B]">
                  (KEUDA)
                </span>
              </h2>

              <p className="text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
                Jurnal Keuangan Daerah (KEUDA) diterbitkan oleh Program Studi Magister Keuangan Daerah Program Pascasarjana Universitas Cenderawasih sebagai media diseminasi hasil riset empiris di bidang akuntansi sektor publik, keuangan negara, perpajakan, dan otonomi fiskal daerah.
              </p>

              {/* Journal Specs Box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-gray-300 font-medium">ISSN Cetak</div>
                  <div className="text-sm sm:text-base font-black text-[#FFB013] mt-1 font-mono">
                    2355-6323
                  </div>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-sm">
                  <div className="text-xs text-gray-300 font-medium">ISSN Online (E-ISSN)</div>
                  <div className="text-sm sm:text-base font-black text-[#FFB013] mt-1 font-mono">
                    2721-6675
                  </div>
                </div>

                <div className="bg-white/10 border border-white/15 rounded-2xl p-4 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <div className="text-xs text-gray-300 font-medium">Frekuensi Terbit</div>
                  <div className="text-sm sm:text-base font-bold text-white mt-1">
                    2 Kali / Tahun
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="https://ejournal.uncen.ac.id/index.php/KEUDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] px-7 py-3.5 rounded-full font-black text-sm shadow-lg shadow-yellow-500/30 hover:scale-105 transition-all"
                >
                  <BookOpen className="w-4 h-4 text-[#380202]" />
                  <span>Kunjungi Portal OJS KEUDA</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/jurnal"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-full font-bold text-sm transition-all"
                >
                  <span>Pedoman Penulisan Artikel</span>
                  <ArrowRight className="w-4 h-4 text-[#FFB013]" />
                </Link>
              </div>
            </div>

            {/* Right: Indexer Badges Grid (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-300">
                    Terindeks & Terdaftar di
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FFB013] text-[#380202] text-[10px] font-black uppercase">
                    Reputasi Nasional
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {indexers.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl p-3.5 flex flex-col items-center justify-center text-center shadow-md hover:scale-105 transition-transform"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                        className="h-7 w-auto object-contain mb-1.5"
                      />
                      <span className="text-xs font-black text-[#640404] leading-tight">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-gray-500 mt-0.5">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 text-center">
                  <p className="text-xs text-gray-300">
                    Penerbit: <strong className="text-white">Program Studi Magister Keuangan Daerah Pascasarjana UNCEN</strong>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
