import React from 'react';

export default function FreeDemoSection() {
  return (
    <section className="flex flex-col md:flex-row bg-[#727575]">
      <div className="w-full md:w-[45%] min-h-[400px] md:min-h-[500px] relative">
        <img src="/images/demo/free_demo.jpg" alt="Demo Model" className="absolute inset-0 w-full h-full object-contain p-4" />
      </div>
      <div className="w-full md:w-[55%] p-10 md:p-24 flex flex-col justify-center text-white">
        <h2 className="text-3xl md:text-5xl font-serif mb-6 tracking-wide text-white">Get A Free Demo</h2>
        <p className="text-sm text-gray-200 mb-10 max-w-lg leading-loose font-light">
          Apply for a free photo retouching trial. Send us your test image or CAD file and discover the world-class quality we provide. Fill the form below with your details and we will reach out to you.
        </p>
        
        <form 
          className="flex flex-col gap-6 max-w-lg"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const waText = `*New Free Demo Request*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
            window.open(`https://wa.me/919876543210?text=${waText}`, "_blank");
          }}
        >
          <input name="name" type="text" placeholder="Name *" className="w-full bg-white text-black px-5 py-4 text-sm focus:outline-none border border-transparent focus:border-black transition-colors" required />
          <input name="email" type="email" placeholder="Email *" className="w-full bg-white text-black px-5 py-4 text-sm focus:outline-none border border-transparent focus:border-black transition-colors" required />
          <textarea name="message" placeholder="Message *" rows={4} className="w-full bg-white text-black px-5 py-4 text-sm focus:outline-none resize-none border border-transparent focus:border-black transition-colors" required></textarea>
          <button type="submit" className="bg-black text-white uppercase tracking-widest text-xs font-semibold py-5 px-10 mt-4 w-fit hover:bg-gray-800 transition-colors">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
