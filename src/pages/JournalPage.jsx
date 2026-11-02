import React from 'react';
import { BookOpen, ExternalLink, Mail, Phone, Award, FileText, CheckCircle2, Download } from 'lucide-react';

export default function JournalPage() {
  const scopes = [
    "Manajemen & Kebijakan Keuangan Daerah",
    "Perencanaan & Penganggaran APBD",
    "Efektivitas Dana Otonomi Khusus (Otsus) Papua & DOB",
    "Akuntansi & Audit Kepatuhan Sektor Publik",
    "Manajemen Aset & Barang Milik Daerah (BMD)",
    "Tata Kelola Badan Usaha Milik Daerah (BUMD)",
    "Pajak & Retribusi Daerah (Optimalisasi PAD)",
    "Ekonomi Regional & Pengentasan Kemiskinan"
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#500303] py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">
            Publikasi Ilmiah Terindeks
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Jurnal KEUDA
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl">
            Jurnal Kajian Ekonomi dan Keuangan Daerah — Media Publikasi Resmi Program Magister Keuangan Daerah Universitas Cenderawasih.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-14">
        {/* About Journal Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl font-extrabold text-primary">
              Tentang Jurnal KEUDA
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Jurnal KEUDA (Kajian Ekonomi dan Keuangan Daerah)</strong> adalah jurnal peer-reviewed yang diterbitkan secara berkala oleh Program Studi Magister Keuangan Daerah Pascasarjana Universitas Cenderawasih. Jurnal ini menerbitkan naskah ilmiah berbasis riset kuantitatif, kualitatif, maupun mixed-method yang berfokus pada inovasi fiskal daerah dan penguatan pembangunan daerah.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Jurnal ini terbuka untuk seluruh akademisi, peneliti independen, perencana anggaran pemerintah daerah, analis fiskal kementerian, dan mahasiswa program magister/doktoral.
            </p>
          </div>

          <div className="lg:col-span-4 bg-gradient-to-br from-[#640404] via-[#7B0808] to-[#500303] text-white p-7 rounded-3xl shadow-xl space-y-5 border-2 border-[#FFB013]/40">
            <h3 className="text-sm font-black text-[#FFB013] uppercase tracking-wider border-b border-white/20 pb-2.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFB013]" />
              <span>Informasi Penerbitan</span>
            </h3>
            <div className="space-y-3 text-xs text-gray-100">
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-gray-300">Frekuensi:</span>
                <span className="font-bold text-white">2 Kali Setahun</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-gray-300">Bahasa:</span>
                <span className="font-bold text-white">Indonesia & Inggris</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-1.5">
                <span className="text-gray-300">Sistem:</span>
                <span className="font-bold text-[#FFB013]">Open Journal System (OJS)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Penerbit:</span>
                <span className="font-bold text-white">MKD Pascasarjana UNCEN</span>
              </div>
            </div>

            <a
              href="https://ejournal.uncen.ac.id/index.php/KEUDA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] font-black py-3 rounded-full text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg hover:scale-102"
            >
              <BookOpen className="w-4 h-4 text-[#380202]" />
              <span>Buka E-Journal KEUDA</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Focus & Scope */}
        <div>
          <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
            <FileText className="w-5 h-5 text-maroon" />
            <span>Fokus dan Ruang Lingkup (Focus & Scope)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scopes.map((scope, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs font-semibold text-gray-800 flex items-start gap-2.5 hover:bg-red-50/50 hover:border-[#640404]/30 transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0 mt-0.5" />
                <span>{scope}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Indexers Grid */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 space-y-6">
          <div className="text-center">
            <span className="text-xs font-bold text-maroon uppercase tracking-widest block mb-1">
              Reputasi & Pengindeksan
            </span>
            <h3 className="text-xl font-bold text-primary">
              Portal Pengindeks Ilmiah
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center">
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-center h-16 shadow-sm">
              <img src="/uploads/images/sinta.png" alt="SINTA" className="max-h-8 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-center h-16 shadow-sm">
              <img src="/uploads/images/google-scholar-png.png" alt="Google Scholar" className="max-h-8 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-center h-16 shadow-sm">
              <img src="/uploads/images/Scopus_logo.svg.png" alt="Scopus" className="max-h-7 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-center h-16 shadow-sm">
              <img src="/uploads/images/gARUDA.png" alt="Garuda" className="max-h-8 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-center h-16 shadow-sm">
              <img src="/uploads/images/mendeley.png" alt="Mendeley" className="max-h-8 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-center h-16 shadow-sm">
              <img src="/uploads/images/neliti.png" alt="Neliti" className="max-h-8 object-contain" />
            </div>
            <div className="bg-white p-3 rounded-xl border border-gray-200 flex items-center justify-center h-16 shadow-sm">
              <img src="/uploads/images/onesearch.png" alt="OneSearch" className="max-h-8 object-contain" />
            </div>
          </div>
        </div>

        {/* Redaksi & Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-3">
            <h4 className="font-bold text-primary text-sm uppercase tracking-wide">
              Dewan Redaksi Jurnal
            </h4>
            <div className="text-xs text-gray-600 space-y-2">
              <p><strong>Penanggung Jawab:</strong> Direktur Program Pascasarjana Universitas Cenderawasih</p>
              <p><strong>Editor in Chief:</strong> Dr. Agustinus Salle, SE., M.Ec.</p>
              <p><strong>Dukungan Teknis:</strong> Klara Wonar (+62 812-3493-9326)</p>
              <p><strong>Alamat Redaksi:</strong> Kampus Uncen Abepura, Gedung MKD Pascasarjana</p>
            </div>
          </div>

          <div className="bg-maroon text-white p-6 rounded-2xl shadow-sm space-y-4">
            <h4 className="font-bold text-gold text-sm uppercase tracking-wide">
              Pengiriman Naskah (Call for Papers)
            </h4>
            <p className="text-xs text-gray-200 leading-relaxed">
              Naskah dikirimkan melalui platform Open Journal System (OJS) atau melalui email resmi sekretariat jurnal KEUDA dengan format docx sesuai author guidelines.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:mkduncenjurnal@gmail.com"
                className="bg-gold hover:bg-gold-light text-primary-dark font-bold px-4 py-2 rounded-lg text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Kirim Naskah via Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
