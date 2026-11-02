import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, User, ArrowRight, Sparkles, Tag, ChevronRight 
} from 'lucide-react';
import { newsService } from '../services/newsService';

export default function NewsSection({ limit = 3 }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const load = () => {
      setNews(newsService.getAllNews());
    };
    load();
    window.addEventListener('mkd_news_updated', load);
    return () => window.removeEventListener('mkd_news_updated', load);
  }, []);

  const displayedNews = limit ? news.slice(0, limit) : news;

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Edumint Style) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#640404]/10 border border-[#640404]/20 text-[#640404] text-xs font-bold tracking-wide mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
              <span>BERITA & KEBIJAKAN TERKINI</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#640404] tracking-tight">
              Kabar Akademik & Kebijakan Daerah
            </h2>
            <p className="text-base text-gray-600 mt-2 font-normal">
              Informasi terkini mengenai dinamika fiskal daerah, regulasi Kemendagri, dan kegiatan sivitas akademika MKD Uncen.
            </p>
          </div>

          <Link
            to="/berita"
            className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-[#640404] hover:text-[#D99100] transition-colors"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-4 h-4 text-[#FFB013]" />
          </Link>
        </div>

        {/* News Grid (Edumint Card Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedNews.map((news) => (
            <article
              key={news.id}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg shadow-red-950/5 hover:shadow-2xl hover:shadow-red-950/10 hover:-translate-y-2 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Image Frame with Date Badge */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={news.gambar}
                    alt={news.judul}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/uploads/campus/banner-2.png';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Pinned Date Badge (Edumint Style) */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-md flex items-center gap-1.5 text-xs font-black text-[#640404]">
                    <Calendar className="w-3.5 h-3.5 text-[#FFB013]" />
                    <span>{news.tanggal}</span>
                  </div>

                  {/* Category Badge in Maroon & Gold */}
                  <div className="absolute bottom-4 left-4 bg-[#640404]/90 backdrop-blur-sm text-[#FFB013] px-3 py-1 rounded-full text-[11px] font-bold">
                    {news.kategori}
                  </div>
                </div>

                {/* News Details */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-[#640404] group-hover:text-[#D99100] transition-colors leading-snug line-clamp-2 mb-3">
                    <Link to={`/berita/${news.slug || news.id}`}>
                      {news.judul}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-4">
                    {news.ringkasan}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1 font-medium">
                  <User className="w-3.5 h-3.5 text-gray-400" />
                  <span>{news.penulis || 'Admin MKD'}</span>
                </span>

                <Link
                  to={`/berita/${news.slug || news.id}`}
                  className="inline-flex items-center gap-1 font-black text-[#640404] hover:text-[#D99100] transition-colors"
                >
                  <span>Baca Selengkapnya</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FFB013]" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-10 text-center md:hidden">
          <Link
            to="/berita"
            className="inline-flex items-center gap-2 bg-yellow-50 text-[#640404] px-6 py-3 rounded-full font-bold text-sm"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-4 h-4 text-[#FFB013]" />
          </Link>
        </div>

      </div>
    </section>
  );
}
