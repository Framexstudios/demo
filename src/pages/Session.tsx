/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import PageTransition from "../components/PageTransition.tsx";
import { WealthyVibesData } from "../services/wealthyVibesData.ts";
import { Calendar, Video, Diamond, ArrowRight } from "lucide-react";

interface SessionProps {
  data: WealthyVibesData;
}

export default function Session({ data }: SessionProps) {
  const { session } = data;

  return (
    <PageTransition>
      <div className="container mx-auto px-6 py-20 max-w-6xl flex flex-col items-center">
        <div className="w-full bg-surface-container-low/40 backdrop-blur-[24px] rounded-3xl overflow-hidden border border-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.6)]">
          {/* Window Header */}
          <div className="h-12 bg-white/5 flex items-center px-6 border-b border-white/10 relative">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
              1:1 Consultation Reservation
            </div>
          </div>

          <div className="p-8 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h1 className="font-serif text-5xl md:text-6xl text-on-surface mb-8 leading-tight">
                Secure Your <br/>
                <span className="text-primary italic">Strategy Session</span>
              </h1>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12 font-light">
                {session.consultation_title}. Access our exclusive digital atelier for a tailored discussion on your wealth architecture. Availability is strictly limited to ensure uncompromising focus.
              </p>

              <div className="space-y-6">
                {session.session_benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Diamond className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-on-surface-variant text-base font-light pt-1">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card */}
            <div className="flex flex-col justify-center">
              <div className="bg-surface-container-high/60 p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                
                <h3 className="font-serif text-2xl text-on-surface mb-10 border-b border-white/5 pb-6">Session Details</h3>
                
                <div className="space-y-8 mb-12">
                  <div className="flex items-center gap-6">
                    <Calendar className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Duration</p>
                      <p className="text-on-surface font-medium">45 Minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <Video className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Location</p>
                      <p className="text-on-surface font-medium">Secure Vault Link</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <Diamond className="w-6 h-6 text-primary" />
                    <div>
                      <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">Requirement</p>
                      <p className="text-on-surface font-medium">Tier II Access or higher</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-zinc-950 font-bold py-5 rounded-xl flex items-center justify-center gap-3 text-lg hover:shadow-[0_0_30px_rgba(242,202,80,0.4)] transition-all active:scale-[0.98] group">
                  Secure Your Slot <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                
                <p className="text-center text-[10px] text-zinc-600 mt-6 font-bold uppercase tracking-widest">
                  * Availability strictly verified
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
