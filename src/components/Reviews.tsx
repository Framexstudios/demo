import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Vikram S.",
    role: "Tech Entrepreneur",
    text: "Finally, a wealth book that focuses on the mindset rather than just 'buy this stock'. Srikanth's frameworks are architecturally sound and life-changing.",
    rating: 5,
  },
  {
    name: "Ananya R.",
    role: "Portfolio Manager",
    text: "The '30 Secrets' alone are worth ten times the price of the book. It's the first time I've seen complex financial theory made so accessible and tactile.",
    rating: 5,
  },
  {
    name: "Rohan D.",
    role: "Real Estate Developer",
    text: "As someone in the industry, I can vouch for the Asset Architecture lessons. Meticulous and high-converting strategies for any serious investor.",
    rating: 5,
  },
  {
    name: "Priya M.",
    role: "Creative Director",
    text: "The aesthetic of the physical book is stunning, but the content is even more powerful. It's like having a private mentor in your pocket.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-4xl font-serif text-white mb-4 md:mb-6">Voice of the Collection</h2>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">Join thousands of first-generation wealth builders.</p>
      </div>

      <div className="flex gap-4 md:gap-6 animate-marquee pause-hover">
        {[...reviews, ...reviews].map((review, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-[280px] md:w-[400px] glass p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-white/5"
          >
            <div className="flex gap-1 mb-3 md:mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="text-gold-400 fill-gold-400 w-3 h-3 md:w-3.5 md:h-3.5" />
              ))}
            </div>
            <p className="text-slate-300 mb-4 md:mb-6 italic leading-relaxed text-sm md:text-base">"{review.text}"</p>
            <div>
              <div className="text-white font-bold text-sm md:text-base">{review.name}</div>
              <div className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest">{review.role}</div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause-hover:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
