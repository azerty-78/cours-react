import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("scolarpay_user");
    if (stored) {
      setUser(JSON.parse(stored));
    }
    setLoading(false);
  }, []);

  function login(mockUser) {
    setUser(mockUser);
    localStorage.setItem("scolarpay_user", JSON.stringify(mockUser));
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("scolarpay_user");
  }

  const value = { user, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

