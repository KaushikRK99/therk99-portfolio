import { createElement } from 'react';
import { motion, type Variants } from 'framer-motion';

interface Props {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
  stagger?: number;
}

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const child: Variants = {
  hidden: { y: '110%', opacity: 0, rotateX: -40 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AnimatedHeading({
  text,
  className = '',
  delay = 0,
  as = 'h2',
  stagger = 0.04,
}: Props) {
  const words = text.split(' ');

  return createElement(
    as,
    { className, style: { perspective: '800px' } },
    <motion.span
      variants={container(delay, stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="inline-block"
    >
      {words.map((word, wi) => (
        <span
          key={`${word}-${wi}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span variants={child} className="inline-block">
            {word}
            {wi < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
