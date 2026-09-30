const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

// ERP Routes
app.get('/health', (req, res) => res.json({ status: 'ERP Service running' }));

app.get('/programmes', (req, res) => {
    res.json([
        { id: 1, title: 'Cooperative Financial Management', status: 'active' },
        { id: 2, title: 'Digital Literacy Fundamentals', status: 'active' }
    ]);
});

app.post('/nominations/approve', (req, res) => {
    // Mock approval logic
    const { nominationId } = req.body;
    res.json({ success: true, message: `Nomination ${nominationId} approved successfully.` });
});

app.get('/institutions', (req, res) => {
    res.json([
        { id: 'vamnicom', name: 'VAMNICOM, Pune', type: 'National' },
        { id: 'ricm_blr', name: 'RICM Bangalore', type: 'Regional' }
    ]);
});

app.listen(PORT, () => {
    console.log(`🏭 ERP Service running on http://localhost:${PORT}`);
});
