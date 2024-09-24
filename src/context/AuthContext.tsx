import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  refreshUser: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Refresh user authentication state based on token validity
  const refreshUser = useCallback(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // Check for token on mount
  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  const login = (token: string) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
    refreshUser();  // Ensure that the user state is refreshed after login
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
};
