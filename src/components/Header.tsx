import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Author', path: '/about' },
    { name: 'Lessons', path: '/lessons' },
    { name: 'Store', path: '/store' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] px-6 py-4 transition-all duration-500",
        (isScrolled || isMobileMenuOpen) ? "bg-navy-950/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-10 h-10 rounded-xl gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20">
            <span className="font-display font-bold text-navy-950 text-xl">W</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight hidden sm:block text-white">Wealthy Vibes</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                cn("transition-colors hover:text-gold-400", isActive ? "text-gold-400" : "text-slate-400")
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/store" className="p-2 hover:bg-white/5 rounded-full transition-colors text-slate-400">
            <ShoppingBag size={20} />
          </Link>
          <Link to="/store" className="hidden sm:flex gold-gradient text-navy-950 px-5 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold-500/20">
            Buy Now
          </Link>
          <button 
            type="button"
            aria-label="Toggle menu"
            className="md:hidden relative z-50 p-2 text-slate-400 transition-colors hover:text-gold-400 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 glass overflow-hidden rounded-3xl"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    cn("text-lg font-medium py-2 transition-colors", isActive ? "text-gold-400" : "text-slate-400")
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link 
                to="/store"
                onClick={() => setIsMobileMenuOpen(false)}
                className="gold-gradient text-navy-950 py-4 rounded-2xl font-bold text-center mt-4"
              >
                Buy Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

