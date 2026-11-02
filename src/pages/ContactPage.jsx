import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    instansi: '',
    pesan: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const waText = encodeURIComponent(
      `Halo Sekretariat MKD UNCEN,\nNama: ${formData.nama}\nEmail: ${formData.email}\nInstansi: ${formData.instansi}\nPesan: ${formData.pesan}`
    );
    window.open(`https://wa.me/62811481847?text=${waText}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <div className="bg-gradient-to-r from-[#640404] via-[#7B0808] to-[#500303] py-14 sm:py-20 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">
            Layanan Informasi
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Hubungi Sekretariat MKD UNCEN
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-3 max-w-2xl">
            Kami siap melayani kebutuhan informasi pendaftaran, layanan akademik mahasiswa, dan kerjasama instansi pemerintah.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-maroon uppercase tracking-widest block mb-2">
                Alamat Kampus
              </span>
              <h2 className="text-2xl font-extrabold text-primary">
                Sekretariat Program Pascasarjana
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-700">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <MapPin className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900">Kampus Uncen Abepura</h4>
                  <p className="text-gray-600 mt-1">
                    (Depan Gedung Magister Akuntansi), Jl. Raya Abepura-Sentani, Abepura, Kota Jayapura, Papua 99358
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <Phone className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900">Telepon / WhatsApp</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="https://wa.me/62811481847" className="text-primary font-semibold hover:underline">
                      (+62) 0811481847
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <Mail className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900">Email Resmi</h4>
                  <p className="text-gray-600 mt-1">
                    <a href="mailto:data.mkduncen@gmail.com" className="text-primary font-semibold hover:underline">
                      data.mkduncen@gmail.com
                    </a>
                    <br />
                    <a href="mailto:mkduncenjurnal@gmail.com" className="text-primary font-semibold hover:underline">
                      mkduncenjurnal@gmail.com (Redaksi Jurnal)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                <Clock className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-900">Jam Operasional Layanan</h4>
                  <p className="text-gray-600 mt-1">
                    Senin - Jumat: 08.00 - 16.00 WIT<br />
                    Sabtu (Perkuliahan): 08.00 - 18.00 WIT
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold text-maroon uppercase tracking-widest block mb-1">
                  Kirim Pesan Cepat
                </span>
                <h3 className="text-xl font-bold text-primary">
                  Formulir Konsultasi & Pertanyaan
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Pesan Anda akan otomatis terhubung ke WhatsApp Center Sekretariat MKD UNCEN.
                </p>
              </div>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-2xl flex items-center gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm">Pesan Telah Diteruskan!</h4>
                    <p className="text-xs text-green-700 mt-1">
                      Terima kasih telah menghubungi kami. Kami akan segera merespons pertanyaan Anda.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Masukkan nama lengkap Anda..."
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Email Aktif *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contoh@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        Asal Instansi / Pemda
                      </label>
                      <input
                        type="text"
                        placeholder="Misal: BPKAD / Bappeda / Umum"
                        value={formData.instansi}
                        onChange={(e) => setFormData({ ...formData, instansi: e.target.value })}
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Pesan atau Pertanyaan Anda *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tuliskan pertanyaan Anda mengenai pendaftaran, kurikulum, atau jurnal..."
                      value={formData.pesan}
                      onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:border-maroon focus:ring-1 focus:ring-maroon"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-maroon hover:bg-maroon-dark text-white font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-gold" />
                    <span>Kirim Pesan ke WhatsApp Sekretariat</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
