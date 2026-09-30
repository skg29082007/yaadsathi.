import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TopBar from '../components/shared/TopBar';

export default function ProfilePage() {
  const location = useLocation();
  const path = location.pathname;

  let profile = {
    initials: 'RK',
    name: 'Rajesh Kumar',
    role: 'Trainee',
    location: 'Maharashtra',
    email: 'rajesh.kumar@example.com',
    phone: '+91 98765 43210',
    orgLabel: 'Institution',
    orgName: 'NCCT Pune Chapter',
    bio: 'Recent graduate from NCCT Pune with a focus on Cooperative Management and Financial Literacy. Looking for opportunities as an Accounts Officer in rural cooperatives.',
    skills: ['Financial Accounting', 'Cooperative Law', 'Rural Marketing'],
    extraLabel: 'Resume / CV',
    extraDesc: 'Rajesh_Kumar_Resume_2025.pdf',
    badge: 'Available for Hire'
  };

  if (path.includes('/trainer')) {
    profile = {
      initials: 'MS',
      name: 'Dr. Meera Sharma',
      role: 'Master Trainer',
      location: 'Delhi',
      email: 'm.sharma@ncct.ac.in',
      phone: '+91 99887 76655',
      orgLabel: 'Department',
      orgName: 'Agricultural Finance',
      bio: 'Over 15 years of experience in cooperative training and rural banking. Specializes in advanced agri-business management and digital payment systems for PACS.',
      skills: ['Agri-Business', 'Curriculum Design', 'Digital Payments', 'Public Speaking'],
      extraLabel: 'Teaching Certifications',
      extraDesc: 'Certified_Master_Trainer_2023.pdf',
      badge: 'Top Rated Trainer'
    };
  } else if (path.includes('/employer')) {
    profile = {
      initials: 'MC',
      name: 'Maha Coop Federation',
      role: 'Employer',
      location: 'Mumbai, Maharashtra',
      email: 'hr@mahacoop.in',
      phone: '+91 22 2345 6789',
      orgLabel: 'Industry',
      orgName: 'State Cooperative Bank',
      bio: 'Leading cooperative banking federation in Maharashtra. We are constantly looking for talented young professionals trained by NCCT to join our rural branches as branch managers and loan officers.',
      skills: ['Banking', 'Microfinance', 'Rural Credit'],
      extraLabel: 'Company Verification',
      extraDesc: 'Corporate_Registration_Cert.pdf',
      badge: 'Verified Employer'
    };
  }

  const [showToast, setShowToast] = useState(false);

  const handleSave = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="fade-in" style={{ position: 'relative' }}>
      <TopBar title="My Profile" breadcrumbs={[profile.role, 'Profile']} />
      
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
          <span>✅</span> Profile saved successfully!
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Left Column: Avatar & Basic Info */}
        <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ 
            width: '120px', height: '120px', borderRadius: '50%', 
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', color: 'white', marginBottom: '1rem',
            boxShadow: '0 8px 16px rgba(255,107,0,0.2)'
          }}>
            {profile.initials}
          </div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{profile.name}</h2>
          <p style={{ color: 'var(--color-primary)', fontWeight: 500, marginBottom: '1rem' }}>{profile.role} • {profile.location}</p>
          
          <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <span className="badge badge-success">{profile.badge}</span>
          </div>

          <div style={{ width: '100%', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem', textAlign: 'left' }}>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Email</strong>
              <span>{profile.email}</span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Phone</strong>
              <span>{profile.phone}</span>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <strong style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{profile.orgLabel}</strong>
              <span>{profile.orgName}</span>
            </div>
          </div>
          
          <button className="btn btn-outline" style={{ width: '100%' }} onClick={handleSave}>Edit Public Profile</button>
        </div>

        {/* Right Column: Detailed Info Form */}
        <div className="card">
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Detailed Information
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Full Name / Organization</label>
              <input type="text" className="form-input" defaultValue={profile.name} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Location</label>
              <input type="text" className="form-input" defaultValue={profile.location} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>About / Bio</label>
              <textarea className="form-input" rows={4} defaultValue={profile.bio} />
            </div>
          </div>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem' }}>Specialties & Tags</h4>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            {profile.skills.map(skill => (
              <span key={skill} style={{ padding: '0.25rem 0.75rem', background: 'var(--color-primary-bg)', color: 'var(--color-primary)', borderRadius: '999px', fontSize: '0.875rem' }}>
                {skill} ✕
              </span>
            ))}
            <button style={{ padding: '0.25rem 0.75rem', border: '1px dashed var(--text-secondary)', color: 'var(--text-secondary)', borderRadius: '999px', fontSize: '0.875rem', background: 'none' }}>+ Add New</button>
          </div>

          <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', marginTop: '2rem' }}>{profile.extraLabel}</h4>
          <div style={{ 
            border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', padding: '2rem',
            textAlign: 'center', background: 'var(--color-neutral-100)', marginBottom: '1.5rem'
          }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📄</div>
            <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>{profile.extraDesc}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Uploaded recently</div>
            <button className="btn btn-outline btn-sm" style={{ marginTop: '1rem' }} onClick={handleSave}>Update Document</button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <button className="btn btn-outline">Cancel</button>
            <button className="btn btn-primary" onClick={handleSave}>Save Profile</button>
          </div>
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
