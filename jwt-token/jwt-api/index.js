const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const SECRET_KEY = 'my_secret_key';

const generateRandomMessage = () => {
    const messages = [
        'Olá, mundo!',
        'Bem-vindo à API de Tokens Divertidos!',
        'Node.js é show de bola!',
        'JWTs são tão seguros que até usam cofre!',
        'Tenha um dia incrível!'
    ];
    return messages[Math.floor(Math.random() * messages.length)];
};


app.post('/generate-token', (req, res) => {
    const message = generateRandomMessage();
    const token = jwt.sign({ message }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});


app.post('/decode-token', (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ error: 'Token is required' });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        res.json({ message: decoded.message });
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});