// Login page
// Used for user or admin login

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./../Styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Admin login check
    if (email === "abc@gmail.com" && password === "a123") {
      localStorage.setItem("auth", true);
      navigate("/admin");
      return;
    }

    // Any other email/password goes to home page
    localStorage.setItem("user", JSON.stringify({email, userType: "customer"}));
    navigate("/");
    
    setEmail("");
    setPassword("");
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
        
        <p>
          Don't have an account? 
          <span onClick={() => navigate("/register")} style={{color: "blue", cursor: "pointer"}}>
            Register here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
