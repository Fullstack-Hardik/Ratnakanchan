'use client';
import { useEffect, useRef } from 'react';

export default function BlurScrollContent({ html }: { html: string }) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Select all typical article elements
    const elements = contentRef.current.querySelectorAll('p, h2, h3, h4, img, ul, ol, blockquote');

    // Add initial blur class
    elements.forEach(el => {
      el.classList.add('blur-reveal');
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          // Optional: remove in-view if you want it to blur again when scrolling up
          // entry.target.classList.remove('in-view');
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [html]);

  return (
    <div 
      ref={contentRef}
      className="blog-article-content max-w-4xl mx-auto text-gray-700 font-light leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
