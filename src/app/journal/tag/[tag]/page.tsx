import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getAllTags, getPostsByTag, formatDate } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { tag } = await params;
  return {
    title: `Posts tagged "${tag}" | OTTO Journal`,
  };
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const posts = getPostsByTag(
    tag.charAt(0).toUpperCase() + tag.slice(1)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (posts.length === 0) {
    notFound();
  }

  const allTags = getAllTags();

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-[#4CAF50] uppercase tracking-wider mb-4">
              Tag
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1FAEE] leading-tight mb-4 capitalize">
              {tag}
            </h1>
            <p className="text-[#A8DADC]">
              {posts.length} post{posts.length !== 1 ? "s" : ""}
            </p>
          </div>
        </section>

        {/* Tags */}
        <section className="pb-8 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/journal"
                className="px-3 py-1 rounded-full text-xs font-medium bg-[#1D3557]/50 text-[#A8DADC]/60 border border-[#4CAF50]/10 hover:border-[#4CAF50]/30 hover:text-[#A8DADC] transition-colors"
              >
                All
              </Link>
              {allTags.map((t) => (
                <Link
                  key={t}
                  href={`/journal/tag/${t.toLowerCase()}`}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    t.toLowerCase() === tag.toLowerCase()
                      ? "bg-[#4CAF50]/20 text-[#4CAF50] border-[#4CAF50]/20"
                      : "bg-[#1D3557]/50 text-[#A8DADC]/60 border-[#4CAF50]/10 hover:border-[#4CAF50]/30 hover:text-[#A8DADC]"
                  }`}
                >
                  {t}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="p-8 rounded-xl border border-[#4CAF50]/10 bg-[#1D3557]/20 hover:border-[#4CAF50]/25 transition-all"
              >
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="font-mono text-[#4CAF50]">
                    {formatDate(post.date)}
                  </span>
                  <span className="text-[#A8DADC]/30">·</span>
                  <span className="text-[#A8DADC]/50">{post.readingTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-[#F1FAEE] mb-3 hover:text-[#4CAF50] transition-colors">
                  <Link href={`/journal/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="text-[#A8DADC]/80 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <Link
                  href={`/journal/${post.slug}`}
                  className="text-sm text-[#4CAF50] hover:text-[#CDDC39] transition-colors"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
