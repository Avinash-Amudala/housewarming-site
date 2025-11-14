'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'te' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero Section
    'hero.title': 'Gruhapravesam',
    'hero.subtitle': 'Amudala Family Housewarming Ceremony',
    'hero.date': '23 November 2025',
    'hero.blessing': 'With the blessings of Lord Venkateswara and Goddess Lakshmi, we warmly welcome you to our Gruhapravesam',
    'hero.mapsButton': 'Open in Google Maps',

    // Event Details
    'event.title': 'Programme Schedule',
    'event.gruhapravesam': 'Gruhapravesam',
    'event.gruhapravesam.time': '05:25 AM',
    'event.gruhapravesam.desc': 'Sacred house entering ceremony',
    'event.vratam': 'Sri Satyanarayana Swamy Vratam',
    'event.vratam.time': '10:00 AM',
    'event.vratam.desc': 'Divine pooja ceremony',
    'event.lunch': 'Lunch',
    'event.lunch.time': '12:30 PM onwards',
    'event.lunch.desc': 'Traditional feast',
    'event.addCalendar': 'Add to Calendar',
    'event.location': 'Location',

    // Gallery
    'gallery.title': 'Memories',
    'gallery.subtitle': 'Cherished moments with our family',
    'gallery.future.title': 'Photos & Videos',
    'gallery.future.desc': "We'll upload all event photos and videos here soon. Please check back after the ceremony!",
    'gallery.videos': 'Videos',
    'gallery.photosUploaded': 'photos',
    'gallery.videosUploaded': 'videos',
    'gallery.thankYou': 'Thank you for sharing your memories!',

    // Photo Upload
    'upload.title': 'Share Your Moments',
    'upload.subtitle': 'Capture the joy! Scan the QR code or click the button below to upload your photos and videos from our celebration',
    'upload.qr': 'Scan to Upload Photos & Videos',
    'upload.photos': 'Photos',
    'upload.photos.desc': 'Share your favorite moments from the ceremony',
    'upload.videos': 'Videos',
    'upload.videos.desc': 'Upload video clips of special moments',
    'upload.button': 'Upload Your Photos & Videos',
    'upload.info1.title': 'Easy Upload',
    'upload.info1.desc': 'Simple form to share your media',
    'upload.info2.title': 'Relive Memories',
    'upload.info2.desc': 'All photos will be displayed here',
    'upload.info3.title': 'Share the Joy',
    'upload.info3.desc': 'Help us create a beautiful album',
    'upload.form.name': 'Your Name (Optional)',
    'upload.form.namePlaceholder': 'Enter your name',
    'upload.form.file': 'Select Photo or Video',
    'upload.success': 'Upload successful! Thank you for sharing!',
    'upload.uploading': 'Uploading...',
    'upload.error.noFile': 'Please select a file',

    // Family Section
    'family.title': 'Amudala Family',
    'family.quote': 'Your blessings are our strength',
    'family.message': 'We are blessed to have you in our lives. Your presence at our Gruhapravesam will make this auspicious occasion even more special and memorable.',

    // Footer
    'footer.date': '23 November 2025',
    'footer.location': 'View on Maps',
    'footer.family': 'Amudala Family',
    'footer.message': 'We look forward to celebrating this special day with you',
    'footer.copyright': '© 2025 Amudala Family. All rights reserved.',

    // Invitation Details
    'invitation.hosts': 'Sri Amudala Chinna Gangadhara Rao & Smt. Lakshmi',
    'invitation.welcome': 'warmly invite you to celebrate a new beginning — our dream home is ready, and now it\'s your turn to fill it with laughter, blessings, and happy memories!',
    'invitation.muhurtham': 'Auspicious Muhurtham',
    'invitation.date': 'Sunday, 23rd November 2025',
    'invitation.time': '05:25 a.m. (Thula Lagnam)',
    'invitation.priest': 'Brahmasri Challa Srinivasa Sarma Garu',
    'invitation.venue': 'Sri Satyanarayana Swamy Temple Street, Chennu Katta Bazaar, Piduguralla, Palnadu District.',
    'invitation.note.title': 'A Little Note from Us',
    'invitation.note.text': 'We\'ve built the house with bricks and dreams… Now it\'s your turn to fill it with joy (and maybe a few gifts 😉). Come, laugh, eat, and bless our new beginning — because no celebration is complete without you!',
  },
  te: {
    // Hero Section
    'hero.title': 'గృహప్రవేశం',
    'hero.subtitle': 'అముదాల కుటుంబ గృహప్రవేశ మహోత్సవం',
    'hero.date': '23 నవంబర్ 2025',
    'hero.blessing': 'శ్రీ వెంకటేశ్వర స్వామి, శ్రీ లక్ష్మీ అమ్మవారి దయతో, మా గృహప్రవేశ మహోత్సవానికి మిమ్మల్ని హృదయపూర్వకంగా ఆహ్వానిస్తున్నాము',
    'hero.mapsButton': 'గూగుల్ మ్యాప్స్‌లో చూడండి',

    // Event Details
    'event.title': 'కార్యక్రమ వివరాలు',
    'event.gruhapravesam': 'గృహప్రవేశం',
    'event.gruhapravesam.time': 'ఉదయం 5:25',
    'event.gruhapravesam.desc': 'పవిత్ర గృహప్రవేశ కార్యక్రమం',
    'event.vratam': 'శ్రీ సత్యనారాయణ స్వామి వ్రతం',
    'event.vratam.time': 'ఉదయం 10:00',
    'event.vratam.desc': 'దివ్య పూజా కార్యక్రమం',
    'event.lunch': 'భోజనం',
    'event.lunch.time': 'మధ్యాహ్నం 12:30 నుండి',
    'event.lunch.desc': 'సాంప్రదాయ విందు',
    'event.addCalendar': 'క్యాలెండర్‌కు జోడించండి',
    'event.location': 'స్థలం',

    // Gallery
    'gallery.title': 'జ్ఞాపకాలు',
    'gallery.subtitle': 'మా కుటుంబంతో విలువైన క్షణాలు',
    'gallery.future.title': 'ఫోటోలు & వీడియోలు',
    'gallery.future.desc': 'కార్యక్రమం తర్వాత అన్ని ఫోటోలు మరియు వీడియోలను ఇక్కడ అప్‌లోడ్ చేస్తాము. దయచేసి తర్వాత చూడండి!',
    'gallery.videos': 'వీడియోలు',
    'gallery.photosUploaded': 'ఫోటోలు',
    'gallery.videosUploaded': 'వీడియోలు',
    'gallery.thankYou': 'మీ జ్ఞాపకాలను పంచుకున్నందుకు ధన్యవాదాలు!',

    // Photo Upload
    'upload.title': 'మీ క్షణాలను పంచుకోండి',
    'upload.subtitle': 'ఆనందాన్ని పంచుకోండి! QR కోడ్ స్కాన్ చేయండి లేదా మీ ఫోటోలు మరియు వీడియోలను అప్‌లోడ్ చేయడానికి క్రింది బటన్‌ను క్లిక్ చేయండి',
    'upload.qr': 'ఫోటోలు & వీడియోలు అప్‌లోడ్ చేయడానికి స్కాన్ చేయండి',
    'upload.photos': 'ఫోటోలు',
    'upload.photos.desc': 'కార్యక్రమం నుండి మీకు నచ్చిన క్షణాలను పంచుకోండి',
    'upload.videos': 'వీడియోలు',
    'upload.videos.desc': 'ప్రత్యేక క్షణాల వీడియో క్లిప్‌లను అప్‌లోడ్ చేయండి',
    'upload.button': 'మీ ఫోటోలు & వీడియోలు అప్‌లోడ్ చేయండి',
    'upload.info1.title': 'సులభ అప్‌లోడ్',
    'upload.info1.desc': 'మీ మీడియాను పంచుకోవడానికి సులభమైన ఫారం',
    'upload.info2.title': 'జ్ఞాపకాలను తిరిగి చూడండి',
    'upload.info2.desc': 'అన్ని ఫోటోలు ఇక్కడ ప్రదర్శించబడతాయి',
    'upload.info3.title': 'ఆనందాన్ని పంచుకోండి',
    'upload.info3.desc': 'అందమైన ఆల్బమ్ సృష్టించడంలో మాకు సహాయం చేయండి',
    'upload.form.name': 'మీ పేరు (ఐచ్ఛికం)',
    'upload.form.namePlaceholder': 'మీ పేరు నమోదు చేయండి',
    'upload.form.file': 'ఫోటో లేదా వీడియో ఎంచుకోండి',
    'upload.success': 'అప్‌లోడ్ విజయవంతమైంది! పంచుకున్నందుకు ధన్యవాదాలు!',
    'upload.uploading': 'అప్‌లోడ్ అవుతోంది...',
    'upload.error.noFile': 'దయచేసి ఫైల్ ఎంచుకోండి',

    // Family Section
    'family.title': 'అముదాల కుటుంబం',
    'family.quote': 'మీ ఆశీస్సులే మా బలం',
    'family.message': 'మీరు మా జీవితంలో ఉండటం మా అదృష్టం. మా గృహప్రవేశంలో మీ ఉపస్థితి ఈ శుభ సందర్భాన్ని మరింత ప్రత్యేకంగా మరియు గుర్తుండిపోయేలా చేస్తుంది.',

    // Footer
    'footer.date': '23 నవంబర్ 2025',
    'footer.location': 'మ్యాప్స్‌లో చూడండి',
    'footer.family': 'అముదాల కుటుంబం',
    'footer.message': 'ఈ ప్రత్యేక రోజును మీతో జరుపుకోవడానికి ఎదురు చూస్తున్నాము',
    'footer.copyright': '© 2025 అముదాల కుటుంబం. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి.',

    // Invitation Details
    'invitation.hosts': 'శ్రీ అముదాల చిన్న గంగాధర రావు గారు & శ్రీమతి లక్ష్మీ గారు',
    'invitation.welcome': 'మా కొత్త ఇంటి శుభప్రవేశ మహోత్సవానికి మీ అందరినీ ఆహ్వానిస్తున్నాము. ఇల్లు కట్టేశాం, ఇప్పుడు నవ్వులు, ఆశీస్సులు, స్మృతులతో మీరు నింపాలి!',
    'invitation.muhurtham': 'శుభ ముహూర్తం',
    'invitation.date': 'ఆదివారం, 23 నవంబర్ 2025',
    'invitation.time': 'ఉదయం 5:25 నిమిషాలు (తులా లగ్నం)',
    'invitation.priest': 'బ్రహ్మశ్రీ చల్ల శ్రీనివాస శర్మ గారు',
    'invitation.venue': 'శ్రీ సత్యనారాయణ స్వామి వీధి, చెన్ను కట్ట బజార్, పిడుగురాళ్ల, పాల్నాడు జిల్లా',
    'invitation.note.title': 'మా నుండి ఒక చిన్న సందేశం',
    'invitation.note.text': 'ఇల్లు కట్టడం మా పని, దాన్ని నవ్వులతో, ఆశీస్సులతో నింపడం మీదే! 😄 రండి… తినండి, మాట్లాడండి, ఫోటోలు తీయండి — మా ఆనందంలో భాగం అవండి!',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('te'); // Telugu as default
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check if user has previously selected a language
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferredLanguage') as Language;
      if (savedLanguage) {
        setLanguageState(savedLanguage);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

