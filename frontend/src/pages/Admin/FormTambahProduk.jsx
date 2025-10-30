import React from "react";

const FormTambahProduk = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-xl w-[400px] shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Tambah Produk Baru</h2>
        <p className="text-sm text-gray-500 mb-4">
          Masukkan informasi produk atau layanan
        </p>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Nama Produk"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none"
          />
          <input
            type="text"
            placeholder="Mitra"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none"
          />
          <input
            type="text"
            placeholder="Tahun"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none"
          />
          <textarea
            placeholder="Deskripsi"
            className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#27D14C] outline-none h-20 resize-none"
          ></textarea>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="px-4 py-1.5 border rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              onClick={onClose}
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

export default FormTambahProduk;
