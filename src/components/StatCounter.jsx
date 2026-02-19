import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function StatCounter({ end, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(eased * end);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center relative">
      {/* Decorative top accent */}
      <div className="w-8 h-[2px] bg-gold/40 mx-auto mb-4" />

      <div className="font-display text-5xl text-gold gold-glow">
        <span>{count}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <p className="font-ui text-sm uppercase tracking-widest text-ivory/80 mt-2">
        {label}
      </p>

      {/* Decorative bottom accent */}
      <div className="w-8 h-[2px] bg-gold/20 mx-auto mt-4" />
    </div>
  );
}
