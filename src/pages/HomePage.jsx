import React from 'react';
import EdumintHero from '../components/EdumintHero';
import EdumintFeatures from '../components/EdumintFeatures';
import WelcomeSection from '../components/WelcomeSection';
import CurriculumOverview from '../components/CurriculumOverview';
import DosenSection from '../components/DosenSection';
import KeudaJournalSection from '../components/KeudaJournalSection';
import NewsSection from '../components/NewsSection';
import AdmissionSection from '../components/AdmissionSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Edumint Split Hero Banner */}
      <EdumintHero />

      {/* 2. Edumint 4 Signature Floating Feature Cards */}
      <EdumintFeatures />

      {/* 3. Welcome & Sambutan Ketua Program Studi */}
      <WelcomeSection />

      {/* 4. Kurikulum & Mata Kuliah (4 Semester + Matrikulasi) */}
      <CurriculumOverview />

      {/* 5. Tenaga Pengajar Pakar & Guru Besar */}
      <DosenSection limit={8} showFilter={false} />

      {/* 6. Jurnal Ilmiah KEUDA SINTA Publication */}
      <KeudaJournalSection />

      {/* 7. Berita & Kebijakan Keuangan Daerah */}
      <NewsSection limit={3} />

      {/* 8. Pendaftaran & Admisi Mahasiswa Baru CTA */}
      <AdmissionSection />
    </main>
  );
}
