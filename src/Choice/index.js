import React from "react";
import { StatusBar, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Choice() {
  const navigation = useNavigation();

  return (
    <LinearGradient colors={["#000000", "#2a265d"]} style={styles.container}>
      <View style={styles.dropdown}>
        <FontAwesome name="user" size={24} color="white" />
        <Text style={styles.dropdownText}>Log in as</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUp")}
        >
          <FontAwesome name="user" size={25} color="white" />
          <Text style={styles.buttonText}> Client</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SpecialistSignUp")}
        >
          <FontAwesome name="user-md" size={25} color="white" />
          <Text style={styles.buttonText}> Specialist</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </LinearGradient>
  );
}
