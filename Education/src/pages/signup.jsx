import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/image.png';
import sin from '../assets/sin.png';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    setError(''); // Clear error on typing
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    // Email format check
    if (!validateEmail(email)) {
      setError('⚠ Invalid email format.');
      return;
    }

    // Password match check
    if (password !== confirmPassword) {
      setError('⚠ Passwords do not match.');
      return;
    }

    // Save to localStorage
    localStorage.setItem('user', JSON.stringify({ email, password }));
    navigate('/login');
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[80%] h-[80vh] bg-white rounded-xl shadow-lg overflow-hidden">

        {/* Left Image */}
        <div className="w-1/2 h-full">
          <img
            src={sin}
            alt="Signup Illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <img src={img} alt="Logo" className="w-24 h-24 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-center mb-6">Create New Account</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="Confirm your password"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Error warning */}
            {error && (
              <div className="bg-red-100 text-red-700 text-sm p-2 rounded-md border border-red-300">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#612EEd] hover:bg-[#4c23bd] text-white py-2 px-4 rounded-[8px] transition duration-200"
            >
              Sign Up
            </button>

            <p className="text-center text-sm mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-blue-600 hover:underline">
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
