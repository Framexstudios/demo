/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface FooterProps {
  brandName: string;
}

export default function Footer({ brandName }: FooterProps) {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-white/5 py-16 px-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
      <div className="font-serif italic text-lg font-light text-zinc-500 opacity-80">
        {brandName}
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 text-[11px] tracking-widest uppercase text-zinc-500 font-medium">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-primary transition-colors">Vault Security</a>
      </div>
      
      <div className="text-[11px] tracking-widest uppercase text-zinc-600 font-medium text-center">
        © 2026 {brandName}. The Digital Atelier of Zurich.
      </div>
    </footer>
  );
}
