import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgroundImages = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1503454532315-17dd8c3cd2ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Images with Fade Effect */}
      {backgroundImages.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={bg}
            alt="African children supported by Shine Malawi"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}
      
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Empowering <span className="text-primary-orange">Malawi's</span> Future
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Transforming lives through education, nutrition, and sustainable development programs for Malawi's most vulnerable communities.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#involve" className="btn-primary">
            Get Involved
          </a>
          <a href="#programs" className="btn-secondary">
            Our Programs
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-orange rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-orange rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;