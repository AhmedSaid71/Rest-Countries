import { ReactNode, createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  setAuthenticated: () => void;
  setIsNotAuthenticated: () => void;
}
interface AuthProviderType {
  children: ReactNode;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: AuthProviderType) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuthenticated = () => {
    setIsAuthenticated(true);
  };
  const setIsNotAuthenticated = () => {
    setIsAuthenticated(false);
  };
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, setIsNotAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");
  return context;
};

export { AuthProvider, useAuthContext };
