const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const SECRET_KEY = "PERMISSION"; // Replace with your key

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html')); // Serve a login page
});

app.post('/check-key', (req, res) => {
    if (req.body.key === SECRET_KEY) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        res.send('Access Denied!');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
