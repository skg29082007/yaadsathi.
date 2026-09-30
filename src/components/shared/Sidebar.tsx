import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/mockData';
import type { UserRole } from '../../data/mockData';
import { useLanguage } from '../../contexts/LanguageContext';

interface SidebarProps {
  readonly role: UserRole;
  readonly userName: string;
  readonly userAvatar: string;
}

export default function Sidebar({ role, userName, userAvatar }: SidebarProps) {
  const items = navItems[role];
  const { t } = useLanguage();

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">IH</div>
        <div>
          <div className="logo-text">Smart IH</div>
          <span className="logo-subtitle">Ecosystem</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <div className="nav-section-title">{t('Main Menu')}</div>
        </div>
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === `/${role}`}
            className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{t(item.label)}</span>
            {item.badge && <span className="nav-badge">{item.badge}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-user">
        <div className="user-avatar">{userAvatar}</div>
        <div className="user-info">
          <div className="user-name">{userName}</div>
          <div className="user-role">{role.charAt(0).toUpperCase() + role.slice(1)}</div>
        </div>
      </div>
    </aside>
  );
}
