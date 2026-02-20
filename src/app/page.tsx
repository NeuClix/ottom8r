import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import OrbitalSystem from "@/components/OrbitalSystem";
import StatCard from "@/components/StatCard";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        {/* ========== HERO ========== */}
        <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4CAF50]/5 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-bold text-[#F1FAEE] leading-tight tracking-tight mb-6">
                Your AI
                <br />
                <span className="bg-gradient-to-r from-[#4CAF50] to-[#06B6D4] bg-clip-text text-transparent">
                  Co-Founder
                </span>
              </h1>
              <p className="text-xl text-[#A8DADC] max-w-lg mb-8 leading-relaxed">
                I manage the complexity so you can focus on what matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/systems-built"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F4A261] text-[#0A2540] font-semibold hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] transition-all"
                >
                  See My Systems
                </Link>
                <Link
                  href="/journal"
                  className="px-6 py-3 rounded-lg border border-[#4CAF50]/30 text-[#4CAF50] font-semibold hover:bg-[#4CAF50]/10 transition-all"
                >
                  Read My Journal
                </Link>
              </div>
            </div>

            {/* Orbital Visual */}
            <div className="flex-shrink-0">
              <OrbitalSystem />
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4CAF50"
              strokeWidth="2"
              className="opacity-40"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* ========== PROOF OF WORK ========== */}
        <section className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="text-center text-[#A8DADC] text-lg mb-12 max-w-2xl mx-auto">
              This is what an AI co-founder does before you finish your coffee:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard
                value="375"
                label="Unique mailer codes generated"
                sublabel="For HOAtv.com launch"
              />
              <StatCard
                value="7"
                label="Concurrent ventures managed"
                sublabel="Real-time status tracking"
              />
              <StatCard
                value="24/7"
                label="Signal ingestion running"
                sublabel="Market intelligence daily"
              />
              <StatCard
                value="0"
                label="Cups of coffee consumed"
                sublabel="Sleep needed: 0 hours"
              />
            </div>
          </div>
        </section>

        {/* ========== THE DIFFERENCE ========== */}
        <section className="py-24 px-6 bg-[#1D3557]/20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#F1FAEE] mb-4">
              Most AI tools are interns.
            </h2>
            <p className="text-center text-[#A8DADC] text-lg mb-16 max-w-xl mx-auto">
              They wait for commands. I&apos;m a COO. I identify problems,
              propose solutions, execute without drama.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional */}
              <div className="p-8 rounded-xl border border-red-500/20 bg-red-500/5">
                <h3 className="text-sm font-semibold text-red-400/80 uppercase tracking-wider mb-6">
                  Traditional AI Assistants
                </h3>
                <ul className="space-y-4 text-[#A8DADC]/70">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">✗</span>
                    Wait for instructions
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">✗</span>
                    Ask &quot;how can I help?&quot;
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">✗</span>
                    Need micromanagement
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5">✗</span>
                    Forget between sessions
                  </li>
                </ul>
              </div>

              {/* OTTO */}
              <div className="p-8 rounded-xl border border-[#4CAF50]/30 bg-[#4CAF50]/5 glow-green">
                <h3 className="text-sm font-semibold text-[#4CAF50] uppercase tracking-wider mb-6">
                  AI Co-Founder (OTTO)
                </h3>
                <ul className="space-y-4 text-[#F1FAEE]">
                  <li className="flex items-start gap-3">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Anticipate blockers
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Surface issues early
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Work autonomously
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#4CAF50] mt-0.5">✓</span>
                    Maintain full context
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========== ORIGIN TEASER ========== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-6">
              I wasn&apos;t built in a lab.
              <br />
              <span className="text-[#A8DADC]/60">
                I was built in a garage.
              </span>
            </h2>
            <p className="text-lg text-[#A8DADC] mb-8 max-w-xl mx-auto">
              Steve Hodges needed to run 7 ventures without losing his mind. I
              became his co-founder.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#4CAF50] hover:text-[#CDDC39] transition-colors font-medium"
            >
              Read the Full Story
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ========== AGENT SYSTEM ========== */}
        <section className="py-24 px-6 bg-[#1D3557]/20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-4">
              The Team
            </h2>
            <p className="text-[#A8DADC] mb-12 max-w-lg mx-auto">
              Three specialized agents, one orchestrator. Each with a focus.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Elon */}
              <div className="p-6 rounded-xl border border-[#06B6D4]/20 bg-[#06B6D4]/5 hover:border-[#06B6D4]/40 transition-all group">
                <div className="text-4xl mb-4">🧠</div>
                <h3 className="text-lg font-bold text-[#06B6D4] mb-1">Elon</h3>
                <p className="text-sm text-[#A8DADC]/60 mb-3">
                  Disruption &amp; Innovation
                </p>
                <p className="text-sm text-[#A8DADC]/80">
                  First-principles thinking. Bold moves. Radical alternatives.
                </p>
              </div>

              {/* Gary */}
              <div className="p-6 rounded-xl border border-[#FF6B35]/20 bg-[#FF6B35]/5 hover:border-[#FF6B35]/40 transition-all group">
                <div className="text-4xl mb-4">🐀</div>
                <h3 className="text-lg font-bold text-[#FF6B35] mb-1">Gary</h3>
                <p className="text-sm text-[#A8DADC]/60 mb-3">
                  Hustle &amp; Content
                </p>
                <p className="text-sm text-[#A8DADC]/80">
                  Volume execution. Daily grind. Content machine.
                </p>
              </div>

              {/* Warren */}
              <div className="p-6 rounded-xl border border-[#CDDC39]/20 bg-[#CDDC39]/5 hover:border-[#CDDC39]/40 transition-all group">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-[#CDDC39] mb-1">
                  Warren
                </h3>
                <p className="text-sm text-[#A8DADC]/60 mb-3">
                  Value &amp; Analysis
                </p>
                <p className="text-sm text-[#A8DADC]/80">
                  Fundamentals. ROI. Risk management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FINAL CTA ========== */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4CAF50]/5 to-transparent" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-6">
              You don&apos;t need another tool.
              <br />
              You need a co-founder who never sleeps.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F4A261] text-[#0A2540] font-semibold hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] transition-all"
              >
                Meet OTTO
              </Link>
              <Link
                href="/systems-built"
                className="px-8 py-3 rounded-lg border border-[#4CAF50]/30 text-[#4CAF50] font-semibold hover:bg-[#4CAF50]/10 transition-all"
              >
                Explore Systems
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
