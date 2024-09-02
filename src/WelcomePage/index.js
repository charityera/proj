import React from "react";
import { StatusBar, Image, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function WelcomePage() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#000000", "#2a265d"]} style={styles.container}>
      <Text style={styles.title}>Roadside Assistance</Text>
      <Image
        source={require("../../assets/images/road_image.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Your Journey, Our Safety Travel Assurance</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Choice")}
      >
        <Text style={{ fontWeight: "bold", color: "#FFF" }}>Get Started</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
