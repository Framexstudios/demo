/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { NavItem } from "../services/wealthyVibesData.ts";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  navItems: NavItem[];
  brandName: string;
  founderImage: string;
}

export default function Navigation({ navItems, brandName, founderImage }: NavigationProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 py-4 sm:py-8 pointer-events-none">
        <div className="bg-zinc-900/60 backdrop-blur-[24px] rounded-full border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between px-4 sm:px-8 py-2 sm:py-3 w-full max-w-6xl pointer-events-auto gap-x-4 lg:gap-x-12">
          <Link to="/" className="font-serif italic text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent hover:opacity-80 transition-opacity whitespace-nowrap flex-shrink-0">
            {brandName}
          </Link>
          
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full hover:bg-white/5 ${
                    isActive ? "text-primary" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 border-b-2 border-primary rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-4">
            <Link to="/about" className="block w-7 h-7 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-primary/30 hover:border-primary transition-colors">
              <img 
                src={founderImage} 
                alt="Owner" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <button className="hidden sm:block bg-gradient-to-r from-primary to-primary-container text-zinc-950 font-bold px-6 py-2 rounded-md text-sm hover:shadow-[0_0_20px_rgba(242,202,80,0.3)] transition-all active:scale-95">
              Invest Now
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-40 lg:hidden bg-zinc-950/80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-surface-container border-l border-white/5 p-8 flex flex-col pt-32 gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-2">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 mb-4">The Atelier Guide</p>
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-2xl font-serif py-3 border-b border-white/5 transition-colors ${
                      location.pathname === item.path ? "text-primary italic" : "text-zinc-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              
              <div className="mt-auto space-y-6">
                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-zinc-950 font-bold py-4 rounded-xl text-lg shadow-2xl">
                  Invest Now
                </button>
                <div className="flex justify-between items-center px-2">
                  <span className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">Zurich • London</span>
                  <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
