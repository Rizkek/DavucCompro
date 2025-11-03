import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronLeft } from 'react-icons/fa';
import { Assets } from '../../assets';

// Filter categories
const filterCategories = [
  'Semua Bidang',
  'Bantuan Teknis',
  'Perencanaan',
  'Kajian'
];

// Data proyek
const proyekData = [
  {
    customer: 'Bagian Ekonomi Kota Bandung',
    proyek: 'Kajian Penyehatan Perseroan Bli Sub Keg Kord, Sinkr, Monev, Kebijakan Pengelolaan BUMDdan BLUD',
    bidang: 'Bantuan Teknis',
    tahun: '2024'
  },
  {
    customer: 'Dinas Perhubungan',
    proyek: 'Perencaan Arsitektur dan desain interior pemeliharaan Gedung kantor Diasn Perhubungan',
    bidang: 'Perencanaan',
    tahun: '2024'
  },
  {
    customer: 'Pemeliharaan Sarana dan Prasaran Gedung Kantor',
    proyek: 'Dinas Penanaman modal dan Pelayanan Terpadu',
    bidang: 'Perencanaan',
    tahun: '2024'
  },
  {
    customer: 'Dinas Perkim',
    proyek: 'Belana jasa Konsultansi IKM Dinas Perumahan dan Permukiman',
    bidang: 'Bantuan Teknik',
    tahun: '2024'
  },
  {
    customer: 'Dinas PUPR',
    proyek: 'Jasa Konsultansi Perencanaan Penataan Ruang Interior Bidang PBPPBK',
    bidang: 'Perencanaan',
    tahun: '2024'
  },
  {
    customer: 'PT. Kurnia Parahyangan Sejahter',
    proyek: 'Jasa Pengurusan Ijin (SLF)',
    bidang: 'Bantuan Teknik',
    tahun: '2024'
  },
  {
    customer: 'Sekertariat Daerah Bagian Ekonomi',
    proyek: 'Kajian analisi Investasi peny Mdlpemerintahan kepadaPerumda Pasar Juara Kota Bandung',
    bidang: 'Kajian/ Bantuan Teknik',
    tahun: '2024'
  },
  {
    customer: 'PT. Angkasa Pura II',
    proyek: 'Pedoman Pembuatan Feasibility Study di Lingkungan Derektorat Teknik PT. Angkasa Pura II',
    bidang: 'Kajian/ Bantuan Teknik',
    tahun: '2024'
  }
];

export default function ProyekSection() {
    const [activeFilter, setActiveFilter] = useState('Semua Bidang');
    const [currentPage, setCurrentPage] = useState(1);
    const [showYearDropdown, setShowYearDropdown] = useState(false);
    const totalPages = 3;
    return (
        <div className="relative w-full bg-white overflow-hidden">
            <header className="relative w-full">
                {/* Banner image */}
                <div className="relative w-full h-[470px]">
                    <img
                        src={Assets.Banner4}
                        alt="Latar Belakang Proyek"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-zinc-800/50 z-10"></div>

                    {/* Header*/}
                    <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-20 pt-32 pb-16 text-white h-full flex flex-col justify-end">
                        <p className="text-xl md:text-3xl font-bold text-lime-500 mb-2">
                            PT Divus Global Mediacomm
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold capitalize">
                            Proyek
                        </h1>
                    </div>
                </div>

                <div className="w-full bg-zinc-300 py-3 px-6 md:px-20">
                    <p className="text-zinc-800 text-base">
                        <Link to="/" className="hover:underline">
                            Beranda
                        </Link>
                        <span className="text-red-600"> &gt; Proyek</span>
                    </p>
                </div>
            </header>
            <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
          <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-relaxed mb-12">
            PT Divus Global Mediacomm telah berpengalaman mengerjakan berbagai proyek, mulai dari konsultansi manajemen, studi kelayakan, perencanaan, hingga pengembangan aplikasi dan sistem informasi. Setiap proyek menjadi bukti komitmen kami dalam memberikan solusi yang tepat sesuai kebutuhan klien.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-6 mb-8">
            {filterCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-7 py-2.5 rounded-[10px] text-xl font-medium font-['Poppins'] transition-all ${
                  activeFilter === category
                    ? 'bg-zinc-800 text-white'
                    : 'bg-zinc-200 text-zinc-800 hover:bg-zinc-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Year Filter Dropdown */}
          <div className="flex justify-end mb-8 relative">
            <button
              onClick={() => setShowYearDropdown(!showYearDropdown)}
              className="w-28 h-10 px-5 py-3.5 bg-zinc-800 rounded-[10px] flex items-center justify-center gap-[5px] relative"
            >
              <span className="text-white text-xl font-medium font-['Poppins'] leading-6">Tahun</span>
              <FaChevronDown className="text-white w-5 h-5" />
            </button>
            
            {showYearDropdown && (
              <div className="absolute top-10 right-0 w-16 bg-white rounded-bl-[10px] rounded-br-[10px] shadow-lg z-10">
                <button className="w-full px-3.5 py-3 text-zinc-800 text-xl font-medium font-['Poppins'] hover:bg-gray-100">
                  ID
                </button>
                <button className="w-full px-3.5 py-3 text-zinc-800 text-xl font-medium font-['Poppins'] hover:bg-gray-100">
                  EN
                </button>
              </div>
            )}
          </div>

          {/* Table */}
          <div className="w-full bg-white rounded-lg border border-zinc-300 overflow-hidden mb-8">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-100">
                  <th className="px-4 py-3 text-left text-zinc-800 text-sm font-semibold font-['Poppins'] leading-5 border-b border-zinc-300">
                    Customer:
                  </th>
                  <th className="px-4 py-3 text-left text-zinc-800 text-sm font-semibold font-['Poppins'] leading-5 border-b border-zinc-300">
                    Proyek:
                  </th>
                  <th className="px-4 py-3 text-left text-zinc-800 text-sm font-semibold font-['Poppins'] leading-5 border-b border-zinc-300">
                    Bidang:
                  </th>
                  <th className="px-4 py-3 text-left text-zinc-800 text-sm font-semibold font-['Poppins'] leading-5 border-b border-zinc-300">
                    Tahun:
                  </th>
                </tr>
              </thead>
              <tbody>
                {proyekData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 border-b border-zinc-200">
                    <td className="px-4 py-3 text-zinc-700 text-sm font-normal font-['Poppins'] leading-5">
                      {item.customer}
                    </td>
                    <td className="px-4 py-3 text-zinc-700 text-sm font-normal font-['Poppins'] leading-5">
                      {item.proyek}
                    </td>
                    <td className="px-4 py-3 text-zinc-700 text-sm font-normal font-['Poppins'] leading-5">
                      {item.bidang}
                    </td>
                    <td className="px-4 py-3 text-zinc-700 text-sm font-normal font-['Poppins'] leading-5">
                      {item.tahun}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FaChevronLeft className="text-white w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="min-w-[60px] h-10 px-4 py-2 bg-white rounded-lg border border-zinc-300 flex items-center justify-center">
                <span className="text-zinc-800 text-base font-medium font-['Poppins'] leading-5">
                  {currentPage}
                </span>
              </div>
              <span className="text-zinc-600 text-sm font-medium font-['Poppins']">
                Dari {totalPages}
              </span>
            </div>

            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FaChevronLeft className="text-white w-5 h-5 rotate-180" />
            </button>
          </div>
        </section>
        </div>    
    )
}