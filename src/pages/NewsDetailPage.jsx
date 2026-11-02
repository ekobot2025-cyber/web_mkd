import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsService } from '../services/newsService';
import { Calendar, User, ArrowLeft, Share2, Tag, BookOpen, Clock } from 'lucide-react';

export default function NewsDetailPage() {
  const { slug } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsService.getAllNews());
  }, []);

  const article = news.find((item) => item.slug === slug) || newsService.getNewsBySlug(slug) || news[0] || {};
  const relatedArticles = news.filter((item) => item.id !== article.id).slice(0, 3);

  return (
    <div className="bg-white min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 text-xs font-bold text-maroon hover:underline uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Semua Berita</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <main className="lg:col-span-8 space-y-6">
            <div className="space-y-3">
              <span className="inline-block bg-maroon text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {article.kategori}
              </span>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary leading-tight">
                {article.judul}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 border-b border-gray-100 pb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span>{article.tanggal}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-gold" />
                  <span>{article.penulis}</span>
                </span>
                <span className="text-gray-300">•</span>
                <span>Program Magister Keuangan Daerah UNCEN</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-md max-h-[460px] bg-gray-100">
              <img
                src={article.gambar}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/uploads/L1.jpg';
                }}
                alt={article.judul}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose max-w-none text-sm sm:text-base text-gray-700 leading-relaxed space-y-4 pt-4">
              <p className="font-semibold text-primary text-base sm:text-lg border-l-4 border-gold pl-4 py-1 italic bg-gray-50 rounded-r-lg">
                {article.ringkasan}
              </p>

              {article.konten.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph.trim()}</p>
              ))}
            </div>

            {/* Social Share Strip */}
            <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                <Tag className="w-4 h-4 text-gold" />
                <span>Kategori: {article.kategori}</span>
              </div>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: article.judul, url: window.location.href });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Tautan berita berhasil disalin ke clipboard!');
                  }
                }}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-maroon border border-gray-300 px-3 py-1.5 rounded-lg shadow-sm hover:bg-gray-50"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Bagikan Berita</span>
              </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Related News Card */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 space-y-4">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wider border-b border-gray-200 pb-3">
                Berita Terkait
              </h3>
              <div className="space-y-4">
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/berita/${rel.slug}`}
                    className="flex gap-3 group items-start"
                  >
                    <img
                      src={rel.gambar}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/uploads/L1.jpg';
                      }}
                      alt={rel.judul}
                      className="w-20 h-16 rounded-lg object-cover flex-shrink-0 group-hover:scale-105 transition-transform"
                    />
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-maroon uppercase">
                        {rel.kategori}
                      </span>
                      <h4 className="text-xs font-bold text-gray-800 group-hover:text-maroon line-clamp-2 leading-snug">
                        {rel.judul}
                      </h4>
                      <span className="text-[10px] text-gray-400 block">
                        {rel.tanggal}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Admission CTA */}
            <div className="bg-gradient-to-br from-[#640404] via-[#7B0808] to-[#500303] p-6 rounded-3xl text-white space-y-3.5 shadow-lg border-2 border-[#FFB013]/30">
              <span className="text-xs font-black text-[#FFB013] uppercase tracking-wider block">
                Admisi Pascasarjana
              </span>
              <h4 className="text-base font-black text-white">
                Daftar Magister Keuangan Daerah
              </h4>
              <p className="text-xs text-gray-200 leading-relaxed font-normal">
                Tersedia kelas reguler dan kelas kemitraan khusus pemerintah daerah di seluruh wilayah Papua.
              </p>
              <Link
                to="/pendaftaran"
                className="inline-block w-full text-center bg-[#FFB013] hover:bg-[#E59800] text-[#380202] font-black py-2.5 rounded-full text-xs uppercase tracking-wider transition-all shadow"
              >
                Informasi Pendaftaran S2
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
