import TopBar from '../components/shared/TopBar';

export default function ProgrammeCreationPage() {
  return (
    <>
      <TopBar title="Create New Programme" breadcrumbs={['Dashboard', 'Programmes', 'Create New']} />

      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--color-neutral-200)' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>1</div>
            <div style={{ flex: 1, height: '4px', background: 'var(--color-primary)' }} />
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-neutral-200)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>2</div>
            <div style={{ flex: 1, height: '4px', background: 'var(--color-neutral-200)' }} />
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--color-neutral-200)', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>3</div>
        </div>

        <h3 style={{ marginBottom: '24px' }}>Step 1: Basic Information</h3>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Programme Title <span style={{ color: 'var(--color-error)' }}>*</span></label>
              <input className="form-input" type="text" placeholder="e.g., Advanced PACS Management" />
            </div>
            <div className="form-group">
              <label className="form-label">Programme Code <span style={{ color: 'var(--color-error)' }}>*</span></label>
              <input className="form-input" type="text" placeholder="e.g., APM-2025" />
            </div>
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Category <span style={{ color: 'var(--color-error)' }}>*</span></label>
              <select className="form-input form-select">
                <option>Select Category...</option>
                <option>Cooperative Management</option>
                <option>Financial Literacy</option>
                <option>Digital Skills</option>
                <option>Rural Marketing</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Delivery Mode <span style={{ color: 'var(--color-error)' }}>*</span></label>
              <select className="form-input form-select">
                <option>Select Mode...</option>
                <option>Online</option>
                <option>Offline (Classroom)</option>
                <option>Hybrid</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Target Audience / Eligibility</label>
            <input className="form-input" type="text" placeholder="e.g., PACS Secretaries, Minimum 1 year experience" />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea className="form-input" rows={4} placeholder="Brief description of the programme..." />
          </div>

          <div className="grid-2">
            <div className="form-group">
              <label className="form-label">Start Date</label>
              <input className="form-input" type="date" />
            </div>
            <div className="form-group">
              <label className="form-label">End Date</label>
              <input className="form-input" type="date" />
            </div>
          </div>
          
          <div className="grid-2">
              <div className="form-group">
                  <label className="form-label">Max Participants</label>
                  <input className="form-input" type="number" placeholder="50" />
              </div>
              <div className="form-group">
                  <label className="form-label">Assign Institution</label>
                  <select className="form-input form-select">
                      <option>VAMNICOM, Pune</option>
                      <option>RICM Bangalore</option>
                      <option>ICM Ahmedabad</option>
                  </select>
              </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '20px', borderTop: '1px solid var(--color-neutral-200)' }}>
            <button type="button" className="btn btn-ghost">Cancel</button>
            <button type="button" className="btn btn-primary">Next Step: Curriculum & Pricing →</button>
          </div>
        </form>
      </div>
    </>
  );
}
