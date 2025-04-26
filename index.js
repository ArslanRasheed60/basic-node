const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simulate realistic minor delays
const simulateProcessing = (min, max) => {
    const delay = Math.floor(Math.random() * (max - min + 1) + min);
    return new Promise(resolve => setTimeout(resolve, delay));
};

// GET endpoint 1
app.get('/api/hello', async (req, res) => {
    await simulateProcessing(30, 70); // 30–70ms delay
    res.send({ message: 'Hello World!' });
});

// GET endpoint 2
app.get('/api/status', async (req, res) => {
    await simulateProcessing(80, 120); // 80–120ms delay
    res.send({ status: 'Server is running smoothly!' });
});

// POST endpoint 1 (form submit)
app.post('/api/submit', async (req, res) => {
    const { data } = req.body;
    await simulateProcessing(150, 300); // 150–300ms delay
    res.send({ message: `Data received: ${data}` });
});

// POST endpoint 2 (slow API call)
app.post('/api/delayed-3s', async (req, res) => {
    await simulateProcessing(800, 1200); // 800ms–1.2s delay
    res.send({ message: 'Response after simulated slow API call' });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on 0.0.0.0:${PORT}`);
});
