const crypto = require('crypto');
const fs = require('fs');

const users = [
    { username: "user1", password: "password1", role: "user" },
    { username: "admin1", password: "admin123", role: "admin" }
];

// Hash all passwords
users.forEach(user => {
    user.password = crypto.createHash('sha256').update(user.password).digest('hex');
});

// Save the updated users to users.json
fs.writeFileSync('users.json', JSON.stringify(users, null, 4));
console.log("Updated users.json with hashed passwords!");
