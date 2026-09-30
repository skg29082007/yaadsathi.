import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizQuestions } from '../data/mockData';

export default function QuizPage() {
  const navigate = useNavigate();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({ 0: 2, 1: 1, 2: -1, 3: -1, 4: -1 });
  const [flagged, setFlagged] = useState<Set<number>>(new Set([2]));
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalQuestions = 15;
  const timeRemaining = '18:42';

  const question = quizQuestions[Math.min(currentQ, quizQuestions.length - 1)];

  const handleSubmit = () => {
    setShowSubmitModal(true);
  };

  const confirmSubmit = () => {
    setShowSubmitModal(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    // Calculate Score
    let score = 0;
    Object.keys(answers).forEach((qIdxStr) => {
      const qIdx = parseInt(qIdxStr);
      if (answers[qIdx] === quizQuestions[qIdx]?.correct) {
        score++;
      }
    });

    return (
      <div className="fade-in" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-background)', padding: '24px' }}>
        <div className="card" style={{ maxWidth: '500px', width: '100%', textAlign: 'center', padding: '40px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🎉</div>
          <h2 style={{ marginBottom: '8px' }}>Assessment Completed!</h2>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>You have successfully submitted the Financial Statements Assessment.</p>
          <div style={{ background: 'var(--color-primary-bg)', padding: '24px', borderRadius: 'var(--radius-lg)', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '36px', color: 'var(--color-primary)', margin: '0 0 8px 0' }}>{score} / 15</h3>
            <p style={{ margin: 0, fontWeight: 500 }}>Your final score</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn btn-outline" onClick={() => navigate('/trainee/assessments')}>View Detailed Results</button>
            <button className="btn btn-primary" onClick={() => navigate('/trainee/courses')}>Back to Courses</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-background)', padding: '0', position: 'relative' }}>
      
      {/* Submit Confirmation Modal */}
      {showSubmitModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'fadeIn 0.2s' }}>
          <div className="card" style={{ maxWidth: '400px', width: '100%', padding: '24px' }}>
            <h3 style={{ marginBottom: '16px', fontSize: '18px' }}>Submit Assessment?</h3>
            <p style={{ marginBottom: '24px', color: 'var(--color-text-muted)' }}>Are you sure you want to submit? You still have <strong>{15 - Object.keys(answers).length} unanswered</strong> questions and <strong>{flagged.size} flagged</strong> questions.</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
              <button className="btn btn-ghost" onClick={() => setShowSubmitModal(false)}>Cancel</button>
              <button className="btn btn-primary" onClick={confirmSubmit}>Yes, Submit</button>
            </div>
          </div>
        </div>
      )}

      {/* Top Bar */}
      <div style={{ background: 'var(--color-surface)', padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid var(--color-neutral-200)', position: 'sticky', top: 0, zIndex: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="btn btn-ghost btn-sm" onClick={() => navigate(-1)}>← Back</button>
          <div>
            <h3 style={{ fontSize: '16px', margin: 0 }}>Module 4: Financial Statements Assessment</h3>
            <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Cooperative Financial Management</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-primary)' }}>
            ⏱ {timeRemaining}
          </div>
          <span style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>
            Question <strong>{currentQ + 1}</strong> of <strong>{totalQuestions}</strong>
          </span>
          <button className="btn btn-primary" onClick={handleSubmit}>Submit Quiz</button>
        </div>
      </div>

      <div style={{ display: 'flex', maxWidth: '1200px', margin: '24px auto', gap: '24px', padding: '0 24px' }}>
        {/* Question Area */}
        <div style={{ flex: 1 }}>
          <div className="card animate-fade-in">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ background: 'var(--color-primary)', color: '#fff', fontWeight: 700, padding: '4px 12px', borderRadius: 'var(--radius-md)', fontSize: '14px' }}>
                Q{currentQ + 1}
              </span>
              <span className="badge badge-info">Single Choice</span>
            </div>

            <h3 style={{ fontSize: '18px', lineHeight: 1.6, marginBottom: '24px' }}>
              {question.question}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {question.options.map((option, i) => (
                <div
                  key={i}
                  onClick={() => {
                    const newAnswers = { ...answers, [currentQ]: i };
                    setAnswers(newAnswers);
                  }}
                  style={{
                    padding: '16px 20px',
                    border: `2px solid ${answers[currentQ] === i ? 'var(--color-primary)' : 'var(--color-neutral-200)'}`,
                    borderRadius: 'var(--radius-lg)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    background: answers[currentQ] === i ? 'var(--color-primary-bg)' : 'var(--color-surface)',
                    transition: 'all 0.2s ease',
                    fontWeight: answers[currentQ] === i ? 600 : 400,
                  }}
                >
                  <span style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: `2px solid ${answers[currentQ] === i ? 'var(--color-primary)' : 'var(--color-neutral-300)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 700,
                    flexShrink: 0,
                    background: answers[currentQ] === i ? 'var(--color-primary)' : 'transparent',
                    color: answers[currentQ] === i ? '#fff' : 'var(--color-text-muted)',
                  }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-neutral-200)' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={flagged.has(currentQ)}
                  onChange={() => {
                    const next = new Set(flagged);
                    next.has(currentQ) ? next.delete(currentQ) : next.add(currentQ);
                    setFlagged(next);
                  }}
                />
                🚩 Flag for Review
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-ghost" disabled={currentQ === 0} onClick={() => setCurrentQ(currentQ - 1)}>← Previous</button>
                <button className="btn btn-primary" onClick={() => setCurrentQ(Math.min(currentQ + 1, totalQuestions - 1))}>Next →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Question Navigation */}
        <div style={{ width: '220px' }}>
          <div className="card">
            <h4 style={{ fontSize: '14px', marginBottom: '16px' }}>Question Navigator</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '16px' }}>
              {Array.from({ length: totalQuestions }, (_, i) => {
                const answered = answers[i] !== undefined && answers[i] !== -1;
                const isCurrent = i === currentQ;
                const isFlagged = flagged.has(i);
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentQ(i)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: 'var(--radius-md)',
                      border: isCurrent ? '2px solid var(--color-primary)' : isFlagged ? '2px solid var(--color-warning)' : '1px solid var(--color-neutral-200)',
                      background: isCurrent ? 'var(--color-primary)' : answered ? 'var(--color-tertiary)' : 'var(--color-surface)',
                      color: isCurrent || answered ? '#fff' : 'var(--color-text-muted)',
                      fontWeight: 600,
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', background: 'var(--color-tertiary)', display: 'inline-block' }} /> Answered
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', background: 'var(--color-primary)', display: 'inline-block' }} /> Current
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', border: '2px solid var(--color-warning)', display: 'inline-block' }} /> Flagged
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: 12, height: 12, borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-neutral-300)', display: 'inline-block' }} /> Unanswered
              </div>
            </div>

            <div style={{ marginTop: '16px', padding: '8px 12px', background: 'var(--color-neutral-100)', borderRadius: 'var(--radius-md)', fontSize: '12px', color: 'var(--color-text-muted)' }}>
              ✓ Progress auto-saved
            </div>

            <button className="btn btn-primary w-full mt-4" style={{ width: '100%', marginTop: '16px' }} onClick={handleSubmit}>
              Submit Quiz
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
