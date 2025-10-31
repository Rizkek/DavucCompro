import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaDownload } from 'react-icons/fa';
import { Assets } from '../../assets';

export default function About() {
    return (
        <div className="relative w-full bg-white overflow-hidden">
            <header className="relative w-full">
                {/* Banner image */}
                <div className="relative w-full h-[470px]">
                    <img
                        src={Assets.Banner2}
                        alt="Latar Belakang About"
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
                            Tentang Kami
                        </h1>
                    </div>
                </div>

                <div className="w-full bg-zinc-300 py-3 px-6 md:px-20">
                    <p className="text-zinc-800 text-base">
                        <Link to="/" className="hover:underline">
                            Beranda
                        </Link>
                        <span className="text-red-600"> &gt; Tentang Kami</span>
                    </p>
                </div>
            </header>
            {/* Profil Perusahaan */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
                <div className="flex flex-col lg:flex-row gap-12 items-start">
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <img 
                            src={Assets.Logo} 
                            alt="Gambar Profil Perusahaan"
                            className="w-full max-w-lg rounded-xl shadow-xl object-cover"
                        />
                    </div>
                    <div className="w-full lg:w-3/5">
                        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-6 capitalize">
                            Profil Perusahaan
                        </h2>
                        <p className="text-zinc-800 text-base font-normal leading-loose text-justify">
                            PT Divus Global Mediacomm adalah perusahaan konsultan yang bergerak di bidang manajemen, komunikasi korporat, dan desain grafis. Kami menyediakan layanan mulai dari studi kelayakan, perencanaan strategis, riset pasar, hingga identitas korporasi dan media promosi. Dengan pengalaman beragam proyek, Divus berkomitmen menjadi mitra terpercaya dalam menghadirkan solusi profesional dan inovatif.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Download */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-20 pb-16 relative -mt-12">
                <div className="w-full bg-zinc-900 rounded-tr-2xl rounded-bl-2xl p-8 md:p-11 shadow-2xl">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                
                        <h2 className="text-white text-2xl md:text-4xl font-bold capitalize text-center md:text-left">
                            Company Profile
                        </h2>
                        <a 
                            href={Assets.CompanyProfilePDF || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full md:w-96 px-5 py-2.5 bg-white rounded-tr-2xl rounded-bl-2xl inline-flex justify-center items-center gap-3 shadow-lg hover:bg-gray-100 transition-colors"
                        >
                            <FaDownload className="w-6 h-6 text-zinc-800" />
                            <span className="text-zinc-800 text-xl font-bold capitalize">Download</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>    
    )
}