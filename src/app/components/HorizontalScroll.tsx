// components/HorizontalCarousel.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const items = [
  { id: 1, title: 'Cultural Heritage' },
  { id: 2, title: 'Traditional Arts' },
  { id: 3, title: 'Modern Expressions' },
  { id: 4, title: 'Festivals' },
  { id: 5, title: 'Culinary Traditions' },
];

export default function HorizontalScroll() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-gray-100">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50% 0px" }}
              transition={{ duration: 0.5 }}
              className="flex h-[500px] w-[800px] items-center justify-center rounded-2xl bg-white shadow-lg"
            >
              <h2 className="text-4xl font-bold">{item.title}</h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}