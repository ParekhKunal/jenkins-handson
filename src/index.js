const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
});

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});