// auth/AuthContext.js
import React, { createContext, useContext } from "react";
import { ROLES } from "./roles";

const AuthContext = createContext();

export const AuthProvider = ({ children, user }) => {
  // اضافه کردن توابع کمکی برای بررسی رول
  const value = {
    user,
    isAdmin: user?.roles.includes(ROLES.ADMIN),
    isSupport: user?.roles.includes(ROLES.SUPPORT),
    isOwner: user?.roles.includes(ROLES.OWNER),
    hasRole: (role) => user?.roles.includes(role),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
