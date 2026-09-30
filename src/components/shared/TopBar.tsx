import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

interface TopBarProps {
  readonly title: string;
  readonly breadcrumbs?: string[];
  readonly greeting?: string;
}

export default function TopBar({ title, breadcrumbs, greeting }: TopBarProps) {
  const { t } = useLanguage();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="top-bar" style={{ position: 'relative' }}>
      <div className="top-bar-left">
        {breadcrumbs && (
          <div className="breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span style={{ margin: '0 4px', opacity: 0.4 }}>›</span>}
                {i === breadcrumbs.length - 1 ? (
                  <span>{crumb}</span>
                ) : (
                  <a href="#">{crumb}</a>
                )}
              </span>
            ))}
          </div>
        )}
        {greeting ? (
          <h1 className="page-title">{greeting}</h1>
        ) : (
          <h1 className="page-title">{title}</h1>
        )}
      </div>

      <div className="top-bar-right">
        <div className="search-bar">
          <span>🔍</span>
          <input type="text" placeholder={t('Search...')} />
        </div>
        <div style={{ position: 'relative' }}>
          <button className="icon-btn" title="Notifications" onClick={() => setShowNotifications(!showNotifications)}>
            🔔
            <span className="badge">5</span>
          </button>
          
          {showNotifications && (
            <div className="card fade-in" style={{
              position: 'absolute', top: '120%', right: '0', width: '320px', zIndex: 1000,
              padding: '0', overflow: 'hidden', boxShadow: 'var(--shadow-lg)'
            }}>
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '14px', margin: 0 }}>Notifications</h3>
                <span className="badge badge-primary">5 New</span>
              </div>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {[
                  { icon: '🏆', title: 'Certificate Earned', desc: 'You completed Digital Literacy Fundamentals.', time: '10 min ago', read: false },
                  { icon: '📅', title: 'Upcoming Session', desc: 'Marketing Guest Lecture starts tomorrow at 10 AM.', time: '2 hours ago', read: false },
                  { icon: '💼', title: 'New Job Match', desc: 'Cooperative Manager position matches your profile (92%).', time: '1 day ago', read: false },
                  { icon: '📝', title: 'Assessment Due', desc: 'Don\'t forget to complete your Financial Quiz.', time: '2 days ago', read: true },
                  { icon: '🎉', title: 'Welcome!', desc: 'Welcome to the Smart IH Ecosystem.', time: '3 days ago', read: true },
                ].map((notif, i) => (
                  <div key={i} style={{ 
                    padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-100)',
                    background: notif.read ? 'transparent' : 'var(--color-primary-bg)',
                    display: 'flex', gap: '12px', cursor: 'pointer', transition: 'background 0.2s'
                  }} className="hover-bg-neutral">
                    <span style={{ fontSize: '20px' }}>{notif.icon}</span>
                    <div>
                      <h4 style={{ fontSize: '13px', margin: '0 0 4px 0', color: notif.read ? 'var(--color-text-secondary)' : 'var(--color-text-primary)' }}>{notif.title}</h4>
                      <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', margin: '0 0 4px 0' }}>{notif.desc}</p>
                      <span style={{ fontSize: '10px', color: 'var(--color-text-muted)' }}>{notif.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ padding: '8px', textAlign: 'center', borderTop: '1px solid var(--color-neutral-200)' }}>
                <button className="btn btn-ghost btn-sm" style={{ width: '100%' }}>Mark all as read</button>
              </div>
            </div>
          )}
        </div>
        <button className="icon-btn" title="Language">
          🌐
        </button>
        <div className="badge badge-success" style={{ padding: '4px 12px', fontSize: '11px' }}>
          ● Online
        </div>
      </div>
      <style>{`
        .hover-bg-neutral:hover { background-color: var(--color-surface-hover) !important; }
      `}</style>
    </div>
  );
}
