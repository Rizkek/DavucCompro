import React, { useState } from "react";

const FormTambahProjek = ({ onClose }) => {
  const [customer, setCustomer] = useState("");
  const [namaProjek, setNamaProjek] = useState("");
  const [bidang, setBidang] = useState("");
  const [tahun, setTahun] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      customer,
      namaProjek,
      bidang,
      tahun,
    };
    console.log("Data disimpan:", formData);
    onClose(); // nanti bisa diganti dengan fungsi simpan/update backend
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="relative bg-white p-6 rounded-xl w-[400px] shadow-lg">
        {/* Tombol Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-lg"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-2">Tambah Projek Baru</h2>
        <p className="text-sm text-gray-500 mb-4">
          Masukkan informasi projek yang ingin ditambahkan.
        </p>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Input Projek */}
          <div>
            <label className="block text-sm font-medium mb-1">Customer</label>
            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Nama Projek</label>
            <input
              type="text"
              value={namaProjek}
              onChange={(e) => setNamaProjek(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Bidang</label>
            <input
              type="text"
              value={bidang}
              onChange={(e) => setBidang(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Tahun</label>
            <input
              type="number"
              value={tahun}
              onChange={(e) => setTahun(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none"
              required
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 border rounded-lg text-sm text-gray-600 hover:bg-gray-100"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 bg-[#27D14C] text-white rounded-lg text-sm hover:bg-[#20b540]"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTambahProjek;
