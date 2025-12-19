// Login page
// Used for user or admin login

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Login validation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Login attempt:", { email, password });
    
    // Simple admin login check
    if (email === "abc@gmail.com" && password === "a123") {
      console.log("✅ Login successful - Admin access granted");
      localStorage.setItem("auth", true);
      
      // Clear form fields
      setEmail("");
      setPassword("");
      
      navigate("/admin");
    } else {
      console.log("❌ Login failed - Invalid credentials");
      console.log("Valid credentials: abc@gmail.com / a123");
      
      // Clear form fields on failed login too
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
