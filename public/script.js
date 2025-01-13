
async function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (result.success) {
        if (result.role === 'user') {
            window.location.href = "dashboard.html";
        } else if (result.role === 'admin') {
            window.location.href = "admin.html";
        }
    } else {
        alert(result.message);
    }
}
