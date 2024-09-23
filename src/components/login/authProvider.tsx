import React, { createContext, useEffect, useState, ReactNode } from "react";
import axiosInstance from "../../utilities/axiousEdition";

interface AuthContextType {
  customer: any;
  setCustomer: React.Dispatch<React.SetStateAction<any>>;
}

const defaultContextValue: AuthContextType = {
  customer: null,
  setCustomer: () => {},
};
export const AuthContext = createContext<AuthContextType>(defaultContextValue);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [customer, setCustomer] = useState<any>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axiosInstance.get('/customer/me', { withCredentials: true });
        if (response.data.status === 'success') {
          setCustomer(response.data.data.customer);
        } else {
          setCustomer(null);
        }
      } catch (err) {
        console.error("API call error:", err);
        setCustomer(null);
      }
    };

    checkAuth();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <AuthContext.Provider value={{ customer, setCustomer }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
