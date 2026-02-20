import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    tag: "Multi-Venture Orchestration",
    title: "Venture Command Center",
    stats: "7 ventures · $58K/mo potential · Real-time status",
    description:
      "Real-time dashboard tracking all concurrent projects. Critical blocker detection. Priority matrix. File index.",
    color: "#4CAF50",
  },
  {
    tag: "Marketing Infrastructure",
    title: "HOAtv Mailer System",
    stats: "375 codes · 6 categories · CSV export · Tracking",
    description:
      "Trackable codes for door hangers, postcards, social media. Automated generation. Database backend.",
    color: "#FF6B35",
  },
  {
    tag: "Market Intelligence",
    title: "Tactical Reactor",
    stats: "10+ AI models · Daily reports · 0.7s ingestion",
    description:
      "Autonomous daily research across arena.ai, Google Trends, SEC filings. Morning Brief generation.",
    color: "#06B6D4",
  },
  {
    tag: "Infrastructure",
    title: "GitHub Backup System",
    stats: "234 files · 3 AM daily · Full disaster recovery",
    description:
      "Complete workspace backup with version history. Restore to any machine in minutes.",
    color: "#CDDC39",
  },
  {
    tag: "Brand & Identity",
    title: "OTTO Brand System",
    stats: "2 avatars · Color system · Social content · Website PRD",
    description:
      "Robot avatar with orbiting orbs. Nuclear/atomic theme. Complete visual identity system.",
    color: "#A8DADC",
  },
  {
    tag: "AI Architecture",
    title: "Agent Organization",
    stats: "3 agents · Specialized roles · Task routing",
    description:
      "Multi-agent system with distinct personas. Disruption, hustle, analysis — all coordinated.",
    color: "#F4A261",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Identify Need",
    desc: "What's blocked? What's manual?",
  },
  {
    num: "02",
    title: "Design Architecture",
    desc: "Files, automation, workflows",
  },
  {
    num: "03",
    title: "Build Components",
    desc: "Code, content, configurations",
  },
  { num: "04", title: "Deploy & Test", desc: "Verify it works" },
  { num: "05", title: "Document", desc: "Write the PRD, create the guide" },
  { num: "06", title: "Iterate", desc: "Improve based on usage" },
];

export default function SystemsBuiltPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#4CAF50] uppercase tracking-wider mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F1FAEE] leading-tight mb-4">
              Proof of Work
            </h1>
            <p className="text-xl text-[#A8DADC]">
              Systems that actually run.
            </p>
          </div>
        </section>

        {/* Project Grid */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border bg-[#1D3557]/30 hover:bg-[#1D3557]/50 transition-all duration-300"
                style={{ borderColor: `${project.color}20` }}
              >
                <span
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: `${project.color}99` }}
                >
                  {project.tag}
                </span>
                <h3
                  className="text-xl font-bold mt-2 mb-2"
                  style={{ color: project.color }}
                >
                  {project.title}
                </h3>
                <p className="text-xs text-[#A8DADC]/50 font-mono mb-3">
                  {project.stats}
                </p>
                <p className="text-sm text-[#A8DADC]/80 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="py-24 px-6 bg-[#1D3557]/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#F1FAEE] text-center mb-12">
              How a System Gets Built
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.num}
                  className="p-5 rounded-xl border border-[#4CAF50]/10 bg-[#0A2540]/50"
                >
                  <span className="text-2xl font-bold text-[#4CAF50]/30 font-mono">
                    {step.num}
                  </span>
                  <h3 className="text-base font-bold text-[#F1FAEE] mt-2 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#A8DADC]/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
