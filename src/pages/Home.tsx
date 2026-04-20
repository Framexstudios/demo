/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageTransition from "../components/PageTransition.tsx";
import TiltCard from "../components/TiltCard.tsx";
import { WealthyVibesData } from "../services/wealthyVibesData.ts";
import { Link } from "react-router-dom";

interface HomeProps {
  data: WealthyVibesData;
}

export default function Home({ data }: HomeProps) {
  const { home } = data;

  return (
    <PageTransition>
      <div className="relative flex-grow flex flex-col items-center justify-start lg:justify-center px-4 pt-4 sm:pt-10 pb-20 lg:py-20 min-h-[80vh]">
        {/* Ambient Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen opacity-50" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-12 items-center gap-12 lg:gap-8">
          {/* Top/Left Book: Show as subtle accent on mobile */}
          <div className="lg:col-span-3 w-full max-w-[200px] lg:max-w-none mx-auto opacity-40 lg:opacity-100 scale-75 lg:scale-100">
            <TiltCard>
              <div className="w-full aspect-[3/4] rounded-md overflow-hidden border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] glass-panel group">
                <img
                  src={home.featured_books[0].cover_url}
                  alt={home.featured_books[0].title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6 bg-gradient-to-t from-surface-container-lowest to-transparent">
                  <p className="font-serif italic text-primary text-base lg:text-xl">{home.featured_books[0].title}</p>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Center Text */}
          <div className="lg:col-span-6 flex flex-col items-center text-center -mt-4 lg:mt-0">
            <div className="mb-4 flex items-center gap-2">
              <div className="w-8 h-[1px] bg-primary/30" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-primary font-bold">The Digital Atelier</span>
              <div className="w-8 h-[1px] bg-primary/30" />
            </div>
            <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-8xl tracking-tight mb-6 sm:mb-8 bg-gradient-to-br from-primary via-primary-fixed-dim to-primary-container bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(242,202,80,0.2)] leading-[1.1]">
              {data.brand_name.split(' ').map((word, i) => (
                <span key={i} className="block">{word}</span>
              ))}
            </h1>
            <p className="font-body text-base sm:text-xl md:text-2xl text-on-surface-variant font-light mb-10 sm:mb-12 tracking-wide max-w-[280px] sm:max-w-md mx-auto leading-relaxed">
              {home.hero_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0">
              <Link
                to="/buy-books"
                className="bg-gradient-to-r from-primary to-primary-container text-zinc-950 font-bold py-4 px-10 rounded-md text-base sm:text-lg shadow-[0_0_20px_rgba(242,202,80,0.3)] hover:shadow-[0_0_30px_rgba(242,202,80,0.5)] transition-all active:scale-95 text-center"
              >
                Buy Books
              </Link>
              <Link
                to="/session"
                className="bg-surface-variant/10 backdrop-blur-[12px] border border-white/5 text-primary font-bold py-4 px-10 rounded-md text-base sm:text-lg hover:bg-surface-variant/20 transition-all active:scale-95 text-center"
              >
                Book a Session
              </Link>
            </div>
          </div>

          {/* Bottom/Right Book: Show as subtle accent on mobile */}
          <div className="lg:col-span-3 w-full max-w-[200px] lg:max-w-none mx-auto opacity-40 lg:opacity-100 scale-75 lg:scale-100 hidden sm:block lg:block">
            <TiltCard>
              <div className="w-full aspect-[3/4] rounded-md overflow-hidden border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.8)] glass-panel group">
                <img
                  src={home.featured_books[1].cover_url}
                  alt={home.featured_books[1].title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 lg:p-6 bg-gradient-to-t from-surface-container-lowest to-transparent">
                  <p className="font-serif italic text-primary text-base lg:text-xl">{home.featured_books[1].title}</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
