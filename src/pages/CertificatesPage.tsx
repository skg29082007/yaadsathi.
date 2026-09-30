import TopBar from '../components/shared/TopBar';
import { certificates } from '../data/mockData';

export default function CertificatesPage() {
  return (
    <>
      <TopBar title="My Certificates" breadcrumbs={['Dashboard', 'Certificates']} />

      <div className="grid-3 mb-6">
        {certificates.map((cert) => (
          <div key={cert.id} className="card" style={{ position: 'relative' }}>
            {cert.status === 'verified' && (
              <span className="badge badge-success" style={{ position: 'absolute', top: '16px', right: '16px' }}>✓ Verified</span>
            )}
            {cert.status === 'in-progress' && (
              <span className="badge badge-warning" style={{ position: 'absolute', top: '16px', right: '16px' }}>In Progress</span>
            )}
            <div style={{ fontSize: '48px', marginBottom: '12px', opacity: cert.status === 'in-progress' ? 0.4 : 1 }}>🏅</div>
            <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{cert.title}</h4>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>{cert.institution}</p>
            {cert.status === 'verified' && (
              <>
                <p style={{ fontSize: '13px', marginBottom: '4px' }}>
                  Grade: <strong>{cert.grade}</strong> ({cert.score}%)
                </p>
                <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '12px' }}>
                  Issued: {cert.issueDate}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <button className="btn btn-primary btn-sm">📥 Download</button>
                  <button className="btn btn-outline btn-sm">🔗 Share</button>
                </div>
              </>
            )}
            {cert.status === 'in-progress' && (
              <>
                <div className="progress-bar" style={{ margin: '12px 0 4px' }}>
                  <div className="progress-fill" style={{ width: `${cert.progress}%` }} />
                </div>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{cert.progress}% complete</span>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Certificate Preview */}
      <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="card-header">
          <h3 className="card-title">Certificate Preview</h3>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-primary btn-sm">📥 Download PDF</button>
            <button className="btn btn-outline btn-sm">🔐 Share to DigiLocker</button>
            <button className="btn btn-ghost btn-sm">🖨️ Print</button>
          </div>
        </div>

        {/* Certificate Frame */}
        <div style={{ border: '3px solid var(--color-primary)', borderRadius: 'var(--radius-lg)', padding: '40px', textAlign: 'center', background: 'linear-gradient(to bottom, #FFFBF5, #FFF)' }}>
          <div style={{ fontSize: '36px', marginBottom: '8px' }}>🏛️</div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '4px' }}>
            Government of India • Ministry of Cooperation
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
            National Council for Cooperative Training (NCCT)
          </div>

          <h2 style={{ color: 'var(--color-primary)', marginBottom: '24px', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '22px' }}>
            Certificate of Completion
          </h2>

          <p style={{ fontSize: '15px', lineHeight: 1.8, marginBottom: '24px', color: 'var(--color-text-secondary)' }}>
            This is to certify that <strong style={{ color: 'var(--color-text-primary)' }}>Rajesh Kumar</strong> has successfully
            completed the programme <strong style={{ color: 'var(--color-text-primary)' }}>Cooperative Financial Management</strong> conducted
            by <strong>VAMNICOM, Pune</strong> with a score of <strong style={{ color: 'var(--color-primary)' }}>90/100 (Grade A)</strong>.
          </p>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '32px' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                Certificate ID: NCCT-2025-CFM-001234
              </div>
              <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>
                Issue Date: 15 September 2025
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontStyle: 'italic', fontSize: '14px', color: 'var(--color-secondary)', borderTop: '1px solid var(--color-neutral-300)', paddingTop: '8px' }}>
                Director, NCCT
              </div>
            </div>
            <div style={{ width: '80px', height: '80px', border: '2px solid var(--color-neutral-300)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'var(--color-text-muted)' }}>
              QR Code
            </div>
          </div>

          <div style={{ marginTop: '16px', fontSize: '10px', color: 'var(--color-text-muted)' }}>
            Powered by Smart IH Ecosystem • Verify at verify.smartih.gov.in/{certificates[0].id}
          </div>
        </div>

        {/* Verification Status */}
        <div style={{ marginTop: '16px', padding: '16px', background: 'var(--color-tertiary-bg)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🛡️</span>
          <div>
            <div style={{ fontWeight: 600, color: 'var(--color-tertiary-dark)', fontSize: '14px' }}>Cryptographically Verified</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>SHA-256 Hash • DigiLocker Synced • NCCT Issued</div>
          </div>
        </div>
      </div>
    </>
  );
}
