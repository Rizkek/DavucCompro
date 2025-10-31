import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { Assets } from '../../assets';

export default function ContactSection() {
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
        </div>    
    )
}