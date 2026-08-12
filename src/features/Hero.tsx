'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const testimonials = [
    {
        stars: 5,
        title: 'They came out quickly and did a great job.',
        body: '"We have used them in the past for larger projects, and have always been pleased."',
        author: '- Darrell T.',
    },
    {
        stars: 5,
        title: 'Would definitely recommend them.',
        body: '"They finished the work in one day, and the new roof looks great!"',
        author: '- Melinda T.',
    },
    {
        stars: 5,
        title: "Can't thank you enough!",
        body: '"Peter helped me through the whole process and was able to replace my entire roof!"',
        author: '- Yawar K.',
    },
];

const StarRow = ({ count }: { count: number }) => (
    <div className="flex gap-1 justify-start">
        {Array.from({ length: count }).map((_, s) => (
            <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#FACC15">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

const cardStyle: React.CSSProperties = {
    background: 'rgba(81,81,81,0.12)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255,255,255,0.18)',
    transform: 'translateZ(0)',
    WebkitTransform: 'translateZ(0)',
    willChange: 'transform, opacity',
};

function TestimonialCard({
                             t,
                             className = '',
                         }: {
    t: (typeof testimonials)[number];
    className?: string;
}) {
    return (
        <div className={`rounded-2xl p-5 flex flex-col justify-between shadow-2xl ${className}`} style={cardStyle}>
            <div>
                <StarRow count={t.stars} />
                <p className="font-clash text-white font-bold text-base leading-snug mt-2.5 mb-2">
                    {t.title}
                </p>
                <p className="text-white/90 text-md leading-relaxed font-urbanist font-medium">
                    {t.body}
                </p>
            </div>
            <p className="text-[#F3C200] text-xs sm:text-sm font-bold mt-2 font-urbanist text-right">
                {t.author}
            </p>
        </div>
    );
}

function MobileTestimonialCarousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((i) => (i + 1) % testimonials.length);
        }, 4500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center w-full max-w-xs md:max-w-md mx-auto mt-5">
            <div className="relative w-full min-h-[130px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        <TestimonialCard t={testimonials[index]} className="h-auto" />
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex gap-2 mt-3">
                {testimonials.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Ver testimonio ${i + 1}`}
                        onClick={() => setIndex(i)}
                        className={`h-2 rounded-full transition-all ${
                            i === index ? 'w-6 bg-[#F3C200]' : 'w-2 bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    const scrollToContact = () => {
        const section = document.getElementById('contact');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <style jsx global>{`
                @import url('https://api.fontshare.com/v2/css?f[]=clash-grotesk@700,600,500&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap');

                .font-clash {
                    font-family: 'Clash Grotesk', sans-serif !important;
                }
                .font-urbanist {
                    font-family: 'Urbanist', sans-serif !important;
                }
            `}</style>

            <section id="hero" className="relative w-full h-screen overflow-hidden font-urbanist bg-[#0a5db5]">

                {/* ── CAPA 1: FONDO DEGRADADO CELESTE / CIELO (z-0) ── */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        background: 'linear-gradient(180deg, #1871D6 0%, #3B82F6 45%, #60A5FA 100%)'
                    }}
                />

                {/* ── CAPA 2: TÍTULO — DETRÁS de la foto (z-[5]) ──
                     Mobile/tablet (lg:hidden) y desktop (hidden lg:flex),
                     cada uno en su propio wrapper, ambos por debajo del
                     z-10 de la foto del techo. */}
                <div className="lg:hidden absolute inset-0 z-[5] flex flex-col items-center justify-start pt-[9vh] px-6 md:px-12 mt-30 max-w-md md:max-w-2xl mx-auto pointer-events-none">
                    <div className="text-center select-none">
                        <span className="block font-clash text-[#F3C200] font-bold text-6xl md:text-7xl tracking-tight">
                            Free Roof
                        </span>
                        <h1 className="font-clash text-white font-bold text-7xl md:text-8xl leading-none tracking-tight mt-0">
                            Inspection
                        </h1>
                    </div>
                </div>

                <div className="hidden lg:flex absolute inset-0 z-[5] flex-col pt-36 px-12 max-w-[1400px] mx-auto w-full pointer-events-none">
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
                        className="select-none text-left"
                    >
                        <span className="block font-clash text-[#F3C200] font-bold text-7xl tracking-normal xl:tracking-wide">
                            Free Roof
                        </span>
                        <h1 className="font-clash text-white font-bold text-[13rem] leading-none tracking-normal xl:tracking-wider 2xl:tracking-widest -mt-6">
                            Inspection
                        </h1>
                    </motion.div>
                </div>

                {/* ── CAPA 3: TECHO EN PRIMER PLANO (z-10) —
                     entre el título (detrás) y el resto del contenido
                     (delante). ── */}
                <div
                    className="absolute inset-0 bg-cover bg-bottom z-10 pointer-events-none"
                    style={{ backgroundImage: "url('/hero/hero-roof-foreground.webp')" }}
                />

                {/* ── CAPA 4: SUBTÍTULO + CTA + CARRUSEL — DELANTE de la
                     foto (z-20). Mobile/tablet. ── */}
                <div className="lg:hidden absolute inset-0 z-20 flex flex-col items-center justify-start pt-[47vh] px-6 md:px-12 -mt-15 pb-6 max-w-md md:max-w-2xl mx-auto pointer-events-auto">
                    <p className="text-white/90 text-md md:text-lg font-medium max-w-xs md:max-w-md mx-auto mb-6 leading-relaxed font-urbanist text-center">
                        Get a professional roof inspection at no cost. We’ll identify potential issues and give you clear, honest recommendations with no pressure and no obligation.
                    </p>

                    <div className="mb-8 pointer-events-auto">
                        <button
                            onClick={scrollToContact}
                            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-urbanist font-bold text-xl shadow-xl hover:bg-white/20 transition-all cursor-pointer"
                        >
                            <span>Free Inspection</span>
                            <div className="w-7 h-7 rounded-full bg-[#F3C200] flex items-center justify-center text-black">
                                <ArrowRight size={14} strokeWidth={2.5} />
                            </div>
                        </button>
                    </div>

                    <div className="w-full pointer-events-auto">
                        <MobileTestimonialCarousel />
                    </div>
                </div>

                {/* ── CAPA 5: TAGLINE + TESTIMONIOS — DELANTE de la foto
                     (z-20). Desktop. ── */}
                <div className="hidden lg:flex absolute inset-0 z-20 flex-col justify-end pb-8 px-12 max-w-[1400px] mx-auto w-full pointer-events-auto">
                    <div className="flex flex-row items-end justify-between gap-6">

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-8"
                        >
                            <p className="font-clash text-white font-bold text-2xl md:text-3xl leading-tight tracking-wide max-w-xs">
                                KNOW YOUR ROOF. <br />
                                <span className="text-white/90">BEFORE IT COSTS YOU.</span>
                            </p>
                        </motion.div>

                        <div className="flex-1 flex flex-col justify-end pb-2 w-auto">
                            <div className="flex items-end justify-end gap-4 mb-[10px]">
                                {testimonials.map((t, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.8, delay: 0.7 + i * 0.12 }}
                                        className="w-52 flex-shrink-0"
                                    >
                                        <TestimonialCard t={t} className="h-[320px]" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>
    );
}