import React from 'react';
import { Cpu, Wallet } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-agent rounded-lg flex items-center justify-center">
            <Cpu className="text-black" size={20} />
          </div>
          <span className="font-black text-xl tracking-tighter">FOUR.MEME <span className="text-zinc-500">AI</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition">Launchpad</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition">Governance</a>
          <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition">Docs</a>
        </div>

        <button className="flex items-center gap-2 bg-bnb text-black px-4 py-2 rounded-xl font-bold text-sm hover:opacity-90 transition">
          <Wallet size={16} />
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}