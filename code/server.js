
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

    console.log(`Login attempt for username: ${username}`);
    console.log(`Generated hashed password: ${hashedPassword}`);

    const user = users.find(user => user.username === username);
    if (user) {
        console.log(`Stored hashed password for ${username}: ${user.password}`);
    }

    if (user && user.password === hashedPassword) {
        console.log("Login successful!");
        res.json({ success: true, role: user.role });
    } else {
        console.log("Login failed: Invalid username or password.");
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

// Middleware to verify roles
function verifyRole(role) {
    return (req, res, next) => {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ error: "Unauthorized" });

        try {
            const decoded = jwt.verify(token, SECRET);
            if (decoded.role !== role) {
                return res.status(403).json({ error: "Forbidden: Insufficient privileges" });
            }
            req.user = decoded; // Attach user info to the request
            next();
        } catch {
            return res.status(401).json({ error: "Unauthorized" });
        }
    };
}

app.get('/admin/users', verifyRole('admin'), (req, res) => {
    const userDetails = users.map(user => ({
        username: user.username,
        role: user.role,
        vouchers: user.vouchers || 0
    }));
    res.json({ users: userDetails });
});

app.post('/admin/add-voucher', verifyRole('admin'), (req, res) => {
    const { username, vouchersToAdd } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) return res.status(404).json({ error: "User not found" });

    user.vouchers = (user.vouchers || 0) + vouchersToAdd;
    res.json({ message: `Added ${vouchersToAdd} vouchers to ${username}.`, user });
});

app.get('/categories', verifyRole('user'), (req, res) => {
    res.json({ categories: ["Fruits", "Vegetables", "Dairy"] });
});

app.get('/cart', verifyRole('user'), (req, res) => {
    const cart = req.user.cart || [];
    res.json({ cart });
});

