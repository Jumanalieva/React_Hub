import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            const screenHint = location.pathname === '/signup' ? 'signup' : 'login';
            loginWithRedirect({
                appState: { returnTo: window.location.pathname },
                authorizationParams: { screen_hint: screenHint },
            });
        }
    }, [isLoading, isAuthenticated, loginWithRedirect, location.pathname]);

    useEffect(() => {
        if (!isLoading && isAuthenticated) {
            navigate('/dashboard'); // Change this to whatever your main authenticated route is
        }
    }, [isLoading, isAuthenticated, navigate]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default AuthChecker;
