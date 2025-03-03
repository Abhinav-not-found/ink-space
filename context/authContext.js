"use client";

import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  useEffect(() =>{
      fetchUserInfo()
  }, [])

  const fetchUserInfo = async() =>{
    const userId = localStorage.getItem('userId')
    if (!userId) {
      setIsLoggedIn(false);
      return;
    }
    try {
      const res = await fetch(`/api/profile/${userId}`, {
        method: "GET",
        credentials: "include",
      });

      if (res.ok) {
        const userData = await res.json();
        setUser(userData);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  const login = async (email, password) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        document.cookie = `token=${data.token}; path=/; max-age=86400;`;
        document.cookie = `userId=${data.user.id}; path=/; max-age=86400;`;

        localStorage.setItem("userId", data.user.id);
        setUser(data.user);
        setIsLoggedIn(true); // ✅ Update state immediately
        toast.success("Login successful!");
        router.push("/home"); // ✅ Redirect after login
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Network error.");
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/auth/logout"); // ✅ Call backend to remove cookies
  
      localStorage.removeItem("userId");
      setUser(null);
      setIsLoggedIn(false);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  
  const register = async (fullname, email, password) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username:fullname , email, password }),
      });

      const data = await res.json();
      console.log(data)

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Save user data
      setUser(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Registration successful!");
      return { success: true };
    } catch (error) {
      toast.error(error.message);
      return { success: false, message: error.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
