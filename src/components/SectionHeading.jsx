import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={centered ? 'text-center' : 'text-left'}
    >
      <h2
        className={`font-display text-4xl md:text-5xl font-semibold ${
          light ? 'text-ivory' : 'text-navy'
        }`}
      >
        {title}
      </h2>

      {/* Gold accent line with gradient fade */}
      <div
        className={`h-[2px] mt-4 mb-4 ${centered ? 'mx-auto' : ''}`}
        style={{
          width: '5rem',
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
        }}
      />

      {subtitle && (
        <p
          className={`font-ui text-lg max-w-2xl ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-ivory/70' : 'text-charcoal'}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
