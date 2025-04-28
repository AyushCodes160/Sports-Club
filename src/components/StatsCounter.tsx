import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  duration: number;
  label: string;
  icon?: React.ReactNode;
}

const StatsCounter: React.FC<{ items: CounterProps[] }> = ({ items }) => {
  return (
    <div className="bg-blue-700 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <Counter 
              key={index} 
              end={item.end} 
              duration={item.duration} 
              label={item.label} 
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Counter: React.FC<CounterProps> = ({ end, duration, label, icon }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          let startTime: number;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration, hasAnimated]);
  
  return (
    <div ref={counterRef} className="text-center text-white">
      {icon && <div className="flex justify-center mb-2">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold mb-2">{count}+</div>
      <div className="text-lg font-medium text-blue-100">{label}</div>
    </div>
  );
};

export default StatsCounter;