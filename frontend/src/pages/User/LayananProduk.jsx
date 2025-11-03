import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Assets } from '../../assets';

// Data layanan dan produk
const servicesData = [
  {
    title: 'Management Konsulting',
    items: [
      'Business Feasibility & Evaluation',
      'Marketing Plan & Communications',
      'Strategic Planning'
    ],
    icon: Assets.Icon1
  },
  {
    title: 'Research & Survey',
    items: [
      'Market Survey',
      'Customer Satisfaction',
      'Social Mapping'
    ],
    icon: Assets.Icon2
  },
  {
    title: 'Corporate ID',
    items: [
      'Website',
      'Logo',
      'Stationery',
      'Company Profile',
      'Kalender',
      'Agenda',
      'Video Profile'
    ],
    icon: Assets.Icon4
  },
  {
    title: 'Product & Service Knowledge',
    items: [
      'Brosur',
      'Booklet',
      'Banner',
      'Backdrop',
      'Merchandise',
      'Event'
    ],
    icon: Assets.Icon5
  },
  {
    title: 'Report & Journal',
    items: [
      'Annual Plan',
      'Monitoring Report',
      'Annual Report',
      'Newsletter'
    ],
    icon: Assets.Icon3
  }
];

// Komponen Kartu Layanan
const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-tr-3xl rounded-bl-3xl p-6 shadow-lg hover:shadow-xl transition-all">
    <div className="flex items-start gap-4 mb-4">
      <img 
        src={service.icon} 
        alt={`${service.title} Icon`}
        className="w-12 h-12 object-contain"
      />
      <h3 className="text-xl font-semibold text-zinc-800">{service.title}</h3>
    </div>
    <ul className="space-y-2">
      {service.items.map((item, index) => (
        <li key={index} className="text-zinc-600 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-lime-500 rounded-full"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default function LayananProdukSection() {
    const [activeTab, setActiveTab] = useState('layanan');

    return (
        <div className="relative w-full bg-white overflow-hidden">
            <header className="relative w-full">
                {/* Banner image */}
                <div className="relative w-full h-[470px]">
                    <img
                        src={Assets.Banner3}
                        alt="Latar Belakang Layanan"
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
                            Layanan & Produk
                        </h1>
                    </div>
                </div>

                <div className="w-full bg-zinc-300 py-3 px-6 md:px-20">
                    <p className="text-zinc-800 text-base">
                        <Link to="/" className="hover:underline">
                            Beranda
                        </Link>
                        <span className="text-red-600"> &gt; Layanan & Produk</span>
                    </p>
                </div>
            </header>

            <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
                <h2 className="text-zinc-800 text-3xl md:text-4xl font-bold font-['Poppins'] capitalize mb-6">
                    Solusi Bisnis Menyeluruh
                </h2>
                <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-relaxed mb-12 max-w-[1280px]">
                    PT Divus Global Mediacomm menyediakan layanan dan produk terpadu, mulai dari Management Consulting, Research & Survey, Corporate ID, Product & Services Knowledge, serta Report & Jurnal. Semua dirancang untuk mendukung pertumbuhan bisnis dan memperkuat citra perusahaan Anda.
                </p>

                {/* Tabs */}
                <div className="flex gap-0 mb-12">
                    <button
                        onClick={() => setActiveTab('layanan')}
                        className={`px-7 py-2.5 rounded-l-[10px] text-xl md:text-2xl font-semibold font-['Poppins'] capitalize transition-all ${
                            activeTab === 'layanan'
                                ? 'bg-gradient-to-b from-green-500 to-lime-500 text-white'
                                : 'bg-white border border-green-500 text-black'
                        }`}
                    >
                        Layanan
                    </button>
                    <button
                        onClick={() => setActiveTab('produk')}
                        className={`px-7 py-2.5 rounded-r-[10px] text-xl md:text-2xl font-semibold font-['Poppins'] capitalize transition-all ${
                            activeTab === 'produk'
                                ? 'bg-gradient-to-b from-green-500 to-lime-500 text-white'
                                : 'bg-white border border-green-500 text-black'
                        }`}
                    >
                        Produk
                    </button>
                </div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </section>
        </div>    
    )
}