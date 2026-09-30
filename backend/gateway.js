const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.GATEWAY_PORT || 5000;

// Microservice URLs
const SERVICES = {
  erp: process.env.ERP_URL || 'http://localhost:5001',
  lms: process.env.LMS_URL || 'http://localhost:5002',
  employment: process.env.EMPLOYMENT_URL || 'http://localhost:5003',
};

// Basic Auth Middleware mockup
const authMiddleware = (req, res, next) => {
    // In a real app, verify JWT here
    const token = req.headers.authorization;
    console.log(`[Gateway] Authenticating request to ${req.path}`);
    // Mock user injection
    req.user = { id: 1, role: 'admin' };
    next();
};

// Health Check
app.get('/health', (req, res) => {
    res.json({ status: 'Gateway is running', timestamp: new Date() });
});

// ERP Routes (Admin, Institutional Data, Nominations)
app.use('/api/erp', authMiddleware, createProxyMiddleware({ 
    target: SERVICES.erp, 
    changeOrigin: true,
    pathRewrite: { '^/api/erp': '' }
}));

// LMS Routes (Courses, Quiz, Progress)
app.use('/api/lms', authMiddleware, createProxyMiddleware({ 
    target: SERVICES.lms, 
    changeOrigin: true,
    pathRewrite: { '^/api/lms': '' }
}));

// Employment Exchange Routes (Jobs, AI Matching, Applications)
app.use('/api/employment', authMiddleware, createProxyMiddleware({ 
    target: SERVICES.employment, 
    changeOrigin: true,
    pathRewrite: { '^/api/employment': '' }
}));

app.listen(PORT, () => {
    console.log(`🚀 API Gateway running on http://localhost:${PORT}`);
});
