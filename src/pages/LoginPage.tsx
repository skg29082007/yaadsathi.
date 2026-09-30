import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const roles = [
  { id: 'trainee', icon: '🎓', label: 'Trainee' },
  { id: 'trainer', icon: '👨‍🏫', label: 'Trainer' },
  { id: 'admin', icon: '🛡️', label: 'Admin' },
  { id: 'employer', icon: '🏢', label: 'Employer' },
];

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [selectedRole, setSelectedRole] = useState('trainee');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/${selectedRole}`);
  };

  return (
    <div className="login-page">
      {/* Hero Panel */}
      <div className="login-hero">
        <div className="login-hero-content">
          <div style={{ fontSize: '64px', marginBottom: '16px' }}>🇮🇳</div>
          <h1>Smart IH Ecosystem</h1>
          <p>Empowering Cooperative Training Across India</p>

          <div className="login-features">
            <div className="login-feature">
              <div className="feature-icon">🤖</div>
              <span>AI-Driven Curriculum Mapping & Career Counseling</span>
            </div>
            <div className="login-feature">
              <div className="feature-icon">📱</div>
              <span>Offline-First Learning with Rural Connectivity</span>
            </div>
            <div className="login-feature">
              <div className="feature-icon">🔐</div>
              <span>DigiLocker Certified Skill Credentials</span>
            </div>
            <div className="login-feature">
              <div className="feature-icon">💼</div>
              <span>AI-Powered Employment Exchange & Job Matching</span>
            </div>
          </div>

          <div style={{ marginTop: '40px', display: 'flex', gap: '24px', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-primary-light)' }}>500+</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>Institutes Connected</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-primary-light)' }}>50K+</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>Trainees Trained</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--color-primary-light)' }}>12</div>
              <div style={{ fontSize: '12px', opacity: 0.7 }}>States Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="login-form-container">
        <div className="login-form">
          <div style={{ textAlign: 'center', marginBottom: '8px' }}>
            <span style={{ fontSize: '32px' }}>🏛️</span>
          </div>

          {/* Tab Switcher */}
          <div className="tabs" style={{ justifyContent: 'center', borderBottom: 'none', marginBottom: '24px' }}>
            <button
              className={`tab ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Sign In
            </button>
            <button
              className={`tab ${activeTab === 'register' ? 'active' : ''}`}
              onClick={() => setActiveTab('register')}
            >
              Register
            </button>
          </div>

          {/* Role Selector */}
          <div className="role-selector">
            {roles.map((role) => (
              <div
                key={role.id}
                className={`role-option ${selectedRole === role.id ? 'active' : ''}`}
                onClick={() => setSelectedRole(role.id)}
              >
                <span className="role-icon">{role.icon}</span>
                {role.label}
              </div>
            ))}
          </div>

          {activeTab === 'login' ? (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Email or Mobile</label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter your email or mobile number"
                  defaultValue="rajesh.kumar@ncct.gov.in"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    className="form-input"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                    defaultValue="demo123"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '16px',
                    }}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked />
                  Remember me
                </label>
                <a href="#" style={{ fontSize: '14px' }}>Forgot Password?</a>
              </div>

              <button type="submit" className="btn btn-primary btn-lg w-full" style={{ width: '100%' }}>
                Sign In to Portal →
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input className="form-input" type="text" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input className="form-input" type="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input className="form-input" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div className="form-group">
                <label className="form-label">Password</label>
                <input className="form-input" type="password" placeholder="Create a strong password" />
              </div>
              <div className="form-group">
                <label className="form-label">Aadhaar Number (Optional)</label>
                <input className="form-input" type="text" placeholder="XXXX XXXX XXXX" />
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-full" style={{ width: '100%' }}>
                Create Account →
              </button>
            </form>
          )}

          <div className="login-divider">OR</div>

          <button className="digilocker-btn">
            🔐 Sign in with DigiLocker
          </button>

          <div className="login-footer">
            National Council for Cooperative Training (NCCT)<br />
            Ministry of Cooperation, Government of India<br />
            <span style={{ fontSize: '10px', opacity: 0.6 }}>DPDP Act 2023 Compliant • STQC Certified</span>
          </div>
        </div>
      </div>
    </div>
  );
}
