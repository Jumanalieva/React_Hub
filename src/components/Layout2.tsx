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
        screen_hint: action === 'signup' ? 'signup' : 'login'
      }
    });
    setIsOpen(false); 
  };

  const isEventsPage = location.pathname === '/events';

  return (
    <div className="flex flex-col min-h-screen bg-stone-200 text-stone-700 font-custom">
      <header className="bg-stone-200 shadow-md w-full fixed top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 flex justify-between items-center h-16">
          <h1 className="text-black text-3xl lg:text-4xl xl:text-4xl  w-full text-left md:text-center">SENIOR HUB</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle navigation"
          >
            {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col items-center justify-center absolute text-black top-full left-0 w-full bg-stone-200 md:hidden">
            <Link to="/" className="block py-2 text-xl  lg:text-2xl xl:text-2xl hover:underline">HOME</Link>
            <Link to="/mission" className="block py-2 text-xl lg:text-2xl xl:text-2xl  hover:underline">MISSION</Link>
            <Link to="/aboutus" className="block py-2 text-xl lg:text-2xl xl:text-2xl hover:underline">ABOUT US</Link>
            <Link to="/activities" className="block py-2 text-xl lg:text-2xl xl:text-2xl hover:underline">ACTIVITIES</Link>
            <Link to="/events" className="block py-2 text-xl lg:text-2xl xl:text-2xl  hover:underline">EVENTS</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/" onClick={authOnClick('signup')} className="text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline">SIGN UP</Link>
                <Link to="/" onClick={authOnClick('login')} className="text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline">LOG IN</Link>
              </>
            ) : (
              <Link to="/" onClick={signOutOnClick} className="block py-2 text-xl text-red-700 lg:text-2xl xl:text-2xl hover:underline">SIGN OUT</Link>
            )}
          </div>
        )}
        <nav className="hidden md:flex md:flex-row md:space-x-8 md:w-full md:justify-center py-4 text-black">
          <Link to="/" className="text-xl lg:text-2xl xl:text-2xl hover:underline">HOME</Link>
          <Link to="/mission" className="text-xl lg:text-2xl xl:text-2xl hover:underline">MISSION</Link>
          <Link to="/aboutus" className="text-xl lg:text-2xl xl:text-2xl hover:underline">ABOUT US</Link>
          <Link to="/activities" className="text-xl lg:text-2xl xl:text-2xl hover:underline">ACTIVITIES</Link>
          <Link to="/events" className="text-xl lg:text-2xl xl:text-2xl hover:underline">EVENTS</Link>
          {!isAuthenticated ? (
            <>
              <Link to="/" onClick={authOnClick('signup')} className="text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline">SIGN UP</Link>
              <Link to="/" onClick={authOnClick('login')} className="text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline">LOG IN</Link>
            </>
          ) : (
            <Link to="/" onClick={signOutOnClick} className="text-red-700 text-xl lg:text-2xl xl:text-2xl hover:underline">SIGN OUT</Link>
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
