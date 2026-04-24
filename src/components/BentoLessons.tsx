import { motion } from 'motion/react';
import { Target, TrendingUp, Wallet, ShieldCheck, Landmark, BrainCircuit } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const lessons = [
  {
    title: "Early Foundations",
    description: "Rising from analytical finance to identify a fatal flaw in contemporary advisory: the obsession with velocity over veracity.",
    icon: Landmark,
    size: "lg",
  },
  {
    title: "20+ Years Curation",
    description: "A two-decade trajectory from economic observation to becoming a definitive voice in strategic wealth preservation.",
    icon: TrendingUp,
    size: "sm",
  },
  {
    title: "The Archive",
    description: "A private library of seminal works that shaped the ideology of systemic wealth and legacy building.",
    icon: ShieldCheck,
    size: "sm",
  },
  {
    title: "The Pivot to Authorship",
    description: "Translating years of practitioner expertise into heirloom texts designed to be studied and passed down through generations.",
    icon: BrainCircuit,
    size: "md",
  },
  {
    title: "Asset Architecture",
    description: "The transition from chaotic accumulation to a meticulous selection of assets that define true affluence.",
    icon: Target,
    size: "sm",
  },
  {
    title: "Legacy Mindset",
    description: "Engaging with complex systems to move beyond 'quick fixes' toward foundational manuals for building a lasting financial legacy.",
    icon: Wallet,
    size: "lg",
  },
];

export function BentoLessons() {
  return (
    <section id="lessons" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-gold-400 font-display font-medium uppercase tracking-[0.3em] text-[10px] mb-4 block">The Narrative</span>
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Architecture of a Mind</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed italic font-serif">
          "The amateur seeks to collect everything; the master seeks only to retain what is essential."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]">
        {lessons.map((lesson, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={cn(
              "group relative overflow-hidden rounded-[2rem] glass p-8 border border-white/5 hover:border-gold-500/20 transition-all duration-500",
              lesson.size === 'lg' && "md:col-span-2",
              lesson.size === 'md' && "lg:col-span-1"
            )}
          >
            <div className="absolute top-0 right-0 p-8 text-gold-500/10 group-hover:text-gold-500/20 transition-colors">
              <lesson.icon size={120} strokeWidth={1} />
            </div>
            
            <div className="relative z-10 flex flex-col h-full bg-transparent">
              <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <lesson.icon className="text-gold-400" size={24} />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-white mb-4">{lesson.title}</h3>
              <p className="text-slate-400 leading-relaxed font-sans">{lesson.description}</p>
            </div>
            
            {/* Hover Tilt Effect Background */}
            <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/[0.02] transition-colors pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
