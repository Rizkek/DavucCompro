import React, { useState } from "react";

const DashboardAdmin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [kategoriFilter, setKategoriFilter] = useState("Semua Kategori");
  const [aksiFilter, setAksiFilter] = useState("Semua Aksi");

  // Data statistik
  const stats = [
    { value: "10", label: "Tahun" },
    { value: "90", label: "Total Mitra" },
    { value: "500", label: "Total Produk" },
    { value: "100", label: "Total Projek" },
    { value: "5", label: "Total Layanan" },
  ];

  // Data log aktivitas
  const logActivities = [
    {
      tanggal: "2025-10-13 22:45",
      user: "Admin 1",
      aksi: "Tambah Produk",
      detail: "Menambahkan Annual Produk Dengan Deskripsi Broser PT Pertamina",
    },
    {
      tanggal: "2025-10-13 21:30",
      user: "Admin 2",
      aksi: "Edit Layanan",
      detail: "Mengubah deskripsi layanan konsultasi IT",
    },
    {
      tanggal: "2025-10-13 20:15",
      user: "Admin 1",
      aksi: "Hapus Projek",
      detail: "Menghapus projek lama yang sudah selesai",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 font-['Poppins'] mb-2">
            Dashboard Overview
          </h1>
          <p className="text-gray-600 font-['Poppins']">
            Selamat datang di dashboard manajemen
          </p>
        </div>

        <div className="flex items-center gap-4">
          {/* Dropdown Keseluruhan */}
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border font-['Poppins'] text-gray-700 hover:bg-gray-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Keseluruhan
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* User Profile */}
          <div className="flex items-center gap-2">
            <span className="font-['Poppins'] text-gray-700">Hi, SuperAdmin</span>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
          </div>

          {/* Register Admin Button */}
          <button className="px-6 py-2 bg-[#27D14C] text-white font-semibold font-['Poppins'] rounded-lg hover:bg-[#20b93f] transition shadow-md">
            Register Admin
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-5 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#27D14C] rounded-2xl p-6 text-center text-white shadow-lg"
          >
            <h2 className="text-5xl font-bold font-['Poppins'] mb-2">
              {stat.value}
            </h2>
            <p className="text-lg font-['Poppins']">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Log Aktivitas Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="text-xl font-bold text-gray-800 font-['Poppins']">
            Log Aktivitas
          </h3>
        </div>

        <p className="text-gray-600 font-['Poppins'] mb-6">
          Kelola produk dan layanan yang ditawarkan
        </p>

        {/* Filters */}
        <div className="flex gap-4 mb-6">
          {/* Search */}
          <div className="flex-1 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search log aktivitas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-['Poppins']"
            />
          </div>

          {/* Kategori Filter */}
          <select
            value={kategoriFilter}
            onChange={(e) => setKategoriFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-['Poppins'] bg-white"
          >
            <option>Semua Kategori</option>
            <option>Tambah Produk</option>
            <option>Edit Layanan</option>
            <option>Hapus Projek</option>
          </select>

          {/* Aksi Filter */}
          <select
            value={aksiFilter}
            onChange={(e) => setAksiFilter(e.target.value)}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 font-['Poppins'] bg-white"
          >
            <option>Semua Aksi</option>
            <option>Tambah</option>
            <option>Edit</option>
            <option>Hapus</option>
          </select>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 font-['Poppins']">
                  Tanggal
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 font-['Poppins']">
                  User
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 font-['Poppins']">
                  Aksi
                </th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 font-['Poppins']">
                  Detail
                </th>
              </tr>
            </thead>
            <tbody>
              {logActivities.map((log, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-600 font-['Poppins']">
                    {log.tanggal}
                  </td>
                  <td className="py-3 px-4 text-gray-600 font-['Poppins']">
                    {log.user}
                  </td>
                  <td className="py-3 px-4 text-[#27D14C] font-['Poppins']">
                    {log.aksi}
                  </td>
                  <td className="py-3 px-4 text-gray-600 font-['Poppins']">
                    {log.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;