
const express = require('express');
const crypto = require('crypto');
const fs = require('fs');

const app = express();
app.use(express.json());

function hashPassword(password) {
    return crypto.createHash('sha256').update(password).digest('hex');
}

// Load users from users.json
const users = JSON.parse(fs.readFileSync('users.json'));

// Handle login requests
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = hashPassword(password);

    const user = users.find(user => user.username === username && user.password === hashedPassword);
    if (user) {
        res.json({ success: true, role: user.role });
    } else {
        res.json({ success: false, message: 'Invalid username or password' });
    }
});

// Serve static files (your website)
app.use(express.static('public'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
