'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative py-16 px-6 bg-black border-t border-amber-900/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <FaCalendarAlt className="text-3xl text-amber-500 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">{t('hero.date')}</h3>
            <p className="text-gray-400">{t('footer.date')}</p>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <FaMapMarkerAlt className="text-3xl text-amber-500 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">{t('event.location')}</h3>
            <a
              href="https://maps.app.goo.gl/ALBLQJecuzU6Cozy8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              {t('footer.location')}
            </a>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <FaHeart className="text-3xl text-amber-500 mx-auto mb-3" />
            <h3 className="text-white font-semibold mb-2">{t('family.title')}</h3>
            <p className="text-gray-400">{t('footer.family')}</p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-900/50 to-transparent mb-8" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm mb-4">
            {t('footer.message')}
          </p>
          <p className="text-gray-600 text-xs">
            {t('footer.copyright')}
          </p>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <div className="text-4xl">🪔</div>
        </motion.div>
      </div>
    </footer>
  );
}

