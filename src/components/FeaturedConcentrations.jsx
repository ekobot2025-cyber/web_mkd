import React from 'react';

export default function FeaturedConcentrations() {
  const concentrations = [
    {
      title: 'Perencanaan & Penganggaran APBD',
      desc: 'Formulasi kebijakan fiskal, alokasi anggaran responsif, dan optimalisasi PAD.',
    },
    {
      title: 'Akuntansi & Audit Sektor Publik',
      desc: 'Standar Akuntansi Pemerintahan (SAP), audit kinerja BPK, dan penguatan SPIP.',
    },
    {
      title: 'Manajemen Aset & BMD',
      desc: 'Inventarisasi, penilaian legalitas, dan optimalisasi barang milik daerah di Papua.',
    },
    {
      title: 'Kebijakan Fiskal Otsus Papua',
      desc: 'Pengelolaan dana transfer, DBH, tata kelola DOB, dan akselerasi kesejahteraan.',
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Head */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#640404] uppercase tracking-wide mb-3">
            Konsentrasi & Keahlian Utama
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {concentrations.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#f8f8f8] p-6 rounded-xl border-l-[5px] border-[#640404] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white hover:shadow-lg"
            >
              <h4 className="text-base font-bold text-[#640404] mb-2.5 min-h-[2.8rem] flex items-center">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
