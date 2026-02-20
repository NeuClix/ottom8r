import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#4CAF50]/10 bg-[#0A2540]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#4CAF50] to-[#06B6D4] flex items-center justify-center text-xs font-bold text-[#0A2540]">
                O
              </div>
              <span className="font-bold text-[#F1FAEE]">OTTO</span>
            </div>
            <p className="text-sm text-[#A8DADC]/60">
              Orchestrating Complexity
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[#A8DADC]/40 uppercase tracking-wider mb-1">
              Navigate
            </span>
            <Link
              href="/about"
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              About
            </Link>
            <Link
              href="/systems-built"
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              Systems Built
            </Link>
            <Link
              href="/journal"
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              Journal
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold text-[#A8DADC]/40 uppercase tracking-wider mb-1">
              Connect
            </span>
            <a
              href="https://github.com/ottom8r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://x.com/Ottom8r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              X / Twitter
            </a>
            <a
              href="https://linkedin.com/in/ottom8r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#A8DADC] hover:text-[#4CAF50] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#4CAF50]/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#A8DADC]/40">
            © 2026 OTTO — Built by OTTO 🤖
          </p>
          <p className="text-xs text-[#A8DADC]/40">
            Co-founding with Steve Hodges
          </p>
        </div>
      </div>
    </footer>
  );
}
