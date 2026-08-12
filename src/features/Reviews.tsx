'use client';

import { motion } from 'framer-motion';

interface Review {
    id: number;
    stars: number;
    title: string;
    body: string;
    author: string;
    avatar: string;
    pos: { top: string; left: string };
}

interface MapPin {
    id: number;
    image: string;
    pos: { top: string; left: string };
}

const reviewsData: Review[] = [
    {
        id: 1,
        stars: 5,
        title: 'Knowledgeable and responsive.',
        body: '"I would recommend him and surely use him and his team in future"',
        author: '- R Ahmed',
        avatar: '/pins/project-1.png',
        pos: { top: '45%', left: '16%' },
    },
    {
        id: 2,
        stars: 5,
        title: 'Professional, prompt and great customer service.',
        body: '"Advanced replaced my roof a few years back. Would definitely recommend!"',
        author: '- Sue Vignovich',
        avatar: '/pins/project-2.jpg',
        pos: { top: '69%', left: '29%' },
    },
    {
        id: 3,
        stars: 5,
        title: 'Very professional, friendly and honest.',
        body: '"Showed up on time, provided a fair estimate, and did an excellent job"',
        author: '- Joan McGregor',
        avatar: '/pins/project-3.jpg',
        pos: { top: '55%', left: '46%' },
    },
    {
        id: 4,
        stars: 5,
        title: 'Professional, punctual, and communicated',
        body: '"We highly recommend this company for reliable and trustworthy roofing services"',
        author: '- Juna Chikovani',
        avatar: '/pins/project-4.png',
        pos: { top: '73%', left: '62%' },
    },
    {
        id: 5,
        stars: 5,
        title: 'Great company, quality work.',
        body: '"They fought for a year to get my insurance approved. Peter and his crew truly go above and beyond"',
        author: '- Mahir Zegar',
        avatar: '/pins/project-5.jpg',
        pos: { top: '52%', left: '73%' },
    },
];

const smallPinsData: MapPin[] = [
    { id: 1, image: '/pins/project-6.jpg', pos: { top: '48%', left: '10%' } },
    { id: 2, image: '/pins/project-7.png', pos: { top: '76%', left: '17%' } },
    { id: 3, image: '/pins/project-8.jpg', pos: { top: '42%', left: '35%' } },
    { id: 4, image: '/pins/project-9.png', pos: { top: '88%', left: '40%' } },
    { id: 5, image: '/pins/project-1.png', pos: { top: '48%', left: '56%' } },
    { id: 6, image: '/pins/project-2.jpg', pos: { top: '44%', left: '64%' } },
    { id: 7, image: '/pins/project-3.jpg', pos: { top: '66%', left: '68%' } },
];

const statsData = [
    { value: '20+', label: 'Years of experience' },
    { value: '16k+', label: 'Roofs Completed' },
    { value: '100%', label: 'Happy Costumers' },
    { value: '100%', label: 'Third-party roof inspections' },
];

const StarRow = ({ count }: { count: number }) => (
    <div className="flex gap-1 mb-1.5">
        {Array.from({ length: count }).map((_, s) => (
            <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="#FFCC00">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
        ))}
    </div>
);

