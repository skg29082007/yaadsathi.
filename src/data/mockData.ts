// Mock data for the Smart IH Ecosystem
export const currentUser = {
  name: 'Rajesh Kumar',
  role: 'admin' as const, // 'admin' | 'trainee' | 'trainer' | 'employer'
  email: 'rajesh.kumar@ncct.gov.in',
  avatar: 'RK',
  institution: 'VAMNICOM, Pune',
};

export const stats = {
  admin: {
    totalProgrammes: { value: '156', label: 'Total Programmes', change: '+12%', icon: '📋' },
    activeTrainees: { value: '12,450', label: 'Active Trainees', change: '+8%', icon: '👥' },
    certificatesIssued: { value: '8,932', label: 'Certificates Issued', change: '+22%', icon: '🏅' },
    pendingNominations: { value: '234', label: 'Pending Nominations', change: '-5%', icon: '📝' },
  },
  trainee: {
    enrolledCourses: { value: '4', label: 'Enrolled Courses', icon: '📚' },
    completed: { value: '2', label: 'Completed', icon: '✅' },
    certificates: { value: '2', label: 'Certificates Earned', icon: '🏆' },
    activeAssessments: { value: '1', label: 'Active Assessments', icon: '⏰' },
  },
  trainer: {
    activeProgrammes: { value: '3', label: 'Active Programmes', icon: '📋' },
    totalTrainees: { value: '145', label: 'Total Trainees', icon: '👥' },
    assessments: { value: '12', label: 'Assessments Created', icon: '📝' },
    completionRate: { value: '78%', label: 'Avg. Completion Rate', icon: '📈' },
  },
  employer: {
    activeJobs: { value: '8', label: 'Active Job Posts', icon: '💼' },
    totalApplications: { value: '156', label: 'Total Applications', icon: '📄' },
    shortlisted: { value: '34', label: 'Shortlisted', icon: '✅' },
    avgMatchScore: { value: '87%', label: 'AI Match Score Avg', icon: '🎯' },
  },
};

export const recentNominations = [
  { id: 1, name: 'Priya Sharma', institution: 'RICM Bangalore', programme: 'Financial Literacy', status: 'pending' },
  { id: 2, name: 'Amit Patel', institution: 'ICM Ahmedabad', programme: 'Digital Skills', status: 'approved' },
  { id: 3, name: 'Sunita Devi', institution: 'RICM Jaipur', programme: 'PACS Management', status: 'approved' },
  { id: 4, name: 'Ravi Kumar', institution: 'RICM Lucknow', programme: 'Cooperative Mgmt', status: 'rejected' },
  { id: 5, name: 'Meena Gupta', institution: 'VAMNICOM Pune', programme: 'Rural Marketing', status: 'pending' },
];

export const programmes = [
  { id: 1, title: 'Cooperative Financial Management', code: 'CFM-2025-001', category: 'Financial Literacy', startDate: '2025-10-01', endDate: '2025-10-30', mode: 'Hybrid', participants: 45, maxParticipants: 50, status: 'active' },
  { id: 2, title: 'Digital Literacy Fundamentals', code: 'DLF-2025-002', category: 'Digital Skills', startDate: '2025-09-15', endDate: '2025-10-15', mode: 'Online', participants: 120, maxParticipants: 150, status: 'active' },
  { id: 3, title: 'PACS Management Training', code: 'PMT-2025-003', category: 'Cooperative Management', startDate: '2025-11-01', endDate: '2025-11-20', mode: 'Offline', participants: 0, maxParticipants: 30, status: 'upcoming' },
  { id: 4, title: 'Rural Marketing Strategies', code: 'RMS-2025-004', category: 'Rural Marketing', startDate: '2025-08-01', endDate: '2025-08-30', mode: 'Online', participants: 85, maxParticipants: 100, status: 'completed' },
];

