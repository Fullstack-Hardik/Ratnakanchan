import fs from 'fs/promises';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlurScrollContent from '@/components/BlurScrollContent';

export async function generateStaticParams() {
  try {
    const indexPath = path.join(process.cwd(), 'src', 'data', 'blog', 'blog-index.json');
    const indexData = await fs.readFile(indexPath, 'utf-8');
    const blogs = JSON.parse(indexData);
    
    return blogs.map((blog: any) => {
      const parts = blog.url.split('/').filter(Boolean);
      return { slug: parts[parts.length - 1] };
    });
  } catch (e) {
    return [];
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const articleDir = path.join(process.cwd(), 'src', 'data', 'blog', 'articles', slug);
  let metadata: any;
  let htmlContent: string = '';

  try {
    const metaDataStr = await fs.readFile(path.join(articleDir, 'metadata.json'), 'utf-8');
    metadata = JSON.parse(metaDataStr);
    
    htmlContent = await fs.readFile(path.join(articleDir, 'content.html'), 'utf-8');
  } catch (e) {
    console.error(`Failed to load blog ${slug}:`, e);
    notFound();
  }

  // Rewrite image URLs to local paths
  metadata.images.forEach((img: any) => {
    if (img.type === 'content' || img.type === 'featured') {
      const localUrl = `/images/blog/${slug}/${img.local_filename}`;
      // Global replace for the original URL
      htmlContent = htmlContent.split(img.original_url).join(localUrl);
      
      // WordPress also has srcset which can contain other resolutions, but we downloaded the main one.
      // We can aggressively strip out srcset to prevent loading from the live site, 
      // or just leave it. It's safer to strip srcset attributes so it only uses our local image.
      htmlContent = htmlContent.replace(/srcset="[^"]*"/g, '');
      htmlContent = htmlContent.replace(/sizes="[^"]*"/g, '');
    }
  });

  const featuredImage = metadata.images.find((img: any) => img.type === 'featured')?.local_filename;
  const featuredImageUrl = featuredImage ? `/images/blog/${slug}/${featuredImage}` : '';

  return (
    <main className="pt-24 min-h-screen bg-white text-black font-body selection:bg-[var(--color-gold)] selection:text-white pb-32">
      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-6 pt-12 pb-8 text-center">
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-[var(--color-gold)] transition-colors mb-12"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Journal
        </Link>
        
        <div className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-6">
          {metadata.published_at}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading leading-tight mb-8">
          {metadata.title}
        </h1>
        
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600 font-medium">
          <span>By {metadata.author}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300"></span>
          <span>5 min read</span>
        </div>
      </section>

      {/* Featured Image */}
      {featuredImageUrl && (
        <section className="max-w-6xl mx-auto px-6 mb-16">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-xl">
            <img 
              src={featuredImageUrl} 
              alt={metadata.title}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      )}

      {/* Article Content with Blur Scroll Animation */}
      <section className="px-6">
        <BlurScrollContent html={htmlContent} />
      </section>
    </main>
  );
}
