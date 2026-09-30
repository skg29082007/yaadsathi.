import TopBar from '../components/shared/TopBar';
import StatCard from '../components/shared/StatCard';
import { stats, employerJobs, topCandidates } from '../data/mockData';

export default function EmployerDashboard() {
  const employerStats = Object.values(stats.employer);
  const variants: Array<'primary' | 'secondary' | 'success' | 'warning'> = ['primary', 'secondary', 'success', 'warning'];

  return (
    <>
      <TopBar title="Employer Portal" breadcrumbs={['Dashboard']} />

      <div className="stats-grid">
        {employerStats.map((stat, i) => (
          <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} variant={variants[i]} />
        ))}
      </div>

      <div className="grid-60-40 mb-6">
        {/* Active Job Postings */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Active Job Postings</h3>
            <button className="btn btn-primary btn-sm">+ Post New Job</button>
          </div>
          <table className="data-table">
            <thead>
              <tr><th>Job Title</th><th>Location</th><th>Posted</th><th>Applications</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody>
              {employerJobs.map((job) => (
                <tr key={job.id}>
                  <td style={{ fontWeight: 500 }}>{job.title}</td>
                  <td>{job.location}</td>
                  <td>{job.posted}</td>
                  <td style={{ fontWeight: 600 }}>{job.applications}</td>
                  <td>
                    <span className={`badge badge-${job.status === 'active' ? 'success' : 'warning'}`}>
                      {job.status === 'active' ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '4px' }}>
                      <button className="btn btn-ghost btn-sm">View</button>
                      <button className="btn btn-ghost btn-sm">Edit</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Top AI-Matched Candidates */}
        <div className="card">
          <h3 className="card-title" style={{ marginBottom: '16px' }}>Top AI-Matched Candidates</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {topCandidates.map((candidate) => (
              <div key={candidate.id} style={{ padding: '16px', border: '1px solid var(--color-neutral-200)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--color-primary-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', color: 'var(--color-primary)' }}>
                      {candidate.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '14px' }}>{candidate.name}</div>
                      <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>📍 {candidate.location}</div>
                    </div>
                  </div>
                  <span style={{ background: 'var(--color-primary)', color: '#fff', fontWeight: 700, padding: '4px 10px', borderRadius: 'var(--radius-full)', fontSize: '13px' }}>
                    {candidate.matchScore}%
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  {candidate.skills.map(skill => (
                    <span key={skill} className="badge badge-info" style={{ fontSize: '10px' }}>{skill}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <span className="badge badge-success" style={{ fontSize: '10px' }}>🏅 {candidate.certification}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-outline btn-sm" style={{ flex: 1 }}>View Profile</button>
                  <button className="btn btn-primary btn-sm" style={{ flex: 1 }}>Shortlist</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Pipeline */}
      <div className="card">
        <h3 className="card-title" style={{ marginBottom: '16px' }}>Application Pipeline</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0', padding: '20px 0' }}>
          {[
            { label: 'Applied', count: 156, color: 'var(--color-secondary)' },
            { label: 'Screened', count: 89, color: 'var(--color-info)' },
            { label: 'Shortlisted', count: 34, color: 'var(--color-primary)' },
            { label: 'Interview', count: 12, color: 'var(--color-warning)' },
            { label: 'Hired', count: 3, color: 'var(--color-tertiary)' },
          ].map((stage, i) => (
            <div key={stage.label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', padding: '12px 24px', background: stage.color, color: '#fff', borderRadius: 'var(--radius-lg)', minWidth: '100px' }}>
                <div style={{ fontWeight: 800, fontSize: '24px' }}>{stage.count}</div>
                <div style={{ fontSize: '11px' }}>{stage.label}</div>
              </div>
              {i < 4 && <span style={{ fontSize: '20px', margin: '0 8px', color: 'var(--color-text-muted)' }}>→</span>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
