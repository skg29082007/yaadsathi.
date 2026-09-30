import { useState, useRef, useEffect } from 'react';
import TopBar from '../components/shared/TopBar';
import { chatMessages, quickTopics } from '../data/mockData';

export default function ChatbotPage() {
  const [messages, setMessages] = useState(chatMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = (text: string = input) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { id: prev.length + 1, role: 'user', content: text }]);
    if (text === input) setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        role: 'bot',
        content: `Thank you for asking about "${text}". Let me look into that. Based on the NCCT database and current market data, I'd recommend exploring roles in cooperative banking and financial advisory. Would you like specific job listings?`
      }]);
    }, 1000);
  };

  return (
    <>
      <TopBar title="AI Career Counselor" breadcrumbs={['Dashboard', 'Career Chatbot']} />

      <div style={{ display: 'flex', gap: '20px', height: 'calc(100vh - 180px)' }}>
        {/* Left Panel - History & Topics */}
        <div style={{ width: '260px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <button className="btn btn-primary w-full" style={{ width: '100%' }}>+ New Chat</button>

          <div className="card" style={{ flex: 0, padding: '12px' }}>
            <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Recent</h5>
            {[
              { title: 'Career options after PACS', time: 'Today' },
              { title: 'How to become a coop manager', time: 'Yesterday' },
              { title: 'Salary expectations', time: '2 days ago' },
            ].map((chat, i) => (
              <div key={i} style={{ padding: '8px', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontSize: '13px', marginBottom: '4px', background: i === 0 ? 'var(--color-primary-bg)' : 'transparent' }}>
                <div style={{ fontWeight: i === 0 ? 600 : 400, color: i === 0 ? 'var(--color-primary)' : 'inherit' }}>{chat.title}</div>
                <div style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{chat.time}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ flex: 1, overflow: 'auto', padding: '12px' }}>
            <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Quick Topics</h5>
            {quickTopics.map((topic) => (
              <div
                key={topic}
                onClick={() => sendMessage(topic)}
                style={{ padding: '10px', borderRadius: 'var(--radius-md)', cursor: 'pointer', fontSize: '13px', marginBottom: '4px', border: '1px solid var(--color-neutral-200)', transition: 'all 0.2s' }}
              >
                💡 {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="chat-container" style={{ flex: 1 }}>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--color-neutral-200)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '18px' }}>🤖</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '14px' }}>Career Advisor</div>
              <div style={{ fontSize: '11px', color: 'var(--color-tertiary)' }}>● Online • Powered by RAG</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
              <span className="badge badge-info" style={{ fontSize: '10px' }}>🌐 English</span>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.role}`}>
                <div className="chat-avatar">
                  {msg.role === 'bot' ? '🤖' : '👤'}
                </div>
                <div className="chat-bubble" style={{ whiteSpace: 'pre-line' }}>
                  {msg.content}
                  {msg.role === 'bot' && msg.id === 3 && (
                    <div style={{ marginTop: '12px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      <button className="btn btn-outline btn-sm" style={{ fontSize: '11px' }}>Show matching jobs →</button>
                      <button className="btn btn-ghost btn-sm" style={{ fontSize: '11px' }}>👍</button>
                      <button className="btn btn-ghost btn-sm" style={{ fontSize: '11px' }}>👎</button>
                    </div>
                  )}
                  {msg.role === 'bot' && msg.id === 3 && (
                    <div style={{ marginTop: '8px', fontSize: '10px', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
                      Sources: NCCT Annual Report 2024, Ministry of Cooperation Guidelines
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <button className="icon-btn" title="Voice Input" style={{ width: '36px', height: '36px' }}>🎤</button>
            <button className="icon-btn" title="Upload Resume" style={{ width: '36px', height: '36px' }}>📎</button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask about careers, skills, jobs..."
            />
            <button className="chat-send-btn" onClick={() => sendMessage()}>→</button>
          </div>
        </div>

        {/* Right Panel - Context */}
        <div style={{ width: '240px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card" style={{ padding: '16px' }}>
            <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Your Profile</h5>
            <div style={{ fontSize: '13px', marginBottom: '4px' }}><strong>Skills:</strong> Finance, Excel, Tally</div>
            <div style={{ fontSize: '13px', marginBottom: '4px' }}><strong>Certs:</strong> 2 NCCT Certified</div>
            <div style={{ fontSize: '13px', marginBottom: '8px' }}><strong>Location:</strong> Pune, MH</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Match Ready</span>
              <span style={{ fontWeight: 700, color: 'var(--color-tertiary)' }}>85%</span>
            </div>
            <div className="progress-bar" style={{ height: '4px', marginTop: '4px' }}>
              <div className="progress-fill" style={{ width: '85%' }} />
            </div>
          </div>

          <div className="card" style={{ padding: '16px', flex: 1 }}>
            <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Resources</h5>
            {[
              'NCCT Course Catalog',
              'Government Job Portals',
              'Cooperative Directory',
              'Skill Gap Report',
            ].map(resource => (
              <a key={resource} href="#" style={{ display: 'block', padding: '6px 0', fontSize: '13px', borderBottom: '1px solid var(--color-neutral-100)' }}>
                📄 {resource}
              </a>
            ))}
          </div>

          <div className="card" style={{ padding: '16px' }}>
            <h5 style={{ fontSize: '12px', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: '8px' }}>Knowledge Sources</h5>
            <div style={{ fontSize: '11px', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              This chatbot uses RAG (Retrieval Augmented Generation) to provide accurate career advice from curated NCCT documents.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
