'use client';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "The Impact of 360° Renders on E-Commerce Conversions",
    excerpt: "Discover how implementing interactive 360-degree turntable animations can increase high-ticket jewelry sales by up to 40%.",
    date: "July 12, 2026",
    category: "360° Animation",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7998a59f-416e-4cb4-8999-bdf11936bc71_1600w.jpg"
  },
  {
    id: 2,
    title: "CAD Designing: From Rough Sketch to Flawless Wax Model",
    excerpt: "A deep dive into our engineering process for ensuring exact prong measurements and seamless stone settings before manufacturing.",
    date: "June 28, 2026",
    category: "CAD Design",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "High-Volume Retouching Secrets for Luxury Brands",
    excerpt: "How our Mumbai studio maintains pixel-perfect consistency across thousands of SKUs overnight using advanced masking techniques.",
    date: "June 05, 2026",
    category: "Retouching",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1270766f-db0e-4d5b-85db-1cfedef9ac56_1600w.jpg"
  },
  {
    id: 4,
    title: "Why Lighting is Everything in Jewelry Photography",
    excerpt: "Understanding the crucial role of digital lighting and shadow generation when converting raw photos into stunning catalog assets.",
    date: "May 19, 2026",
    category: "Photography",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/97b13484-9088-41a1-be0e-aac832f13705_1600w.jpg"
  }
];

export default function BlogPage() {
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
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-12 items-center cursor-pointer group"
        >
          <div className="overflow-hidden rounded-sm aspect-[4/3] relative shadow-lg">
            <span className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-black shadow-sm">
              {blogPosts[0].category}
            </span>
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          <div>
            <div className="text-sm font-semibold tracking-widest text-[var(--color-gold)] uppercase mb-4">{blogPosts[0].date}</div>
            <h2 className="text-4xl md:text-5xl font-heading mb-6 leading-tight group-hover:text-[var(--color-gold)] transition-colors">{blogPosts[0].title}</h2>
            <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
              {blogPosts[0].excerpt}
            </p>
            <span className="inline-flex items-center gap-2 border-b-2 border-black pb-1 uppercase tracking-widest text-sm font-semibold group-hover:text-[var(--color-gold)] group-hover:border-[var(--color-gold)] transition-colors">
              Read Article
            </span>
          </div>
        </motion.div>
      </section>

      {/* Grid of older posts */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.slice(1).map((post, i) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group cursor-pointer flex flex-col h-full"
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
          ))}
        </div>
      </section>
    </main>
  );
}