export const courses = [
  { id: 1, title: 'Cooperative Financial Management', progress: 68, lastAccessed: '2 hours ago', nextLesson: 'Chapter 5: Balance Sheet Analysis', thumbnail: '📊', instructor: 'Prof. Meera Sharma', duration: '24 hrs' },
  { id: 2, title: 'Digital Literacy Fundamentals', progress: 100, lastAccessed: '1 day ago', nextLesson: 'Completed', thumbnail: '💻', instructor: 'Dr. Arun Verma', duration: '18 hrs' },
  { id: 3, title: 'Introduction to PACS', progress: 45, lastAccessed: '3 hours ago', nextLesson: 'Chapter 3: PACS Structure', thumbnail: '🏛️', instructor: 'Prof. Rekha Singh', duration: '20 hrs' },
  { id: 4, title: 'Rural Marketing Strategies', progress: 22, lastAccessed: '5 days ago', nextLesson: 'Chapter 2: Market Analysis', thumbnail: '🌾', instructor: 'Dr. Suresh Iyer', duration: '15 hrs' },
];

export const courseChapters = [
  { id: 1, title: 'Introduction to Cooperatives', completed: true, lessons: [
    { id: '1.1', title: 'What are Cooperatives?', completed: true },
    { id: '1.2', title: 'History in India', completed: true },
  ]},
  { id: 2, title: 'Types of Cooperatives', completed: true, lessons: [
    { id: '2.1', title: 'Credit Cooperatives', completed: true },
    { id: '2.2', title: 'Consumer Cooperatives', completed: true },
  ]},
  { id: 3, title: 'Legal Framework', completed: true, lessons: [
    { id: '3.1', title: 'Cooperative Societies Act', completed: true },
    { id: '3.2', title: 'Multi-State Cooperative Act', completed: true },
  ]},
  { id: 4, title: 'Financial Statements', completed: false, current: true, lessons: [
    { id: '4.1', title: 'Balance Sheet', completed: true },
    { id: '4.2', title: 'Income Statement', completed: true },
    { id: '4.3', title: 'Cash Flow Analysis', completed: false, current: true },
    { id: '4.4', title: 'Ratio Analysis', completed: false },
  ]},
  { id: 5, title: 'Audit Procedures', completed: false, locked: true, lessons: [] },
  { id: 6, title: 'Digital Tools', completed: false, locked: true, lessons: [] },
];

export const quizQuestions = [
  { id: 1, question: 'Which of the following is NOT a component of a cooperative society\'s balance sheet?', options: ['Share Capital', 'Reserve Fund', 'Profit & Loss Account', 'Market Capitalization'], correct: 3, type: 'single' },
  { id: 2, question: 'The minimum number of members required to form a cooperative society is:', options: ['5', '7', '10', '15'], correct: 2, type: 'single' },
  { id: 3, question: 'Which act governs cooperative societies in India at the national level?', options: ['Companies Act 2013', 'Multi-State Cooperative Societies Act 2002', 'Partnership Act 1932', 'Banking Regulation Act 1949'], correct: 1, type: 'single' },
  { id: 4, question: 'What is the primary objective of a cooperative society?', options: ['Profit maximization', 'Service to members', 'Market dominance', 'Tax evasion'], correct: 1, type: 'single' },
  { id: 5, question: 'In a cooperative society, voting rights are based on:', options: ['One member, one vote', 'Number of shares held', 'Amount of capital contributed', 'Seniority of membership'], correct: 0, type: 'single' },
  { id: 6, question: 'Which financial statement shows the financial position of a cooperative at a specific point in time?', options: ['Income Statement', 'Cash Flow Statement', 'Balance Sheet', 'Statement of Retained Earnings'], correct: 2, type: 'single' },
  { id: 7, question: 'What does PACS stand for in the context of Indian cooperatives?', options: ['Primary Agricultural Credit Society', 'Public Area Cooperative Scheme', 'Premium Asset Control System', 'Primary Asset Credit Scheme'], correct: 0, type: 'single' },
  { id: 8, question: 'Which of these is a statutory reserve for cooperative societies?', options: ['Dividend Equalization Reserve', 'Building Fund', 'Statutory Reserve Fund', 'Bad Debt Reserve'], correct: 2, type: 'single' },
  { id: 9, question: 'Who conducts the statutory audit of a cooperative society?', options: ['Internal Auditor', 'Registrar of Cooperative Societies', 'Income Tax Department', 'SEBI'], correct: 1, type: 'single' },
  { id: 10, question: 'What is the maximum dividend rate typically allowed in many state cooperative societies?', options: ['5%', '10%', '15%', '25%'], correct: 2, type: 'single' },
  { id: 11, question: 'Which institution provides refinance to cooperative banks in India for agricultural purposes?', options: ['RBI', 'NABARD', 'SBI', 'SIDBI'], correct: 1, type: 'single' },
  { id: 12, question: 'A cooperative society must transfer at least what percentage of its net profits to the statutory reserve fund?', options: ['10%', '15%', '25%', '50%'], correct: 2, type: 'single' },
  { id: 13, question: 'The highest authority in a cooperative society rests with:', options: ['The Chairman', 'The Board of Directors', 'The General Body of Members', 'The Registrar'], correct: 2, type: 'single' },
  { id: 14, question: 'Which accounting method is generally preferred for cooperative societies?', options: ['Cash Basis', 'Accrual Basis', 'Hybrid Basis', 'Single Entry System'], correct: 1, type: 'single' },
  { id: 15, question: 'What type of cooperative is AMUL primarily known as?', options: ['Credit Cooperative', 'Consumer Cooperative', 'Dairy Cooperative', 'Housing Cooperative'], correct: 2, type: 'single' },
];

