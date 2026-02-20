"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  value: string;
  label: string;
  sublabel: string;
}

export default function StatCard({ value, label, sublabel }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`p-6 rounded-xl bg-[#1D3557]/40 border border-[#4CAF50]/10 hover:border-[#4CAF50]/30 transition-all duration-500 hover:glow-green ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: "0.1s" }}
    >
      <div className="text-4xl font-bold text-[#4CAF50] font-[Space_Grotesk] mb-1">
        {value}
      </div>
      <div className="text-sm text-[#F1FAEE] font-medium">{label}</div>
      <div className="text-xs text-[#A8DADC]/60 mt-1">{sublabel}</div>
    </div>
  );
}
