'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { FaTimes, FaPlay } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const familyImages = [
  '/31A34917-6220-4802-BE8C-EB88C9ADF6BA.jpg',
  '/50CBE966-6083-455D-8A99-EF4FF088E4DF.jpg',
  '/82C1B3E1-D840-4621-8CFF-3CE88E1A1DD9.jpg',
  '/CA17E27B-2551-4117-A9F9-C4F917606582.jpg',
  '/EAD31F39-8885-473F-865F-4CB6F9B06403.jpg',
  '/F9DDE058-E78B-471A-B778-905042A75C37.jpg',
];

interface Upload {
  id: string;
  fileName: string;
  filePath: string;
  fileType: string;
  mimeType: string;
  uploaderName: string;
  createdAt: string;
}

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [loading, setLoading] = useState(true);
  const { t } = useLanguage();

  // Fetch uploaded photos and videos
  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const response = await fetch('/api/uploads');
        const data = await response.json();
        if (data.success) {
          setUploads(data.uploads);
        }
      } catch (error) {
        console.error('Failed to fetch uploads:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUploads();

    // Refresh uploads every 30 seconds
    const interval = setInterval(fetchUploads, 30000);
    return () => clearInterval(interval);
  }, []);

  const uploadedPhotos = uploads.filter(u => u.fileType === 'photo');
  const uploadedVideos = uploads.filter(u => u.fileType === 'video');
  const allImages = [...familyImages, ...uploadedPhotos.map(p => p.filePath)];

  return (
    <section ref={ref} className="relative py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </motion.div>

        {/* Photos Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {allImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 1) }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Videos Section */}
        {uploadedVideos.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              {t('gallery.videos') || 'Videos'}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {uploadedVideos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer group bg-zinc-900"
                  onClick={() => setSelectedVideo(video.filePath)}
                >
                  <video
                    src={video.filePath}
                    className="w-full h-full object-cover"
                    preload="metadata"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                    <FaPlay className="text-white text-5xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Upload count */}
        {uploads.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm p-8 rounded-3xl border border-amber-900/20 inline-block">
              <p className="text-amber-400 text-lg">
                <span className="font-bold text-2xl">{uploadedPhotos.length}</span> {t('gallery.photosUploaded') || 'photos'} •
                <span className="font-bold text-2xl ml-2">{uploadedVideos.length}</span> {t('gallery.videosUploaded') || 'videos'}
              </p>
              <p className="text-gray-400 mt-2">{t('gallery.thankYou') || 'Thank you for sharing your memories!'}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Image Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-amber-400 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[90vh] w-full h-full"
          >
            <Image
              src={selectedImage}
              alt="Selected photo"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </motion.div>
        </motion.div>
      )}

      {/* Video Lightbox */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-3xl hover:text-amber-400 transition-colors z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <FaTimes />
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-full max-h-[90vh] rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

