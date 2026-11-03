import React from 'react';
import { Link } from 'react-router-dom';

export default function StatsBar() {
  const stats = [
    {
      value: '21+',
      label: 'Dosen Pakar & Guru Besar',
      link: '/dosen',
      isInternal: true,
    },
    {
      value: 'AKREDITASI B',
      label: 'SK BAN-PT 13811/2021',
      link: '/visi-misi',
      isInternal: true,
    },
    {
      value: '42 SKS',
      label: 'Kurikulum Magister (S2)',
      link: '/kurikulum',
      isInternal: true,
    },
    {
      value: 'M.Si.',
      label: 'Gelar Magister Sains',
      link: '/pendaftaran',
      isInternal: true,
    },
  ];

  return (
    <section className="bg-[#640404] py-7 border-b-[5px] border-gold">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center text-white">
          {stats.map((stat, idx) => {
            const Content = (
              <div className="p-3 md:p-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 cursor-pointer">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gold tracking-tight m-0 uppercase drop-shadow-sm">
                  {stat.value}
                </h3>
                <p className="text-xs md:text-sm font-semibold uppercase tracking-wider text-white mt-1.5">
                  {stat.label}
                </p>
              </div>
            );

            if (stat.isInternal) {
              return (
                <Link key={idx} to={stat.link} className="block no-underline text-inherit">
                  {Content}
                </Link>
              );
            }

            return (
              <a
                key={idx}
                href={stat.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block no-underline text-inherit"
              >
                {Content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
