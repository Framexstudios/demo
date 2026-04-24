import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "Is this book suitable for complete beginners?",
    answer: "Absolutely. Srikanth breaks down complex financial concepts into first principles that anyone can understand, while still providing depth for experienced investors.",
  },
  {
    question: "Does the book cover international tax laws?",
    answer: "The core principles of wealth generation are universal. While specific examples may lean toward the Indian market, the mathematical and strategic frameworks apply globally.",
  },
  {
    question: "How is the physical edition different from the digital one?",
    answer: "The Collector's Edition features a linen hardcover with gold foil stamping and Smyth-sewn binding. It is designed to be a tactile, heirloom-quality physical object.",
  },
  {
    question: "Can I upgrade my tier later?",
    answer: "Yes, you can always transition from the digital edition to a bundle or mentorship at a later date, provided spots are available.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = React.useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-navy-950">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-display font-medium uppercase tracking-[0.3em] text-xs mb-4 block">Information</span>
          <h2 className="text-4xl font-serif text-white mb-6">Common Inquiries</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={cn(
                "rounded-3xl border transition-all duration-300",
                openIdx === idx ? "glass border-gold-500/30" : "border-white/5 bg-white/[0.02] hover:bg-white/[0.05]"
              )}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 flex items-center justify-between gap-4"
              >
                <span className="font-bold text-white text-lg">{faq.question}</span>
                <ChevronDown 
                  className={cn("text-slate-500 transition-transform duration-300", openIdx === idx && "rotate-180 text-gold-400")} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-navy-950 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg gold-gradient flex items-center justify-center font-bold text-navy-950">M</div>
            <span className="font-display font-bold text-lg tracking-tight text-white uppercase">Wealthy Vibes</span>
          </div>
          <p className="text-slate-500 max-w-sm mb-8 leading-relaxed">
            Architecting financial freedom and legacy building through the curation of essential wealth principles. Built by the community, for the future.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-gold-400 cursor-pointer transition-colors border border-white/10">X</div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-gold-400 cursor-pointer transition-colors border border-white/10">IG</div>
            <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-400 hover:text-gold-400 cursor-pointer transition-colors border border-white/10">YT</div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><Link to="/" className="hover:text-gold-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-400 transition-colors">Author</Link></li>
            <li><Link to="/lessons" className="hover:text-gold-400 transition-colors">Lessons</Link></li>
            <li><Link to="/store" className="hover:text-gold-400 transition-colors">Store</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Affiliates</a></li>
            <li><a href="#" className="hover:text-gold-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Join the Newsletter</h4>
          <p className="text-slate-500 text-sm mb-4">Get curated wealth insights delivered to your inbox.</p>
          <div className="flex gap-2">
            <input type="email" placeholder="email@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-gold-500/50 w-full" />
            <button className="gold-gradient p-3 rounded-xl text-navy-950 font-bold">→</button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-600 text-xs uppercase tracking-[0.2em]">
        <span>© 2024 Millionaire Dreams. All rights reserved.</span>
        <span>Curated by Wealth Vibe Mentor</span>
      </div>
    </footer>
  );
}
