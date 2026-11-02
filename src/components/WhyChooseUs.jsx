import React from 'react';

export default function WhyChooseUs() {
  const items = [
    {
      icon: '🎓',
      title: 'Kurikulum Adaptif',
      description: 'Sesuai regulasi Kemendagri, BPK, dan akuntansi sektor publik modern.',
    },
    {
      icon: '🤝',
      title: 'Koneksi Strategis',
      description: 'Kemitraan erat dengan Pemda se-Papua, BPKAD, Bappeda, dan BPK.',
    },
    {
      icon: '📈',
      title: 'Karier & Kepemimpinan',
      description: 'Mencetak pimpinan birokrasi, auditor, dan analis fiskal daerah handal.',
    },
    {
      icon: '🌏',
      title: 'Kearifan Lokal Papua',
      description: 'Analisis empiris kebijakan Otonomi Khusus dan pembangunan daerah.',
    },
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#640404] uppercase tracking-wide mb-3">
            Mengapa Memilih Magister Keuangan Daerah di Uncen?
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full"></div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl text-center border border-gray-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
            >
              <div className="w-14 h-14 bg-[#640404] text-gold rounded-full flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-[#640404] mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