export const certificates = [
  { id: 'NCCT-2025-CFM-001234', title: 'Cooperative Financial Management', issueDate: '15 Sep 2025', grade: 'A', score: 90, status: 'verified', institution: 'VAMNICOM, Pune' },
  { id: 'NCCT-2025-DLF-005678', title: 'Digital Literacy Fundamentals', issueDate: '01 Aug 2025', grade: 'B+', score: 82, status: 'verified', institution: 'RICM Bangalore' },
  { id: 'NCCT-2025-PACS-009012', title: 'Introduction to PACS', issueDate: '', grade: '', score: 0, status: 'in-progress', institution: 'VAMNICOM, Pune', progress: 45 },
];

export const trainerSchedule = [
  { id: 1, time: '9:00 AM - 11:00 AM', title: 'Financial Management (Batch A)', trainees: 45, room: 'Room 201', mode: 'Offline' },
  { id: 2, time: '11:00 AM - 1:00 PM', title: 'Digital Literacy (Batch B)', trainees: 32, room: 'Online', mode: 'Online' },
  { id: 3, time: '2:00 PM - 4:00 PM', title: 'PACS Management (Batch C)', trainees: 28, room: 'Room 105', mode: 'Hybrid' },
];

export const attendanceRecords = [
  { id: 1, name: 'Rajesh Kumar', time: '9:02 AM', method: 'QR', verified: true },
  { id: 2, name: 'Priya Patel', time: '9:03 AM', method: 'QR', verified: true },
  { id: 3, name: 'Amit Singh', time: '9:03 AM', method: 'QR', verified: true },
  { id: 4, name: 'Sunita Devi', time: '9:05 AM', method: 'Face', verified: true },
  { id: 5, name: 'Ravi Sharma', time: '9:06 AM', method: 'QR', verified: true },
  { id: 6, name: 'Meena Gupta', time: '9:08 AM', method: 'Face', verified: true },
];

