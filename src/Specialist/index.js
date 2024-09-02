import React, { useEffect, useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

export default function SpecialistHome() {
  const [user, setUser] = useState(null);
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  useEffect(() => {
    // Simulate fetching user data from a service
    const fetchUser = async () => {
      // Replace this with actual user fetching logic
      const mockUser = { user_metadata: { full_name: "John Doe" } };
      setUser(mockUser);
    };
    fetchUser();
  }, []);

  const toggleSwitch = () => setIsSwitchOn((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hello, {user ? user.user_metadata.full_name : "fullName"}
        </Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isSwitchOn}
          thumbColor={isSwitchOn ? "#FFFFFF" : "#FFFFFF"}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
        />
      </View>
      <View style={styles.statsContainer}>
        <View style={styles.statsCard}>
          <Text style={styles.statsText}>Total orders</Text>
          <Text style={styles.statsNumber}>0</Text>
          <Text style={styles.statsSubtext}>Today</Text>
          <Text style={styles.statsSubtext}>5 ↑ 6%</Text>
          <Text style={styles.statsSubtext}>This week</Text>
          <Text style={styles.statsSubtext}>23</Text>
        </View>
        <View style={styles.statsCard}>
          <Text style={styles.statsText}>Rating</Text>
          <Text style={styles.statsNumber}>4.5</Text>
          <Text style={styles.statsStars}>⭐⭐⭐⭐⭐</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>San Vicente Butuan City</Text>
      </View>
      <View style={styles.menuBar}>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="home-outline" size={24} color="white" />
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="list-outline" size={24} color="white" />
          <Text style={styles.menuItemText}>Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
