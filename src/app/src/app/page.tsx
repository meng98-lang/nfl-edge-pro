import React from 'react';
import { Trophy, Activity, Wallet, ChevronRight, PieChart } from 'lucide-react';

const games = [
  { id: 1, home: 'PHI Eagles', away: 'DET Lions', hScore: 17, aScore: 14, time: 'Q3 11:45', spread: '-3.5', total: 'O 48.5', ml: '-190' },
  { id: 2, home: 'DEN Broncos', away: 'LV Raiders', hScore: 0, aScore: 3, time: 'Q1 08:12', spread: '+1.5', total: 'U 41.5', ml: '+125' },
  { id: 3, home: 'KC Chiefs', away: 'BAL Ravens', hScore: 24, aScore: 20, time: 'Final', spread: '-7.5', total: 'O 45.5', ml: '-320' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0e11] text-white font-sans">
      <header className="bg-[#161a1e] px-6 py-4 border-b-2 border-[#2b3139] flex justify-between items-center">
        <h1 className="text-2xl font-black text-[#4ade80] tracking-tighter italic">NFL EDGE PRO</h1>
        <div className="flex gap-4">
          <div className="bg-[#1e2329] px-4 py-1 rounded border border-[#2b3139] text-sm">
            Balance: <span className="text-[#4ade80] font-bold">$24,500.50</span>
          </div>
        </div>
      </header>

      <main className="grid grid-cols-12 h-[calc(100vh-70px)]">
        <aside className="col-span-2 bg-[#161a1e] border-r border-[#2b3139] p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 p-3 bg-[#1e2329] rounded border-l-4 border-[#4ade80]">
            <Activity size={18} className="text-[#4ade80]" />
            <span className="text-sm font-semibold">Live Games</span>
          </div>
          <div className="flex items-center gap-2 p-3 text-gray-400 hover:bg-[#1e2329] rounded transition-colors cursor-pointer">
            <Trophy size={18} />
            <span className="text-sm">NFL Regular</span>
          </div>
          <div className="flex items-center gap-2 p-3 text-gray-400 hover:bg-[#1e2329] rounded transition-colors cursor-pointer">
            <PieChart size={18} />
            <span className="text-sm">Stats Center</span>
          </div>
        </aside>

        <section className="col-span-7 p-6 overflow-y-auto bg-[#0b0e11]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <h2 className="text-lg font-bold">LIVE NOW</h2>
          </div>

          <div className="flex flex-col gap-4">
            {games.map(game => (
              <div key={game.id} className="bg-[#1e2329] rounded-xl border border-[#2b3139] overflow-hidden">
                <div className="p-4 flex justify-between border-b border-[#2b3139]">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <span className="w-6 h-6 bg-blue-900 rounded-full flex items-center justify-center text-[10px]">🛡️</span>
                      {game.home} <span className="bg-[#0b0e11] px-2 py-0.5 rounded text-[#4ade80]">{game.hScore}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <span className="w-6 h-6 bg-orange-900 rounded-full flex items-center justify-center text-[10px]">🦁</span>
                      {game.away} <span className="bg-[#0b0e11] px-2 py-0.5 rounded text-[#4ade80]">{game.aScore}</span>
                    </div>
                  </div>
                  <div className="text-right text-xs text-gray-400 uppercase tracking-widest">{game.time}</div>
                </div>
                <div className="grid grid-cols-3 p-4 gap-3">
                  <button className="bg-[#2b3139] hover:bg-[#4ade80] hover:text-black p-3 rounded-lg flex flex-col items-center transition-all group">
                    <span className="text-[10px] text-gray-400 group-hover:text-black/70">SPREAD</span>
                    <span className="font-bold">{game.spread}</span>
                  </button>
                  <button className="bg-[#2b3139] hover:bg-[#4ade80] hover:text-black p-3 rounded-lg flex flex-col items-center transition-all group">
                    <span className="text-[10px] text-gray-400 group-hover:text-black/70">TOTAL</span>
                    <span className="font-bold">{game.total}</span>
                  </button>
                  <button className="bg-[#2b3139] hover:bg-[#4ade80] hover:text-black p-3 rounded-lg flex flex-col items-center transition-all group">
                    <span className="text-[10px] text-gray-400 group-hover:text-black/70">MONEYLINE</span>
                    <span className="font-bold">{game.ml}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="col-span-3 bg-[#161a1e] border-l border-[#2b3139] p-6">
          <h3 className="font-bold mb-4 flex justify-between">
            BET SLIP <span className="text-[#4ade80] bg-[#4ade80]/10 px-2 rounded">1</span>
          </h3>
          <div className="bg-[#1e2329] rounded-lg p-4 border border-[#4ade80]">
            <div className="text-xs text-[#4ade80] font-bold mb-1">PHI Eagles -3.5</div>
            <div className="text-[10px] text-gray-400">NFL - Week 1 Regular</div>
            <div className="flex justify-between mt-4 items-center">
              <span className="text-sm text-gray-300">Wager</span>
              <div className="text-right">
                <span className="text-lg font-bold text-white">$500.00</span>
              </div>
            </div>
          </div>
          <div className="mt-8 space-y-2 border-t border-[#2b3139] pt-4">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Estimated Returns</span>
              <span className="text-white font-semibold">$954.55</span>
            </div>
            <button className="w-full bg-[#4ade80] text-black font-black py-4 rounded-xl mt-4 shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:scale-[1.02] transition-transform">
              PLACE BET
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

