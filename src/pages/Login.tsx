import { useState } from 'react';
import { Link } from 'react-router-dom';

interface LoginProps {
  setIsAuthenticated: (value: boolean) => void;
}

const Login = ({ setIsAuthenticated }: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
    }, 1000);
  };  return (
    <div className="w-screen h-screen min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#E5EDF9' }}>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-5xl">
        <div className="flex">
          {/* Left side - Illustration */}
          <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12" style={{ backgroundColor: '#E5EDF9' }}>
            <div className="text-center">
              {/* Illustration matching the reference image */}
              <div className="relative mb-8">
                {/* Main illustration container */}
                <div className="relative">
                  {/* Person with certificate/document */}
                  <svg width="300" height="250" viewBox="0 0 300 250" className="drop-shadow-sm">
                    {/* Background document/certificate */}
                    <rect x="120" y="80" width="120" height="90" rx="8" fill="#4B93E7" opacity="0.1"/>
                    <rect x="130" y="90" width="100" height="70" rx="6" fill="white" stroke="#4B93E7" strokeWidth="2"/>
                    
                    {/* Document lines */}
                    <line x1="140" y1="105" x2="220" y2="105" stroke="#4B93E7" strokeWidth="2"/>
                    <line x1="140" y1="115" x2="210" y2="115" stroke="#4B93E7" strokeWidth="1"/>
                    <line x1="140" y1="125" x2="200" y2="125" stroke="#4B93E7" strokeWidth="1"/>
                    
                    {/* Badge/seal on document */}
                    <circle cx="200" cy="140" r="12" fill="#4B93E7"/>
                    <circle cx="200" cy="140" r="8" fill="white"/>
                    <circle cx="200" cy="140" r="4" fill="#4B93E7"/>
                    
                    {/* Person figure */}
                    {/* Head */}
                    <circle cx="80" cy="70" r="20" fill="#4B93E7"/>
                    
                    {/* Body */}
                    <rect x="60" y="90" width="40" height="50" rx="8" fill="#4B93E7"/>
                    
                    {/* Arms */}
                    <ellipse cx="45" cy="110" rx="8" ry="15" fill="#4B93E7"/>
                    <ellipse cx="115" cy="110" rx="8" ry="15" fill="#4B93E7"/>
                    
                    {/* Legs */}
                    <ellipse cx="70" cy="155" rx="8" ry="20" fill="#4B93E7"/>
                    <ellipse cx="90" cy="155" rx="8" ry="20" fill="#4B93E7"/>
                    
                    {/* Hand pointing to document */}
                    <circle cx="115" cy="105" r="5" fill="#FFA726"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="mb-8">
              <div className="flex items-center justify-center mb-8">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  <svg width="24" height="30" viewBox="0 0 24 32" className="drop-shadow-sm">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.344 6.314 3.515 8.485L12 32l8.485-11.515C22.656 18.314 24 15.314 24 12c0-6.627-5.373-12-12-12z" fill="#4B93E7"/>
                    <circle cx="12" cy="12" r="5" fill="#F97316"/>
                    <circle cx="12" cy="10" r="2" fill="#4B93E7"/>
                  </svg>
                </div>
                <h1 className="text-xl font-bold text-gray-800">HR Management</h1>
              </div>
              
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-8 mb-6">
                  <span className="text-blue-500 font-semibold border-b-2 border-blue-500 pb-2 text-lg">
                    Login
                  </span>
                  <Link 
                    to="/signup" 
                    className="text-gray-400 hover:text-blue-500 transition-colors text-lg"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors"
                  placeholder="Username"
                  required
                />
              </div>

              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 pr-12 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-colors"
                  placeholder="Password"
                  required
                />
                <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-gray-600">
                    Remember
                  </label>
                </div>

                <div>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing in...' : 'Login'}
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
                <span>Login with Google G</span>
              </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-400">
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

export default Login;
