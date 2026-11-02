# Website Resmi Magister Keuangan Daerah (MKD) Universitas Cenderawasih

Modernisasi & Redesain Website Pascasarjana **Magister Keuangan Daerah (S2) Universitas Cenderawasih** (`mkduncen.ac.id`) menggunakan **React 18 + Vite + Tailwind CSS + Lucide Icons**.

---

## 🚀 Keunggulan Sistem Baru

1. **Kebal Masalah Versi PHP (Bebas Error 500)**:
   - Website di-build menjadi file statis murni (`dist/`).
   - Tidak lagi bergantung pada interpreter PHP di server cPanel. Mau server menggunakan PHP 7.4, 8.2, atau 8.3, website tidak akan pernah mengalami crash atau error dependensi.
2. **Keamanan Maksimal (Anti-Judi Online & Anti-Backdoor)**:
   - Tidak menggunakan database MySQL terbuka atau plugin PHP rentan yang sering disusupi malware/slot.
   - Dilengkapi aturan pengamanan ketat di `.htaccess` untuk memblokir bot pencari celah dan spam SEO.
3. **100% Data & Konten Asli**:
   - Mempertahankan seluruh profil dosen tetap & Guru Besar asli (Dr. Agustinus Salle, Prof. Dr. Balthazar Kambuaya, Prof. Dr. Yohanis Rante, Westim Ratang, dkk.).
   - Aset visual resmi (foto dosen, banner, logo SINTA, Scopus, Google Scholar, Garuda, Kalender Akademik PDF) tersimpan secara mandiri di `public/uploads/`.
4. **Performa Kilat (< 1 detik)**:
   - Akses sangat cepat di desktop maupun smartphone.

---

## 📂 Struktur Halaman

| Rute URL | Halaman | Konten Utama |
|---|---|---|
| `/` | **Beranda** | Hero Slider, Bar Statistik, Sambutan Kaprodi & Visi, Tab Kurikulum, Profil Dosen, Jurnal KEUDA, Berita Terkini, Admisi |
| `/visi-misi` | **Profil & Visi Misi** | Visi keilmuan, 4 pilar misi, tujuan pendidikan, dan sasaran strategis MKD |
| `/dosen` | **Tenaga Pengajar** | Direktori 14+ Dosen Tetap & Guru Besar dengan filter pencarian instan |
| `/kurikulum` | **Kurikulum & Tesis** | Rincian mata kuliah Matrikulasi non-SKS, Semester I s/d IV (Tesis), dan unduh Kalender Akademik |
| `/berita` | **Berita & Warta** | Arsip artikel kebijakan fiskal daerah, webinar Ditjen Bina Keuda, dan agenda prodi |
| `/berita/:slug` | **Detail Berita** | Halaman baca lengkap berita dengan fitur bagikan dan berita terkait |
| `/jurnal` | **Jurnal KEUDA** | Informasi e-Journal KEUDA, fokus & scope, pengindeks (SINTA, Scopus, dll.), dan pengiriman naskah |
| `/pendaftaran` | **Admisi S2** | Panduan pendaftaran kelas reguler Jayapura & kelas kemitraan Pemda |
| `/kontak` | **Kontak & Lokasi** | Alamat Kampus Abepura, nomor WhatsApp resmi, email, dan jam operasional |

---

## 🛠️ Panduan Menjalankan di Komputer Lokal

### 1. Menjalankan Server Pengembangan (Dev)
```bash
npm run dev
```
Buka browser di: [http://localhost:5173](http://localhost:5173)

### 2. Melakukan Build untuk Produksi
```bash
npm run build
```
File hasil kompilasi siap unggah akan berada di folder **`dist/`**.

---

## 🌐 Panduan Upload ke cPanel Hosting (`mkduncen.ac.id`)

1. Jalankan `npm run build` di terminal proyek ini.
2. Buka folder **`dist/`**.
3. Pilih semua file di dalam folder `dist/` (termasuk file `.htaccess`), lalu kompres menjadi file `.zip` (misalnya `web_mkd_deploy.zip`).
4. Masuk ke **cPanel File Manager** -> folder **`public_html`**.
5. *Backup* atau kosongkan file web lama, lalu **Upload** file `web_mkd_deploy.zip` ke dalam `public_html`.
6. Ekstrak file zip tersebut di `public_html`.
7. **Selesai!** Website langsung online seketika dengan tampilan modern, super kencang, dan kebal dari error PHP!
