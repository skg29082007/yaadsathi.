import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/shared/Sidebar';
import type { UserRole } from './data/mockData';

export default function App() {
  const location = useLocation();
  
  // Very basic auth / role determination based on path for this prototype
  let role: UserRole = 'trainee'; // Default
  if (location.pathname.startsWith('/admin') || location.pathname.startsWith('/analytics')) role = 'admin';
  else if (location.pathname.startsWith('/trainer') || location.pathname.startsWith('/attendance')) role = 'trainer';
  else if (location.pathname.startsWith('/employer')) role = 'employer';
  
  const isLoginPage = location.pathname === '/login';

  // Redirect root to login
  if (location.pathname === '/') {
    return <Navigate to="/login" replace />;
  }

  if (isLoginPage) {
    return <Outlet />;
  }

  // Mock User Data for Sidebar
  const mockUser = {
    name: role === 'admin' ? 'Admin User' : role === 'trainer' ? 'Dr. Sharma' : role === 'employer' ? 'HR Manager' : 'Rajesh Kumar',
    avatar: role === 'admin' ? 'AU' : role === 'trainer' ? 'MS' : role === 'employer' ? 'HR' : 'RK'
  };

  return (
    <div className="layout">
      <Sidebar role={role} userName={mockUser.name} userAvatar={mockUser.avatar} />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
