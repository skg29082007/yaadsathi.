import { useState } from 'react';
import TopBar from '../components/shared/TopBar';
import { attendanceRecords } from '../data/mockData';

export default function AttendancePage() {
  const [method, setMethod] = useState<'qr' | 'face'>('qr');
  const present = 28;
  const total = 45;

  return (
    <>
      <TopBar title="Digital Attendance System" breadcrumbs={['Dashboard', 'Attendance']} />

      {/* Session Selector */}
      <div className="card mb-6">
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="form-group" style={{ margin: 0, flex: 1 }}>
            <label className="form-label">Programme</label>
            <select className="form-input form-select">
              <option>Cooperative Financial Management</option>
              <option>Digital Literacy Fundamentals</option>
            </select>
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Batch</label>
            <select className="form-input form-select">
              <option>Batch A (Morning)</option>
              <option>Batch B (Afternoon)</option>
            </select>
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label">Date</label>
            <input className="form-input" type="date" defaultValue="2025-09-29" />
          </div>
          <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Enrolled</div>
            <div style={{ fontWeight: 800, fontSize: '20px' }}>{total}</div>
          </div>
        </div>
      </div>

      {/* Method Toggle */}
      <div className="grid-2 mb-6" style={{ gap: '16px' }}>
        <div
          className="card"
          onClick={() => setMethod('qr')}
          style={{ cursor: 'pointer', borderColor: method === 'qr' ? 'var(--color-primary)' : 'var(--color-neutral-200)', borderWidth: '2px', textAlign: 'center', padding: '24px' }}
        >
          <div style={{ fontSize: '48px', marginBottom: '8px' }}>📱</div>
          <h4 style={{ fontSize: '16px', marginBottom: '4px', color: method === 'qr' ? 'var(--color-primary)' : 'inherit' }}>QR Code Scan</h4>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>Generate QR for trainees to scan</p>
        </div>
        <div
          className="card"
          onClick={() => setMethod('face')}
          style={{ cursor: 'pointer', borderColor: method === 'face' ? 'var(--color-primary)' : 'var(--color-neutral-200)', borderWidth: '2px', textAlign: 'center', padding: '24px' }}
        >
          <div style={{ fontSize: '48px', marginBottom: '8px' }}>🤖</div>
          <h4 style={{ fontSize: '16px', marginBottom: '4px', color: method === 'face' ? 'var(--color-primary)' : 'inherit' }}>Face Recognition</h4>
          <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>AI-powered face verification</p>
        </div>
      </div>

      <div className="grid-2 mb-6">
        {/* QR / Face Area */}
        <div className="card" style={{ textAlign: 'center' }}>
          {method === 'qr' ? (
            <>
              <h4 style={{ marginBottom: '16px' }}>Session QR Code</h4>
              <div style={{ width: '200px', height: '200px', margin: '0 auto 16px', background: 'var(--color-neutral-100)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed var(--color-neutral-300)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '2px', width: '140px' }}>
                  {Array.from({ length: 64 }, (_, i) => (
                    <div key={i} style={{ width: '100%', aspectRatio: '1', background: Math.random() > 0.4 ? 'var(--color-secondary)' : 'transparent', borderRadius: '1px' }} />
                  ))}
                </div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '8px' }}>
                ⏱ QR expires in <span style={{ fontFamily: 'var(--font-mono)' }}>28s</span>
              </div>
              <button className="btn btn-outline btn-sm">🔄 Regenerate QR</button>
              <p style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginTop: '12px' }}>
                Ask trainees to scan this QR using their Smart IH app
              </p>
            </>
          ) : (
            <>
              <h4 style={{ marginBottom: '16px' }}>Face Recognition</h4>
              <div style={{ width: '100%', aspectRatio: '4/3', background: '#1a1a2e', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', marginBottom: '16px', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '48px' }}>📸</span>
                <span>Camera Preview</span>
                <div style={{ fontSize: '12px', opacity: 0.7 }}>Face detection active</div>
              </div>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--color-tertiary)' }}>Confidence: 92%</span>
                <span className="badge badge-success">Match Found</span>
              </div>
              <button className="btn btn-primary">✓ Verify & Mark Present</button>
            </>
          )}
        </div>

        {/* Live Attendance Feed */}
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Live Attendance Feed</h4>
            <span className="badge badge-success">● Live</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '360px', overflowY: 'auto' }}>
            {attendanceRecords.map((record) => (
              <div key={record.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 12px', background: 'var(--color-tertiary-bg)', borderRadius: 'var(--radius-md)' }}>
                <span>✅</span>
                <div style={{ flex: 1 }}>
                  <span style={{ fontWeight: 500, fontSize: '14px' }}>{record.name}</span>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginLeft: '8px' }}>{record.time}</span>
                </div>
                <span className={`badge badge-${record.method === 'QR' ? 'info' : 'primary'}`} style={{ fontSize: '10px' }}>
                  {record.method}
                </span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px', textAlign: 'center', fontSize: '20px', fontWeight: 800, color: 'var(--color-secondary)' }}>
            {present}/{total} Present
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '24px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '24px', color: 'var(--color-tertiary)' }}>{present}</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Present</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '24px', color: 'var(--color-error)' }}>15</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Absent</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '24px', color: 'var(--color-warning)' }}>2</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Late</div>
          </div>
        </div>
        <div style={{ flex: 1, maxWidth: '300px', margin: '0 24px' }}>
          <div className="progress-bar" style={{ height: '12px' }}>
            <div className="progress-fill" style={{ width: `${(present / total) * 100}%` }} />
          </div>
          <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '4px', color: 'var(--color-text-muted)' }}>{Math.round((present / total) * 100)}% attendance</div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button className="btn btn-outline btn-sm">📤 Export</button>
          <button className="btn btn-outline btn-sm">📨 Notify Absent</button>
          <button className="btn btn-primary btn-sm">Close Session</button>
        </div>
      </div>
    </>
  );
}
