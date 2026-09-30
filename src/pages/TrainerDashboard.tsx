import TopBar from '../components/shared/TopBar';
import StatCard from '../components/shared/StatCard';
import { stats, trainerSchedule } from '../data/mockData';

export default function TrainerDashboard() {
  const trainerStats = Object.values(stats.trainer);
  const variants: Array<'primary' | 'secondary' | 'success' | 'warning'> = ['primary', 'secondary', 'success', 'warning'];

  return (
    <>
      <TopBar title="" greeting="Welcome, Dr. Meera Sharma 👋" breadcrumbs={['Dashboard']} />

      <div className="stats-grid">
        {trainerStats.map((stat, i) => (
          <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} variant={variants[i]} />
        ))}
      </div>

      <div className="grid-60-40 mb-6">
        {/* Today's Schedule */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Today's Schedule</h3>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>29 Sep 2025</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {trainerSchedule.map((session) => (
              <div key={session.id} style={{ display: 'flex', gap: '16px', padding: '16px', border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-lg)', alignItems: 'center' }}>
                <div style={{ minWidth: '100px', fontSize: '13px', fontWeight: 600, color: 'var(--color-secondary)' }}>
                  {session.time.split(' - ')[0]}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>{session.title}</div>
                  <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', display: 'flex', gap: '12px' }}>
                    <span>👥 {session.trainees} trainees</span>
                    <span>📍 {session.room}</span>
                  </div>
                </div>
                <span className={`badge badge-${session.mode === 'Online' ? 'info' : session.mode === 'Hybrid' ? 'warning' : 'success'}`}>
                  {session.mode}
                </span>
                <button className="btn btn-primary btn-sm">Start Session</button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '16px' }}>Quick Actions</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
            {[
              { icon: '✅', label: 'Mark Attendance', color: 'var(--color-primary-bg)' },
              { icon: '☁️', label: 'Upload Content', color: 'var(--color-secondary-bg)' },
              { icon: '📝', label: 'Create Quiz', color: 'var(--color-tertiary-bg)' },
              { icon: '📊', label: 'Generate Report', color: '#FEF3CD' },
            ].map((action) => (
              <div key={action.label} style={{ padding: '20px', background: action.color, borderRadius: 'var(--radius-lg)', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}>
                <div style={{ fontSize: '32px', marginBottom: '8px' }}>{action.icon}</div>
                <div style={{ fontSize: '13px', fontWeight: 600 }}>{action.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Trainee Submissions</h3>
          <button className="btn btn-outline btn-sm">View All</button>
        </div>
        <table className="data-table">
          <thead>
            <tr><th>Trainee</th><th>Assessment</th><th>Score</th><th>Date</th><th>Grade</th><th>Action</th></tr>
          </thead>
          <tbody>
            {[
              { name: 'Rajesh Kumar', assessment: 'Module 4 Quiz', score: '90/100', date: '28 Sep', grade: 'A' },
              { name: 'Priya Patel', assessment: 'Module 4 Quiz', score: '82/100', date: '28 Sep', grade: 'B+' },
              { name: 'Amit Singh', assessment: 'Module 3 Assignment', score: '75/100', date: '27 Sep', grade: 'B' },
              { name: 'Sunita Devi', assessment: 'Module 4 Quiz', score: '68/100', date: '28 Sep', grade: 'C+' },
            ].map((sub, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 500 }}>{sub.name}</td>
                <td>{sub.assessment}</td>
                <td style={{ fontWeight: 600, color: parseInt(sub.score) >= 80 ? 'var(--color-tertiary)' : 'var(--color-text-primary)' }}>{sub.score}</td>
                <td>{sub.date}</td>
                <td><span className="badge badge-info">{sub.grade}</span></td>
                <td><button className="btn btn-ghost btn-sm">Review</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
