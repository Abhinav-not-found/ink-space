"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";
import { toast } from "sonner";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRouter()

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId"); // Retrieve userId
  
      if (!token || !userId) {
        setLoading(false);
        return;
      }
  
      const res = await fetch(`/api/profile/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        const errorData = await res.json();
        
        // Handle authentication errors
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          setUser(null);
          toast.error("Session expired. Please log in again.");
        } else {
          toast.error(errorData.error || "Failed to fetch user data.");
        }
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
    setLoading(false);
  };
  
  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
      console.log("Login response data:", data); // Debugging
  
      if (res.ok) {
        if (!data.token || !data.user?.id) { // ✅ user.id should now exist
          return toast.error("Login failed. Missing user data.");
        }
  
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.user.id); // ✅ Store the userId correctly
        setUser(data.user);
        toast.success("Login successful!");
        return { success: true };
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
        return { success: false };
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Network error. Please check your connection.");
    }
  };
  
  const register = async (username, email, password) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success('Registered Successfully!!!')
        return { success: true };
      } else {
        toast.error(data.error || 'Something went wrong. Pls try again.')
        return { success: false };
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast.error("Network error. Please check your connection.");
      return { success: false };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    route.push('/')
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
