import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden aspect-square glass-gold p-2">
              <img 
                src="https://i.postimg.cc/0kyMcvQR/Screenshot-2026-04-20-13-19-07-47-99c04817c0de5652397fc8b56c3b3817.png" 
                alt="Srikanth D Secunlapuram" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-2xl transition-all duration-700"
              />
            </div>
            {/* Background elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 gold-gradient rounded-full blur-[80px] opacity-20" />
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <span className="text-gold-400 font-display font-medium uppercase tracking-[0.3em] text-xs mb-4 block">Meet the Author</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Srikanth D Secunlapuram</h2>
              <p className="text-2xl italic text-gold-200/80 mb-8 font-serif">"True wealth is not merely accumulation; it is the curation of freedom."</p>
            </div>
            
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                A vanguard in the architecture of modern wealth, Srikanth bridges the chasm between abstract economic theory and tangible, curated financial growth. With over 20 years of experience, he has identified the fatal flaws in contemporary financial advisory: the obsession with velocity over veracity.
              </p>
              <p>
                His philosophy posits that true affluence is an art form—a meticulous selection of assets rather than a chaotic accumulation of capital. As a Financial Freedom Mentor, Srikanth has guided thousands of individuals toward midlife financial independence through disciplined habits and strategic investment architecture.
              </p>
              <p>
                Millionaire Dreams is more than a book; it is a legacy building manual, designed to be studied, annotated, and passed down as a foundational manual for generational wealth.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <div className="text-white font-display text-4xl mb-1">20+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Experience</div>
              </div>
              <div>
                <div className="text-white font-display text-4xl mb-1">10k+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Students Taught</div>
              </div>
              <div>
                <div className="text-white font-display text-4xl mb-1">05+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold">Wealth Frameworks</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
