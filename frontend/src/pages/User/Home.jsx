import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'; 
import {FaWhatsapp} from 'react-icons/fa';
import { Assets } from '../../assets';
import { motion } from 'framer-motion';
// layanan card
const servicesData = [
    { title: 'Management Consulting', icon: Assets.Icon1 },
    { title: 'Research & Survey', icon: Assets.Icon2 },
    { title: 'Report & Journal', icon: Assets.Icon3 },
    { title: 'Corporate ID', icon: Assets.Icon4 },
    { title: 'Product & Services Knowledge', icon: Assets.Icon5 },
];

// Statistik
const statsData = [
    { value: "10+", label: "Pengalaman" },
    { value: "44+", label: "Klien Divus" },
    { value: "49+", label: "Proyek Selesai" },
];

// Home
export default function Home() {
    return (
        <main className="w-full">
            <div className="max-w-[1440px] mx-auto"> 
                {/* Hero Section */}
                <section className="pt-24 pb-16 px-6 md:px-20 relative overflow-hidden bg-gray-100 md:bg-white">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-8 z-10">
                            <div className="flex flex-col justify-start items-start gap-8">
                                <p className="text-lime-500 text-xl font-medium font-['Poppins'] mt-20">
                                    PT Divus Global Mediacomm
                                </p>
                                <h1 className="text-zinc-800 text-4xl lg:text-5xl font-semibold font-['Poppins'] leading-tight">
                                    Tingkatkan Strategi dan Solusi Bisnis Anda!
                                </h1>
                                <p className="text-zinc-800 text-base font-normal font-['Poppins'] leading-6 text-justify">
                                    PT Divus menyediakan layanan management consulting, riset, laporan, corporate identity, serta Report dan jurnal guna membantu perusahaan mencapai strategi dan tujuan bisnis secara optimal.
                                </p>
                            </div>

                            <Link 
                                to="/kontak" 
                                className="inline-flex justify-start items-center px-6 py-4 bg-green-500 rounded-xl shadow-lg hover:bg-green-600 transition-colors"
                            >
                                <FaWhatsapp size={24} className="text-white mr-2" />
                                <span className="text-white text-base font-bold font-['Poppins'] leading-6">Hubungi Kami</span>
                            </Link>
                        </div>
                        
                        {/* Gambar hero */}
                        <div className="w-full md:w-1/2 relative flex justify-center items-center">
                            <div className="relative w-[550px] h-[480px]">
                                <img
                                    className="absolute top-[80px] left-16 w-[450px] h-[320px] rounded-2xl  object-cover"
                                    src={Assets.Hero3}
                                    alt="Gambar Latar"
                                />

                                <img
                                    className="absolute top-1 left-5 w-[720px] h-[680px] rounded-2xl  object-cover"
                                    src={Assets.Hero1}
                                    alt="Gambar Tengah"
                                />

                                <img
                                    className="absolute top-[100px] right-24 w-[550px] h-[470px] rounded-2xl object-cover"
                                    src={Assets.Hero2}
                                    alt="Gambar Depan"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block absolute top-[120px] left-0 w-full h-[677px] opacity-10 bg-gray-100 z-0"></div>
                </section>

                {/* Mitra & CTA Bar */}
                <section className="px-6 md:px-20 py-16">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10 border-b border-gray-200 pb-10">
                        <h2 className="text-zinc-600 text-xl font-semibold font-['Poppins'] leading-7 w-full lg:w-96 text-center lg:text-left">
                            Dipercaya <br/>Oleh Mitra Internasional
                        </h2>
                        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-10 md:gap-40 w-full lg:w-auto">
                            <img className="w-40 h-auto" src={Assets.Client12} alt="Mitra A" />
                            <img className="w-40 h-auto" src={Assets.Client13} alt="Mitra B" />
                        </div>
                    </div>
                    
                    {/* CTA Bar */}
                    <div className="mt-10 w-full relative">
                        <div className="w-full h-12 bg-gradient-to-r from-lime-500 to-green-500 rounded-[20px] flex items-center justify-center">
                            <span className="text-white text-lg font-bold">Tingkatkan Bisnis Anda Sekarang!</span>
                        </div>
    
                        {/* Tombol WhatsApp */}
                        <a 
                            href="https://wa.me/62812345678" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="absolute -right-2 top-1/2 -translate-y-1/2 w-16 h-16 p-3 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
                        >
                            <FaWhatsapp size={32} className="text-white" />
                        </a>
                    </div>
                </section>

                {/* Layanan*/}
                <section className="px-6 md:px-20 py-16">
                    <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12 mb-16">
                        <h2 className="w-full lg:w-3/5 text-zinc-800 text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-tight">
                            Solusi Tepat untuk Meningkatkan Efektivitas Strategi Bisnis.
                        </h2>
                        <p className="w-full lg:w-2/5 text-justify text-zinc-800 text-base font-normal font-['Poppins'] leading-6">
                            PT Divus Hadir dengan Solusi Profesional untuk Mengoptimalkan Perencanaan, Analisis, dan Pencapaian Strategi Bisnis Anda.
                        </p>
                    </div>
                    <div className="w-full">
                        <div className="bg-zinc-800 rounded-[20px] p-6 md:p-12 shadow-xl mb-12">
                            <h3 className="text-center text-white text-3xl lg:text-4xl font-semibold font-['Poppins'] leading-tight mb-8">
                                Layanan Kami
                            </h3>
                            <div className="flex flex-nowrap justify-between gap-6 px-4">
                                {servicesData.map((item, index) => (
                                    <ServiceCard key={index} title={item.title} icon={item.icon} />
                                ))}
                            </div> 
                            <div className="text-left mt-8">
                                <Link 
                                    to="/layanan" 
                                    className="ml-4 inline-flex items-center bg-white rounded-md px-5 py-2 hover:bg-gray-100 transition-colors"
                                >
                                    <span className="justify-start text-zinc-800 text-sm text-center font-medium font-['Poppins'] capitalize mr-1 ">
                                        Lihat Selengkapnya
                                    </span>
                                    <ChevronRight size={16} className="text-zinc-800" />
                                </Link>
                            </div>
                        </div>

                        <div className="w-full bg-zinc-800 rounded-[20px] p-6 md:p-12 shadow-xl">
                            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-10">
                                {statsData.map((stat, index) => (
                                    <StatItem key={index} value={stat.value} label={stat.label} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client */}
                <section className="bg-white relative overflow-hidden border-t border-gray-100">
                     <h2 className="text-center text-zinc-800 text-4xl font-semibold font-['Poppins'] leading-[48px] mb-8">
                        Klien Kami
                    </h2>
                    <div className="relative h-48 overflow-hidden">
                        <motion.div
                            className="absolute flex items-center gap-16 w-max"
                            animate={{ x: ["0%", "-50%"], rotate: [0, 0, 0] }}
                            transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
                        >
                            {Array(2)
                            .fill([Assets.Client1,
                                Assets.Client2,
                                Assets.Client3, 
                                Assets.Client4, 
                                Assets.Client5, 
                                Assets.Client6,
                                Assets.Client7,
                                Assets.Client8,
                                Assets.Client9,
                                Assets.Client10,
                                Assets.Client11,
                                Assets.Client12,
                                Assets.Client13
                            ])
                            .flat()
                            .map((ImgClnt, i) => (
                                <motion.img
                                key={i}
                                src={ImgClnt}
                                alt="Client Logo"
                                className="h-32 w-32 opacity-70 hover:opacity-100 transition-transform duration-300 hover:scale-110"
                                style={{transform : 'rotate(0deg)'}}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}
// Kartu Layanan
const ServiceCard = ({ title, icon }) => {
    return (
        <div className="w-52 h-52 p-4 bg-white rounded-tr-3xl rounded-bl-3xl flex flex-col justify-center items-center shadow-lg transition-transform hover:scale-105">
            <div className="w-full flex flex-col justify-center items-center gap-3">
                <img 
                    src={icon} 
                    alt={`${title} Icon`} 
                    className="w-20 h-20 object-contain mb-2"
                />
                
                <div className=" text-center text-zinc-800 text-sm font-semibold font-['Poppins'] eading-snug px-2 break-words whitespace-normal">
                    {title}
                </div>
            </div>
        </div>
    );
};

const StatItem = ({ value, label }) => (
    <div className="w-full flex flex-col justify-center items-center">
        <div className="text-center">
            <span className="text-white text-5xl md:text-6xl font-semibold font-['Poppins'] leading-tight">
                {value.slice(0, -1)}
            </span>
            <span className="text-lime-500 text-5xl md:text-6xl font-semibold font-['Poppins'] leading-tight">
                {value.slice(-1)}
            </span>
        </div>
        <div className="text-center text-white text-xl md:text-2xl font-semibold font-['Poppins'] leading-8 mt-1">
            {label}
        </div>
    </div>
);