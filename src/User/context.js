import React, { createContext, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";

const UserHomeContext = createContext();

export const UserHomeProvider = ({ children }) => {
  const navigation = useNavigation();
  const [drawer, setDrawer] = useState(null);

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <UserHomeContext.Provider value={{ drawer, setDrawer, handleLogout }}>
      {children}
    </UserHomeContext.Provider>
  );
};

export const useUserHome = () => {
  const context = useContext(UserHomeContext);
  if (!context) {
    throw new Error("useUserHome must be used within a UserHomeProvider");
  }
  return context;
};
