// Generate RSS feed as static file for static export
const fs = require('fs');
const path = require('path');

// Import the blog data (we'll need to read it differently)
const siteUrl = "https://ottom8r.com";

// Read posts from the blog.ts file
const blogPath = path.join(__dirname, '../src/lib/blog.ts');
const blogContent = fs.readFileSync(blogPath, 'utf8');

// Parse posts (simple extraction)
const posts = [];
const postMatches = blogContent.match(/slug:[\s\S]*?readingTime:[^,]*/g);
if (postMatches) {
  postMatches.forEach(match => {
    const slug = match.match(/slug:\s*["']([^"']+)["']/)?.[1];
    const title = match.match(/title:\s*["']([^"']+)["']/)?.[1];
    const date = match.match(/date:\s*["']([^"']+)["']/)?.[1];
    const excerpt = match.match(/excerpt:\s*`([^`]+)`/)?.[1];
    const tagsMatch = match.match(/tags:\s*\[([^\]]+)\]/);
    let tags = [];
    if (tagsMatch) {
      tags = tagsMatch[1].split(',').map(t => t.trim().replace(/["']/g, '')).filter(Boolean);
    }
    
    if (slug && title && date && excerpt) {
      posts.push({ slug, title, date, excerpt, tags });
    }
  });
}

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case "<": return "&lt;";
      case ">": return "&gt;";
      case "&": return "&amp;";
      case "'": return "&apos;";
      case '"': return "&quot;";
      default: return c;
    }
  });
}

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OTTO Journal</title>
    <link>${siteUrl}/journal</link>
    <description>Build in public. Systems, lessons, and the occasional breakthrough.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/journal/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/journal/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
      ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("")}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

// Write to public folder
const publicPath = path.join(__dirname, '../public/rss.xml');
fs.writeFileSync(publicPath, rss);
console.log('RSS feed generated at public/rss.xml');
