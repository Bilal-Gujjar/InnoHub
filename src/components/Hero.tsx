import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transform Your Ideas into Reality with InnoHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Your Partner in Innovation and Growth
          </p>
          <button className="group bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition flex items-center space-x-2">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  );
}