import React from 'react';

const App = () => {
  const data = {
    nama: "Nama Lengkap Anda",
    jurusan: "Teknik Informatika",
    universitas: "Universitas Contoh Indonesia",
    deskripsi: "Seorang pengembang web yang antusias dengan desain UI/UX dan teknologi cloud.",
    organisasi: [
      { nama: "Himpunan Mahasiswa", jabatan: "Ketua Divisi Hubungan Masyarakat" },
      { nama: "Komunitas Open Source", jabatan: "Kontributor Frontend" },
      { nama: "Palang Merah Remaja", jabatan: "Anggota Aktif" }
    ],
    kontak: {
      email: "email@contoh.com",
      linkedin: "linkedin.com/in/username"
    }
  };

  return (
    <div className="min-h-screen py-10 px-5 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-indigo-600 p-8 text-white text-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 border-4 border-white shadow-lg flex items-center justify-center text-indigo-600 font-bold text-4xl">
            {data.nama.charAt(0)}
          </div>
          <h1 className="text-3xl font-bold uppercase tracking-wide">{data.nama}</h1>
          <p className="text-indigo-100 mt-1">{data.jurusan} | {data.universitas}</p>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
          {/* Tentang */}
          <section>
            <h2 className="text-xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2">Tentang Saya</h2>
            <p className="mt-3 text-gray-600 leading-relaxed">{data.deskripsi}</p>
          </section>

          {/* Organisasi */}
          <section>
            <h2 className="text-xl font-bold text-indigo-600 border-b-2 border-indigo-100 pb-2">Pengalaman Organisasi</h2>
            <div className="mt-4 grid gap-4">
              {data.organisasi.map((org, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="font-semibold text-gray-800">{org.nama}</h3>
                  <p className="text-sm text-indigo-500 font-medium">{org.jabatan}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Kontak */}
          <section className="text-center pt-4">
            <div className="flex justify-center gap-4 text-sm">
              <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-medium">{data.kontak.email}</span>
              <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full font-medium uppercase">{data.kontak.linkedin}</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;