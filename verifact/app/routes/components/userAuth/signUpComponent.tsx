import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import verifactLogo from "../../../assets/verifact-logo.png"

const SignUp: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!fullName || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
        return;
    }

    setError(null);

    console.log('Creating account with:', {
      fullName,
      email,
      password,
    });

    alert(`Welcome, ${fullName}! Your Verifact account has been created.`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 font-sans px-4">
      <div className="w-full max-w-md p-8 space-y-6">
        {/* Logo and Header */}
        <div className="text-center space-y-4">
            <img 
                className="h-12 w-auto mx-auto" 
                src={verifactLogo}
                alt="Verifact Logo" 
            />
            <h1 className="text-3xl font-bold text-slate-800">
                Create Your Verifact Account
            </h1>
            <p className="text-slate-600">
                Join us to fight misinformation and uncover the truth.
            </p>
        </div>
        
        {/* Sign-Up Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* To display error message if it exists */}
            {error && (
                <div className="p-3 text-center bg-red-100 border border-red-300 text-red-800 rounded-lg">
                    {error}
                </div>
            )}

            <div className="space-y-4">
                {/* Full Name Input */}
                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name
                    </label>
                    <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        autoComplete="name"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g., Jane Doe"
                        className="w-full px-4 py-3 bg-slate-100 rounded-lg text-black placeholder-slate-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="johnemeka@example.com"
                        className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-900 placeholder-slate-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Password Input */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                        className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-900 placeholder-slate-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>

                {/* Confirm Password Input */}
                <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        id="confirm-password"
                        name="confirm-password"
                        type="password"
                        autoComplete="new-password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="********"
                        className="w-full px-4 py-3 bg-slate-100 rounded-lg text-slate-900 placeholder-slate-400 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    />
                </div>
            </div>

            {/* Submit Button */}
            <div>
                <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-md text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
                >
                    Create Account
                </button>
            </div>
        </form>

        {/* Link to Log In page */}
        <p className="text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline">
                Log In
            </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;