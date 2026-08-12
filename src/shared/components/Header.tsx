'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setMobileMenuOpen(false);
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="absolute top-0 left-0 w-full z-40 py-6 px-6 md:px-12 font-urbanist">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between">

                {/* Logo Icon */}
                <div
                    onClick={() => scrollToSection('hero')}
                    className="flex items-center gap-2 cursor-pointer z-50"
                >
                    <img
                        src="/icon.png"
                        alt="Advanced Roofing Logo"
                        className="h-10 md:h-12 w-auto object-contain drop-shadow-md"
                    />
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden md:flex items-center gap-12 text-white font-semibold text-base tracking-wide">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => scrollToSection('reviews')}
                        className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                    >
                        Reviews
                    </button>
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                    >
                        Contact
                    </button>
                </nav>

                {/* Desktop CTA Button 3D Glassmorphism */}
                <div className="hidden md:flex items-center">
                    <motion.button
                        onClick={() => scrollToSection('contact')}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        className="group flex items-center gap-4 pl-6 pr-1.5 py-1.5 rounded-full font-bold text-white text-base tracking-wide transition-all duration-300 cursor-pointer select-none"
                        style={{
                            background: 'linear-gradient(180deg, rgba(38, 54, 70, 0.05) 0%, rgba(20, 29, 38, 0.10) 100%)',
                            backdropFilter: 'blur(16px)',
                            WebkitBackdropFilter: 'blur(16px)',
                            borderTop: '1px solid rgba(255, 255, 255, 0.45)',
                            borderLeft: '1px solid rgba(255, 255, 255, 0.25)',
                            borderRight: '1px solid rgba(255, 255, 255, 0.15)',
                            borderBottom: '1px solid rgba(0, 0, 0, 0.6)',
                            boxShadow: `
                                inset 0 1px 1px rgba(255, 255, 255, 0.3),
                                inset 0 -2px 4px rgba(0, 0, 0, 0.4),
                                0 10px 25px -5px rgba(0, 0, 0, 0.5)
                            `
                        }}
                    >
                        <span className="text-white font-bold tracking-tight text-[17px] drop-shadow-sm">
                            Free Inspection
                        </span>

                        {/* Círculo Amarillo con Borde Interno Suave */}
                        <div
                            className="bg-[#FFCC00] text-black rounded-full w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0"
                            style={{
                                boxShadow: 'inset 0 1px 2px rgba(255, 255, 255, 0.6), 0 2px 6px rgba(0, 0, 0, 0.3)'
                            }}
                        >
                            <ArrowRight size={20} strokeWidth={2.8} className="text-black" />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile & Tablet Hamburger Button */}
                <div className="flex md:hidden items-center gap-3 z-50">

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-2 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

            </div>

            {/* Mobile & Tablet Overlay Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-2xl z-40 flex flex-col items-center justify-center gap-8 md:hidden text-white font-bold text-2xl"
                    >
                        <button
                            onClick={() => scrollToSection('hero')}
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('reviews')}
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Reviews
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="hover:text-yellow-400 transition-colors"
                        >
                            Contact
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}