export const jobListings = [
  { id: 1, title: 'Cooperative Society Manager', company: 'Maharashtra State Cooperative Union', location: 'Pune, Maharashtra', salary: '₹35,000 - ₹45,000/month', matchScore: 92, skills: ['Financial Management', 'PACS', 'Audit'], posted: '2 days ago', bestMatch: true },
  { id: 2, title: 'Accounts Officer', company: 'NCCT Delhi', location: 'New Delhi', salary: '₹28,000 - ₹38,000/month', matchScore: 87, skills: ['Accounting', 'Tally', 'Excel'], posted: '4 days ago', bestMatch: false },
  { id: 3, title: 'Field Coordinator', company: 'Rural Development Corporation', location: 'Nashik, Maharashtra', salary: '₹25,000 - ₹32,000/month', matchScore: 81, skills: ['Field Work', 'Communication', 'Agriculture'], posted: '1 week ago', bestMatch: false },
  { id: 4, title: 'Training Facilitator', company: 'RICM Bangalore', location: 'Bangalore, Karnataka', salary: '₹30,000 - ₹40,000/month', matchScore: 76, skills: ['Training', 'LMS', 'Education'], posted: '1 week ago', bestMatch: false },
];

export const employerJobs = [
  { id: 1, title: 'Cooperative Manager', location: 'Mumbai', posted: '12 Sep', applications: 34, status: 'active' },
  { id: 2, title: 'Accounts Officer', location: 'Pune', posted: '15 Sep', applications: 28, status: 'active' },
  { id: 3, title: 'Field Officer', location: 'Rural Maharashtra', posted: '18 Sep', applications: 45, status: 'active' },
  { id: 4, title: 'IT Coordinator', location: 'Delhi', posted: '20 Sep', applications: 12, status: 'draft' },
];

export const topCandidates = [
  { id: 1, name: 'Rajesh Kumar', matchScore: 92, skills: ['Financial Management', 'Excel', 'Tally'], certification: 'NCCT Certified', location: 'Pune, Maharashtra' },
  { id: 2, name: 'Priya Patel', matchScore: 88, skills: ['Accounting', 'SAP', 'Audit'], certification: 'NCCT Certified', location: 'Ahmedabad, Gujarat' },
  { id: 3, name: 'Amit Singh', matchScore: 85, skills: ['Management', 'Communication', 'IT'], certification: 'NCCT Certified', location: 'Delhi' },
];

export const chatMessages = [
  { id: 1, role: 'bot' as const, content: 'Namaste! 🙏 I\'m your AI Career Counselor. I can help you with career planning, skill development advice, job market insights, and more. What would you like to explore today?' },
  { id: 2, role: 'user' as const, content: 'What career options are available after completing the Cooperative Financial Management programme?' },
  { id: 3, role: 'bot' as const, content: `Based on your training and the NCCT curriculum, here are promising career paths:

💼 **Direct Employment Opportunities:**
1. Cooperative Society Manager (₹30-50K/month)
2. Accounts Officer in PACS (₹25-40K/month)  
3. Audit Inspector (₹35-55K/month)
4. Financial Advisor for SHGs (₹28-45K/month)

🎓 **Further Certifications:**
• NCCT Advanced Diploma in Cooperative Banking
• CA/CMA Foundation (your training covers 40% syllabus)

📈 **Growth Trajectory:**
Entry Level → 3-5 years: Branch Manager → 8-10 years: Regional Director

Based on your profile match scores, I'd recommend focusing on Cooperative Society Manager roles. Would you like me to show matching jobs?` },
];

export const quickTopics = [
  'Career Paths in Cooperatives',
  'Skill Gap Analysis',
  'Interview Preparation',
  'Government Schemes for Youth',
  'Higher Education Options',
  'Entrepreneurship in Rural Areas',
];

