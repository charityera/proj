import React, { useContext, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { LocationContext } from "./context";
import styles from "./styles";

const LocationScreen = ({ navigation }) => {
  const { location, setLocation, confirmLocation, errorMsg } =
    useContext(LocationContext);

  useEffect(() => {
    console.log("Location updated:", location);
  }, [location]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Confirm your location</Text>
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <TextInput
        style={styles.input}
        value={location.address}
        onChangeText={(text) => setLocation({ ...location, address: text })}
        placeholder="Enter your location"
      />
      <MapView
        style={styles.map}
        region={location.region}
        onRegionChangeComplete={(region) =>
          setLocation({ ...location, region })
        }
      >
        <Marker coordinate={location.region} title="Your Location" />
      </MapView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => confirmLocation(navigation)}
      >
        <Text style={styles.buttonText}>Confirm location</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen;
