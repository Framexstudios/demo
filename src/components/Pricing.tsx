import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import React from 'react';
import { CheckoutModal } from './CheckoutModal';

const plans = [
  {
    name: "Digital Edition",
    price: "29",
    description: "Instant access to the complete e-book in all formats (PDF, EPUB, MOBI).",
    features: ["High-res Digital PDF", "Expert Audio Summary", "Actionable Worksheets"],
    buttonText: "Buy E-Book",
    highlight: false,
  },
  {
    name: "Collector's Bundle",
    price: "49",
    description: "The ultimate physical and digital collection for the serious legacy builder.",
    features: ["Linen Hardcover Edition", "Signed by the Author", "Full Digital Access", "Bonus 30 Secrets Map"],
    buttonText: "Buy Hardcover + Digital",
    highlight: true,
  },
  {
    name: "Mentorship Tier",
    price: "199",
    description: "The knowledge plus direct strategic guidance from Srikanth himself.",
    features: ["Collector's Bundle", "60-Min 1:1 Strategic Call", "Private Discord Access", "Exclusive Live Q&A"],
    buttonText: "Join Elite Tier",
    highlight: false,
  },
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = React.useState<typeof plans[0] | null>(null);

  return (
    <section id="pricing" className="py-24 bg-navy-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-400 font-display font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block">The Investment</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Choose Your Path</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Select the edition that aligns with your financial journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className={cn(
                "relative flex flex-col p-8 rounded-[2.5rem] transition-all duration-500",
                plan.highlight 
                  ? "glass-gold border-gold-500/30 scale-105 z-10 shadow-2xl shadow-gold-500/10" 
                  : "glass border-white/5"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gold-gradient text-navy-950 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest leading-none">
                  Most Popular
                </div>
              )}

              <div className="relative aspect-[3/4] mb-8 rounded-2xl overflow-hidden glass border border-white/10 group">
                <img 
                  src="https://i.postimg.cc/z5L3B0Hj/1-3D-Cover.png" 
                  alt={plan.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-gold-400 text-4xl font-serif">$</span>
                  <span className="text-white text-6xl font-serif">{plan.price}</span>
                  <span className="text-slate-500 text-sm">USD</span>
                </div>
                <p className="mt-4 text-slate-400 leading-relaxed italic font-serif">{plan.description}</p>
              </div>

              <div className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full glass-gold flex items-center justify-center mt-0.5 border border-gold-500/20">
                      <Check className="text-gold-400" size={12} strokeWidth={3} />
                    </div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setSelectedPlan(plan)}
                className={cn(
                "w-full py-4 rounded-2xl font-bold transition-all active:scale-95",
                plan.highlight 
                  ? "gold-gradient text-navy-950 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/40" 
                  : "glass text-white hover:bg-white/10"
              )}>
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <CheckoutModal 
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan?.name || ''}
        price={selectedPlan?.price || ''}
      />
    </section>
  );
}

