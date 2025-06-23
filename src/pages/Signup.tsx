import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Lock, UserPlus } from 'lucide-react';

interface SignupProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Signup = ({ setIsAuthenticated }: SignupProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 1000);
  };  return (
    <div className="w-screen h-screen min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl h-full max-h-[90vh]">
        <div className="flex h-full">
          {/* Left side - Illustration */}
          <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-100 to-purple-50 items-center justify-center p-12">
            <div className="text-center">
              {/* Simple illustration using CSS */}
              <div className="relative mb-8">
                {/* Background decorative elements */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-200 rounded-full opacity-50"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-200 rounded-full opacity-50"></div>
                
                {/* Main illustration */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <UserPlus className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="w-24 h-16 bg-blue-500 rounded-lg mx-auto flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
              <p className="text-gray-600">Start your journey with our HR Management System</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <UserPlus className="w-6 h-6 text-white" />
                </div>
                <h1 className="ml-3 text-2xl font-bold text-gray-800">HR Management</h1>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-6 mb-6">
                  <Link 
                    to="/login" 
                    className="text-gray-500 hover:text-blue-500 transition-colors"
                  >
                    Login
                  </Link>
                  <span className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-1">
                    Sign Up
                  </span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  placeholder="First Name"
                  required
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  placeholder="Last Name"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  placeholder="Password"
                  required
                />
                <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              <div className="relative">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pr-12 bg-blue-50 border-0 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors"
                  placeholder="Re-enter Password"
                  required
                />
                <Lock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Creating...' : 'Sign Up'}
              </button>

              <button
                type="button"
                className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Sign up with Google</span>
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>Release Notes</p>
              <p>Version 22.2.0</p>
              <p className="mt-2">Copyright © 2023 • All HR and services</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
