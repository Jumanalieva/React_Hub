import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const location = useLocation();

  const signOutOnClick = () => {
    logout();
    setIsOpen(false);
  };

  const authOnClick = (action: 'login' | 'signup') => () => {
    loginWithRedirect({
      appState: {
        returnTo: window.location.pathname,
      },
      authorizationParams: {
        screen_hint: action === 'signup' ? 'signup' : 'login',
      },
    });
    setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const isEventsPage = location.pathname === '/events';

  return (
    <div className="flex flex-col min-h-screen bg-stone-200 text-stone-700 font-custom">
      <header className="bg-stone-200 shadow-md w-full fixed top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-black text-2xl lg:text-2xl xl:text-2xl w-full text-left md:text-center">SENIOR HUB</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex flex-col items-center justify-between bg-stone-200 z-50 md:hidden">
            <div className="absolute top-4 left-4">
              <h1 className="text-black text-xl">SENIOR HUB</h1>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-xl"
              aria-label="Close navigation"
            >
              Close
            </button>
            <div className="flex flex-col items-center mt-24 space-y-3">
              <Link to="/" onClick={handleLinkClick} className={`block py-3 text-4xl ${location.pathname === '/' ? 'underline' : ''}`}>HOME</Link>
              <Link to="/mission" onClick={handleLinkClick} className={`block py-4 text-4xl ${location.pathname === '/mission' ? 'underline' : ''}`}>MISSION</Link>
              <Link to="/aboutus" onClick={handleLinkClick} className={`block py-4 text-4xl ${location.pathname === '/aboutus' ? 'underline' : ''}`}>ABOUT US</Link>
              <Link to="/activities" onClick={handleLinkClick} className={`block py-4 text-4xl ${location.pathname === '/activities' ? 'underline' : ''}`}>ACTIVITIES</Link>
              <Link to="/events" onClick={handleLinkClick} className={`block py-4 text-4xl ${location.pathname === '/events' ? 'underline' : ''}`}>EVENTS</Link>
              {!isAuthenticated ? (
                <>
                  <Link to="/" onClick={authOnClick('signup')} className={`block py-4 text-4xl text-red-700 ${location.pathname === '/signup' ? 'underline' : ''}`}>SIGN UP</Link>
                  <Link to="/" onClick={authOnClick('login')} className={`block py-4 text-4xl text-red-700 ${location.pathname === '/login' ? 'underline' : ''}`}>LOG IN</Link>
                </>
              ) : (
                <Link to="/" onClick={signOutOnClick} className="block py-4 text-md text-red-700">SIGN OUT</Link>
              )}
            </div>
            <div className="flex space-x-6 mb-10 text-2xl">
              <a href="mailto:someone@example.com" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-envelope hover:text-blue-600 transition-colors duration-300"></i>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube hover:text-red-600 transition-colors duration-300"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram hover:text-pink-600 transition-colors duration-300"></i>
              </a>
            </div>
          </div>
        )}
        <nav className="hidden md:flex md:flex-row md:space-x-8 md:w-full md:justify-center py-4 text-black">
          <Link to="/" className={`text-md lg:text-md xl:text-xl hover:underline ${location.pathname === '/' ? 'underline' : ''}`}>HOME</Link>
          <Link to="/mission" className={`text-md lg:text-md xl:text-xl hover:underline ${location.pathname === '/mission' ? 'underline' : ''}`}>MISSION</Link>
          <Link to="/aboutus" className={`text-md lg:text-md xl:text-xl hover:underline ${location.pathname === '/aboutus' ? 'underline' : ''}`}>ABOUT US</Link>
          <Link to="/activities" className={`text-md lg:text-md xl:text-xl hover:underline ${location.pathname === '/activities' ? 'underline' : ''}`}>ACTIVITIES</Link>
          <Link to="/events" className={`text-md lg:text-md xl:text-xl hover:underline ${location.pathname === '/events' ? 'underline' : ''}`}>EVENTS</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/" onClick={authOnClick('signup')} className={`text-red-700 text-md lg:text-md xl:text-xl hover:underline ${location.pathname === '/signup' ? 'underline' : ''}`}>SIGN UP</Link>
              <Link to="/" onClick={authOnClick('login')} className={`text-red-700 text-md lg:text-md xl:text-xl hover:underline ${location.pathname === '/login' ? 'underline' : ''}`}>LOG IN</Link>
            </>
          ) : (
            <Link to="/" onClick={signOutOnClick} className="text-red-700 text-md lg:text-md xl:text-xl hover:underline">SIGN OUT</Link>
          )}
        </nav>
      </header>
      <main className={`flex-grow overflow-auto pt-24 pb-10 ${isEventsPage ? 'bg-events-background' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
