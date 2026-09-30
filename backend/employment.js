const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5003;

// Employment Exchange Routes
app.get('/health', (req, res) => res.json({ status: 'Employment Service running' }));

app.get('/jobs', (req, res) => {
    res.json([
        { id: 1, title: 'Cooperative Society Manager', company: 'Maha Coop', matchScore: 92 },
        { id: 2, title: 'Accounts Officer', company: 'NCCT Delhi', matchScore: 87 }
    ]);
});

app.post('/jobs/apply', (req, res) => {
    const { jobId, traineeId } = req.body;
    res.json({ success: true, message: `Successfully applied to job ${jobId}` });
});

app.get('/employers/candidates', (req, res) => {
    // Mock candidate search
    res.json([
        { id: 1, name: 'Rajesh Kumar', matchScore: 92, skills: ['Finance', 'Tally'] }
    ]);
});

app.listen(PORT, () => {
    console.log(`💼 Employment Exchange Service running on http://localhost:${PORT}`);
});
