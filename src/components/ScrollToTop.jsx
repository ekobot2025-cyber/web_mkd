import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top automatically when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Monitor scroll position to show/hide floating button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Kembali ke halaman paling atas"
          title="Kembali ke atas"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#640404] hover:bg-[#FFB013] text-[#FFB013] hover:text-[#380202] flex items-center justify-center shadow-xl shadow-red-950/30 hover:shadow-2xl hover:shadow-yellow-500/40 border-2 border-[#FFB013]/60 hover:border-[#640404] transition-all duration-300 hover:scale-110 group cursor-pointer animate-fadeIn"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-1" />
        </button>
      )}
    </>
  );
}
