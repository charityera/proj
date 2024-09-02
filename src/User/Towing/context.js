import React, { useState, createContext, useContext } from "react";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TowingContext = createContext();

export const TowingProvider = ({ children }) => {
  const [schedule, setSchedule] = useState("Now");
  const [vehicle, setVehicle] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [specifyTime, setSpecifyTime] = useState("");

  const handleSubmit = async (navigation) => {
    try {
      const formattedSpecifyTime =
        schedule === "Later" && specifyTime
          ? new Date(specifyTime).toISOString()
          : null;

      const token = await AsyncStorage.getItem("authToken");

      if (!token) {
        Alert.alert("Error", "No token found. Please log in again.");
        return;
      }

      const response = await axios.post(
        "http://192.168.254.115:5003/api/towing/towing",
        {
          schedule,
          specifyTime: formattedSpecifyTime,
          vehicle,
          pickupLocation,
          dropoffLocation,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );

      Alert.alert("Success", response.data.message);
      navigation.navigate("Location");
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      Alert.alert(
        "Error",
        error.response
          ? error.response.data.message
          : "Failed to create towing request"
      );
    }
  };

  return (
    <TowingContext.Provider
      value={{
        schedule,
        setSchedule,
        vehicle,
        setVehicle,
        pickupLocation,
        setPickupLocation,
        dropoffLocation,
        setDropoffLocation,
        specifyTime,
        setSpecifyTime,
        handleSubmit,
      }}
    >
      {children}
    </TowingContext.Provider>
  );
};

export const useTowing = () => useContext(TowingContext);
