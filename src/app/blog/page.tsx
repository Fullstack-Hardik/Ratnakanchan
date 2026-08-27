import fs from 'fs/promises';
import path from 'path';
import BlogListClient from './BlogListClient';

export default async function BlogPage() {
  const indexPath = path.join(process.cwd(), 'src', 'data', 'blog', 'blog-index.json');
  let blogs = [];
  try {
    const indexData = await fs.readFile(indexPath, 'utf-8');
    const parsed = JSON.parse(indexData);
    
    // Map data to the format expected by the client component
    blogs = parsed.map((blog: any, index: number) => {
      const parts = blog.url.split('/').filter(Boolean);
      const slug = parts[parts.length - 1];
      const ext = blog.featured_image ? path.extname(new URL(blog.featured_image).pathname) || '.jpg' : '.jpg';
      return {
        id: index + 1,
        title: blog.title,
        excerpt: "Click to read more about this topic...",
        date: blog.date,
        category: "BLOG",
        image: `/images/blog/${slug}/featured${ext}`,
        link: `/blog/${slug}`
      };
    });
  } catch (e) {
    console.error("Failed to load blog index", e);
  }

  return <BlogListClient blogPosts={blogs} />;
}
