'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect } from 'react';

export default function LanguageSelector() {
  const { setLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if user has already selected a language
    const hasSelectedLanguage = localStorage.getItem('preferredLanguage');
    if (!hasSelectedLanguage) {
      // Show modal after a short delay
      setTimeout(() => setShowModal(true), 500);
    }
  }, []);

  const selectLanguage = (lang: 'te' | 'en') => {
    setLanguage(lang);
    setShowModal(false);
  };

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative max-w-lg w-full bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-600/30 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl">
              🪔
            </div>

            {/* Title */}
            <div className="text-center mb-8 mt-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Welcome | స్వాగతం
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-4" />
              <p className="text-gray-300 text-lg">
                Choose your preferred language
              </p>
              <p className="text-gray-300 text-lg">
                మీకు నచ్చిన భాషను ఎంచుకోండి
              </p>
            </div>

            {/* Language Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Telugu Option */}
              <motion.button
                onClick={() => selectLanguage('te')}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-br from-amber-600 to-orange-600 p-8 rounded-2xl shadow-xl hover:shadow-amber-500/50 transition-all duration-300 border-2 border-amber-400/30"
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🇮🇳</div>
                  <h3 className="text-2xl font-bold text-white mb-2">తెలుగు</h3>
                  <p className="text-amber-100 text-sm">Telugu</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {/* English Option */}
              <motion.button
                onClick={() => selectLanguage('en')}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden bg-gradient-to-br from-zinc-700 to-zinc-800 p-8 rounded-2xl shadow-xl hover:shadow-zinc-500/50 transition-all duration-300 border-2 border-zinc-600/30"
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🌐</div>
                  <h3 className="text-2xl font-bold text-white mb-2">English</h3>
                  <p className="text-gray-300 text-sm">ఆంగ్లం</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>

            {/* Info Text */}
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                You can change the language anytime using the toggle button
              </p>
              <p className="text-gray-400 text-sm">
                టాగుల్ బటన్ ఉపయోగించి మీరు ఎప్పుడైనా భాషను మార్చవచ్చు
              </p>
            </div>

            {/* Decorative bottom element */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-4xl opacity-50">
              ✨
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

