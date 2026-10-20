import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../Styles/Login.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "customer"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (formData.name.length < 5) {
      alert("Name must be at least 5 characters");
      return;
    }

    // Store user data locally for now
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    
    // Check if email already exists
    if (users.find(user => user.email === formData.email)) {
      alert("Email already registered");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    
    alert("User registered successfully!");
    navigate("/login");
  };

  return (
    <div className="login">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <label>User Type</label>
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>
        
        <p>
          Already have an account? 
          <span onClick={() => navigate("/login")} style={{color: "blue", cursor: "pointer"}}>
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;