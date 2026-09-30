import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'English' | 'Hindi' | 'Marathi' | 'Gujarati';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const dictionary: Record<string, Record<string, string>> = {
  Hindi: {
    'Dashboard': 'डैशबोर्ड',
    'Programmes': 'कार्यक्रम',
    'Institutions': 'संस्थाएं',
    'Trainees': 'प्रशिक्षु',
    'Trainers': 'प्रशिक्षक',
    'Nominations': 'नामांकन',
    'Attendance': 'उपस्थिति',
    'Certificates': 'प्रमाण पत्र',
    'Analytics': 'एनालिटिक्स',
    'Settings': 'सेटिंग्स',
    'My Dashboard': 'मेरा डैशबोर्ड',
    'My Courses': 'मेरे पाठ्यक्रम',
    'Assessments': 'मूल्यांकन',
    'Job Search': 'नौकरी खोज',
    'Career Chatbot': 'करियर चैटबॉट',
    'My Profile': 'मेरी प्रोफ़ाइल',
    'My Programmes': 'मेरे कार्यक्रम',
    'Content Upload': 'सामग्री अपलोड',
    'Create Assessment': 'मूल्यांकन बनाएं',
    'Trainee Progress': 'प्रशिक्षु प्रगति',
    'Reports': 'रिपोर्ट्स',
    'Profile': 'प्रोफ़ाइल',
    'Post Jobs': 'नौकरियां पोस्ट करें',
    'Candidate Search': 'उम्मीदवार खोज',
    'Applications': 'आवेदन',
    'Certificate Verification': 'प्रमाणपत्र सत्यापन',
    'Company Profile': 'कंपनी प्रोफ़ाइल',
    'Main Menu': 'मुख्य मेनू',
    'Log Out': 'लॉग आउट',
    'Search...': 'खोजें...',
    'Welcome back, Rajesh! 👋': 'वापसी पर स्वागत है, राजेश! 👋',
    'Enrolled Courses': 'नामांकित पाठ्यक्रम',
    'Completed': 'पूरा हुआ',
    'Certificates Earned': 'अर्जित प्रमाण पत्र',
    'Active Assessments': 'सक्रिय मूल्यांकन',
    'Continue Learning': 'सीखना जारी रखें',
    'Resume →': 'फिर से शुरू करें →',
    'Discover New Courses': 'नए पाठ्यक्रम खोजें',
    'Enroll Now': 'अभी नामांकन करें',
    'Upcoming': 'आगामी',
    'Due in 2 days': '2 दिन में देय',
    'Start Quiz': 'क्विज़ शुरू करें',
    'Tomorrow': 'कल',
    'Job Recommendations': 'नौकरी की सिफारिशें',
    'match': 'मैच'
  },
  Marathi: {
    'Dashboard': 'डॅशबोर्ड',
    'Programmes': 'कार्यक्रम',
    'Institutions': 'संस्था',
    'Trainees': 'प्रशिक्षणार्थी',
    'Trainers': 'प्रशिक्षक',
    'Nominations': 'नामांकन',
    'Attendance': 'उपस्थिती',
    'Certificates': 'प्रमाणपत्रे',
    'Analytics': 'विश्लेषण',
    'Settings': 'सेटिंग्ज',
    'My Dashboard': 'माझा डॅशबोर्ड',
    'My Courses': 'माझे अभ्यासक्रम',
    'Assessments': 'मूल्यांकन',
    'Job Search': 'नोकरी शोध',
    'Career Chatbot': 'करिअर चॅटबॉट',
    'My Profile': 'माझी प्रोफाइल',
    'My Programmes': 'माझे कार्यक्रम',
    'Content Upload': 'सामग्री अपलोड',
    'Create Assessment': 'मूल्यांकन तयार करा',
    'Trainee Progress': 'प्रशिक्षणार्थी प्रगती',
    'Reports': 'अहवाल',
    'Profile': 'प्रोफाइल',
    'Post Jobs': 'नोकऱ्या पोस्ट करा',
    'Candidate Search': 'उमेदवार शोध',
    'Applications': 'अर्ज',
    'Certificate Verification': 'प्रमाणपत्र पडताळणी',
    'Company Profile': 'कंपनी प्रोफाइल',
    'Main Menu': 'मुख्य मेनू',
    'Log Out': 'लॉग आउट',
    'Search...': 'शोधा...',
    'Welcome back, Rajesh! 👋': 'परत स्वागत आहे, राजेश! 👋',
    'Enrolled Courses': 'नोंदणीकृत अभ्यासक्रम',
    'Completed': 'पूर्ण झाले',
    'Certificates Earned': 'मिळवलेली प्रमाणपत्रे',
    'Active Assessments': 'सक्रिय मूल्यांकन',
    'Continue Learning': 'शिकणे सुरू ठेवा',
    'Resume →': 'पुन्हा सुरू करा →',
    'Discover New Courses': 'नवीन अभ्यासक्रम शोधा',
    'Enroll Now': 'आता नोंदणी करा',
    'Upcoming': 'आगामी',
    'Due in 2 days': '2 दिवसांत देय',
    'Start Quiz': 'क्विझ सुरू करा',
    'Tomorrow': 'उद्या',
    'Job Recommendations': 'नोकरीच्या शिफारसी',
    'match': 'जुळणी'
  },
  Gujarati: {
    'Dashboard': 'ડેશબોર્ડ',
    'Programmes': 'કાર્યક્રમો',
    'Institutions': 'સંસ્થાઓ',
    'Trainees': 'તાલીમાર્થીઓ',
    'Trainers': 'પ્રશિક્ષકો',
    'Nominations': 'નોમિનેશન',
    'Attendance': 'હાજરી',
    'Certificates': 'પ્રમાણપત્રો',
    'Analytics': 'વિશ્લેષણ',
    'Settings': 'સેટિંગ્સ',
    'My Dashboard': 'મારું ડેશબોર્ડ',
    'My Courses': 'મારા અભ્યાસક્રમો',
    'Assessments': 'મૂલ્યાંકન',
    'Job Search': 'નોકરી શોધ',
    'Career Chatbot': 'કારકિર્દી ચેટબોટ',
    'My Profile': 'મારી પ્રોફાઇલ',
    'My Programmes': 'મારા કાર્યક્રમો',
    'Content Upload': 'સામગ્રી અપલોડ',
    'Create Assessment': 'મૂલ્યાંકન બનાવો',
    'Trainee Progress': 'તાલીમાર્થી પ્રગતિ',
    'Reports': 'અહેવાલો',
    'Profile': 'પ્રોફાઇલ',
    'Post Jobs': 'નોકરીઓ પોસ્ટ કરો',
    'Candidate Search': 'ઉમેદવાર શોધ',
    'Applications': 'અરજીઓ',
    'Certificate Verification': 'પ્રમાણપત્ર ચકાસણી',
    'Company Profile': 'કંપની પ્રોફાઇલ',
    'Main Menu': 'મુખ્ય મેનુ',
    'Log Out': 'લૉગ આઉટ',
    'Search...': 'શોધો...',
    'Welcome back, Rajesh! 👋': 'ફરી સ્વાગત છે, રાજેશ! 👋',
    'Enrolled Courses': 'નોંધાયેલા અભ્યાસક્રમો',
    'Completed': 'પૂર્ણ થયું',
    'Certificates Earned': 'મેળવેલ પ્રમાણપત્રો',
    'Active Assessments': 'સક્રિય મૂલ્યાંકન',
    'Continue Learning': 'શીખવાનું ચાલુ રાખો',
    'Resume →': 'ફરી શરૂ કરો →',
    'Discover New Courses': 'નવા અભ્યાસક્રમો શોધો',
    'Enroll Now': 'હવે નોંધણી કરો',
    'Upcoming': 'આગામી',
    'Due in 2 days': '2 દિવસમાં બાકી',
    'Start Quiz': 'ક્વિઝ શરૂ કરો',
    'Tomorrow': 'આવતીકાલે',
    'Job Recommendations': 'નોકરીની ભલામણો',
    'match': 'મેચ'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem('language') as Language) || 'English'
  );

  const setGlobalLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    const code = lang === 'Hindi' ? 'hi' : lang === 'Marathi' ? 'mr' : lang === 'Gujarati' ? 'gu' : 'en';
    
    if (code === 'en') {
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + location.hostname + ';';
    } else {
      document.cookie = `googtrans=/en/${code}; path=/`;
      document.cookie = `googtrans=/en/${code}; path=/; domain=${location.hostname}`;
    }
    
    window.location.reload();
  };

  const t = (text: string) => {
    // We rely on Google Translate now, but keep local dictionary as fallback or initial render
    if (language === 'English') return text;
    return dictionary[language]?.[text] || text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setGlobalLanguage, t }}>
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
