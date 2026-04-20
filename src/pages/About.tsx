/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageTransition from "../components/PageTransition.tsx";
import { WealthyVibesData } from "../services/wealthyVibesData.ts";

interface AboutProps {
  data: WealthyVibesData;
}

export default function About({ data }: AboutProps) {
  const { about } = data;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-20 max-w-6xl">
        {/* Founder Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-40">
          <div className="lg:col-span-5 relative">
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/5">
              <img
                src={about.founder_image_url}
                alt={about.founder_name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-6 md:-right-10 bg-surface-container/80 backdrop-blur-[24px] p-8 rounded-xl border border-white/10 shadow-2xl w-72">
              <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-2 font-bold">Founder & Principal</p>
              <p className="font-serif text-xl text-primary">{about.founder_name}</p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-10 text-on-surface">
              Architecting <br/>
              <span className="italic text-primary-container opacity-80 decoration-primary/30 underline underline-offset-8">Digital</span> Wealth.
            </h1>
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left first-letter:text-primary">
              {about.biography}
            </p>
            <div className="flex items-center gap-6">
              <div className="h-[1px] w-12 bg-primary/40" />
              <p className="font-serif italic text-on-surface/60 text-xl tracking-wide">"Wealth is quiet. Rich is loud."</p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-40">
          <div className="bg-surface-container-high rounded-2xl p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[60px] group-hover:bg-primary/10 transition-colors duration-700" />
            <div className="relative z-10">
              <h2 className="font-serif text-3xl text-primary mb-6">The Mission</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {about.mission}
              </p>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest rounded-2xl p-12 border border-white/5 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="font-serif text-3xl text-primary mb-6">The Vision</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                {about.vision}
              </p>
            </div>
          </div>
        </section>

        {/* Credibility Points */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {about.credibility_points.map((point, i) => (
            <div 
              key={i} 
              className="bg-surface-container/40 backdrop-blur-[24px] border border-white/5 p-10 rounded-2xl text-center group hover:border-primary/30 transition-all duration-500"
            >
              <p className="font-serif text-5xl text-primary mb-4 group-hover:scale-110 transition-transform duration-500">{point.stat}</p>
              <p className="text-[11px] tracking-[0.3em] uppercase text-zinc-500 font-bold">{point.label}</p>
            </div>
          ))}
        </section>
      </div>
    </PageTransition>
  );
}
