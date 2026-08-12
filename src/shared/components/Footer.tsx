'use client';

import { ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="w-full bg-[#08192e] text-white pt-10 pb-8 border-t border-white/10 font-urbanist relative z-20">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* LOGO & ISOLOGO */}
                <div
                    onClick={scrollToTop}
                    className="flex items-center gap-3 cursor-pointer group"
                >
                    <img
                        src="/icon.png"
                        alt="Advanced Roofing Logo"
                        className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="font-clash text-lg font-bold tracking-tight text-white">
                        ADVANCED <span className="text-[#FFCC00]">ROOFING</span>
                    </span>
                </div>

                {/* LINKS DE NAVEGACIÓN */}
                <nav className="flex items-center gap-8 text-sm font-medium text-white/80">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="hover:text-[#FFCC00] transition-colors cursor-pointer"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('reviews')}
                        className="hover:text-[#FFCC00] transition-colors cursor-pointer"
                    >
                        Reviews
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-[#FFCC00] transition-colors cursor-pointer"
                    >
                        Contact
                    </button>
                </nav>

                {/* BOTÓN VOLVER ARRIBA */}
                <button
                    onClick={scrollToTop}
                    aria-label="Back to top"
                    className="flex items-center gap-2 text-xs font-semibold text-white/60 hover:text-white transition-colors cursor-pointer group"
                >
                    <span>Back to top</span>
                    <div className="w-8 h-8 rounded-full bg-white/5 border border-white/15 flex items-center justify-center group-hover:bg-[#FFCC00] group-hover:text-black transition-all">
                        <ArrowUp size={15} strokeWidth={2.5} />
                    </div>
                </button>

            </div>

            {/* COPYRIGHT */}
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 mt-8 pt-6 border-t border-white/5 text-center text-xs text-white/40">
                <p>© {new Date().getFullYear()} Advanced Roofing. All rights reserved.</p>
            </div>
        </footer>
    );
}