import React, { createContext, useContext, useState } from "react";
import { Alert } from "react-native";
import axios from "axios";

const SignUpContext = createContext();

export const SignUpProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async (navigation) => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.254.115:5003/api/auth/signUp",
        {
          companyName,
          fullName,
          email,
          phoneNumber,
          password,
        }
      );

      if (response.status === 200) {
        Alert.alert("Success", "User successfully created");
        navigation.navigate("SignIn");
      } else {
        Alert.alert("Error", response.data.error || "Something went wrong");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      Alert.alert(
        "Error",
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  };

  return (
    <SignUpContext.Provider
      value={{
        fullName,
        setFullName,
        companyName,
        setCompanyName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        handleSignUp,
      }}
    >
      {children}
    </SignUpContext.Provider>
  );
};

export const useSignUp = () => useContext(SignUpContext);
