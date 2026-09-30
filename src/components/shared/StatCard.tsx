interface StatCardProps {
  readonly icon: string;
  readonly value: string;
  readonly label: string;
  readonly change?: string;
  readonly variant?: 'primary' | 'secondary' | 'success' | 'warning';
}

export default function StatCard({ icon, value, label, change, variant = 'primary' }: StatCardProps) {
  const isPositive = change?.startsWith('+');

  return (
    <div className="stat-card animate-fade-in">
      <div className={`stat-icon ${variant}`}>
        <span>{icon}</span>
      </div>
      <div className="stat-content">
        <div className="stat-value">{value}</div>
        <div className="stat-label">{label}</div>
        {change && (
          <span className={`stat-change ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '↑' : '↓'} {change}
          </span>
        )}
      </div>
    </div>
  );
}
