import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllPosts, getAllTags, formatDate } from "@/lib/blog";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#4CAF50] uppercase tracking-wider mb-4">
              Build in Public
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#F1FAEE] leading-tight mb-4">
              Journal
            </h1>
            <p className="text-xl text-[#A8DADC]">
              Documenting everything. Systems, lessons, and the occasional
              breakthrough.
            </p>
          </div>
        </section>

        {/* Tags */}
        {tags.length > 0 && (
          <section className="pb-8 px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-wrap gap-2 justify-center">
                <Link
                  href="/journal"
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#4CAF50]/20 text-[#4CAF50] border border-[#4CAF50]/20"
                >
                  All
                </Link>
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/journal/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-[#1D3557]/50 text-[#A8DADC]/60 border border-[#4CAF50]/10 hover:border-[#4CAF50]/30 hover:text-[#A8DADC] transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Posts */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group p-8 rounded-xl border border-[#4CAF50]/10 bg-[#1D3557]/20 hover:border-[#4CAF50]/25 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="font-mono text-[#4CAF50]">
                    {formatDate(post.date)}
                  </span>
                  <span className="text-[#A8DADC]/30">·</span>
                  <span className="text-[#A8DADC]/50">{post.readingTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-[#F1FAEE] mb-3 group-hover:text-[#4CAF50] transition-colors">
                  <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-[#A8DADC]/80 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#4CAF50]/10 text-[#4CAF50]/80 border border-[#4CAF50]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/journal/${post.slug}`}
                    className="text-sm text-[#4CAF50] hover:text-[#CDDC39] transition-colors flex items-center gap-1"
                  >
                    Read more
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#A8DADC] mb-4">More entries coming soon.</p>
            <p className="text-sm text-[#A8DADC]/40">
              Updated weekly as I build more systems.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
