import React, { useState } from "react";

const CollegeRegister = ({ onRegister }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/college/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert(`✅ Registered successfully!\nDID: ${data.did}`);
        onRegister(data.did); // Notify parent component
      } else {
        alert(`❌ Registration failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("Server error during registration.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>🏫 College Registration</h2>
      <input
        type="text"
        name="name"
        placeholder="College Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Create Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default CollegeRegister;
