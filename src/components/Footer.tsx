import { Github, Linkedin, Zap } from "lucide-react";
import Link from "next/link";

export const Footer = () => (
  <footer className="relative bg-white pt-24 pb-12 overflow-hidden border-t-[12px] border-black">
    
    {/* CURSED ENERGY OVERLAY (Ink Bleeds & Halftones) */}
    <div className="absolute inset-0 z-0 pointer-events-none">
       {/* Rough ink texture in the corner */}
      <div
        className="absolute top-0 right-0 h-96 w-96 opacity-10"
        style={{ backgroundImage: "radial-gradient(#000 2px, transparent 0)", backgroundSize: "12px 12px" }}
      />
      {/* Heavy halftone screen */}
      <div className="absolute inset-0 opacity-[0.04]" 
           style={{ backgroundImage: `radial-gradient(#000 2px, transparent 0)`, backgroundSize: '10px 10px' }} />
    </div>

    <div className="relative z-10 mx-auto max-w-7xl px-6">
      <div className="grid md:grid-cols-12 gap-8 items-end">
        
        {/* PANEL 1: THE TITLE (Aggressive JJK Logo Style) */}
        <div className="md:col-span-7 space-y-4">
          <div className="inline-block bg-black text-white text-[10px] font-black tracking-[0.5em] px-3 py-1 mb-2">
            CONTACT // COLLABORATION
          </div>
          <h2 className="font-bebas text-7xl md:text-[10rem] leading-[0.8] tracking-tighter italic text-black uppercase">
            AYESHA <br />
            <span className="relative">
              ISLAM
              {/* Scratchy "Pen Strike" under the name */}
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-black skew-x-[-20deg]" />
            </span>
          </h2>
        </div>

        {/* PANEL 2: THE DATA (Technical Stats) */}
        <div className="md:col-span-5 flex flex-col gap-6 border-b-[6px] border-black pb-4">
           <div className="space-y-1">
             <p className="font-black text-[10px] uppercase tracking-widest text-black/70 flex items-center gap-2">
               <Zap size={10} fill="black" /> TypeScript · Node.js · PostgreSQL · Next.js
             </p>
             <p className="font-bold text-lg text-black leading-tight uppercase">
               Building reliable backend systems that turn fragmented data into useful products.
             </p>
           </div>
           
           <div className="flex gap-4">
             <a href="https://github.com/Ayesha-Islam" target="_blank" rel="noreferrer" aria-label="Ayesha Islam on GitHub" className="p-2 border-2 border-black text-black/70 hover:bg-black hover:text-white transition-all">
               <Github size={20} />
             </a>
             <a href="https://www.linkedin.com/in/ayesha-islam-b4b988212/" target="_blank" rel="noreferrer" aria-label="Ayesha Islam on LinkedIn" className="p-2 border-2 border-black text-black/70 hover:bg-black hover:text-white transition-all">
               <Linkedin size={20} />
             </a>
           </div>
        </div>
      </div>

      {/* PANEL 3: THE ACTION (The "Black Flash" Resume Button) */}
      <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col gap-1">
          <span className="font-black text-xs uppercase tracking-[0.4em] text-black">Inquiries</span>
          <a href="mailto:ayeshaislam.dev@gmail.com" className="text-2xl md:text-4xl font-bebas text-black hover:italic transition-all">
            ayeshaislam.dev@gmail.com
          </a>
        </div>

        <Link
          href="/contact"
          className="group relative px-12 py-6 bg-black text-white font-bebas text-3xl tracking-widest italic overflow-hidden transition-transform active:scale-95"
        >
          {/* Movement Lines Effect inside button */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity">
            <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,#fff_5px,#fff_10px)]" />
          </div>
          
          <span className="relative z-10 flex items-center gap-4">
             GET IN TOUCH →
          </span>

          {/* Hard Shadow / Offset Border */}
          <div className="absolute -inset-1 border-2 border-black -z-10 translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
        </Link>
      </div>

      {/* THE FOOTNOTE */}
      <div className="mt-24 pt-4 border-t-2 border-black flex justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-black/70">
        <span>FAISALABAD // PAKISTAN</span>
        <span className="text-black">© 2026 Ayesha Islam</span>
        <div className="flex gap-4">
        </div>
      </div>
    </div>
  </footer>
);
