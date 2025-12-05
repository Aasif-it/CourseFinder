import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !pass) return alert("All fields required!");

    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/explore");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
          onChange={(e) => setPass(e.target.value)}
        />

        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
}