export default function Reviews() {
    return (
        <section id="reviews" className="relative w-full bg-[#EFEFEF] pb-16 overflow-hidden font-urbanist">

            {/* ── 1. CORTE AMARILLO SUPERIOR (FULL WIDTH) ── */}
            <div className="w-full leading-none z-30 relative">
                <svg
                    className="w-full h-8 sm:h-12 md:h-14 block"
                    viewBox="0 0 1920 58"
                    fill="none"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M1920 58V0H0V51.6957L960 21L1920 58Z" fill="#DDBC05" />
                </svg>
            </div>

            {/* ── 2. CONTENEDOR UNIFICADO DEL MAPA FULL WIDTH ── */}
            <div className="relative w-full h-[650px] sm:h-[720px] md:h-[780px] -mt-2 overflow-hidden">

                {/* Imagen del mapa abarcando todo el fondo */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat mt-8 opacity-90"
                    style={{ backgroundImage: "url('/map-3.png')" }}
                />

                {/* GRADIENTE SUPERIOR PARA LEGUIBILIDAD DEL TEXTO */}
                <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-b from-[#EFEFEF] via-[#EFEFEF]/85 to-transparent pointer-events-none z-10" />

                {/* HEADER DE SECCIÓN */}
                <div className="relative z-20 max-w-3xl mx-auto text-center px-6 pt-10 md:pt-14 mb-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="font-clash text-[#1c5bb8] font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] mb-3"
                    >
                        Trusted by <br /> Homeowners
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-[#4A5568] font-medium text-sm sm:text-base md:text-lg leading-snug max-w-md mx-auto"
                    >
                        See what homeowners have to say about their experience working with us and why they continue to trust our team with their roofs.
                    </motion.p>
                </div>

                {/* PINS SEGUNDARIOS PEQUEÑOS */}
                {smallPinsData.map((pin, i) => (
                    <motion.div
                        key={pin.id}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        whileHover={{ scale: 1.25, zIndex: 30 }}
                        className="absolute rounded-full border-2 border-[#1c5bb8] shadow-lg overflow-hidden w-4 h-4 sm:w-6 sm:h-6 cursor-pointer z-10 -translate-x-1/2 -translate-y-1/2"
                        style={{ top: pin.pos.top, left: pin.pos.left }}
                    >
                        <img src={pin.image} alt="Project sample" className="w-full h-full object-cover" />
                    </motion.div>
                ))}

                {/* CARDS DE RESEÑAS CON TOOLTIP.
                    3 niveles de visibilidad:
                    - Mobile (<md): solo 1 y 4 (Sue y Mahir).
                    - Tablet (md, <lg): se suma 0 (3 en total) — los índices
                      2 y 3 (Joan y Juna) se dejan afuera en este ancho
                      porque son las que más se solapaban con las demás.
                    - Desktop (lg+): las 5, como en la versión original. */}
                {reviewsData.map((rev, i) => (
                    <motion.div
                        key={rev.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * i }}
                        className={`absolute z-20 ${
                            i === 4
                                ? 'flex'
                                : i === 1
                                    ? 'flex md:hidden lg:flex'
                                    : i === 3
                                        ? 'hidden lg:flex'
                                        : 'hidden md:flex'
                        } flex-col items-center group cursor-pointer -translate-x-1/2 -translate-y-1/2`}
                        style={{ top: rev.pos.top, left: rev.pos.left }}
                    >
                        {/* Tooltip Card */}
                        <div
                            className="w-36 p-3.5 rounded-2xl bg-gradient-to-b from-white to-[#F6F6F6] shadow-xl border border-gray-100 relative mb-1.5"
                            style={{
                                boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.12)'
                            }}
                        >
                            <StarRow count={rev.stars} />

                            <h3 className="font-clash text-black font-bold text-sm sm:text-base leading-tight mb-1">
                                {rev.title}
                            </h3>

                            <p className="text-gray-700 text-xs leading-snug font-medium mb-2">
                                {rev.body}
                            </p>

                            <span className="text-[#1c5bb8] text-xs font-bold block text-right">
                                {rev.author}
                            </span>

                            {/* Flecha Tooltip */}
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#F6F6F6]" />
                        </div>

                        {/* Pin con foto */}
                        <div className="w-9 h-9 rounded-full border-2 border-[#1c5bb8] shadow-md overflow-hidden bg-white z-30 transition-transform duration-300 group-hover:scale-110">
                            <img src={rev.avatar} alt={rev.author} className="w-full h-full object-cover" />
                        </div>
                    </motion.div>
                ))}

            </div>

            {/* ── 3. ESTADÍSTICAS INFERIORES ──
                 Antes: "text-left" fijo + "flex flex-col" sin alineación
                 dejaba todo pegado a la izquierda en mobile. Ahora centrado
                 en mobile (text-center, items-center) y alineado a la
                 izquierda desde md: (como en la versión desktop original). */}
            <div className="max-w-6xl mx-auto px-6 mt-15 sm:mt-19">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    {statsData.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center md:items-start"
                        >
                            <span className="font-clash text-[#1c5bb8] font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight leading-none">
                                {stat.value}
                            </span>
                            <span className="font-urbanist text-black font-bold text-base sm:text-lg md:text-xl leading-tight mt-2 max-w-[180px]">
                                {stat.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
}