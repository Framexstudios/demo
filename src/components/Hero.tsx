import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;
    const particles = particlesRef.current.children;
    
    (Array.from(particles) as Element[]).forEach((particle) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        opacity: Math.random() * 0.5,
        scale: Math.random() * 0.5 + 0.5,
      });

      gsap.to(particle, {
        x: '+=' + (Math.random() * 200 - 100),
        y: '+=' + (Math.random() * 200 - 100),
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    });
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full blur-[1px]"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-gold mb-6 border border-gold-500/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gold-400">Newly Released: Collector's Edition</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] mb-8 text-white"
          >
            How to Become a <br />
            <span className="text-gold italic block mt-2">First Generation</span> <br />
            Millionaire
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl text-slate-400 max-w-lg mb-10 leading-relaxed"
          >
            Master the immutable laws of wealth creation. A definitive guide to financial freedom in the digital age, curated for the modern investor.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/store" className="gold-gradient text-navy-950 px-10 py-5 rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all text-center shadow-2xl shadow-gold-500/20">
              Get Your Copy Now
            </Link>
            <Link to="/lessons" className="glass px-10 py-5 rounded-2xl font-bold text-lg text-white hover:bg-white/10 transition-all border border-white/10 text-center">
              View Blueprint
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
           whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: 'backOut' }}
           className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group max-w-md">
            <div className="absolute inset-0 gold-gradient blur-[100px] opacity-20 group-hover:opacity-30 transition-opacity" />
            <img 
              src="https://i.postimg.cc/z5L3B0Hj/1-3D-Cover.png" 
              alt="Millionaire Dreams 3D Book Cover" 
              referrerPolicy="no-referrer"
              className="relative z-20 w-full h-auto drop-shadow-[0_50px_50px_rgba(0,0,0,0.5)] transform hover:rotate-2 hover:scale-105 transition-all duration-700 pointer-events-none sm:pointer-events-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
