export default function PlaceholderPage() {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh', textAlign: 'center' }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>🚧</h1>
      <h2>Feature Coming Soon</h2>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', marginTop: '1rem' }}>
        This module is part of the expanded ecosystem roadmap. For the hackathon prototype, we have focused on demonstrating the core workflows: Dashboards, AI Chatbot, Course Player, Quizzes, Job Matching, and Programme Creation.
      </p>
      <button 
        className="btn btn-primary" 
        style={{ marginTop: '2rem' }}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
}
