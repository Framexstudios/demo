import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Star, 
  X, 
  Mail, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  BookOpen,
  Library,
  User,
  ExternalLink,
  ChevronRight,
  Menu
} from 'lucide-react';
import { fetchWealthyData, STORE_DATABASE } from './data';

// --- Shared Components ---

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  key?: React.Key;
}

const GlassCard = ({ children, className = "", delay = 0 }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay, ease: [0.2, 0.8, 0.2, 1] }}
    className={`glass-panel rounded-2xl relative p-8 ${className}`}
  >
    {children}
  </motion.div>
);

const TiltBook = ({ book, intensity = 1 }: { book: any, intensity?: number }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / 10) * intensity;
    const rotateY = ((centerX - x) / 10) * intensity;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ 
        rotateX: rotate.x, 
        rotateY: rotate.y,
        y: [0, -10, 0] // Floating animation for hero
      }}
      transition={{ 
        rotateX: { type: "spring", stiffness: 300, damping: 20 },
        rotateY: { type: "spring", stiffness: 300, damping: 20 },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
      className="relative group cursor-pointer perspective-1000"
    >
      <div 
        className="w-full aspect-[3/4] rounded-r-lg shadow-2xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col justify-between relative"
        style={{ 
          background: book.image ? '#000' : `linear-gradient(135deg, ${book.aesthetic_hex}, #000)`,
        }}
      >
        {book.image ? (
          <img 
            src={book.image} 
            alt={book.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="p-8 h-full flex flex-col justify-between relative z-10 text-white">
            {/* Silhouette Effect (Representing the Millionaire Mindset head) */}
            {book.id === 'millionaire-mindset' && (
              <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
                 <div className="w-48 h-64 bg-gradient-to-t from-black via-transparent to-transparent absolute -bottom-10 rounded-full blur-2xl" />
                 <div className="relative w-32 h-40">
                    <div className="absolute inset-0 bg-atelier-gold/20 rounded-full blur-3xl animate-pulse" />
                    <User size={120} strokeWidth={0.5} className="text-atelier-gold/20" />
                 </div>
              </div>
            )}

            <div className="space-y-3 relative z-10">
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold" style={{ color: book.glow_hex }}>{book.author}</p>
              <h3 className="font-serif text-3xl leading-tight">{book.title}</h3>
              {book.subtitle && <p className="text-xs text-white/50 italic font-light leading-relaxed mt-2">{book.subtitle}</p>}
            </div>

            <div className="relative z-10 flex flex-col gap-4">
              <div className="h-[2px] w-12 rounded-full" style={{ backgroundColor: book.glow_hex }} />
              {book.price && <p className="text-atelier-gold font-serif text-xl tracking-widest">${book.price}</p>}
            </div>
          </div>
        )}
        
        {/* Decorative inner glow (overlay on image too) */}
        {!book.image && <div className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-20 pointer-events-none" style={{ backgroundColor: book.glow_hex }} />}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
      </div>
      
      {/* 3D Spine effect shadow */}
      <div className="absolute left-0 top-0 bottom-0 w-4 bg-black/80 rounded-l-sm shadow-inner z-20" />
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/20 z-30" />
    </motion.div>
  );
};

const Navigation = ({ links, onDemoClick }: { links: any[], onDemoClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 md:px-8 py-3 glass-nav rounded-full mx-auto mt-4 md:mt-6 max-w-6xl w-[95%] md:w-full">
        <Link to="/" onClick={handleScrollToTop} className="font-serif italic text-xl md:text-2xl tracking-tight text-atelier-ink whitespace-nowrap">Wealthy Vibes</Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center font-serif text-lg">
          {links.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              onClick={handleScrollToTop}
              className={`transition-colors whitespace-nowrap ${location.pathname === link.path ? 'text-atelier-gold' : 'text-atelier-ink/60 hover:text-atelier-gold'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onDemoClick}
            className="gilded-gradient px-4 md:px-6 py-2 rounded-full text-white font-medium text-xs md:text-sm tracking-wide hover:opacity-90 transition-opacity shadow-md whitespace-nowrap"
          >
            Book a Demo
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-atelier-ink hover:text-atelier-gold transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-atelier-bg/95 backdrop-blur-xl md:hidden pt-32 px-8 flex flex-col items-center gap-8"
          >
            {links.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={handleScrollToTop}
                className={`font-serif text-4xl italic transition-colors ${location.pathname === link.path ? 'text-atelier-gold' : 'text-atelier-ink/40'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px w-24 bg-atelier-gold/20 mt-8" />
            <p className="text-atelier-gold text-xs uppercase tracking-[0.4em] font-bold">The Strategic Protocol</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// --- Section Components (Recycled for Home and Standalone Pages) ---

const PhilosophySection = ({ data }: { data: any }) => (
  <section className="py-40 px-8 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-atelier-gold text-xs uppercase tracking-[0.3em] font-bold">The Philosophy</span>
          <h2 className="font-serif text-5xl text-atelier-ink leading-[1.1]">Where Wisdom Meets <span className="italic">Wealth.</span></h2>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl font-light text-atelier-ink/70 leading-relaxed italic border-l-2 border-atelier-gold/20 pl-12"
        >
          "{data.copy.home.about.paragraph}"
        </motion.p>
        <Link to="/about" className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-[0.3em] text-atelier-gold border-b border-atelier-gold/20 pb-1 hover:gap-4 transition-all group">
          View Full Philosophy <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl"
      >
        <img 
          src="https://picsum.photos/seed/wisdom/1200/1500" 
          alt="Sophisticated environment" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-atelier-ink/60 to-transparent" />
      </motion.div>
    </div>
  </section>
);

const ContactSection = ({ data, onDemoClick }: { data: any, onDemoClick: () => void }) => (
  <section className="py-40 px-8 bg-atelier-cream/30 border-t border-atelier-ink/5 relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
       <span className="text-atelier-gold text-xs uppercase tracking-[0.4em] font-bold">Strategic Presence</span>
       <h2 className="font-serif text-5xl md:text-6xl text-atelier-ink">{data.copy.home.contact.title}</h2>
       <p className="text-xl text-atelier-ink/60 font-light italic max-w-2xl mx-auto">
         Our ateliers are private sanctuaries. Dispatch an inquiry to begin your multi-generational cognitive architectural journey.
       </p>
       <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-10">
          <button 
            onClick={onDemoClick}
            className="gilded-gradient px-12 py-5 rounded-full text-white font-bold text-lg shadow-2xl hover:-translate-y-1 transition-all"
          >
            {data.copy.home.contact.cta}
          </button>
          <Link to="/contact" className="text-atelier-ink/40 hover:text-atelier-ink transition-colors font-serif italic text-xl border-b border-atelier-ink/10">
            View Regional Ateliers
          </Link>
       </div>
    </div>
  </section>
);

// --- Page Views ---

const HomePage = ({ data, onDemoClick }: { data: any, onDemoClick: () => void }) => (
  <main>
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center pt-24 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <span className="text-atelier-gold text-xs uppercase tracking-[0.4em] font-bold">The Flagship Release</span>
            <h1 className="font-serif text-6xl md:text-8xl leading-[1] text-atelier-ink tracking-tight">
              Generational <br/>
              <span className="italic text-atelier-gold">Wealth.</span>
            </h1>
          </div>
          <p className="font-sans text-xl text-atelier-ink/60 max-w-lg leading-relaxed font-light">
            Architecting the cognitive infrastructure for high-net-worth expansion. Master the mind to master the markets.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/books" className="gilded-gradient px-8 py-4 rounded-full text-white font-medium text-lg shadow-xl hover:-translate-y-1 transition-all duration-300">
              Browse Manuscripts
            </Link>
            <button onClick={onDemoClick} className="font-medium text-sm tracking-widest uppercase border-b border-transparent hover:border-atelier-gold transition-all pb-1 hidden sm:block">
              Secure Consultation
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative"
        >
          <div className="relative z-10 p-12 glass-panel rounded-[3.5rem] shadow-2xl rotate-3">
             <TiltBook book={data.copy.home.heroFeaturedBook} intensity={1.5} />
          </div>
          <div className="absolute -inset-10 bg-atelier-accent/20 blur-[100px] rounded-full -z-10 animate-pulse" />
        </motion.div>
      </div>
    </section>

    <PhilosophySection data={data} />

    {/* Author Biography */}
    <section className="py-40 px-8 bg-atelier-ink text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
             <img 
               src="https://picsum.photos/seed/founder/800/800" 
               alt={data.copy.home.founder.name}
               className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
               referrerPolicy="no-referrer"
             />
          </div>
        </motion.div>
        <div className="space-y-10">
          <div className="space-y-4">
             <span className="text-atelier-accent text-xs uppercase tracking-[0.4em] font-bold">The Visionary</span>
             <h2 className="font-serif text-5xl leading-tight">Meet <span className="italic">{data.copy.home.founder.name.split(' ')[0]}</span> <br/> {data.copy.home.founder.name.split(' ').slice(1).join(' ')}</h2>
          </div>
          <p className="text-xl text-white/60 font-light leading-relaxed font-sans">
            {data.copy.home.founder.bio}
          </p>
          <Link to="/about" className="flex items-center gap-3 font-serif italic text-lg text-atelier-accent group">
            Strategic Insights <ChevronRight className="group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="py-40 px-8 max-w-5xl mx-auto text-center space-y-12">
       <div className="flex justify-center gap-2">
         {[...Array(5)].map((_, i) => <Star key={i} className="fill-atelier-gold text-atelier-gold" size={24} />)}
       </div>
       <h3 className="font-serif text-4xl md:text-5xl italic leading-tight text-atelier-ink">
         "{data.clients.client.testimonial}"
       </h3>
       <div className="space-y-2">
         <p className="text-xl font-serif text-atelier-gold">{data.clients.client.name}, Founder of Wealthy Vibes</p>
         <span className="text-xs uppercase tracking-widest font-bold opacity-30">Metrics: {data.clients.client.revenue_impact}</span>
       </div>
    </section>

    <ContactSection data={data} onDemoClick={onDemoClick} />
  </main>
);

const BooksPage = ({ data }: { data: any }) => (
  <main className="pt-40 px-8 max-w-7xl mx-auto pb-40">
    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
      <div className="space-y-4">
        <span className="text-atelier-gold text-xs uppercase tracking-[0.4em] font-bold">The Shelf</span>
        <h2 className="font-serif text-6xl">Intellectual <span className="italic text-atelier-gold">Assets.</span></h2>
        <p className="text-atelier-ink/60 font-light max-w-md text-lg">Meticulously curated narratives for systematic financial scaling.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {data.store.library.map((book: any, i: number) => (
        <GlassCard key={book.id} className="mac-dots pt-16 group" delay={i * 0.1}>
          <div className="mb-10 flex justify-center">
            <div className="w-52">
              <TiltBook book={book} intensity={book.hover_intensity} />
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-start">
               <div className="space-y-1">
                  <h4 className="font-serif text-2xl group-hover:text-atelier-gold transition-colors">{book.title}</h4>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 italic">{book.author}</p>
               </div>
            </div>
            <p className="text-sm text-atelier-ink/60 font-light leading-relaxed h-12">
              {book.short_desc}
            </p>
            <button className="w-full py-4 bg-atelier-ink text-white rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:brightness-125 transition-all mt-6 shadow-xl">
              Acquire Entry
            </button>
          </div>
        </GlassCard>
      ))}
    </div>
  </main>
);

const AboutUsPage = ({ data }: { data: any }) => (
  <main className="pt-40 pb-40">
    <div className="px-8 max-w-4xl mx-auto space-y-20">
       <div className="space-y-6 text-center">
          <span className="text-atelier-gold text-xs uppercase tracking-[0.4em] font-bold">The Mandate</span>
          <h2 className="font-serif text-7xl md:text-8xl">The <span className="italic">Atelier.</span></h2>
       </div>
       <div className="aspect-video rounded-[3rem] overflow-hidden shadow-3xl">
          <img 
            src="https://picsum.photos/seed/library_large/1600/900" 
            className="w-full h-full object-cover"
            alt="Atelier Large"
            referrerPolicy="no-referrer"
          />
       </div>
       <div className="space-y-12">
          <p className="font-serif text-4xl leading-relaxed text-atelier-ink/80 italic">
            "Knowledge is not merely power; it is the fundamental architecture of generational endurance."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-xl font-light text-atelier-ink/60 leading-relaxed">
             <p>{data.copy.home.about.paragraph}</p>
             <p>Our philosophy extends beyond simple accumulation. We view wealth as a multi-generational steward of culture, influence, and systematic progress. Each asset in our library is selected for its ability to provide structural clarity in an increasingly chaotic global economy.</p>
          </div>
       </div>
    </div>
  </main>
);

const ContactPage = ({ data, onDemoClick }: { data: any, onDemoClick: () => void }) => (
  <main className="pt-40 pb-40">
    <div className="px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
       <div className="space-y-12">
          <div className="space-y-4">
             <span className="text-atelier-gold text-xs uppercase tracking-[0.4em] font-bold">The Registry</span>
             <h2 className="font-serif text-7xl">Secure <span className="italic">Access.</span></h2>
          </div>
          <div className="space-y-10">
             <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest font-bold opacity-30">Global HQ</p>
                <p className="font-serif text-3xl italic">{data.copy.home.contact.details}</p>
             </div>
             <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest font-bold opacity-30">Dispatch Desk</p>
                <p className="font-serif text-3xl italic">{data.copy.home.contact.email}</p>
             </div>
             <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest font-bold opacity-30">Strategic Support</p>
                <p className="font-serif text-3xl italic">+1 (555) VAL-WEALTH</p>
             </div>
          </div>
       </div>
       <GlassCard className="p-16 rounded-[4rem] bg-atelier-cream/50">
          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); alert("Inquiry Dispatched Successfully."); }}>
            <h3 className="font-serif text-3xl">Secure Your Advantage</h3>
            <div className="space-y-8">
              <input type="text" placeholder="Full Legal Name" className="w-full bg-transparent border-0 border-b border-atelier-ink/10 py-6 outline-none focus:border-atelier-gold transition-colors font-serif text-xl italic" required />
              <input type="email" placeholder="Professional Email" className="w-full bg-transparent border-0 border-b border-atelier-ink/10 py-6 outline-none focus:border-atelier-gold transition-colors font-serif text-xl italic" required />
              <textarea placeholder="Portfolio Objectives" rows={3} className="w-full bg-transparent border-0 border-b border-atelier-ink/10 py-6 outline-none focus:border-atelier-gold transition-colors font-serif text-xl italic resize-none" required />
            </div>
            <button type="submit" className="w-full gilded-gradient py-6 rounded-full text-white font-bold text-lg uppercase tracking-widest shadow-2xl hover:brightness-110">
              Submit Dispatch
            </button>
          </form>
       </GlassCard>
    </div>
  </main>
);

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    fetchWealthyData().then(setData);
  }, []);

  if (!data) return <div className="min-h-screen bg-atelier-bg flex items-center justify-center font-serif italic text-2xl animate-pulse">Syncing the Vault...</div>;

  return (
    <Router>
      <div className="min-h-screen selection:bg-atelier-accent selection:text-atelier-gold">
        <Navigation links={data.navigation} onDemoClick={() => setIsDemoOpen(true)} />

        <Routes>
          <Route path="/" element={<HomePage data={data} onDemoClick={() => setIsDemoOpen(true)} />} />
          <Route path="/books" element={<BooksPage data={data} />} />
          <Route path="/about" element={<AboutUsPage data={data} />} />
          <Route path="/contact" element={<ContactPage data={data} onDemoClick={() => setIsDemoOpen(true)} />} />
        </Routes>

        {/* Footer */}
        <footer className="py-32 px-8 bg-atelier-cream/20 border-t border-atelier-ink/5">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="space-y-8">
              <h4 className="font-serif italic text-3xl">Wealthy Vibes</h4>
              <p className="text-sm text-atelier-ink/50 leading-relaxed font-light">
                Reprogramming the modern investor for exponential scalability. Intellectual assets for the chosen few.
              </p>
            </div>
            <div className="space-y-8">
              <h5 className="font-bold text-xs uppercase tracking-[0.3em] opacity-40">The Atelier</h5>
              <div className="space-y-4 text-sm text-atelier-ink/60">
                <p className="flex items-center gap-3"><Mail size={16} className="text-atelier-gold" /> {data.copy.home.contact.email}</p>
                <p className="flex items-center gap-3"><MapPin size={16} className="text-atelier-gold" /> {data.copy.home.contact.details}</p>
              </div>
            </div>
            <div className="space-y-8">
              <h5 className="font-bold text-xs uppercase tracking-[0.3em] opacity-40">Navigation</h5>
              <ul className="space-y-4 text-sm text-atelier-ink/60 font-serif italic text-lg">
                {data.navigation.map((link: any) => (
                  <li key={link.path}><Link to={link.path} className="hover:text-atelier-gold transition-colors">{link.name}</Link></li>
                ))}
              </ul>
            </div>
            <div className="space-y-8 flex flex-col justify-between items-end">
               <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full border border-atelier-ink/10 flex items-center justify-center hover:bg-atelier-ink hover:text-white transition-all"><BookOpen size={20} /></a>
                  <a href="#" className="w-12 h-12 rounded-full border border-atelier-ink/10 flex items-center justify-center hover:bg-atelier-ink hover:text-white transition-all"><Library size={20} /></a>
               </div>
               <p className="text-[10px] text-atelier-ink/30 uppercase tracking-[0.3em] font-bold">
                 &copy; 2026 Wealthy Vibes. Intellectual Property of FrameX Studios.
               </p>
            </div>
          </div>
        </footer>

        {/* Demo Modal */}
        <AnimatePresence>
          {isDemoOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-8 bg-atelier-ink/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="max-w-2xl w-full bg-atelier-bg rounded-[4rem] p-16 relative shadow-3xl overflow-hidden"
              >
                <button 
                  onClick={() => setIsDemoOpen(false)}
                  className="absolute top-10 right-10 p-3 rounded-full hover:bg-atelier-ink/5 transition-colors"
                >
                  <X size={28} />
                </button>
                
                <div className="space-y-10">
                  <div className="space-y-4">
                    <span className="text-atelier-gold text-xs uppercase tracking-[0.4em] font-bold">Confidential Desk</span>
                    <h3 className="font-serif text-5xl">Wealth <span className="italic">Inquiry.</span></h3>
                  </div>
                  
                  <p className="text-2xl text-atelier-ink/60 font-light leading-relaxed italic">
                    Architect a bespoke cognitive protocol for your high-performance portfolio. Secure your elite advantage.
                  </p>
                  
                  <form className="space-y-8 pt-10" onSubmit={(e) => { e.preventDefault(); setIsDemoOpen(false); }}>
                    <div className="relative">
                      <input type="text" placeholder="Full Legal Name" className="w-full bg-transparent border-0 border-b border-atelier-ink/10 py-6 focus:ring-0 focus:border-atelier-gold transition-colors font-serif text-2xl italic placeholder:text-atelier-ink/20 outline-none" required />
                    </div>
                    <div className="relative">
                      <input type="email" placeholder="Professional Email" className="w-full bg-transparent border-0 border-b border-atelier-ink/10 py-6 focus:ring-0 focus:border-atelier-gold transition-colors font-serif text-2xl italic placeholder:text-atelier-ink/20 outline-none" required />
                    </div>
                    <button type="submit" className="w-full py-6 gilded-gradient rounded-full text-white font-bold text-lg uppercase tracking-widest shadow-2xl hover:opacity-90 transition-opacity">
                      Dispatch Inquiry
                    </button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .perspective-1000 > div {
            transform-style: preserve-3d;
          }
          .mac-dots::before {
            content: '';
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: #ff5f56;
            box-shadow: 16px 0 0 #ffbd2e, 32px 0 0 #27c93f;
            position: absolute;
            top: 20px;
            left: 20px;
          }
          .shadow-3xl {
            box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.5);
          }
        `}</style>
      </div>
    </Router>
  );
}
