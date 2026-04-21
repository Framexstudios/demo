/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageTransition from "../components/PageTransition.tsx";
import { WealthyVibesData } from "../services/wealthyVibesData.ts";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

interface AboutBooksProps {
  data: WealthyVibesData;
}

export default function AboutBooks({ data }: AboutBooksProps) {
  const { about_books } = data;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-20 max-w-7xl">
        <section className="flex flex-col lg:flex-row gap-20 items-center mb-40">
          <div className="flex-1">
            <h1 className="font-serif text-5xl md:text-8xl leading-tight text-on-surface mb-10">
              The Masterclass in <br/>
              <span className="text-primary italic">Wealth Mindset</span>.
            </h1>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-2xl mb-12 font-light tracking-wide">
              Decades of private wealth management, distilled. Discover our curated collection of literature designed to re-architect your financial perspective. Money management is not a task; it is an atelier.
            </p>
            <Link 
              to="/buy-books" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-container text-zinc-950 font-bold px-10 py-5 rounded-md hover:shadow-[0_0_30px_rgba(242,202,80,0.3)] transition-all active:scale-95 group"
            >
              Explore Collection
              <MoveRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <img
              src="https://picsum.photos/seed/wealthy-library/1000/800"
              alt="The Library of Wealth"
              className="relative z-10 w-full rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 grayscale hover:grayscale-0 border border-white/5"
              referrerPolicy="no-referrer"
            />
          </div>
        </section>

        <section>
          <div className="mb-16">
            <h2 className="font-serif text-4xl text-on-surface border-l-4 border-primary pl-10">The Syllabus</h2>
            <p className="text-zinc-500 mt-4 ml-10 tracking-[0.2em] uppercase text-xs font-bold">Curated volumes for the modern investor.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {about_books.learning_pillars.map((pillar, i) => (
              <div 
                key={i} 
                className={`p-12 rounded-2xl transition-all duration-700 border border-white/5 group ${
                  i === 0 ? "bg-surface-container-high md:col-span-2" : "bg-surface-container-low"
                }`}
              >
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <p className="text-primary text-[10px] tracking-[0.4em] uppercase font-bold mb-6">Volume {i + 1}</p>
                    <h3 className={`font-serif text-on-surface mb-6 ${i === 0 ? "text-4xl" : "text-2xl"}`}>{pillar.title}</h3>
                    <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="pt-10 flex justify-between items-end">
                    <p className="font-serif text-2xl tracking-tighter text-on-surface opacity-30">$145.00</p>
                    <Link to="/buy-books" className="text-primary hover:text-primary-container transition-colors flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
                      View Asset <MoveRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
