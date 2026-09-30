import { useState } from 'react';
import { courseChapters } from '../data/mockData';

export default function CoursePlayer() {
  const [activeTab, setActiveTab] = useState('notes');

  return (
    <div style={{ display: 'flex', height: 'calc(100vh - 32px)', gap: '0', background: 'var(--color-surface)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--color-neutral-200)' }}>
      {/* Course Outline Panel */}
      <div style={{ width: '280px', borderRight: '1px solid var(--color-neutral-200)', display: 'flex', flexDirection: 'column', background: 'var(--color-neutral-50)' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-neutral-200)' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>Cooperative Financial Mgmt</h4>
          <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Prof. Meera Sharma</div>
          <div className="progress-bar" style={{ marginBottom: '4px' }}>
            <div className="progress-fill primary" style={{ width: '68%' }} />
          </div>
          <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>68% complete</span>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {courseChapters.map((chapter) => (
            <div key={chapter.id}>
              <div style={{
                padding: '10px 16px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: chapter.locked ? 'var(--color-text-muted)' : 'var(--color-text-primary)',
                opacity: chapter.locked ? 0.5 : 1,
              }}>
                {chapter.completed ? '✅' : chapter.current ? '🟠' : '🔒'}
                <span>Ch {chapter.id}: {chapter.title}</span>
              </div>
              {chapter.lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  style={{
                    padding: '8px 16px 8px 44px',
                    fontSize: '12px',
                    cursor: lesson.completed || lesson.current ? 'pointer' : 'default',
                    background: lesson.current ? 'var(--color-primary-bg)' : 'transparent',
                    color: lesson.current ? 'var(--color-primary)' : lesson.completed ? 'var(--color-text-secondary)' : 'var(--color-text-muted)',
                    fontWeight: lesson.current ? 600 : 400,
                    borderLeft: lesson.current ? '3px solid var(--color-primary)' : '3px solid transparent',
                  }}
                >
                  {lesson.completed ? '✓' : lesson.current ? '▶' : '○'} {lesson.title}
                </div>
              ))}
            </div>
          ))}
          <div style={{ padding: '10px 16px', fontSize: '13px', fontWeight: 600, opacity: 0.5, display: 'flex', alignItems: 'center', gap: '8px' }}>
            📝 Final Assessment
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Video Player */}
        <div style={{ background: '#1a1a2e', padding: '0', position: 'relative' }}>
          <div style={{ aspectRatio: '16/8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', color: '#fff' }}>
            <div style={{ fontSize: '64px', opacity: 0.6 }}>▶️</div>
            <div style={{ fontWeight: 600 }}>Cash Flow Analysis in Cooperative Societies</div>
            <div style={{ fontSize: '13px', opacity: 0.6 }}>Prof. Meera Sharma, VAMNICOM • 24:35</div>
          </div>
          {/* Player Controls */}
          <div style={{ background: 'rgba(0,0,0,0.7)', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button style={{ background: 'none', color: '#fff', fontSize: '18px' }}>⏸</button>
            <div style={{ flex: 1, height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', position: 'relative' }}>
              <div style={{ width: '35%', height: '100%', background: 'var(--color-primary)', borderRadius: '2px' }} />
            </div>
            <span style={{ color: '#fff', fontSize: '12px' }}>8:32 / 24:35</span>
            <button style={{ background: 'none', color: '#fff', fontSize: '12px', fontWeight: 600 }}>1.0x</button>
            <button style={{ background: 'none', color: '#fff', fontSize: '16px' }}>🔊</button>
            <button style={{ background: 'none', color: '#fff', fontSize: '16px' }}>⛶</button>
          </div>
        </div>

        {/* Content Tabs */}
        <div style={{ flex: 1, padding: '0 20px 20px' }}>
          <div className="tabs">
            {['notes', 'resources', 'transcript', 'discussion'].map(tab => (
              <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === 'notes' && (
            <div>
              <textarea
                className="form-input"
                placeholder="Take notes here... Your notes are saved automatically."
                style={{ height: '120px', resize: 'vertical', fontFamily: 'var(--font-body)' }}
              />
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button className="btn btn-outline btn-sm">📄 Download PDF Notes</button>
                <button className="btn btn-outline btn-sm">📊 Download Slides</button>
              </div>
            </div>
          )}
          {activeTab === 'resources' && (
            <div className="grid-2" style={{ gap: '12px' }}>
              {['Balance Sheet Template.pdf', 'Income Statement Guide.pdf', 'Practice Problems.xlsx', 'Video Transcript.txt'].map(file => (
                <div key={file} className="card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>📎</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 500 }}>{file}</div>
                    <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>2.4 MB</div>
                  </div>
                  <button className="btn btn-ghost btn-sm">⬇️</button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div style={{ padding: '12px 20px', borderTop: '1px solid var(--color-neutral-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button className="btn btn-ghost">← Previous Lesson</button>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-outline btn-sm">📥 Download for Offline</button>
            <button className="btn btn-primary">Mark as Complete ✓</button>
          </div>
          <button className="btn btn-ghost">Next Lesson →</button>
        </div>
      </div>

      {/* AI Study Companion */}
      <div style={{ width: '280px', borderLeft: '1px solid var(--color-neutral-200)', display: 'flex', flexDirection: 'column', background: 'var(--color-neutral-50)' }}>
        <div style={{ padding: '16px', borderBottom: '1px solid var(--color-neutral-200)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>🤖</span>
          <span style={{ fontWeight: 600, fontSize: '14px' }}>AI Study Companion</span>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-tertiary)', marginLeft: 'auto' }} />
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: 'var(--color-neutral-100)', padding: '12px', borderRadius: '12px 12px 12px 4px', fontSize: '13px' }}>
            I noticed you're studying Cash Flow Analysis. Need help understanding any concept? 💡
          </div>
          <div style={{ background: 'var(--color-primary)', color: '#fff', padding: '12px', borderRadius: '12px 12px 4px 12px', fontSize: '13px', alignSelf: 'flex-end' }}>
            What's the difference between direct and indirect method?
          </div>
          <div style={{ background: 'var(--color-neutral-100)', padding: '12px', borderRadius: '12px 12px 12px 4px', fontSize: '13px', lineHeight: 1.6 }}>
            <strong>Great question!</strong><br /><br />
            <strong>Direct Method:</strong> Lists actual cash receipts/payments<br />
            <strong>Indirect Method:</strong> Starts with net income, adjusts for non-cash items<br /><br />
            Most cooperatives use the <em>indirect method</em> as it's simpler to prepare from existing records.
          </div>
        </div>
        <div style={{ padding: '12px', borderTop: '1px solid var(--color-neutral-200)', display: 'flex', gap: '8px' }}>
          <input
            className="form-input"
            placeholder="Ask about this lesson..."
            style={{ fontSize: '13px', padding: '8px 12px' }}
          />
          <button className="chat-send-btn" style={{ width: '36px', height: '36px', fontSize: '14px' }}>→</button>
        </div>
      </div>
    </div>
  );
}
