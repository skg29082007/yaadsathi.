import { useState, useEffect } from 'react';
import TopBar from '../components/shared/TopBar';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('account');
  const location = useLocation();
  
  // States for interactivity
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [waNotif, setWaNotif] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [is2faEnabled, setIs2faEnabled] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'Light Mode');
  const { language, setLanguage } = useLanguage();
  
  const pathParts = location.pathname.split('/').filter(Boolean);
  const role = pathParts[0]?.charAt(0).toUpperCase() + pathParts[0]?.slice(1) || 'User';

  let t = {
    English: {
      settings: 'Settings',
      account: '👤 Account Profile',
      notifications: '🔔 Notifications',
      security: '🔒 Security & Passwords',
      preferences: '🎨 App Preferences',
      save: 'Save Changes'
    },
    Hindi: {
      settings: 'सेटिंग्स',
      account: '👤 खाता प्रोफ़ाइल',
      notifications: '🔔 सूचनाएं',
      security: '🔒 सुरक्षा और पासवर्ड',
      preferences: '🎨 ऐप प्राथमिकताएं',
      save: 'परिवर्तन सहेजें'
    },
    Marathi: {
      settings: 'सेटिंग्ज',
      account: '👤 खाते प्रोफाइल',
      notifications: '🔔 सूचना',
      security: '🔒 सुरक्षा आणि पासवर्ड',
      preferences: '🎨 ॲप प्राधान्ये',
      save: 'बदल जतन करा'
    },
    Gujarati: {
      settings: 'સેટિંગ્સ',
      account: '👤 એકાઉન્ટ પ્રોફાઇલ',
      notifications: '🔔 સૂચનાઓ',
      security: '🔒 સુરક્ષા અને પાસવર્ડ્સ',
      preferences: '🎨 એપ્લિકેશન પસંદગીઓ',
      save: 'ફેરફારો સાચવો'
    }
  }[language] as { settings: string; account: string; notifications: string; security: string; preferences: string; save: string; };

  if (!t) {
    t = {
      settings: 'Settings',
      account: '👤 Account Profile',
      notifications: '🔔 Notifications',
      security: '🔒 Security & Passwords',
      preferences: '🎨 App Preferences',
      save: 'Save Changes'
    };
  }

  useEffect(() => {
    if (theme === 'Dark Mode') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="fade-in" style={{ position: 'relative' }}>
      <TopBar title={t.settings} breadcrumbs={[role, t.settings]} />
      
      {/* Toast Notification */}
      {showToast && (
        <div style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          background: 'var(--color-success)', color: 'white',
          padding: '1rem 2rem', borderRadius: 'var(--radius-md)',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          animation: 'slideUp 0.3s ease-out', zIndex: 1000
        }}>
          <span>✅</span> Settings saved successfully!
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Settings Sidebar */}
        <div className="card" style={{ padding: '1rem' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {['account', 'notifications', 'security', 'preferences'].map((tab) => (
              <li key={tab}>
                <button 
                  onClick={() => setActiveTab(tab)}
                  style={{ 
                    width: '100%', textAlign: 'left', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', 
                    border: 'none', background: activeTab === tab ? 'var(--color-primary-bg)' : 'transparent',
                    color: activeTab === tab ? 'var(--color-primary)' : 'var(--text-main)',
                    fontWeight: activeTab === tab ? 600 : 400, cursor: 'pointer', transition: 'all 0.2s',
                    textTransform: 'capitalize'
                  }}
                >
                  {tab === 'account' ? t.account : 
                   tab === 'notifications' ? t.notifications : 
                   tab === 'security' ? t.security : t.preferences}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Settings Content Area */}
        <div className="card fade-in" style={{ minHeight: '500px' }}>
          
          {activeTab === 'account' && (
            <div className="fade-in">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                Account Settings
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Username</label>
                  <input type="text" className="form-input" defaultValue="user_1234" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Recovery Email</label>
                  <input type="email" className="form-input" defaultValue="recovery@example.com" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>DigiLocker Linked Account</label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className="badge badge-success">✓ Linked (Verified)</span>
                    <button className="btn btn-outline btn-sm">Manage Connection</button>
                  </div>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
                  <button className="btn btn-primary" onClick={handleSave}>{t.save}</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="fade-in">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                Notification Preferences
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0' }}>Email Notifications</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>Receive course updates and job alerts via email.</p>
                  </div>
                  <input type="checkbox" checked={emailNotif} onChange={(e) => setEmailNotif(e.target.checked)} style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }} />
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0' }}>Push Notifications</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>Get real-time alerts on your mobile device.</p>
                  </div>
                  <input type="checkbox" checked={pushNotif} onChange={(e) => setPushNotif(e.target.checked)} style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.25rem 0' }}>WhatsApp Alerts</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>Receive important OTPs and certificate links on WhatsApp.</p>
                  </div>
                  <input type="checkbox" checked={waNotif} onChange={(e) => setWaNotif(e.target.checked)} style={{ width: '20px', height: '20px', accentColor: 'var(--color-primary)' }} />
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <button className="btn btn-primary" onClick={handleSave}>{t.save}</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="fade-in">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                Security & Passwords
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Current Password</label>
                  <input type="password" className="form-input" placeholder="••••••••" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>New Password</label>
                  <input type="password" className="form-input" placeholder="••••••••" />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Confirm New Password</label>
                  <input type="password" className="form-input" placeholder="••••••••" />
                </div>
                
                <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)', margin: '1rem 0' }} />
                
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Two-Factor Authentication (2FA)</h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Protect your account with an extra layer of security using an authenticator app.</p>
                  <button 
                    className={`btn ${is2faEnabled ? 'btn-success' : 'btn-outline'}`}
                    onClick={() => { setIs2faEnabled(!is2faEnabled); handleSave(); }}
                  >
                    {is2faEnabled ? 'Disable 2FA' : 'Enable 2FA'}
                  </button>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <button className="btn btn-primary" onClick={handleSave}>{t.save}</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'preferences' && (
            <div className="fade-in">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
                App Preferences
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Language</label>
                  <select className="form-input" value={language} onChange={(e) => setLanguage(e.target.value as any)}>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi (हिन्दी)</option>
                    <option value="Marathi">Marathi (मराठी)</option>
                    <option value="Gujarati">Gujarati (ગુજરાતી)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Theme</label>
                  <select className="form-input" value={theme} onChange={(e) => setTheme(e.target.value)}>
                    <option value="System Default">System Default</option>
                    <option value="Light Mode">Light Mode</option>
                    <option value="Dark Mode">Dark Mode</option>
                  </select>
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <button className="btn btn-primary" onClick={handleSave}>{t.save}</button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
      
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
