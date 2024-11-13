import React, { createContext, useEffect, useState, ReactNode } from "react";
import axiosInstance from "../../utilities/axiousEdition";
import Cookies from "js-cookie";

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
    // Kiểm tra và lấy lại trạng thái từ cookie "jwt" khi ứng dụng tải lại
    const jwtToken = Cookies.get("jwt");
    if (jwtToken) {
      // Thực hiện yêu cầu đến API để lấy thông tin người dùng bằng cookie `jwt`
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
    } else {
      setCustomer(null);
    }
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <AuthContext.Provider value={{ customer, setCustomer }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
