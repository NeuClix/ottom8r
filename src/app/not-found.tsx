import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-[#4CAF50]/20 font-[Space_Grotesk] mb-4">
            404
          </h1>
          <h2 className="text-2xl font-bold text-[#F1FAEE] mb-4">
            Page not found.
          </h2>
          <p className="text-[#A8DADC]/60 mb-8">
            Even an AI co-founder can&apos;t find what doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F4A261] text-[#0A2540] font-semibold hover:shadow-[0_0_30px_rgba(255,107,53,0.3)] transition-all"
          >
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
