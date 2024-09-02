import React, { createContext, useState, useContext } from "react";
import { Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const SignInContext = createContext();

export const SignInProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async (navigation) => {
    try {
      const response = await axios.post(
        "http://192.168.254.115:5003/api/auth/signIn",
        { email, password }
      );

      if (response.status === 200) {
        const { token, userType } = response.data;

        if (token) {
          await AsyncStorage.setItem("authToken", token);
        }

        navigation.navigate(
          userType === "specialist" ? "SpecialistHome" : "UserHome"
        );
      } else {
        Alert.alert("Error", response.data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error during sign-in:", error.message);
      Alert.alert(
        "Error",
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  };

  return (
    <SignInContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        handleSignIn,
      }}
    >
      {children}
    </SignInContext.Provider>
  );
};

export const useSignIn = () => {
  const context = useContext(SignInContext);
  if (context === undefined) {
    throw new Error("useSignIn must be used within a SignInProvider");
  }
  return context;
};
