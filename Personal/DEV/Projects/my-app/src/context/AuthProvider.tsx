import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type AuthContextValue = {
  pin: string | null;
  isAuthenticated: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [pin] = useState(() => sessionStorage.getItem("id_token"));
  const [isAuthenticated, setAuth] = useState(
    !!sessionStorage.getItem("access_token")
  );

  const logout = () => {
    sessionStorage.clear();
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ pin, isAuthenticated, setAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext must be used within an AuthProvider");
  return ctx;
}

export default useAuthContext;