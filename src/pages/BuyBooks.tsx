/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageTransition from "../components/PageTransition.tsx";
import { WealthyVibesData } from "../services/wealthyVibesData.ts";
import { ShieldCheck, ShoppingBag } from "lucide-react";

interface BuyBooksProps {
  data: WealthyVibesData;
}

export default function BuyBooks({ data }: BuyBooksProps) {
  const { buy_books } = data;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12 border-b border-white/5 pb-16">
          <div className="max-w-2xl">
            <h1 className="font-serif text-5xl md:text-7xl text-on-surface mb-8 tracking-tight">The Library of Wealth</h1>
            <p className="font-body text-on-surface-variant text-xl leading-relaxed font-light tracking-wide">
              Curated volumes for the discerning architect of capital. Each piece is selected to refine strategy and elevate financial acumen.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container-high/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/5 flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400">Vault Secure</p>
            </div>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {buy_books.store_inventory.map((book) => (
            <article 
              key={book.id} 
              className="bg-surface-container-low/40 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden flex flex-col group hover:border-primary/20 transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.4)]"
            >
              <div className="p-8 pb-0">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden group-hover:scale-[1.02] transition-transform duration-700 shadow-2xl">
                  <img
                    src={book.cover_url}
                    alt={book.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 z-20 bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/10">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-[9px] font-bold text-primary tracking-[0.2em] uppercase">{book.checkout_badge_text}</span>
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-serif text-3xl mb-3 text-on-surface">{book.title}</h3>
                <p className="text-zinc-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">{book.author}</p>
                <p className="text-on-surface-variant text-base leading-relaxed mb-8 flex-grow line-clamp-3 font-light">
                  {book.short_description}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 pt-8 border-t border-white/5">
                  <span className="font-serif text-2xl sm:text-3xl text-on-surface tracking-tighter">{book.price}</span>
                  <button className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-container text-zinc-950 px-6 sm:px-8 py-3 rounded-md text-[11px] sm:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(242,202,80,0.5)] transition-all active:scale-95">
                    Add to Vault <ShoppingBag className="w-4 h-4 flex-shrink-0" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </PageTransition>
  );
}
