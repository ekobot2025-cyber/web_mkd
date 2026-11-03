import React from 'react';
import { 
  GraduationCap, CheckCircle2, FileCheck, Phone, Mail, MapPin, 
  Calendar, Clock, DollarSign, Award, Users, Monitor, FileText, 
  AlertCircle, Sparkles, ShieldCheck, ChevronRight 
} from 'lucide-react';

export default function AdmissionPage() {
  const requirements = [
    { no: 1, doc: "Kartu Tanda Penduduk (KTP)", note: "Asli di Scan" },
    { no: 2, doc: "Kartu Keluarga dan Akta Kelahiran", note: "Asli di Scan" },
    { no: 3, doc: "Surat Ijin Pimpinan", note: "Bagi PNS / Swasta / TNI / POLRI (Asli di Scan)" },
    { no: 4, doc: "Ijazah SMA / SMK", note: "Asli di Scan" },
    { no: 5, doc: "Ijazah S1 Legalisir", note: "Fotocopy 2 rangkap (Asli di Scan)" },
    { no: 6, doc: "Transkrip Nilai S1 Legalisir", note: "Fotocopy 2 rangkap (Asli di Scan)" },
    { no: 7, doc: "Surat Keterangan Berbadan Sehat", note: "Dari Puskesmas atau Rumah Sakit (Asli di Scan)" },
    { no: 8, doc: "Sertifikat Komputer dan Bahasa Inggris", note: "Kalau ada (Asli di Scan)" },
    { no: 9, doc: "Pasfoto Berwarna Terbaru", note: "Ukuran 2x3 dan 3x4 (Asli di Scan)" },
    { no: 10, doc: "Karya Ilmiah pada Jurnal / Skripsi / Abstrak / Lembar Pengesahan", note: "Dibuat dalam format Ms. Word" }
  ];

  const graduationCriteria = [
    "Telah menyelesaikan seluruh perkuliahan teori & praktikum (39 SKS)",
    "Telah menyelesaikan Tesis dan dinyatakan Lulus ujian sidang (Total 42 SKS)",
    "Indeks Prestasi Kumulatif (IPK) minimal 3.00, tanpa nilai C",
    "Menempuh ujian TOEFL dengan nilai skor minimal 400",
    "Telah mengumpulkan Artikel atau Karya Ilmiah untuk publikasi jurnal",
    "Lulus Tes Potensi Akademik (TPA) dengan nilai skor minimal 350"
  ];

  const feeItems = [
    {
      title: "Biaya Pendaftaran",
      nominal: "Rp 1.200.000",
      desc: "Termasuk biaya seleksi berkas, ujian masuk, dan formulir pendaftaran resmi.",
      highlight: false
    },
    {
      title: "Matrikulasi (Pra-Program)",
      nominal: "Rp 2.500.000",
      desc: "Pembekalan 5 mata kuliah dasar non-SKS bagi seluruh mahasiswa baru.",
      highlight: false
    },
    {
      title: "Sumbangan Pengembangan Institusi (SPI)",
      nominal: "Rp 1.500.000",
      desc: "Dukungan sarana pembelajaran modern, lab komputer, dan perpustakaan.",
      highlight: false
    },
    {
      title: "Uang Kuliah Tunggal (UKT)",
      nominal: "Rp 11.000.000",
      desc: "Biaya perkuliahan per semester (Semester I – IV), mencakup bimbingan tesis.",
      highlight: true
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. Header Banner */}
      <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#500303] py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFB013]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-[#FFB013] uppercase tracking-wider mb-2">
            <span>SK DIKTI NO. 134/E/O/2012</span>
            <span>•</span>
            <span>TER-AKREDITASI "B" (BAN-PT)</span>
            <span>•</span>
            <span>PASCASARJANA UNCEN</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Penerimaan Mahasiswa Baru S2
          </h1>
          <p className="text-sm sm:text-base text-gray-200 mt-3 max-w-2xl font-normal leading-relaxed">
            Program Studi Magister Keuangan Daerah (MKD) Universitas Cenderawasih membuka pendaftaran bagi ASN, auditor, akademisi, dan profesional di seluruh Tanah Papua.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* 2. Biaya Pendidikan Resmi (Sesuai Brosur) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#640404]/10 text-[#640404] text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB013]" />
              <span>TRANSPARANSI BIAYA STUDI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#640404]">
              Biaya Pendidikan Program MKD
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Rincian tarif biaya perkuliahan resmi sesuai pedoman Pascasarjana Universitas Cenderawasih.
            </p>
            <div className="w-16 h-1 bg-[#FFB013] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {feeItems.map((fee, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-3xl border-2 transition-all flex flex-col justify-between group hover:-translate-y-1 ${
                  fee.highlight
                    ? 'bg-gradient-to-br from-[#FFFDF8] to-amber-50/50 border-[#FFB013] shadow-lg'
                    : 'bg-white border-gray-200/90 shadow-sm hover:border-[#640404]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#640404]">
                      {fee.highlight ? 'Biaya Semester' : 'Biaya Awal'}
                    </span>
                    <DollarSign className={`w-5 h-5 ${fee.highlight ? 'text-[#D99100]' : 'text-gray-400'}`} />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-snug">
                    {fee.title}
                  </h3>
                  <div className="text-2xl sm:text-3xl font-black text-[#640404] tracking-tight">
                    {fee.nominal}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-normal pt-1">
                    {fee.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Waktu Perkuliahan & Pilihan Kelas (Sesuai Brosur) */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#640404] uppercase tracking-widest block">
              Fleksibilitas Waktu Studi
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#640404]">
              Waktu Perkuliahan & Metode Belajar
            </h2>
            <div className="w-16 h-1 bg-[#FFB013] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kelas Reguler */}
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-sm hover:border-[#640404] transition-all space-y-4">
              <div className="flex items-center justify-between">
                <span className="bg-[#640404] text-[#FFB013] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Kelas Reguler
                </span>
                <Clock className="w-5 h-5 text-[#FFB013]" />
              </div>
              <h3 className="text-xl font-black text-[#640404]">
                Wilayah Jayapura dan Sekitarnya
              </h3>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs font-bold text-amber-950">
                📅 Setiap Hari Senin – Jumat | ⏰ Jam 17.00 – 19.00 WIT
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Perkuliahan tatap muka sore hari yang dirancang agar aparatur pemerintah, auditor, dan profesional dapat mengikuti kuliah tanpa mengganggu jam kerja kedinasan. Bertempat di Kampus Pascasarjana Uncen Abepura.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                  <span>Ruang kuliah ber-AC lengkap dengan smart board interaktif</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                  <span>Akses langsung Lab Komputer data fiskal & Ruang Baca Tesis</span>
                </li>
              </ul>
            </div>

            {/* Kelas Khusus */}
            <div className="bg-white p-8 rounded-3xl border-2 border-[#FFB013] shadow-md transition-all space-y-4 bg-gradient-to-br from-white to-amber-50/20">
              <div className="flex items-center justify-between">
                <span className="bg-[#FFB013] text-[#450202] text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Kelas Khusus
                </span>
                <Monitor className="w-5 h-5 text-[#640404]" />
              </div>
              <h3 className="text-xl font-black text-[#640404]">
                Luar Jayapura (Pemda & DOB Se-Tanah Papua)
              </h3>
              <div className="p-4 rounded-2xl bg-[#640404]/10 border border-[#640404]/20 text-xs font-bold text-[#640404]">
                💻 Hybrid Learning | 🌐 Platform Microsoft Office 365 (MS Teams)
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                Dikhususkan bagi mahasiswa dari kabupaten di Provinsi Papua Pegunungan, Papua Tengah, Papua Selatan, dan Papua Barat. Dilaksanakan dengan sistem Hybrid Learning interaktif yang fleksibel dan didukung bimbingan daring intensif.
              </p>
              <ul className="space-y-2 text-xs text-gray-700 pt-2 border-t border-gray-100">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                  <span>Platform resmi Microsoft Teams terintegrasi akun kampus</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0" />
                  <span>Materi riset tesis diselaraskan dengan kebutuhan fiskal daerah asal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Syarat Pendaftaran (10 Poin Resmi Brosur) */}
        <div className="bg-gray-50 p-6 sm:p-10 lg:p-12 rounded-3xl border border-gray-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-black text-[#640404] uppercase tracking-widest block">
              Berkas Kelengkapan
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#640404]">
              10 Syarat Dokumen Pendaftaran S2
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Pastikan seluruh berkas dipersiapkan dalam bentuk pindaian (scan) asli sesuai panduan.
            </p>
            <div className="w-16 h-1 bg-[#FFB013] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requirements.map((req) => (
              <div
                key={req.no}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/90 text-xs text-gray-800 flex items-start gap-3.5 shadow-xs hover:border-[#640404] transition-colors"
              >
                <span className="w-7 h-7 rounded-xl bg-gradient-to-tr from-[#640404] to-[#880808] text-[#FFB013] font-black flex items-center justify-center flex-shrink-0 text-xs shadow-xs">
                  {req.no}
                </span>
                <div>
                  <div className="font-bold text-gray-900 text-xs sm:text-sm">{req.doc}</div>
                  <div className="text-[11px] text-[#880808] font-medium mt-0.5">{req.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Aturan Format File Scan (Offline vs Online) */}
          <div className="p-5 sm:p-6 bg-amber-50 rounded-2xl border-2 border-[#FFB013] space-y-3">
            <div className="flex items-center gap-2 font-black text-xs text-amber-950 uppercase tracking-wide">
              <AlertCircle className="w-4 h-4 text-[#D99100]" />
              <span>Petunjuk Ketentuan Format Berkas Scan:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-800 font-medium">
              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <span className="font-bold text-[#640404] block mb-0.5">📁 Pendaftaran Offline (Langsung):</span>
                Semua berkas discan menggunakan format <strong>*.JPG ukuran 200KB</strong> dan dicopy di dalam flashdisk diserahkan ke Sekretariat MKD Uncen.
              </div>
              <div className="p-3 bg-white rounded-xl border border-amber-200">
                <span className="font-bold text-[#640404] block mb-0.5">🌐 Pendaftaran Online (Website):</span>
                Semua berkas discan menggunakan format <strong>*.JPG ukuran maksimal 1MB</strong> dan diunggah melalui formulir di website resmi.
              </div>
            </div>
          </div>
        </div>

        {/* 5. Penyelesaian Pendidikan & Gelar (M.Si.) */}
        <div className="bg-gradient-to-br from-[#FFFDF8] to-white p-8 sm:p-10 rounded-3xl border-2 border-yellow-200 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
            <div>
              <span className="text-xs font-black text-[#640404] uppercase tracking-wider block">
                Standar Kelulusan Magister Sains
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                Kriteria Penyelesaian Pendidikan & Gelar M.Si.
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#640404] text-[#FFB013] text-xs font-black shadow-md">
              <Award className="w-4 h-4" />
              <span>Gelar: Magister Sains (M.Si.)</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
            Mahasiswa Program Studi Magister Keuangan Daerah dinyatakan selesai menempuh pendidikan dan berhak menyandang gelar <strong>Magister Sains (M.Si.)</strong> apabila telah memenuhi kriteria berikut:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {graduationCriteria.map((crit, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#FFB013] flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-800 leading-snug font-medium">{crit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Narahubung & Konsultasi Admisi (Data Asli Brosur) */}
        <div className="bg-gradient-to-br from-[#640404] via-[#7B0808] to-[#500303] rounded-3xl p-8 sm:p-12 text-white text-center space-y-8 shadow-2xl border-2 border-[#FFB013]/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFB013]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <span className="text-xs font-black text-[#FFB013] uppercase tracking-widest block">
              Sekretariat Pascasarjana UNCEN
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white">
              Pusat Informasi & Layanan Pendaftaran
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-normal leading-relaxed">
              Informasi lebih lanjut dapat ditanyakan langsung kepada tim sekretariat dan narahubung Program Studi Magister Keuangan Daerah Uncen:
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10 text-left">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 space-y-1">
              <span className="text-[10px] text-[#FFB013] font-black uppercase">Telepon / Fax</span>
              <div className="font-bold text-sm text-white">0967-586716</div>
              <div className="text-[11px] text-gray-300">Program MKD Uncen</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 space-y-1">
              <span className="text-[10px] text-[#FFB013] font-black uppercase">WhatsApp Sekretariat</span>
              <div className="font-bold text-sm text-white">+62 811481847</div>
              <div className="text-[11px] text-gray-300">Layanan Umum Admisi</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 space-y-1">
              <span className="text-[10px] text-[#FFB013] font-black uppercase">Narahubung Klara</span>
              <div className="font-bold text-sm text-white">+62 812-3493-9326</div>
              <div className="text-[11px] text-gray-300">Konsultasi Berkas</div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 space-y-1">
              <span className="text-[10px] text-[#FFB013] font-black uppercase">Narahubung Hesty</span>
              <div className="font-bold text-sm text-white">+62 852-4449-4825</div>
              <div className="text-[11px] text-gray-300">Konsultasi Pendaftaran</div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 relative z-10">
            <a
              href="https://wa.me/62811481847?text=Halo%20Sekretariat%20MKD%20UNCEN,%20saya%20ingin%20mendaftar%20kuliah%20S2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFB013] hover:bg-[#E59800] text-[#380202] font-black px-7 py-3.5 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <Phone className="w-4 h-4 text-[#380202]" />
              <span>Hubungi WhatsApp Sekretariat (+62 811481847)</span>
            </a>

            <a
              href="mailto:data.mkduncen@gmail.com"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-full text-xs uppercase tracking-wider border border-white/25 transition-all"
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
