import { UserType } from "@/types/user";
import { ReactNode, createContext, useContext, useState } from "react";

interface UserContextType {
  user: UserType | null;
  setUserData: (data: UserType) => void;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderType {
  children: ReactNode;
}
const UserProvider = ({ children }: UserProviderType) => {
  const [user, setUser] = useState<UserType | null>(null);
  const setUserData = (data: UserType) => {
    setUser(data);
  };
  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside of AuthProvider");
  return context;
};

export { UserProvider, useUserContext };
