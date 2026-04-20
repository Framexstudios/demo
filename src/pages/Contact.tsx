/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageTransition from "../components/PageTransition.tsx";
import { WealthyVibesData } from "../services/wealthyVibesData.ts";
import { Mail, Globe, Phone, Send, Instagram } from "lucide-react";

interface ContactProps {
  data: WealthyVibesData;
}

export default function Contact({ data }: ContactProps) {
  const { contact_payments } = data;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-20 max-w-7xl flex flex-col lg:flex-row gap-20 items-center justify-center min-h-[80vh]">
        {/* Left: Form */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-12">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">Connect with <br/><span className="italic text-primary">The Atelier</span></h1>
            <p className="font-body text-on-surface-variant text-xl max-w-md font-light leading-relaxed">Initiate a private dialogue regarding bespoke wealth curation or private vault access.</p>
          </div>
          
          <div className="bg-surface-container-low/40 backdrop-blur-[24px] rounded-2xl border border-white/5 p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            
            <form className="space-y-10 relative z-10">
              <div className="space-y-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Designation (Name)"
                    className="w-full bg-transparent border-0 border-b border-white/10 text-on-surface placeholder-zinc-600 focus:ring-0 focus:border-primary transition-colors py-4 px-0 font-body text-lg font-light"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Secure Transmission (Email)"
                    className="w-full bg-transparent border-0 border-b border-white/10 text-on-surface placeholder-zinc-600 focus:ring-0 focus:border-primary transition-colors py-4 px-0 font-body text-lg font-light"
                  />
                </div>
                <div className="relative">
                  <textarea
                    placeholder="Elaborate upon your request..."
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-white/10 text-on-surface placeholder-zinc-600 focus:ring-0 focus:border-primary transition-colors py-4 px-0 font-body text-lg font-light resize-none"
                  />
                </div>
              </div>
              
              <button
                type="button"
                className="w-full bg-gradient-to-r from-primary to-primary-container text-zinc-950 font-bold py-5 rounded-xl tracking-[0.2em] uppercase text-sm hover:shadow-[0_0_30px_rgba(242,202,80,0.3)] transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
              >
                Transmit Securely <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </section>

        {/* Right: Details */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center gap-16">
          <div className="space-y-10">
            <h2 className="font-serif text-3xl text-primary border-b border-white/5 pb-4 inline-block">Global Presence</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-lowest/50 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                <h3 className="font-serif text-xl mb-4 text-on-surface">Digital <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest ml-4">HQ</span></h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light">
                  {contact_payments.office_address}<br/>
                  {contact_payments.contact_phone}
                </p>
              </div>
              <div className="bg-surface-container-lowest/50 p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl mb-4 text-on-surface">Instagram <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest ml-4">Social</span></h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed font-light">Join the 10K+ readers in our digital community.</p>
                </div>
                <a 
                  href={contact_payments.instagram_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:translate-x-2 transition-transform"
                >
                  Follow Profile <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <h2 className="font-serif text-3xl text-primary border-b border-white/5 pb-4 inline-block">Accepted Tender</h2>
            <div className="flex flex-wrap gap-4">
              {contact_payments.accepted_payments.map((payment) => (
                <div 
                  key={payment} 
                  className="px-6 py-3 bg-surface-container-high/40 rounded-lg border border-white/5 text-zinc-400 font-bold text-[10px] tracking-[0.2em] uppercase hover:text-primary transition-colors cursor-default"
                >
                  {payment}
                </div>
              ))}
            </div>
            <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest italic animate-pulse">
              * Protected via industry-leading encryption.
            </p>
          </div>

          <div className="flex gap-10 items-center pt-8">
             <a href="#" className="text-zinc-500 hover:text-primary transition-all hover:scale-110"><Globe className="w-6 h-6" /></a>
             <a href="mailto:atelier@wealthyvibes.luxury" className="text-zinc-500 hover:text-primary transition-all hover:scale-110"><Mail className="w-6 h-6" /></a>
             <a href={contact_payments.instagram_url} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-primary transition-all hover:scale-110"><Instagram className="w-6 h-6" /></a>
             <a href={`tel:${contact_payments.contact_phone}`} className="text-zinc-500 hover:text-primary transition-all hover:scale-110"><Phone className="w-6 h-6" /></a>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
