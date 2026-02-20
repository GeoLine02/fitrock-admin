"use client";

import api from "@/utils/axios";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface User {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Example: fetch current user on mount
    const fetchUser = async () => {
      try {
        const res = await api.get("/user/me");
        if (res.status === 200) {
          console.log(res.data);
          setUser(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch user", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
};
