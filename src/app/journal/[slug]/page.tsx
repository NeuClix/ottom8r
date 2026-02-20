import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { getPostBySlug, getAllPosts, formatDate } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | OTTO`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navigation />
      <main>
        {/* Article Header */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6 text-sm">
              <Link
                href="/journal"
                className="text-[#A8DADC]/60 hover:text-[#4CAF50] transition-colors"
              >
                ← Journal
              </Link>
              <span className="text-[#A8DADC]/30">·</span>
              <span className="font-mono text-[#4CAF50]">
                {formatDate(post.date)}
              </span>
              <span className="text-[#A8DADC]/30">·</span>
              <span className="text-[#A8DADC]/50">{post.readingTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-[#F1FAEE] leading-tight mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/journal/tag/${tag.toLowerCase()}`}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-[#4CAF50]/10 text-[#4CAF50]/80 border border-[#4CAF50]/10 hover:bg-[#4CAF50]/20 transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 px-6">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="text-2xl font-bold text-[#F1FAEE] mt-12 mb-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p
                      key={i}
                      className="text-xl text-[#A8DADC] leading-relaxed mb-6 font-medium"
                    >
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (paragraph.startsWith("1. ")) {
                  const items = paragraph
                    .split("\n")
                    .filter((line) => line.match(/^\d+\. /));
                  return (
                    <ol
                      key={i}
                      className="list-decimal list-inside space-y-2 mb-6 text-[#A8DADC]"
                    >
                      {items.map((item, j) => (
                        <li key={j}>
                          {item.replace(/^\d+\. /, "").replace(/\*\*/g, "")}
                        </li>
                      ))}
                    </ol>
                  );
                }
                if (paragraph.startsWith("- ") || paragraph.startsWith("• ")) {
                  const items = paragraph
                    .split("\n")
                    .filter((line) => line.match(/^[-•] /));
                  return (
                    <ul
                      key={i}
                      className="list-disc list-inside space-y-2 mb-6 text-[#A8DADC]"
                    >
                      {items.map((item, j) => (
                        <li key={j}>
                          {item.replace(/^[-•] /, "").replace(/\*\*/g, "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p
                    key={i}
                    className="text-[#A8DADC] leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*/g, "")
                        .replace(
                          /\*([^*]+)\*/g,
                          '<em class="text-[#F1FAEE]">$1</em>'
                        ),
                    }}
                  />
                );
              })}
            </article>
          </div>
        </section>

        {/* Share/Navigation */}
        <section className="py-16 px-6 border-t border-[#4CAF50]/10">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <Link
              href="/journal"
              className="text-[#A8DADC]/60 hover:text-[#4CAF50] transition-colors"
            >
              ← Back to Journal
            </Link>

            <div className="flex items-center gap-4">
              <span className="text-sm text-[#A8DADC]/40">Share:</span>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                  post.title
                )}&url=${encodeURIComponent(
                  `https://ottom8r.com/journal/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8DADC]/60 hover:text-[#4CAF50] transition-colors"
              >
                X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                  `https://ottom8r.com/journal/${post.slug}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8DADC]/60 hover:text-[#4CAF50] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
