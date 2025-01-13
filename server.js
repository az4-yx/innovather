const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// In-memory storage
const users = [
  { username: "admin", password: bcrypt.hashSync("admin123", 10), role: "admin", vouchers: 0 },
  { username: "user1", password: bcrypt.hashSync("user123", 10), role: "user", vouchers: 5 },
];

const SECRET = "your_jwt_secret";

// Route: Login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  const token = jwt.sign({ username: user.username, role: user.role }, SECRET, { expiresIn: "1h" });
  res.json({ token, role: user.role });
});

// Route: Get Vouchers
app.get("/vouchers", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET);
    const user = users.find((u) => u.username === decoded.username);

    if (!user || user.role !== "user") return res.status(403).json({ error: "Forbidden" });

    res.json({ vouchers: user.vouchers });
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
});

// Route: Add Vouchers (Admin Only)
app.post("/add-vouchers", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, SECRET);
    const admin = users.find((u) => u.username === decoded.username && u.role === "admin");

    if (!admin) return res.status(403).json({ error: "Forbidden" });

    const { username, vouchersToAdd } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user) return res.status(404).json({ error: "User not found" });

    user.vouchers += vouchersToAdd;
    res.json({ message: `Added ${vouchersToAdd} vouchers to ${username}.`, user });
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
});

// Start the server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
