import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("Logging in with:", { email, password });
    alert(`Logging in with:\nEmail: ${email}\nPassword: [REDACTED]`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 font-sans">
      <div className="w-full max-w-md p-8 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Log in to Verifact
          </h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Username or Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username or email"
              className="w-full px-4 py-3 bg-slate-100 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-shadow"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-slate-100 border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-shadow"
            />
          </div>

          {/* Log In Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors hover:cursor-pointer"
            >
              Log In
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/forgot-password"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot Password?
            </Link>
            <p className="text-sm text-slate-600">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
