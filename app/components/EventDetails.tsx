'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaClock, FaCalendarPlus } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function EventDetails() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const scheduleItems = [
    {
      icon: '🪔',
      title: t('event.gruhapravesam'),
      time: t('event.gruhapravesam.time'),
      description: t('event.gruhapravesam.desc'),
    },
    {
      icon: '🌿',
      title: t('event.vratam'),
      time: t('event.vratam.time'),
      description: t('event.vratam.desc'),
    },
    {
      icon: '🍛',
      title: t('event.lunch'),
      time: t('event.lunch.time'),
      description: t('event.lunch.desc'),
    },
  ];

  const addToCalendar = () => {
    const event = {
      title: 'Amudala Family Gruhapravesam',
      description: 'Housewarming Ceremony - Gruhapravesam and Sri Satyanarayana Swamy Vratam',
      location: 'https://www.google.com/maps?q=16.4827086,79.8840467',
      startDate: '2025-11-23T05:25:00',
      endDate: '2025-11-23T14:00:00',
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(
      /[-:]/g,
      ''
    )}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(
      event.location
    )}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            {t('event.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-amber-900/20 hover:border-amber-600/50 transition-all duration-500 hover:transform hover:scale-105 text-center">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                <div className="flex items-center justify-center gap-2 text-amber-400 text-xl font-semibold mb-3">
                  <FaClock className="text-lg" />
                  {item.time}
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Add to Calendar Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center mb-16"
        >
          <button
            onClick={addToCalendar}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full text-lg font-bold hover:from-amber-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-amber-900/50 border-2 border-amber-400/30"
          >
            <FaCalendarPlus className="text-2xl" />
            {t('event.addCalendar')}
          </button>
        </motion.div>

        {/* Embedded Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 max-w-5xl mx-auto"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center">{t('event.location')}</h3>
          <div className="rounded-3xl overflow-hidden border-2 border-amber-900/30 shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=16.4827086,79.8840467&output=embed"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

