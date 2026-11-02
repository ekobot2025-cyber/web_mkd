import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, ArrowRight, Award, GraduationCap, ShieldCheck, 
  Quote, Phone, Mail, Sparkles 
} from 'lucide-react';

export default function WelcomeSection() {
  const highlights = [
    {
      title: "Kurikulum Terkini & Regulatif",
      desc: "Dirancang sesuai perkembangan Standar Akuntansi Pemerintahan (SAP) dan sistem SIPD Kemendagri.",
    },
    {
      title: "Tenaga Pengajar Bereputasi Tinggi",
      desc: "Didampingi langsung oleh Guru Besar, Doktor, dan praktisi perencana kebijakan fiskal nasional.",
    },
    {
      title: "Fokus Kontekstual Papua",
      desc: "Menekankan pemecahan masalah empiris tata kelola dana Otsus dan optimalisasi PAD di Tanah Papua.",
    },
    {
      title: "Fleksibilitas untuk ASN & Profesional",
      desc: "Jadwal dan metode perkuliahan yang adaptif bagi aparatur pemerintah daerah serta auditor independen.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background Warm Ornaments */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Koordinator Prodi Photo & Graphic Frame (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px]">
              
              {/* Back decorative colored box in Maroon & Gold */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#640404] to-[#FFB013] rounded-3xl transform -rotate-3 opacity-20"></div>
              
              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/uploads/dosen_mkd/Syaikhul Falah.png"
                  alt="Dr. Syaikhul Falah, SE., M.Si., Ak., CA. - Koordinator Program Studi MKD UNCEN"
                  className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-500 bg-gray-50"
                />

                {/* Gradient overlay on bottom */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#640404]/95 via-[#7B0808]/50 to-transparent p-6 text-white">
                  <div className="font-black text-lg sm:text-xl">
                    Dr. Syaikhul Falah, SE., M.Si., Ak., CA.
                  </div>
                  <div className="text-xs text-[#FFB013] font-bold mt-0.5">
                    Koordinator Program Studi Magister Keuangan Daerah Pascasarjana UNCEN
                  </div>
                </div>
              </div>

              {/* Floating Badge (Top Left): Terakreditasi BAN-PT */}
              <div className="absolute -top-4 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center text-[#FFB013]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">SK BAN-PT</div>
                  <div className="text-xs font-black text-[#640404]">Program S2 Resmi</div>
                </div>
              </div>

              {/* Floating Badge (Bottom Right): Pascasarjana Uncen (Clickable to pasca.uncen.ac.id) */}
              <a
                href="https://pasca.uncen.ac.id"
                target="_blank"
                rel="noopener noreferrer"
                title="Kunjungi Portal Pascasarjana Universitas Cenderawasih"
                className="absolute -bottom-4 -right-4 bg-white hover:bg-yellow-50 p-3.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 transition-colors group/pasca"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 group-hover/pasca:bg-yellow-100 flex items-center justify-center text-[#640404] transition-colors">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Pascasarjana</div>
                  <div className="text-xs font-black text-[#640404]">Universitas Cenderawasih</div>
                </div>
              </a>

            </div>
          </div>

          {/* RIGHT: Sambutan Copy & Highlights (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#640404]/10 border border-[#640404]/20 text-[#640404] text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
              <span>SAMBUTAN KOORDINATOR PROGRAM STUDI</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#640404] tracking-tight leading-tight">
              Membangun Kemandirian Fiskal & Akuntabilitas Publik di Tanah Papua
            </h2>

            {/* Lead sambutan */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              Selamat datang di portal resmi Program Studi Magister Keuangan Daerah (MKD) Program Pascasarjana Universitas Cenderawasih. Kami berdedikasi menjadi pusat rujukan pendidikan magister dan riset kebijakan keuangan publik di Kawasan Indonesia Timur.
            </p>

            {/* Blockquote Sambutan Singkat */}
            <div className="relative bg-[#FFFDF8] border-l-4 border-[#FFB013] p-5 rounded-r-2xl my-4 text-gray-700 italic text-sm sm:text-base leading-relaxed border-t border-r border-b border-yellow-100">
              <Quote className="w-8 h-8 text-yellow-200 absolute top-2 right-3 -z-0 opacity-60" />
              <p className="relative z-10 font-medium text-gray-800">
                "Pengelolaan keuangan daerah yang transparan dan akuntabel adalah pilar utama kemajuan pembangunan di Tanah Papua. Program Pascasarjana MKD UNCEN hadir membekali setiap aparatur, analis, dan pimpinan daerah dengan integritas tinggi, kepakaran ilmiah teruji, serta ketajaman strategis."
              </p>
            </div>

            {/* 4 Feature Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm hover:border-[#FFB013]/60 transition-colors">
                  <div className="w-7 h-7 rounded-full bg-yellow-100 text-[#D99100] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#640404] leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to="/sambutan"
                className="inline-flex items-center gap-2 bg-[#640404] hover:bg-[#450202] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all"
              >
                <span>Baca Profil & Sambutan Lengkap</span>
                <ArrowRight className="w-4 h-4 text-[#FFB013]" />
              </Link>
              <Link
                to="/visi-misi"
                className="inline-flex items-center gap-2 text-[#640404] hover:text-[#450202] font-bold text-sm px-4 py-3 rounded-full hover:bg-yellow-50 transition-colors"
              >
                <span>Lihat Visi, Misi & Tujuan</span>
                <ArrowRight className="w-4 h-4 text-[#FFB013]" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
