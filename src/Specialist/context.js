import React, { createContext, useState, useEffect, useContext } from "react";

const SpecialistContext = createContext();

export const SpecialistProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const mockUser = { user_metadata: { full_name: "Charity" } };
      setUser(mockUser);
    };
    fetchUser();
  }, []);

  const toggleSwitch = () => setIsSwitchOn((previousState) => !previousState);

  return (
    <SpecialistContext.Provider value={{ user, isSwitchOn, toggleSwitch }}>
      {children}
    </SpecialistContext.Provider>
  );
};

export const useSpecialist = () => {
  const context = useContext(SpecialistContext);
  if (context === undefined) {
    throw new Error("useSpecialist must be used within a SpecialistProvider");
  }
  return context;
};
