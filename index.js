// server.js

const express = require('express');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint 1
app.get('/api/hello', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    res.send({ message: 'Hello World!' });
});

// GET endpoint 2
app.get('/api/status', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    res.send({ status: 'Server is running smoothly!' });
});

// POST endpoint 1 (immediate response)
app.post('/api/submit', async (req, res) => {
    const { data } = req.body;
    await new Promise(resolve => setTimeout(resolve, 500));
    res.send({ message: `Data received: ${data}` });
});

// POST endpoint 2 (takes 3 seconds)
app.post('/api/delayed-3s', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 3 seconds
    res.send({ message: 'Response after 3 seconds delay' });
});

// POST endpoint 3 (takes 6 seconds)
app.post('/api/delayed-6s', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 5000)); // wait for 6 seconds
    res.send({ message: 'Response after 6 seconds delay' });
});

// Start the server
app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on 0.0.0.0:3000');
});
