'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export default function FamilySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('family.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-8" />
          <p className="text-2xl md:text-3xl text-amber-200/90 font-light italic">
            "{t('family.quote')}"
          </p>
        </motion.div>

        {/* Main Family Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative max-w-3xl mx-auto mb-12"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl group shadow-2xl">
            <Image
              src="/50CBE966-6083-455D-8A99-EF4FF088E4DF.jpg"
              alt="Amudala Family"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <p className="text-white text-2xl font-semibold drop-shadow-lg">
                {t('family.title')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Additional Family Photos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              '/31A34917-6220-4802-BE8C-EB88C9ADF6BA.jpg',
              '/82C1B3E1-D840-4621-8CFF-3CE88E1A1DD9.jpg',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-2xl group"
              >
                <Image
                  src={image}
                  alt={`Family moment ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blessing Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm p-12 rounded-3xl border border-amber-900/20">
            <div className="text-5xl mb-6">🙏</div>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {t('family.message')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

