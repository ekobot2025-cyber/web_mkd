import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Award, FileText, Building2, ArrowRight, CheckCircle2 
} from 'lucide-react';

export default function EdumintFeatures() {
  const features = [
    {
      id: 1,
      icon: BookOpen,
      iconBg: 'bg-yellow-50 text-[#D99100]',
      badgeColor: 'text-[#8A5C00] bg-yellow-100/70',
      tag: 'Akademik',
      title: 'Kurikulum Terapan 4 Semester',
      description: 'Mencakup Matrikulasi, Penganggaran APBD, Akuntansi Sektor Publik, hingga Tesis berbasis riset empiris daerah.',
      link: '/kurikulum',
      linkText: 'Pelajari Kurikulum',
    },
    {
      id: 2,
      icon: Award,
      iconBg: 'bg-red-50 text-[#640404]',
      badgeColor: 'text-[#640404] bg-red-100/70',
      tag: 'Pengajar',
      title: 'Guru Besar & Doktor Pakar',
      description: 'Didukung 21 akademisi bergelar Profesor dan Doktor dengan kepakaran kebijakan fiskal nasional serta otonomi Papua.',
      link: '/dosen',
      linkText: 'Profil Tenaga Pendidik',
    },
    {
      id: 3,
      icon: FileText,
      iconBg: 'bg-emerald-50 text-emerald-700',
      badgeColor: 'text-emerald-800 bg-emerald-100/70',
      tag: 'Publikasi',
      title: 'Jurnal Ilmiah KEUDA',
      description: 'Media publikasi berkala terindeks SINTA, Google Scholar, Garuda, dan Neliti untuk riset tata kelola keuangan daerah.',
      link: '/jurnal',
      linkText: 'Kunjungi E-Journal',
    },
    {
      id: 4,
      icon: Building2,
      iconBg: 'bg-amber-50 text-amber-700',
      badgeColor: 'text-amber-800 bg-amber-100/70',
      tag: 'Kemitraan',
      title: 'Jejaring Pemda se-Papua',
      description: 'Kerjasama erat dengan BPKAD, Inspektorat, dan Bappeda provinsi maupun kabupaten/kota di seluruh Tanah Papua.',
      link: '/pendaftaran',
      linkText: 'Program Kemitraan',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 lg:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl shadow-red-950/5 hover:shadow-2xl hover:shadow-red-950/10 border border-gray-100 hover:border-[#FFB013]/60 transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                {/* Header Icon + Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 duration-300 shadow-sm`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${item.badgeColor}`}>
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-black text-[#640404] group-hover:text-[#D99100] transition-colors leading-snug mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-normal mb-5">
                  {item.description}
                </p>
              </div>

              {/* Link */}
              <Link
                to={item.link}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#640404] group-hover:text-[#D99100] transition-colors pt-3 border-t border-gray-100 group-hover:border-yellow-100"
              >
                <span>{item.linkText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