export const analyticsData = {
  kpis: [
    { label: 'Total Trainees', value: '52,450', change: '+18%', icon: '👥' },
    { label: 'Active Programmes', value: '156', change: '+5%', icon: '📋' },
    { label: 'Completion Rate', value: '78.5%', change: '+12%', icon: '📊' },
    { label: 'Avg Score', value: '72.3', change: '+3%', icon: '📝' },
    { label: 'Placement Rate', value: '34.2%', change: '+8%', icon: '💼' },
  ],
  stateData: [
    { state: 'Maharashtra', trainees: 8450 },
    { state: 'Uttar Pradesh', trainees: 6230 },
    { state: 'Karnataka', trainees: 5100 },
    { state: 'Gujarat', trainees: 4800 },
    { state: 'Rajasthan', trainees: 4200 },
    { state: 'Tamil Nadu', trainees: 3900 },
    { state: 'Madhya Pradesh', trainees: 3600 },
    { state: 'Kerala', trainees: 3200 },
    { state: 'West Bengal', trainees: 2800 },
    { state: 'Punjab', trainees: 2500 },
  ],
  categories: [
    { name: 'Cooperative Mgmt', value: 35, color: 'var(--color-primary)' },
    { name: 'Financial Literacy', value: 25, color: 'var(--color-secondary)' },
    { name: 'Digital Skills', value: 20, color: 'var(--color-tertiary)' },
    { name: 'Rural Marketing', value: 12, color: 'var(--color-warning)' },
    { name: 'PACS Training', value: 8, color: 'var(--color-info)' },
  ],
};

export type UserRole = 'admin' | 'trainee' | 'trainer' | 'employer';

export interface NavItem {
  icon: string;
  label: string;
  path: string;
  badge?: number;
}

export const navItems: Record<UserRole, NavItem[]> = {
  admin: [
    { icon: '📊', label: 'Dashboard', path: '/admin' },
    { icon: '📋', label: 'Programmes', path: '/admin/programmes' },
    { icon: '🏛️', label: 'Institutions', path: '/admin/institutions' },
    { icon: '👥', label: 'Trainees', path: '/admin/trainees' },
    { icon: '👨‍🏫', label: 'Trainers', path: '/admin/trainers' },
    { icon: '📝', label: 'Nominations', path: '/admin/nominations', badge: 234 },
    { icon: '✅', label: 'Attendance', path: '/admin/attendance' },
    { icon: '🏅', label: 'Certificates', path: '/admin/certificates' },
    { icon: '📈', label: 'Analytics', path: '/analytics' },
    { icon: '⚙️', label: 'Settings', path: '/admin/settings' },
  ],
  trainee: [
    { icon: '🏠', label: 'My Dashboard', path: '/trainee' },
    { icon: '📚', label: 'My Courses', path: '/trainee/courses' },
    { icon: '📝', label: 'Assessments', path: '/trainee/assessments' },
    { icon: '🏅', label: 'Certificates', path: '/certificates' },
    { icon: '💼', label: 'Job Search', path: '/jobs' },
    { icon: '🤖', label: 'Career Chatbot', path: '/chatbot' },
    { icon: '👤', label: 'My Profile', path: '/trainee/profile' },
    { icon: '⚙️', label: 'Settings', path: '/trainee/settings' },
  ],
  trainer: [
    { icon: '📊', label: 'Dashboard', path: '/trainer' },
    { icon: '📋', label: 'My Programmes', path: '/trainer/programmes' },
    { icon: '☁️', label: 'Content Upload', path: '/trainer/content' },
    { icon: '📝', label: 'Create Assessment', path: '/trainer/assessments' },
    { icon: '✅', label: 'Attendance', path: '/attendance' },
    { icon: '📈', label: 'Trainee Progress', path: '/trainer/progress' },
    { icon: '📄', label: 'Reports', path: '/trainer/reports' },
    { icon: '👤', label: 'Profile', path: '/trainer/profile' },
    { icon: '⚙️', label: 'Settings', path: '/trainer/settings' },
  ],
  employer: [
    { icon: '📊', label: 'Dashboard', path: '/employer' },
    { icon: '📝', label: 'Post Jobs', path: '/employer/post' },
    { icon: '🔍', label: 'Candidate Search', path: '/employer/search' },
    { icon: '📄', label: 'Applications', path: '/employer/applications' },
    { icon: '🔐', label: 'Certificate Verification', path: '/employer/verify' },
    { icon: '🏢', label: 'Company Profile', path: '/employer/profile' },
    { icon: '⚙️', label: 'Settings', path: '/employer/settings' },
  ],
};
