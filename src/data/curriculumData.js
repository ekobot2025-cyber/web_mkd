export const curriculumSchedule = {
  totalSks: 42,
  praProgramCount: 5,
  intiCount: 14,
  waktuPerkuliahan: [
    {
      kategori: "Kelas Reguler (Wilayah Jayapura dan sekitarnya)",
      jadwal: "Setiap Hari Senin - Jumat",
      jam: "Pukul 17.00 - 19.00 WIT",
      lokasi: "Kampus Pascasarjana Universitas Cenderawasih Abepura",
      metode: "Tatap Muka Langsung (Luring)"
    },
    {
      kategori: "Kelas Khusus (Luar Jayapura)",
      jadwal: "Jadwal Fleksibel & Intensif",
      jam: "Sesuai Jadwal Blok Perkuliahan",
      lokasi: "Platform Microsoft Office 365 (MS Teams) & Modul Hybrid",
      metode: "Hybrid Learning (Daring Interaktif & Tatap Muka Terjadwal)"
    }
  ]
};

export const curriculumData = [
  {
    semester: "Mata Kuliah Pra Program (Non-SKS)",
    keterangan: "Program penyelarasan dan penguatan dasar akademik bagi seluruh mahasiswa baru lintas disiplin ilmu.",
    totalSks: "Non-SKS (5 Mata Kuliah)",
    mataKuliah: [
      { nomor: 1, kode: "PRA-01", nama: "Teori Ekonomi", sks: 0, sifat: "Wajib Pra-Program" },
      { nomor: 2, kode: "PRA-02", nama: "Manajemen dan Akuntansi", sks: 0, sifat: "Wajib Pra-Program" },
      { nomor: 3, kode: "PRA-03", nama: "Statistika dan Komputer", sks: 0, sifat: "Wajib Pra-Program" },
      { nomor: 4, kode: "PRA-04", nama: "Bahasa Inggris", sks: 0, sifat: "Wajib Pra-Program" },
      { nomor: 5, kode: "PRA-05", nama: "Etnografi Pembangunan Papua", sks: 0, sifat: "Wajib Pra-Program" }
    ]
  },
  {
    semester: "Semester I",
    keterangan: "Fondasi keilmuan akuntansi pemerintah daerah, ekonomi pembangunan, tata kelola manajemen pemerintahan, serta perencanaan dan penganggaran daerah.",
    totalSks: "12 SKS (4 Mata Kuliah)",
    mataKuliah: [
      { nomor: 1, kode: "MKD-101", nama: "Akuntansi Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 2, kode: "MKD-102", nama: "Analisis Ekonomi Pembangunan Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 3, kode: "MKD-103", nama: "Manajemen Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 4, kode: "MKD-104", nama: "Perencanaan dan Penganggaran Daerah", sks: 3, sifat: "Wajib" }
    ]
  },
  {
    semester: "Semester II",
    keterangan: "Pendalaman akuntansi manajemen publik, keuangan negara dan daerah, pengelolaan aset daerah, strategi pemerintahan, dan metodologi riset.",
    totalSks: "15 SKS (5 Mata Kuliah)",
    mataKuliah: [
      { nomor: 5, kode: "MKD-201", nama: "Akuntansi Manajemen Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 6, kode: "MKD-202", nama: "Keuangan Negara dan Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 7, kode: "MKD-203", nama: "Manajemen Aset Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 8, kode: "MKD-204", nama: "Manajemen Stratejik Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 9, kode: "MKD-205", nama: "Metode Penelitian", sks: 3, sifat: "Wajib" }
    ]
  },
  {
    semester: "Semester III",
    keterangan: "Penguasaan analisis data kuantitatif & kualitatif, manajemen proyek publik, audit dan pengendalian manajemen daerah, serta seminar proposal dan publikasi karya ilmiah.",
    totalSks: "15 SKS (6 Mata Kuliah)",
    mataKuliah: [
      { nomor: 10, kode: "MKD-301", nama: "Analisis Kuantitatif dan Kualitatif", sks: 3, sifat: "Wajib" },
      { nomor: 11, kode: "MKD-302", nama: "Manajemen Proyek Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 12, kode: "MKD-303", nama: "Pemeriksaan Keuangan Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 13, kode: "MKD-304", nama: "Sistem Pengendalian Manajemen Pemerintah Daerah", sks: 3, sifat: "Wajib" },
      { nomor: 14, kode: "MKD-305", nama: "Seminar Proposal", sks: 2, sifat: "Wajib Kelulusan" },
      { nomor: 15, kode: "MKD-306", nama: "Publikasi Ilmiah", sks: 1, sifat: "Wajib Kelulusan" }
    ]
  },
  {
    semester: "Semester IV",
    keterangan: "Penyusunan karya tulis ilmiah mandiri (Tesis) berbasis riset empiris tata kelola keuangan atau aset daerah dan ujian sidang magister.",
    totalSks: "6 SKS (1 Mata Kuliah Inti Tesis)",
    mataKuliah: [
      { nomor: 16, kode: "MKD-401", nama: "Tesis", sks: 6, sifat: "Wajib Kelulusan Akhir" }
    ]
  }
];
