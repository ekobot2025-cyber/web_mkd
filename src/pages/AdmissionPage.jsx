import React from 'react';
import { GraduationCap, CheckCircle2, FileCheck, Phone, Mail, MapPin, Calendar, Clock, DollarSign } from 'lucide-react';

export default function AdmissionPage() {
  const requirements = [
    "Salinan Ijazah Sarjana (S1 / D-IV) yang dilegalisir dari PTN / PTS terakreditasi.",
    "Salinan Transkrip Nilai Akademik S1 dengan IPK minimal 2.75 (skala 4.00).",
    "Salinan Kartu Tanda Penduduk (KTP) dan Kartu Keluarga (KK).",
    "Pas foto terbaru berlatar belakang merah (ukuran 3x4 dan 4x6).",
    "Surat izin/rekomendasi belajar dari pimpinan instansi tempat bekerja (bagi yang sudah bekerja).",
    "Surat rekomendasi kelayakan akademik dari 2 orang dosen berkualifikasi minimal Magister/Doktor.",
    "Draft tentatif rencana penelitian Tesis (2-4 halaman) terkait isu keuangan daerah di Papua.",
    "Bukti pembayaran biaya pendaftaran dan seleksi mahasiswa baru."
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#500303] py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">
            Penerimaan Mahasiswa Baru
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Admisi Magister Keuangan Daerah (S2)
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl">
            Tingkatkan kualifikasi kepemimpinan fiskal dan manajemen anggaran publik bersama Pascasarjana Universitas Cenderawasih.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Program Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Class Reguler */}
          <div className="bg-white p-8 rounded-3xl border-2 border-primary/20 shadow-sm hover:border-primary transition-colors space-y-4">
            <span className="bg-[#640404] text-[#FFB013] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Kelas Reguler
            </span>
            <h3 className="text-xl font-extrabold text-[#640404]">
              Kelas Tatap Muka Kampus Abepura
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Ditujukan bagi aparatur, profesional muda, dan akademisi di wilayah Kota Jayapura, Kabupaten Jayapura, dan Keerom dengan jadwal kuliah terstruktur di Kampus Pascasarjana Abepura.
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Perkuliahan Sore / Akhir Pekan (Jumat & Sabtu)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Akses Laboratorium Komputer & Perpustakaan Digital</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Interaksi tatap muka langsung dengan Dosen Pakar</span>
              </li>
            </ul>
          </div>

          {/* Class Khusus */}
          <div className="bg-white p-8 rounded-3xl border-2 border-maroon/20 shadow-sm hover:border-maroon transition-colors space-y-4">
            <span className="bg-maroon text-gold text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Kelas Kemitraan Khusus
            </span>
            <h3 className="text-xl font-extrabold text-maroon">
              Kelas Kerjasama Pemerintah Daerah (Pemda)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Program kemitraan khusus (MoU) antara Universitas Cenderawasih dengan Pemerintah Provinsi / Kabupaten di Tanah Papua (Papua Pegunungan, Papua Tengah, Papua Selatan, Papua Barat).
            </p>
            <ul className="space-y-2 text-xs text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Sistem Pembelajaran Hybrid (Daring & Luring Intensif)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Kajian Tesis diselaraskan langsung dengan kebutuhan APBD Kabupaten</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-maroon flex-shrink-0" />
                <span>Didukung pembiayaan beasiswa/tugas belajar dinas</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-gray-50 p-8 sm:p-12 rounded-3xl border border-gray-200 space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-maroon uppercase tracking-widest block mb-1">
              Ketentuan Admisi
            </span>
            <h2 className="text-2xl font-extrabold text-primary">
              Persyaratan Pendaftaran Calon Mahasiswa S2
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((req, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-gray-200 text-xs text-gray-800 flex items-start gap-3 shadow-sm"
              >
                <span className="w-6 h-6 rounded-full bg-[#640404]/10 text-[#640404] font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                  {idx + 1}
                </span>
                <span className="leading-relaxed font-medium">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-[#640404] via-[#7B0808] to-[#500303] rounded-3xl p-8 sm:p-12 text-white text-center space-y-6 shadow-2xl border-2 border-[#FFB013]/40">
          <h3 className="text-2xl sm:text-3xl font-black text-white">
            Siap Mengembangkan Karier dan Keahlian Fiskal Daerah?
          </h3>
          <p className="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto font-normal">
            Hubungi Panitia Admisi Program Studi Magister Keuangan Daerah Universitas Cenderawasih untuk konsultasi berkas dan formulir pendaftaran.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/62811481847?text=Halo%20Sekretariat%20MKD%20UNCEN,%20saya%20ingin%20mendaftar%20kuliah%20S2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] font-black px-6 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#380202]" />
              <span>Daftar / Konsultasi via WhatsApp: (+62) 0811481847</span>
            </a>

            <a
              href="mailto:data.mkduncen@gmail.com"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider border border-white/25 transition-all"
            >
              <Mail className="w-4 h-4 text-[#FFB013]" />
              <span>Email: data.mkduncen@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
