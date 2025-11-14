'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCamera, FaVideo, FaUpload, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function PhotoUpload() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploaderName, setUploaderName] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError('');
      setUploadSuccess(false);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedFile) {
      setError(t('upload.error.noFile') || 'Please select a file');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('uploaderName', uploaderName || 'Anonymous');

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadSuccess(true);
        setSelectedFile(null);
        setUploaderName('');
        // Reset file input
        const fileInput = document.getElementById('file-input') as HTMLInputElement;
        if (fileInput) fileInput.value = '';

        // Reset success message after 3 seconds
        setTimeout(() => setUploadSuccess(false), 3000);
      } else {
        setError(data.error || 'Upload failed');
      }
    } catch (err) {
      setError('Failed to upload. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <section ref={ref} className="relative py-32 px-6 bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('upload.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('upload.subtitle')}
          </p>
        </motion.div>

        {/* Upload Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleUpload} className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-amber-900/30 shadow-2xl">
            {/* Success Message */}
            {uploadSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-3"
              >
                <FaCheckCircle className="text-green-400 text-2xl" />
                <p className="text-green-300 font-semibold">
                  {t('upload.success') || 'Upload successful! Thank you for sharing!'}
                </p>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl"
              >
                <p className="text-red-300">{error}</p>
              </motion.div>
            )}

            {/* Name Input */}
            <div className="mb-6">
              <label htmlFor="uploader-name" className="block text-white font-semibold mb-2">
                {t('upload.form.name') || 'Your Name (Optional)'}
              </label>
              <input
                type="text"
                id="uploader-name"
                value={uploaderName}
                onChange={(e) => setUploaderName(e.target.value)}
                placeholder={t('upload.form.namePlaceholder') || 'Enter your name'}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-amber-900/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>

            {/* File Input */}
            <div className="mb-6">
              <label htmlFor="file-input" className="block text-white font-semibold mb-2">
                {t('upload.form.file') || 'Select Photo or Video'}
              </label>
              <input
                type="file"
                id="file-input"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="w-full px-4 py-3 bg-zinc-900/50 border border-amber-900/30 rounded-xl text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-600 file:text-white file:cursor-pointer hover:file:bg-amber-500 transition-colors"
              />
              {selectedFile && (
                <p className="mt-2 text-amber-400 text-sm">
                  Selected: {selectedFile.name} ({(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </p>
              )}
            </div>

            {/* Upload Button */}
            <motion.button
              type="submit"
              disabled={uploading || !selectedFile}
              whileHover={!uploading && selectedFile ? { scale: 1.02 } : {}}
              whileTap={!uploading && selectedFile ? { scale: 0.98 } : {}}
              className={`flex items-center justify-center gap-3 w-full px-10 py-5 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-xl font-bold rounded-full transition-all duration-300 shadow-2xl shadow-amber-900/50 border-2 border-amber-400/30 ${
                uploading || !selectedFile
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:from-amber-500 hover:to-orange-500'
              }`}
            >
              {uploading ? (
                <>
                  <FaSpinner className="text-2xl animate-spin" />
                  {t('upload.uploading') || 'Uploading...'}
                </>
              ) : (
                <>
                  <FaUpload className="text-2xl" />
                  {t('upload.button')}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-900/20 text-center">
            <div className="text-4xl mb-3">📸</div>
            <h4 className="text-white font-semibold mb-2">{t('upload.info1.title')}</h4>
            <p className="text-gray-400 text-sm">{t('upload.info1.desc')}</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-900/20 text-center">
            <div className="text-4xl mb-3">🎉</div>
            <h4 className="text-white font-semibold mb-2">{t('upload.info2.title')}</h4>
            <p className="text-gray-400 text-sm">{t('upload.info2.desc')}</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-800/30 to-zinc-900/30 backdrop-blur-sm p-6 rounded-2xl border border-amber-900/20 text-center">
            <div className="text-4xl mb-3">💝</div>
            <h4 className="text-white font-semibold mb-2">{t('upload.info3.title')}</h4>
            <p className="text-gray-400 text-sm">{t('upload.info3.desc')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

