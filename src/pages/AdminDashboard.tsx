import TopBar from '../components/shared/TopBar';
import StatCard from '../components/shared/StatCard';
import { stats, recentNominations } from '../data/mockData';

const variants: Array<'primary' | 'secondary' | 'success' | 'warning'> = ['primary', 'secondary', 'success', 'warning'];

export default function AdminDashboard() {
  const adminStats = Object.values(stats.admin);

  return (
    <>
      <TopBar title="Admin Dashboard" breadcrumbs={['Dashboard']} />

      <div className="stats-grid">
        {adminStats.map((stat, i) => (
          <StatCard key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} change={stat.change} variant={variants[i]} />
        ))}
      </div>

      <div className="grid-60-40 mb-6">
        {/* Training Completion Trends */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Training Completion Trends</h3>
            <select className="form-input form-select" style={{ width: 'auto', padding: '6px 32px 6px 12px' }}>
              <option>Last 6 months</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="chart-container">
            <svg viewBox="0 0 600 200" style={{ width: '100%', height: '100%', padding: '20px' }}>
              {/* Grid lines */}
              {[0, 1, 2, 3, 4].map(i => (
                <line key={i} x1="40" y1={30 + i * 40} x2="580" y2={30 + i * 40} stroke="var(--color-neutral-200)" strokeDasharray="4" />
              ))}
              {/* Enrollments line (saffron) */}
              <polyline fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                points="60,140 140,120 220,100 300,80 380,70 460,55 540,40" />
              {/* Completions line (blue) */}
              <polyline fill="none" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                points="60,160 140,150 220,135 300,120 380,110 460,95 540,80" />
              {/* Shaded area */}
              <polygon fill="var(--color-primary)" opacity="0.08"
                points="60,140 140,120 220,100 300,80 380,70 460,55 540,40 540,80 460,95 380,110 300,120 220,135 140,150 60,160" />
              {/* Labels */}
              {['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'].map((m, i) => (
                <text key={m} x={60 + i * 80} y="195" textAnchor="middle" fill="var(--color-text-muted)" fontSize="11">{m}</text>
              ))}
              {/* Dots */}
              {[140, 120, 100, 80, 70, 55, 40].map((y, i) => (
                <circle key={`e${i}`} cx={60 + i * 80} cy={y} r="4" fill="var(--color-primary)" />
              ))}
              {[160, 150, 135, 120, 110, 95, 80].map((y, i) => (
                <circle key={`c${i}`} cx={60 + i * 80} cy={y} r="4" fill="var(--color-secondary)" />
              ))}
            </svg>
          </div>
          <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '12px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              <span style={{ width: 12, height: 3, background: 'var(--color-primary)', borderRadius: 2, display: 'inline-block' }} /> Enrollments
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
              <span style={{ width: 12, height: 3, background: 'var(--color-secondary)', borderRadius: 2, display: 'inline-block' }} /> Completions
            </span>
          </div>
        </div>

        {/* Programme Distribution */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Programme Distribution</h3>
          </div>
          <div className="chart-container" style={{ flexDirection: 'column', gap: '16px' }}>
            <svg viewBox="0 0 200 200" width="160" height="160">
              {/* Donut chart */}
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-primary)" strokeWidth="30"
                strokeDasharray="154 286" strokeDashoffset="0" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-secondary)" strokeWidth="30"
                strokeDasharray="110 330" strokeDashoffset="-154" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-tertiary)" strokeWidth="30"
                strokeDasharray="88 352" strokeDashoffset="-264" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-warning)" strokeWidth="30"
                strokeDasharray="88 352" strokeDashoffset="-352" />
              <circle cx="100" cy="100" r="50" fill="white" />
              <text x="100" y="96" textAnchor="middle" fontSize="20" fontWeight="800" fill="var(--color-text-primary)">156</text>
              <text x="100" y="112" textAnchor="middle" fontSize="10" fill="var(--color-text-muted)">Programmes</text>
            </svg>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', fontSize: '11px' }}>
              {[
                { label: 'Cooperative Mgmt', color: 'var(--color-primary)', pct: '35%' },
                { label: 'Financial Literacy', color: 'var(--color-secondary)', pct: '25%' },
                { label: 'Digital Skills', color: 'var(--color-tertiary)', pct: '20%' },
                { label: 'Rural Marketing', color: 'var(--color-warning)', pct: '20%' },
              ].map(item => (
                <span key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, display: 'inline-block' }} />
                  {item.label} ({item.pct})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Nominations Table */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Recent Nominations</h3>
          <button className="btn btn-outline btn-sm">View All</button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>Trainee Name</th>
              <th>Institution</th>
              <th>Programme</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentNominations.map((nom) => (
              <tr key={nom.id}>
                <td style={{ fontWeight: 500 }}>{nom.name}</td>
                <td>{nom.institution}</td>
                <td>{nom.programme}</td>
                <td>
                  <span className={`badge badge-${nom.status === 'approved' ? 'success' : nom.status === 'rejected' ? 'error' : 'warning'}`}>
                    {nom.status.charAt(0).toUpperCase() + nom.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {nom.status === 'pending' && (
                      <>
                        <button className="btn btn-success btn-sm">Approve</button>
                        <button className="btn btn-ghost btn-sm" style={{ color: 'var(--color-error)' }}>Reject</button>
                      </>
                    )}
                    <button className="btn btn-ghost btn-sm">View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
