import TopBar from '../components/shared/TopBar';
import { jobListings } from '../data/mockData';

export default function JobMatchingPage() {
  return (
    <>
      <TopBar title="Job Search & AI Matching" breadcrumbs={['Dashboard', 'Job Search']} />

      {/* Search & Filters */}
      <div className="card mb-6">
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
          <div className="search-bar" style={{ flex: 1, width: 'auto' }}>
            <span>🔍</span>
            <input type="text" placeholder="Search jobs, skills, or companies..." />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'var(--color-primary-bg)', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--color-primary)' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--color-primary)' }}>🤖 AI Match</span>
            <label className="toggle-switch">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider" />
            </label>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['Full-time', 'Part-time', 'Internship'].map((type) => (
            <button key={type} className={`btn ${type === 'Full-time' ? 'btn-primary' : 'btn-ghost'} btn-sm`}>
              {type}
            </button>
          ))}
          <select className="form-input form-select" style={{ width: 'auto', padding: '4px 32px 4px 12px', fontSize: '13px' }}>
            <option>All States</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Karnataka</option>
          </select>
          <select className="form-input form-select" style={{ width: 'auto', padding: '4px 32px 4px 12px', fontSize: '13px' }}>
            <option>All Categories</option>
            <option>Cooperative Management</option>
            <option>Finance</option>
          </select>
        </div>
      </div>

      <div className="grid-60-40">
        {/* Job Listings */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>{jobListings.length} jobs found</span>
            <select className="form-input form-select" style={{ width: 'auto', padding: '4px 32px 4px 12px', fontSize: '13px', border: 'none' }}>
              <option>Sort by: AI Match Score</option>
              <option>Date Posted</option>
              <option>Salary</option>
            </select>
          </div>

          {jobListings.map((job) => (
            <div key={job.id} className="card" style={{ marginBottom: '12px', borderLeft: job.bestMatch ? '4px solid var(--color-primary)' : '4px solid transparent' }}>
              {job.bestMatch && (
                <span className="badge badge-primary" style={{ marginBottom: '8px' }}>🏆 Best Match</span>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{job.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                    🏢 {job.company} • 📍 {job.location}
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 600, marginTop: '4px', color: 'var(--color-secondary)' }}>{job.salary}</p>
                </div>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: `conic-gradient(var(--color-primary) ${job.matchScore * 3.6}deg, var(--color-neutral-200) 0deg)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '16px', color: 'var(--color-primary)' }}>
                    {job.matchScore}%
                  </div>
                </div>
              </div>

              {/* Match Breakdown */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', margin: '12px 0' }}>
                {[
                  { label: 'Skills', value: 95 },
                  { label: 'Certification', value: 100 },
                  { label: 'Location', value: 80 },
                  { label: 'Experience', value: job.matchScore - 7 },
                ].map((metric) => (
                  <div key={metric.label} style={{ fontSize: '11px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}>
                      <span>{metric.label}</span>
                      <span style={{ fontWeight: 600 }}>{metric.value}%</span>
                    </div>
                    <div className="progress-bar" style={{ height: '4px' }}>
                      <div className="progress-fill primary" style={{ width: `${metric.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                {job.skills.map(skill => (
                  <span key={skill} className="badge badge-info" style={{ fontSize: '10px' }}>{skill}</span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>📅 Posted {job.posted}</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-ghost btn-sm">♡ Save</button>
                  <button className="btn btn-primary btn-sm">Apply Now →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Profile Summary */}
        <div>
          <div className="card" style={{ marginBottom: '16px' }}>
            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Your Profile Match Summary</h4>
            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: `conic-gradient(var(--color-tertiary) ${85 * 3.6}deg, var(--color-neutral-200) 0deg)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '18px', color: 'var(--color-tertiary)' }}>
                  85%
                </div>
              </div>
              <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '8px' }}>Profile Completeness</div>
            </div>

            {/* Skills Radar (simplified) */}
            <div style={{ marginBottom: '16px' }}>
              <h5 style={{ fontSize: '12px', marginBottom: '8px', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Your Skills</h5>
              {[
                { skill: 'Finance', value: 90 },
                { skill: 'IT', value: 65 },
                { skill: 'Communication', value: 80 },
                { skill: 'Leadership', value: 70 },
                { skill: 'Agriculture', value: 55 },
                { skill: 'Marketing', value: 45 },
              ].map(s => (
                <div key={s.skill} style={{ marginBottom: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '2px' }}>
                    <span>{s.skill}</span>
                    <span style={{ fontWeight: 600 }}>{s.value}%</span>
                  </div>
                  <div className="progress-bar" style={{ height: '5px' }}>
                    <div className="progress-fill primary" style={{ width: `${s.value}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: '12px', background: '#FEF3CD', borderRadius: 'var(--radius-md)', fontSize: '12px', marginBottom: '12px' }}>
              💡 <strong>Tip:</strong> Add Tally certification to improve matches by 15%
            </div>

            <button className="btn btn-outline btn-sm w-full" style={{ width: '100%' }}>Update Profile</button>
          </div>

          {/* Certifications */}
          <div className="card">
            <h4 style={{ fontSize: '14px', marginBottom: '12px' }}>Your Certifications</h4>
            {['Cooperative Financial Mgmt', 'Digital Literacy'].map(cert => (
              <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: '1px solid var(--color-neutral-100)', fontSize: '13px' }}>
                <span>🏅</span>
                <span style={{ flex: 1 }}>{cert}</span>
                <span className="badge badge-success" style={{ fontSize: '10px' }}>Verified</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
