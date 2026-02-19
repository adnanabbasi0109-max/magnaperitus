import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function PracticeAreaCard({
  icon: Icon,
  title,
  shortDescription,
  description,
  index = 0,
}) {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.1,
      }}
      whileHover={{
        y: -4,
        boxShadow: '0 8px 30px rgba(191, 155, 48, 0.15)',
      }}
      className="bg-ivory rounded-lg p-6 shadow-md border-t-2 border-gold transition-shadow card-shine"
    >
      {/* Icon with gold background circle */}
      <div className="mb-4">
        <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
          <Icon size={28} className="text-gold" />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display text-xl font-semibold text-navy mb-2">
        {title}
      </h3>

      {/* Short Description */}
      <p className="font-body text-sm text-charcoal/80 mb-4">
        {shortDescription}
      </p>

      {/* Learn More Toggle */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="font-ui text-sm text-gold font-semibold hover:text-gold-dark transition-colors cursor-pointer"
      >
        {expanded ? 'Show Less' : 'Learn More'}
      </button>

      {/* Expandable Description */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-charcoal/90 mt-4 pt-4 border-t border-ivory-dark">
              {description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
