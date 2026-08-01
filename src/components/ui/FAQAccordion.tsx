'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index}
            className="bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none hover:bg-stone-50 transition-colors"
            >
              <span className="text-lg font-medium text-stone-900 font-body">
                {item.question}
              </span>
              <Plus 
                className={`flex-shrink-0 text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} 
                size={24} 
              />
            </button>
            <div 
              className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-base text-stone-600 font-body leading-relaxed border-t border-stone-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
