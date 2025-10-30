import React, { useState } from "react";

const Proyek = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const dataProyek = [
        {
            customer: "PT. Kurnia Peranthangan Sejahtera",
            proyek: "Jasa Pengurusan Ijin (SLO)",
            bidang: "Bantuan Teknis",
            tahun: 2024,
        },

        {
            customer: "PT.  Sejahtera",
            proyek: "Jasa (SLO)",
            bidang: "Teknis",
            tahun: 2025,
        },
    ];

    const filteredData = dataProyek.filter(
        (item) =>
            item.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.proyek.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.bidang.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tahun.toString().includes(searchQuery)
    );

    return (
        <div className="min-h-screen bg-[#F5F7FB] px-10 py-8 font-medium font-['Poppins']">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Proyek
                    </h1>
                    <p className="text-gray-600 font-medium">
                        Kelola daftar proyek yang sudah dikerjakan
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Cari Proyek..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2.5 h-10 border rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#27D14C]"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
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
                    </div>

                    {/* User Profile */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-700">Hi, Admin</span>
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-bold">
                            A
                        </div>
                    </div>


                    {/* Register Admin Button */}
                    <button className="px-6 py-2 bg-[#27D14C] text-white font-semibold font-['Poppins'] rounded-lg hover:bg-[#20b93f] transition shadow-md">
                        Register Admin
                    </button>
                </div>
            </div>

            {/* Tombol Tambah Proyek */}
            <div className="flex justify-end mb-8">
                <button className="flex items-center gap-2 px-3 py-2 bg-[#1E293B] text-white rounded-lg hover:bg-[#111827] transition">
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
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    Tambah Proyek
                </button>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden mt-10">
                <table className="min-w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-700 text-sm font-semibold">
                        <tr>
                            <th className="py-3 px-6 border-b">Customer</th>
                            <th className="py-3 px-6 border-b">Proyek</th>
                            <th className="py-3 px-6 border-b">Bidang</th>
                            <th className="py-3 px-6 border-b">Tahun</th>
                            <th className="py-3 px-6 border-b text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm">
                        {filteredData.map((item, idx) => (
                            <tr key={idx} className="hover:bg-gray-50 transition">
                                <td className="py-3 px-6 border-b">{item.customer}</td>
                                <td className="py-3 px-6 border-b">{item.proyek}</td>
                                <td className="py-3 px-6 border-b">{item.bidang}</td>
                                <td className="py-3 px-6 border-b">{item.tahun}</td>
                                <td className="py-3 px-6 border-b text-center">
                                    <div className="flex justify-center gap-3">
                                        {/* Edit */}
                                        <button className="text-[#27D14C] hover:text-green-600 transition">
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
                                                    d="M15.232 5.232l3.536 3.536M9 13l6.768-6.768a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H8v-2.414a2 2 0 01.586-1.414z"
                                                />
                                            </svg>
                                        </button>

                                        {/* Delete */}
                                        <button className="text-red-500 hover:text-red-600 transition">
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
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Proyek;