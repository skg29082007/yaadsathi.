const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5002;

// LMS Routes
app.get('/health', (req, res) => res.json({ status: 'LMS Service running' }));

app.get('/courses/:traineeId', (req, res) => {
    res.json([
        { id: 1, title: 'Cooperative Financial Management', progress: 68 },
        { id: 2, title: 'Digital Literacy Fundamentals', progress: 100 }
    ]);
});

app.post('/courses/progress', (req, res) => {
    const { courseId, progress } = req.body;
    res.json({ success: true, message: `Progress for course ${courseId} updated to ${progress}%` });
});

app.get('/certificates/:traineeId', (req, res) => {
    res.json([
        { id: 'NCCT-1234', title: 'Cooperative Financial Management', grade: 'A' }
    ]);
});

app.listen(PORT, () => {
    console.log(`📚 LMS Service running on http://localhost:${PORT}`);
});
