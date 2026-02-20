"use client";

export default function OrbitalSystem() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      {/* Central OTTO avatar */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#06B6D4] flex items-center justify-center glow-green">
          <span className="text-2xl font-bold text-[#0A2540] font-[Space_Grotesk]">
            O
          </span>
        </div>
      </div>

      {/* Orbit ring */}
      <div className="absolute inset-4 rounded-full border border-[#4CAF50]/15" />
      <div className="absolute inset-8 rounded-full border border-[#06B6D4]/10" />

      {/* Elon orb - Brain */}
      <div className="absolute inset-0 animate-orbit">
        <div className="w-10 h-10 rounded-full bg-[#06B6D4]/20 border border-[#06B6D4]/40 flex items-center justify-center text-sm glow-cyan">
          🧠
        </div>
      </div>

      {/* Gary orb - Hustle */}
      <div className="absolute inset-0 animate-orbit-reverse">
        <div className="w-10 h-10 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/40 flex items-center justify-center text-sm glow-orange">
          🐀
        </div>
      </div>

      {/* Warren orb - Value */}
      <div className="absolute inset-0 animate-orbit-slow">
        <div className="w-10 h-10 rounded-full bg-[#CDDC39]/20 border border-[#CDDC39]/40 flex items-center justify-center text-sm">
          💰
        </div>
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-full bg-[#4CAF50]/5 blur-3xl animate-pulse-glow" />
    </div>
  );
}
