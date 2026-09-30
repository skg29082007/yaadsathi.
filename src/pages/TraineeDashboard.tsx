import TopBar from '../components/shared/TopBar';
import StatCard from '../components/shared/StatCard';
import { stats, courses } from '../data/mockData';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function TraineeDashboard() {
  const traineeStats = Object.values(stats.trainee);
  const navigate = useNavigate();
  const { t } = useLanguage();
  const variants: Array<'primary' | 'secondary' | 'success' | 'warning'> = ['secondary', 'success', 'primary', 'warning'];

  return (
    <>
      <TopBar title="" greeting={t('Welcome back, Rajesh! 👋')} breadcrumbs={[t('My Dashboard')]} />

      <div className="stats-grid">
        {traineeStats.map((stat, i) => (
          <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={t(stat.label)} variant={variants[i]} />
        ))}
      </div>

      <div className="grid-70-30 mb-6">
        {/* Continue Learning */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>{t('Continue Learning')}</h3>
          {/* Featured Course */}
          <div className="card" style={{ marginBottom: '16px', borderLeft: '4px solid var(--color-primary)' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div style={{ fontSize: '48px', width: '80px', height: '80px', background: 'var(--color-primary-bg)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {courses[0].thumbnail}
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ marginBottom: '4px' }}>{courses[0].title}</h4>
                <p className="text-muted" style={{ fontSize: '13px', marginBottom: '8px' }}>{courses[0].instructor} • {courses[0].duration}</p>
                <div className="progress-bar" style={{ marginBottom: '8px' }}>
                  <div className="progress-fill primary" style={{ width: `${courses[0].progress}%` }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>
                    {courses[0].progress}% complete • Last: {courses[0].lastAccessed}
                  </span>
                  <button className="btn btn-primary btn-sm" onClick={() => navigate('/course-player')}>
                    {t('Resume →')}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Other Courses */}
          <div className="grid-3" style={{ marginBottom: '2rem' }}>
            {courses.slice(1).map((course) => (
              <div className="card" key={course.id} style={{ cursor: 'pointer' }} onClick={() => navigate('/course-player')}>
                <div style={{ fontSize: '36px', marginBottom: '12px', width: '56px', height: '56px', background: course.progress === 100 ? 'var(--color-tertiary-bg)' : 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {course.thumbnail}
                </div>
                <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{course.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>{course.instructor}</p>
                <div className="progress-bar" style={{ marginBottom: '4px' }}>
                  <div className="progress-fill" style={{ width: `${course.progress}%` }} />
                </div>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{course.progress}% complete</span>
              </div>
            ))}
          </div>

          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>{t('Discover New Courses')}</h3>
          <div className="grid-3">
            {[
              { id: 'c3', title: 'Advanced Cooperative Law', instructor: 'NCCT Delhi', thumb: '⚖️', bg: 'var(--color-secondary-bg)', color: 'var(--color-secondary)' },
              { id: 'c4', title: 'Agri-Business Management', instructor: 'VAMNICOM', thumb: '🌾', bg: 'var(--color-success-bg)', color: 'var(--color-success)' },
              { id: 'c5', title: 'Digital Payments for PACS', instructor: 'Dr. R. Singh', thumb: '💳', bg: 'var(--color-primary-bg)', color: 'var(--color-primary)' },
            ].map(course => (
              <div className="card" key={course.id} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px', width: '56px', height: '56px', background: course.bg, color: course.color, borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {course.thumb}
                </div>
                <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>{course.title}</h4>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '16px' }}>{course.instructor}</p>
                <button className="btn btn-outline btn-sm" style={{ marginTop: 'auto' }} onClick={() => navigate('/course-player')}>
                  {t('Enroll Now')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div>
          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>{t('Upcoming')}</h3>

          {/* Next Assessment */}
          <div className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <span style={{ fontSize: '24px' }}>📝</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Digital Literacy Quiz</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{t('Due in 2 days')}</div>
              </div>
            </div>
            <button className="btn btn-outline btn-sm w-full" style={{ width: '100%' }} onClick={() => navigate('/quiz')}>
              {t('Start Quiz')}
            </button>
          </div>

          {/* Next Live Session */}
          <div className="card" style={{ marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '24px' }}>🎥</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: '14px' }}>Guest Lecture on Marketing</div>
                <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{t('Tomorrow')} 10:00 AM</div>
              </div>
            </div>
          </div>

          {/* Attendance */}
          <div className="card" style={{ marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 600, fontSize: '14px' }}>{t('Attendance')}</span>
              <span style={{ fontWeight: 800, color: 'var(--color-tertiary)', fontSize: '24px' }}>85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '85%' }} />
            </div>
          </div>

          <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>{t('Job Recommendations')}</h3>
          {[
            { title: 'Cooperative Manager', match: 92 },
            { title: 'Accounts Officer', match: 87 },
            { title: 'Field Coordinator', match: 81 },
          ].map((job) => (
            <div key={job.title} className="card" style={{ marginBottom: '8px', padding: '12px 16px', cursor: 'pointer' }} onClick={() => navigate('/jobs')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontWeight: 500, fontSize: '14px' }}>{job.title}</span>
                <span className="badge badge-primary">{job.match}% {t('match')}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <button
        className="btn btn-primary"
        style={{ position: 'fixed', bottom: '24px', right: '24px', borderRadius: 'var(--radius-full)', width: '56px', height: '56px', padding: 0, fontSize: '24px', boxShadow: '0 8px 24px rgba(255,107,0,0.4)', zIndex: 50 }}
        onClick={() => navigate('/chatbot')}
        title="Ask Career Bot"
      >
        🤖
      </button>
    </>
  );
}
