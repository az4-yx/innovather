document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent page reload
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Send credentials to the backend
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
  
    if (response.ok) {
      alert(`Welcome, ${data.role}!`);
      // Redirect based on role (admin/user)
      if (data.role === "admin") {
        window.location.href = "/admin-dashboard.html";
      } else {
        window.location.href = "/user-dashboard.html";
      }
    } else {
      document.getElementById("message").innerText = data.error;
    }
  });
  