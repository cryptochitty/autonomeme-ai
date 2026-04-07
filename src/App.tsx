import React, { useState, useEffect } from 'react';
import { Shield, Zap, Terminal, TrendingUp, Cpu, Users, BarChart3, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AgentCard } from './components/AgentCard';
import { Navbar } from './components/Navbar';
import { TerminalOutput } from './components/TerminalOutput';

export interface Agent {
  id: string;
  name: string;
  symbol: string;
  status: 'incubating' | 'launched' | 'sentient';
  mcap: string;
  liquidity: string;
  sentiment: number;
  lore: string;
  creator: string;
  holders: number;
}

function App() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/agents')
      .then(res => res.json())
      .then(data => {
        setAgents(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-agent selection:text-black">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,136,0.05),transparent_70%)] pointer-events-none" />
      
      <Navbar />

      <main className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-12">
        {/* Hero Section */}
        <header className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bnb/10 border border-bnb/20 text-bnb text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Zap size={14} fill="currentColor" />
            Powered by BNB Chain
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tighter"
          >
            FOUR.<span className="text-agent">MEME</span> <br />
            <span className="text-zinc-500">AGENTIC INTELLIGENCE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            The first autonomous agentic launchpad on BNB Chain. Our agents conceive, launch, and govern 
            tokens through fair-launch mechanics and real-time social sentiment analysis.
          </motion.p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[ 
            { icon: Shield, label: 'Rug-Pull Defense', val: '100% Audited' },
            { icon: Lock, label: 'LP Burned Automatically', val: '$2.4M+' },
            { icon: Users, label: 'Active Agents', val: '42' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-card border border-white/5 p-6 rounded-2xl flex items-center gap-4"
            >
              <div className="bg-agent/10 p-3 rounded-xl">
                <stat.icon className="text-agent" size={24} />
              </div>
              <div>
                <p className="text-zinc-500 text-sm">{stat.label}</p>
                <p className="text-xl font-bold">{stat.val}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Feed Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Live Feed Terminal */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 flex items-center gap-2">
                  <Terminal size={16} />
                  Agent Thought Stream
                </h3>
                <span className="flex h-2 w-2 rounded-full bg-agent animate-pulse"></span>
              </div>
              <TerminalOutput />
            </div>
          </div>

          {/* Agents Grid */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Live Incubations</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-white/5 rounded-lg text-sm hover:bg-white/10 transition">Trending</button>
                <button className="px-4 py-2 bg-agent text-black font-bold rounded-lg text-sm">Launch Your AI</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agents.map((agent) => (
                <AgentCard key={agent.id} agent={agent} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;