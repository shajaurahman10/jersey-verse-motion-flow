
import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (20 + Math.random() * 15) + 's';
      particle.style.animation = `particle-drift ${20 + Math.random() * 15}s linear infinite`;
      
      container.appendChild(particle);

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 35000);
    };

    const interval = setInterval(createParticle, 1500);
    
    // Create initial particles
    for (let i = 0; i < 8; i++) {
      setTimeout(createParticle, i * 200);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
};

export default ParticleBackground;
