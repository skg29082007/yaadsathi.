import { useLocation } from 'react-router-dom';
import TopBar from '../components/shared/TopBar';
import { programmes, recentNominations } from '../data/mockData';

export default function GenericPage() {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  const rawTitle = pathParts[pathParts.length - 1] || 'Dashboard';
  const title = rawTitle.charAt(0).toUpperCase() + rawTitle.slice(1);
  const role = pathParts[0]?.charAt(0).toUpperCase() + pathParts[0]?.slice(1) || '';

  // Layout decision logic
  const isProgrammes = rawTitle === 'programmes';
  const isApprovals = rawTitle === 'nominations' || rawTitle === 'applications';
  const isForm = ['post', 'content', 'assessments', 'verify'].includes(rawTitle);
  const isDashboard = ['progress', 'reports', 'search'].includes(rawTitle);
  const isList = !isProgrammes && !isApprovals && !isForm && !isDashboard;

  return (
    <div className="fade-in">
      <TopBar title={`${role} / ${title}`} breadcrumbs={[role, title]} />

      {/* 1. PROGRAMMES GRID LAYOUT */}
      {isProgrammes && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.25rem' }}>Programme Directory</h2>
            <button className="btn btn-primary">+ Create Programme</button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {programmes.map(prog => (
              <div key={prog.id} className="card" style={{ borderTop: `4px solid var(--color-${prog.status === 'active' ? 'primary' : prog.status === 'completed' ? 'success' : 'warning'})` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <span className={`badge badge-${prog.status === 'active' ? 'success' : 'warning'}`}>{prog.status.toUpperCase()}</span>
                  <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{prog.code}</span>
                </div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{prog.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>{prog.category} • {prog.mode}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>{prog.participants} / {prog.maxParticipants} Enrolled</span>
                  <button className="btn btn-outline btn-sm">Manage</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. APPROVALS / NOMINATIONS LAYOUT */}
      {isApprovals && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem' }}>Pending {title}</h2>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <select className="form-input form-select" style={{ padding: '0.25rem 2rem 0.25rem 0.5rem' }}><option>All Status</option><option>Pending</option></select>
            </div>
          </div>
          
          <table className="data-table">
            <thead>
              <tr>
                <th>Applicant Name</th>
                <th>Target / Institution</th>
                <th>Status</th>
                <th>Date Applied</th>
                <th style={{ textAlign: 'right' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {recentNominations.map(nom => (
                <tr key={nom.id}>
                  <td style={{ fontWeight: 500 }}>{nom.name}</td>
                  <td>{nom.programme}</td>
                  <td>
                    <span className={`badge badge-${nom.status === 'approved' ? 'success' : nom.status === 'rejected' ? 'error' : 'warning'}`}>
                      {nom.status.toUpperCase()}
                    </span>
                  </td>
                  <td>Sep 12, 2025</td>
                  <td style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                      <button className="btn btn-success btn-sm">✓</button>
                      <button className="btn btn-outline btn-sm" style={{ color: 'var(--color-error)' }}>✕</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 3. FORM CREATION LAYOUT (Post jobs, content, verify) */}
      {isForm && (
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            {rawTitle === 'post' ? 'Create Job Posting' : rawTitle === 'content' ? 'Upload Course Material' : rawTitle === 'assessments' ? 'Create New Assessment' : 'Verify Certificate ID'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Fill out the details below to complete this action.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Title / Identifier</label>
              <input type="text" className="form-input" placeholder="Enter title or ID..." />
            </div>
            
            {rawTitle !== 'verify' && (
              <>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Category / Type</label>
                  <select className="form-input">
                    <option>Select an option...</option>
                    <option>Option A</option>
                    <option>Option B</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Deadline / Date</label>
                  <input type="date" className="form-input" />
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Description</label>
                  <textarea className="form-input" rows={5} placeholder="Provide detailed instructions or descriptions here..."></textarea>
                </div>
                
                <div style={{ gridColumn: '1 / -1', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center', background: 'var(--color-neutral-100)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📁</div>
                  <div style={{ fontWeight: 500, marginBottom: '0.25rem' }}>Drag & Drop Files Here</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Supports PDF, MP4, DOCX up to 50MB</div>
                </div>
              </>
            )}
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <button className="btn btn-outline">Cancel</button>
            <button className="btn btn-primary">{rawTitle === 'verify' ? 'Verify Now' : 'Submit'}</button>
          </div>
        </div>
      )}

      {/* 4. DASHBOARD / METRICS LAYOUT */}
      {isDashboard && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div className="card">
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Total Evaluated</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>1,432</div>
            </div>
            <div className="card">
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Average Score</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-secondary)' }}>82.4%</div>
            </div>
            <div className="card">
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Flagged Items</div>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-warning)' }}>14</div>
            </div>
          </div>
          
          <div className="card" style={{ minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <h3>Analytics visualization rendering...</h3>
              <p>Detailed charts will appear here based on selected filters.</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. STANDARD LIST DIRECTORY (Fallback) */}
      {isList && (
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.25rem' }}>{title} Directory</h2>
            <button className="btn btn-primary">+ Add New</button>
          </div>
          
          <div style={{ overflowX: 'auto' }}>
            <table className="data-table" style={{ width: '100%' }}>
              <thead>
                <tr>
                  <th>ID / Code</th>
                  <th>Name / Title</th>
                  <th>Status</th>
                  <th>Last Updated</th>
                  <th style={{ textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6].map(item => (
                  <tr key={item}>
                    <td style={{ color: 'var(--text-secondary)' }}>#{item}0492</td>
                    <td style={{ fontWeight: 500 }}>Example {title} Record {item}</td>
                    <td>
                      <span className={`badge badge-${item % 3 === 0 ? 'success' : item % 3 === 1 ? 'warning' : 'primary'}`}>
                        {item % 3 === 0 ? 'Active' : item % 3 === 1 ? 'Pending' : 'Archived'}
                      </span>
                    </td>
                    <td style={{ color: 'var(--text-secondary)' }}>Sep {item + 10}, 2025</td>
                    <td style={{ textAlign: 'right' }}>
                      <button className="btn btn-outline btn-sm">Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

    </div>
  );
}
