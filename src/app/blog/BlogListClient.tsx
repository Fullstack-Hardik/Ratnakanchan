'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BlogListClient({ blogPosts }: { blogPosts: any[] }) {
  if (!blogPosts || blogPosts.length === 0) {
    return (
      <main className="pt-24 min-h-screen bg-white text-black flex items-center justify-center">
        <h1 className="text-3xl font-heading">No posts found.</h1>
      </main>
    );
  }

  const featuredPost = blogPosts[0];
  const olderPosts = blogPosts.slice(1);

  return (
    <main className="pt-24 min-h-screen bg-white text-black font-body">
      {/* Blog Header */}
      <section className="bg-gray-50 py-24 px-6 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex text-xs text-black/60 bg-white border border-gray-200 rounded-full px-4 py-2 items-center gap-2 font-medium tracking-widest uppercase mb-6 shadow-sm"
          >
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-gold)]"></span>
            Insights & News
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading mb-6 tracking-tight"
          >
            Our <span className="text-[var(--color-gold)] italic">Journal</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-600 font-light"
          >
            Expert insights on high-end jewelry visualization, E-Commerce strategies, and 3D rendering.
          </motion.p>
        </div>
      </section>

      {/* Featured Post (Latest) */}
      {featuredPost && (
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <Link href={featuredPost.link} className="block group">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm aspect-[4/3] relative shadow-lg">
                <span className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-sm">
                  {featuredPost.category}
                </span>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div>
                <div className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-4">{featuredPost.date}</div>
                <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight group-hover:text-[var(--color-gold)] transition-colors">{featuredPost.title}</h2>
                <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 border-b-2 border-black pb-1 uppercase tracking-widest text-sm font-semibold group-hover:text-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-colors">
                  Read Article
                </span>
              </div>
            </motion.div>
          </Link>
        </section>
      )}

      {/* Grid of older posts */}
      {olderPosts.length > 0 && (
        <section className="pb-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {olderPosts.map((post: any, i: number) => (
              <Link href={post.link} key={post.id} className="block group cursor-pointer flex flex-col h-full">
                <motion.article 
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col h-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-50 mb-6 rounded-sm shadow-md">
                    <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black shadow-sm">
                      {post.category}
                    </span>
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500 z-10"></div>
                  </div>
                  <div className="text-xs font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-3">{post.date}</div>
                  <h3 className="text-2xl font-heading mb-4 leading-snug group-hover:text-[var(--color-gold)] transition-colors">{post.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light mb-6 flex-grow">{post.excerpt}</p>
                  
                  <span className="mt-auto inline-flex items-center gap-2 border-b-2 border-transparent pb-1 uppercase tracking-widest text-xs font-semibold group-hover:text-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-colors">
                    Read Article
                  </span>
                </motion.article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
