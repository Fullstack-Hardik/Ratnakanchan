'use client';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "Balancing Shadows and Highlights in Diamond Jewelry Photos",
    excerpt: "Capturing the brilliance of diamond jewelry in photography is an art that requires careful control of lighting, shadows, and highlights.",
    date: "March 29, 2025",
    category: "BLOG",
    image: "https://ratnakanchan.com/wp-content/uploads/2025/01/before_after.jpg",
    link: "https://ratnakanchan.com/balancing-shadows-and-highlights-in-diamond-jewelry-photos/"
  },
  {
    id: 2,
    title: "Achieving Color Accuracy in Diamond Jewelry Photography",
    excerpt: "Achieving accurate color representation in diamond jewelry photography is essential for showcasing the true beauty and quality of each piece.",
    date: "March 28, 2025",
    category: "BLOG",
    image: "https://ratnakanchan.com/wp-content/uploads/2025/03/Steven-Stone-Alex-05-Ring-5-568.jpg",
    link: "https://ratnakanchan.com/achieving-color-accuracy-in-diamond-jewelry-photography/"
  },
  {
    id: 3,
    title: "How High-Quality Jewelry Images Can Boost Your Online Sales",
    excerpt: "In the competitive world of e-commerce, visuals play a crucial role in attracting and converting customers.",
    date: "March 22, 2025",
    category: "BLOG",
    image: "https://ratnakanchan.com/wp-content/uploads/2025/02/PBDW-NI0001__001-012-00035__NI89__Cam__profile.jpg",
    link: "https://ratnakanchan.com/how-high-quality-jewelry-images-can-boost-your-online-sales/"
  },
  {
    id: 4,
    title: "The benefits of using jewelry rendering services",
    excerpt: "In today's competitive jewelry market, captivating visuals are paramount. A stunning photograph can draw a customer in, but a high-quality",
    date: "February 1, 2025",
    category: "BLOG",
    image: "https://ratnakanchan.com/wp-content/uploads/2025/02/IMG_1761.jpg",
    link: "https://ratnakanchan.com/the-benefits-of-using-jewelry-rendering-services/"
  },
  {
    id: 5,
    title: "Different types of jewelry rendering services",
    excerpt: "Jewelry rendering is a game-changer for the jewelry industry, allowing designers and businesses to showcase their creations in stunning, lifelike",
    date: "January 31, 2025",
    category: "BLOG",
    image: "https://ratnakanchan.com/wp-content/uploads/2025/01/Banner01.jpg",
    link: "https://ratnakanchan.com/different-types-of-jewelry-rendering-services/"
  },
  {
    id: 6,
    title: "Why Invest in Professional Jewelry Retouching?",
    excerpt: "In the world of jewelry, presentation is paramount. A single, captivating image can be the difference between a sale and",
    date: "January 30, 2025",
    category: "BLOG",
    image: "https://ratnakanchan.com/wp-content/uploads/2025/01/01.jpg",
    link: "https://ratnakanchan.com/why-invest-in-professional-jewelry-retouching/"
  },
  {
    id: 7,
    title: "What Is Jewelry Retouching : A Deep Dive into Jewelry Retouching",
    excerpt: "In the sparkling world of jewelry, appearances are everything. From the mesmerizing glint of a diamond to the flawless curves of a golden ring",
    date: "January 3, 2025",
    category: "BLOG",
    image: "https://ratnakanchan.com/wp-content/uploads/2025/01/1-1.jpg",
    link: "https://ratnakanchan.com/what-is-jewelry-retouching-a-deep-dive-into-jewelry-retouching/"
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
        <a href={blogPosts[0].link} target="_blank" rel="noopener noreferrer" className="block">
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
        </a>
      </section>

      {/* Grid of older posts */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.slice(1).map((post, i) => (
            <a href={post.link} target="_blank" rel="noopener noreferrer" key={post.id} className="block group cursor-pointer flex flex-col h-full">
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
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
