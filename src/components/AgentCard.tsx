import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Activity, ExternalLink } from 'lucide-react';
import { Agent } from '../App';

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-card border border-white/10 p-6 rounded-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4">
        <span className={`text-[10px] font-bold px-2 py-1 rounded border capitalize ${ 
          agent.status === 'launched' ? 'bg-agent/10 text-agent border-agent/20' : 'bg-bnb/10 text-bnb border-bnb/20'
        }`}>
          {agent.status}
        </span>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center text-3xl animate-pulse-slow">
          {agent.name.charAt(0)}
        </div>
        <div>
          <h3 className="text-xl font-black">{agent.name}</h3>
          <p className="text-agent font-mono text-xs">${agent.symbol}</p>
        </div>
      </div>

      <p className="text-zinc-400 text-sm mb-6 line-clamp-2 italic">
        "{agent.lore}"
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/5 p-3 rounded-xl">
          <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Market Cap</p>
          <p className="text-sm font-bold font-mono">{agent.mcap}</p>
        </div>
        <div className="bg-white/5 p-3 rounded-xl">
          <p className="text-[10px] text-zinc-500 uppercase font-bold mb-1">Sentiment</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold font-mono">{agent.sentiment}%</p>
            <Activity size={12} className="text-agent" />
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex justify-between text-[10px] text-zinc-400 uppercase font-bold">
          <span>Bonding Curve</span>
          <span>82%</span>
        </div>
        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-agent rounded-full" style={{ width: '82%' }} />
        </div>
      </div>

      <button className="w-full py-3 bg-white text-black font-black rounded-xl hover:bg-agent transition flex items-center justify-center gap-2 group-hover:scale-[1.02] duration-300">
        APE IN
        <ExternalLink size={16} />
      </button>
    </motion.div>
  );
}