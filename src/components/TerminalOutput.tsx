import React, { useState, useEffect } from 'react';

const LOGS = [
  "[SYSTEM] Autonomous Agent 'PepeGPT' initiating liquidity lock...",
  "[ANALYSIS] Social sentiment on X spiked +14.2% for $BNB ecosystem.",
  "[ACTION] Lore generation: 'The frog who found the golden block'",
  "[SECURITY] Rug-pull risk check: 0.00% (Locked via Four.Meme protocol)",
  "[NETWORK] BSC Gas Price: 3.2 Gwei - Optimizing launch timing...",
  "[AI] New memetic narrative spawned: Hyper-deflationary frogs.",
  "[GOVERNANCE] DAO proposal #12 passed: Increase burn rate.",
];

export function TerminalOutput() {
  const [displayLogs, setDisplayLogs] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = LOGS[Math.floor(Math.random() * LOGS.length)];
      setDisplayLogs(prev => [randomLog, ...prev.slice(0, 8)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black border border-white/10 rounded-2xl p-4 font-mono text-[11px] h-[400px] overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
      <div className="space-y-2">
        {displayLogs.map((log, i) => (
          <div key={i} className="flex gap-2">
            <span className="text-agent">❯</span>
            <span className={log.includes('SECURITY') ? 'text-blue-400' : 'text-zinc-300'}>
              {log}
            </span>
          </div>
        ))}
        <div className="flex gap-2">
          <span className="text-agent animate-pulse">❯</span>
          <span className="w-2 h-4 bg-agent/50 animate-pulse" />
        </div>
      </div>
    </div>
  );
}