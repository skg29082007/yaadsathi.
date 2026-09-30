import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import LoginPage from './pages/LoginPage.tsx';
import TraineeDashboard from './pages/TraineeDashboard.tsx';
import CoursePlayer from './pages/CoursePlayer.tsx';
import QuizPage from './pages/QuizPage.tsx';
import CertificatesPage from './pages/CertificatesPage.tsx';
import JobMatchingPage from './pages/JobMatchingPage.tsx';
import ChatbotPage from './pages/ChatbotPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import SettingsPage from './pages/SettingsPage.tsx';

import AdminDashboard from './pages/AdminDashboard.tsx';
import AnalyticsPage from './pages/AnalyticsPage.tsx';
import ProgrammeCreationPage from './pages/ProgrammeCreationPage.tsx';

import TrainerDashboard from './pages/TrainerDashboard.tsx';
import AttendancePage from './pages/AttendancePage.tsx';

import EmployerDashboard from './pages/EmployerDashboard.tsx';
import GenericPage from './pages/GenericPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'login', element: <LoginPage /> },
      
      // Trainee Routes
      { path: 'trainee', element: <TraineeDashboard /> },
      { path: 'trainee/courses', element: <CoursePlayer /> },
      { path: 'course-player', element: <CoursePlayer /> },
      { path: 'trainee/assessments', element: <QuizPage /> },
      { path: 'quiz', element: <QuizPage /> },
      { path: 'certificates', element: <CertificatesPage /> },
      { path: 'jobs', element: <JobMatchingPage /> },
      { path: 'chatbot', element: <ChatbotPage /> },
      { path: 'trainee/profile', element: <ProfilePage /> },
      
      // Admin Routes
      { path: 'admin', element: <AdminDashboard /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'admin/programmes/new', element: <ProgrammeCreationPage /> },
      
      // Trainer Routes
      { path: 'trainer', element: <TrainerDashboard /> },
      { path: 'attendance', element: <AttendancePage /> },
      { path: 'trainer/profile', element: <ProfilePage /> },
      
      // Employer Routes
      { path: 'employer', element: <EmployerDashboard /> },
      { path: 'employer/profile', element: <ProfilePage /> },
      
      // Shared Routes
      { path: ':role/settings', element: <SettingsPage /> },
      
      // Catch-all for all other sidebar links
      { path: '*', element: <GenericPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </StrictMode>,
);
