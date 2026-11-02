import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ChevronRight } from 'lucide-react';
import DosenSection from '../components/DosenSection';

export default function DosenPage() {
  return (
    <div className="bg-gray-50/50 min-h-screen">
      {/* Breadcrumb Strip */}
      <div className="bg-white border-b border-gray-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-gray-500">
          <Link to="/" className="hover:text-[#640404] transition-colors">Beranda</Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="font-semibold text-[#640404]">Tenaga Pendidik</span>
        </div>
      </div>

      {/* Dosen Section with full list and interactive search/filter */}
      <DosenSection limit={null} showFilter={true} />
    </div>
  );
}
