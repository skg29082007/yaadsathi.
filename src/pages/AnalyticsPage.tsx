import TopBar from '../components/shared/TopBar';
import { analyticsData } from '../data/mockData';

export default function AnalyticsPage() {
  return (
    <>
      <TopBar title="Ecosystem Analytics" breadcrumbs={['Dashboard', 'Analytics']} />

      {/* KPI Row */}
      <div className="grid-5 mb-6">
        {analyticsData.kpis.map((kpi) => (
          <div key={kpi.label} className="card" style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
              <div style={{ fontSize: '24px', opacity: 0.8 }}>{kpi.icon}</div>
              <span className={`badge ${kpi.change.startsWith('+') ? 'badge-success' : 'badge-error'}`} style={{ fontSize: '10px' }}>
                {kpi.change.startsWith('+') ? '↑' : '↓'} {kpi.change}
              </span>
            </div>
            <div style={{ fontWeight: 800, fontSize: '20px', marginBottom: '4px' }}>{kpi.value}</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>{kpi.label}</div>
          </div>
        ))}
      </div>

      <div className="grid-60-40 mb-6">
        {/* State-wise Distribution (Map mockup) */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Trainee Distribution by State</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button className="btn btn-outline btn-sm">Download Map</button>
              <button className="btn btn-outline btn-sm">Export Data</button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ flex: 1, height: '300px', background: 'var(--color-primary-bg)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--color-primary-light)' }}>
              <div style={{ textAlign: 'center', color: 'var(--color-primary)' }}>
                <div style={{ fontSize: '48px', marginBottom: '8px' }}>🗺️</div>
                <div style={{ fontWeight: 600 }}>Interactive India Map</div>
                <div style={{ fontSize: '12px', opacity: 0.8 }}>Hover over states to see trainee counts</div>
              </div>
            </div>
            <div style={{ width: '200px' }}>
              <h4 style={{ fontSize: '13px', marginBottom: '12px', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>Top 5 States</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {analyticsData.stateData.slice(0, 5).map((state, i) => (
                  <div key={state.state}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 500 }}>{i + 1}. {state.state}</span>
                      <span style={{ fontWeight: 600 }}>{(state.trainees / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="progress-bar" style={{ height: '4px' }}>
                      <div className="progress-fill primary" style={{ width: `${(state.trainees / 8450) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Breakdown */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Programmes by Category</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center' }}>
            <svg viewBox="0 0 200 200" width="180" height="180">
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-primary)" strokeWidth="40" strokeDasharray="154 286" strokeDashoffset="0" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-secondary)" strokeWidth="40" strokeDasharray="110 330" strokeDashoffset="-154" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-tertiary)" strokeWidth="40" strokeDasharray="88 352" strokeDashoffset="-264" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-warning)" strokeWidth="40" strokeDasharray="53 387" strokeDashoffset="-352" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-info)" strokeWidth="40" strokeDasharray="35 405" strokeDashoffset="-405" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' }}>
              {analyticsData.categories.map((cat) => (
                <div key={cat.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '12px', height: '12px', borderRadius: '2px', background: cat.color, display: 'inline-block' }} />
                    {cat.name}
                  </div>
                  <span style={{ fontWeight: 600 }}>{cat.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Placement Analytics */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Placement & Job Match Analytics</h3>
          <select className="form-input form-select" style={{ width: 'auto', padding: '6px 32px 6px 12px' }}>
            <option>Last 6 months</option>
            <option>Last year</option>
          </select>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
            <div style={{ flex: 1, padding: '24px', background: 'var(--color-neutral-50)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Top Skills in Demand</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {[
                        { skill: 'Cooperative Auditing', demand: 92 },
                        { skill: 'Tally Prime', demand: 88 },
                        { skill: 'PACS Management', demand: 85 },
                        { skill: 'Rural Marketing', demand: 78 },
                        { skill: 'Microfinance', demand: 75 },
                    ].map(s => (
                        <div key={s.skill} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#fff', padding: '8px 12px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-neutral-200)' }}>
                            <span style={{ fontSize: '13px', fontWeight: 500 }}>{s.skill}</span>
                            <span className="badge badge-info" style={{ fontSize: '10px' }}>{s.demand}%</span>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ flex: 1, padding: '24px', background: 'var(--color-neutral-50)', borderRadius: 'var(--radius-lg)' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Employment Pipeline Conversion</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {[
                        { stage: 'Applications', count: 12500, percent: 100 },
                        { stage: 'Shortlisted (AI)', count: 4800, percent: 38 },
                        { stage: 'Interviews', count: 1200, percent: 10 },
                        { stage: 'Offers Accepted', count: 450, percent: 3.6 },
                    ].map(stage => (
                        <div key={stage.stage}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                                <span>{stage.stage}</span>
                                <span style={{ fontWeight: 600 }}>{stage.count} ({stage.percent}%)</span>
                            </div>
                            <div className="progress-bar" style={{ height: '6px' }}>
                                <div className="progress-fill tertiary" style={{ width: `${stage.percent}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </>
  );
}
