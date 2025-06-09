import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid credentials 🚫");
    }
  };

  return (
    <div className="min-h-screen bg-[#1f1242] flex flex-col items-center justify-center text-white">
      <div className="rounded-lg w-full max-w-md flex flex-col items-center" style={{ padding: '10rem 4rem', backgroundImage: 'url("/Frame.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1
          className="text-3xl font-bold mb-4"
          style={{ marginBottom: "1rem" }}
        >
          ADMIN LOGIN
        </h1>
        <input
          className="text-orange-500 px-4 py-2 rounded mb-2"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem 1rem", border: "2px solid yellow" }}
          type="email"
        />
        <input
          className="bg-transparent text-orange-500 px-4 py-2 rounded mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem 1rem", border: "2px solid yellow" }}
        />
        <button
          onClick={handleLogin}
          className="bg-orange-500 px-6 py-2 rounded-xl hover:bg-orange-600"
          style={{ padding: "0.5rem 1rem" }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
