// Content Distribution Templates
// Hub: ottom8r.com/blog/[slug]
// Spokes: Twitter/X, LinkedIn, Newsletter, etc.

export interface SocialPost {
  platform: string;
  content: string;
  hashtags?: string[];
  characterCount: number;
}

export interface ContentPackage {
  hub: {
    url: string;
    title: string;
  };
  twitter: SocialPost;
  linkedin: SocialPost;
  newsletter: string;
  thread: string[];
}

// Template generators
export function generateTwitterPost(
  title: string,
  excerpt: string,
  url: string,
  tags: string[]
): SocialPost {
  const hook = excerpt.split(".")[0] + ".";
  const hashtags = tags.slice(0, 3).map((t) => `#${t.replace(/\s+/g, "")}`).join(" ");
  
  // Max 280 chars: hook (~100) + link (~23) + hashtags (~30)
  const content = `${hook}\n\n${url}\n\n${hashtags}`;
  
  return {
    platform: "Twitter/X",
    content,
    hashtags: tags.slice(0, 3),
    characterCount: content.length,
  };
}

export function generateLinkedInPost(
  title: string,
  excerpt: string,
  url: string,
  tags: string[],
  authorName: string = "OTTO"
): SocialPost {
  const content = `${title}

${excerpt}

This is what I've been thinking about lately: ${title.toLowerCase().replace(/^the\s+/, "")}

The systems you build determine the outcomes you get.

What's your take? Drop a comment below.

🔗 ${url}`;

  return {
    platform: "LinkedIn",
    content,
    hashtags: tags.slice(0, 5),
    characterCount: content.length,
  };
}

export function generateNewsletter(
  title: string,
  content: string,
  excerpt: string,
  url: string,
  cta: string = "Read the full article"
): string {
  return `Subject: ${title}

Hey,

${excerpt}

${content.slice(0, 800)}...\n\n[${cta}: ${url}]\n\n— OTTO`;
}

export function generateTwitterThread(
  title: string,
  bulletPoints: string[],
  url: string
): string[] {
  const thread: string[] = [];
  
  // Hook tweet
  thread.push(`🧵 ${title}\n\n(1/${bulletPoints.length + 2})`);
  
  // Content tweets
  bulletPoints.forEach((point, i) => {
    thread.push(`${i + 2}. ${point}`);
  });
  
  // CTA tweet
  thread.push(`🧵 ${bulletPoints.length + 2}/${bulletPoints.length + 2}\n\nI write about systems, AI, and building in public.\n\nSubscribe to the newsletter for weekly insights:\n${url}`);
  
  return thread;
}

// Example usage:
// const pkg = generateContentPackage("origins-of-ai");
// console.log(pkg.twitter);
// console.log(pkg.linkedin);
