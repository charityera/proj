import React, { createContext, useState, useEffect } from "react";
import * as Location from "expo-location";
import axios from "axios";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    address: "",
    region: {
      latitude: 8.951549,
      longitude: 125.527725,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let userLocation = await Location.getCurrentPositionAsync({});
      setLocation((prevState) => ({
        ...prevState,
        region: {
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      }));
    };

    getUserLocation();
  }, []);

  const confirmLocation = async (navigation) => {
    if (location.address && location.region) {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (!token) {
          Alert.alert("Error", "No token found. Please log in again.");
          return;
        }

        const response = await axios.post(
          "http://192.168.254.115:5003/api/towing/location",
          location,
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );

        Alert.alert("Success", response.data.message);
        navigation.navigate("SomeOtherScreen");
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        Alert.alert(
          "Error",
          error.response
            ? error.response.data.message
            : "Failed to confirm location"
        );
      }
    } else {
      console.error("Location or address is not set properly.");
      Alert.alert("Error", "Location or address is not set properly.");
    }
  };

  return (
    <LocationContext.Provider
      value={{ location, setLocation, confirmLocation, errorMsg }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
