import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DosenPage from './pages/DosenPage';
import CurriculumPage from './pages/CurriculumPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import JournalPage from './pages/JournalPage';
import AdmissionPage from './pages/AdmissionPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';

export default function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      {!isAdmin && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/visi-misi" element={<AboutPage />} />
          <Route path="/sambutan" element={<AboutPage />} />
          <Route path="/struktur-organisasi" element={<AboutPage />} />
          <Route path="/fasilitas" element={<AboutPage />} />
          <Route path="/dosen" element={<DosenPage />} />
          <Route path="/kurikulum" element={<CurriculumPage />} />
          <Route path="/kalender" element={<CurriculumPage />} />
          <Route path="/pedoman-tesis" element={<CurriculumPage />} />
          <Route path="/berita" element={<NewsPage />} />
          <Route path="/berita/:slug" element={<NewsDetailPage />} />
          <Route path="/jurnal" element={<JournalPage />} />
          <Route path="/pendaftaran" element={<AdmissionPage />} />
          <Route path="/kontak" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  );
}
