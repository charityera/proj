import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useTowing } from "./context";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function Towing() {
  const {
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
  } = useTowing();

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.welcomeText}>Towing</Text>
        <Text style={styles.subheading}>
          We ensure your vehicle receives the best care
        </Text>
        <Text style={styles.label}>Schedule this service:</Text>
        <View style={styles.scheduleContainer}>
          <TouchableOpacity
            style={schedule === "Now" ? styles.radioSelected : styles.radio}
            onPress={() => setSchedule("Now")}
          >
            <Text style={styles.radioText}>Now</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={schedule === "Later" ? styles.radioSelected : styles.radio}
            onPress={() => setSchedule("Later")}
          >
            <Text style={styles.radioText}>Later</Text>
          </TouchableOpacity>
        </View>
        {schedule === "Later" && (
          <TextInput
            style={styles.input}
            placeholder="Specify time (YYYY-MM-DDTHH:MM:SSZ)"
            placeholderTextColor="gray"
            value={specifyTime}
            onChangeText={setSpecifyTime}
          />
        )}
        <Text style={styles.label}>Select Vehicle*</Text>
        <Picker
          selectedValue={vehicle}
          style={styles.input}
          onValueChange={(itemValue) => setVehicle(itemValue)}
        >
          <Picker.Item label="Sedan" value="Sedan" />
          <Picker.Item label="Hatchback" value="Hatchback" />
          <Picker.Item label="SUV" value="SUV" />
        </Picker>
        <Text style={styles.label}>Pick-up location*</Text>
        <Picker
          selectedValue={pickupLocation}
          style={styles.input}
          onValueChange={(itemValue) => setPickupLocation(itemValue)}
        >
          <Picker.Item label="San Vicente" value="San Vicente" />
          <Picker.Item label="Ampayon" value="Ampayon" />
          <Picker.Item label="Villa Kanangga" value="Villa Kanangga" />
          <Picker.Item label="Libertad" value="Libertad" />
          <Picker.Item label="Baan" value="Baan" />
        </Picker>
        <Text style={styles.label}>Drop-off location*</Text>
        <Picker
          selectedValue={dropoffLocation}
          style={styles.input}
          onValueChange={(itemValue) => setDropoffLocation(itemValue)}
        >
          <Picker.Item label="San Vicente" value="San Vicente" />
          <Picker.Item label="Ampayon" value="Ampayon" />
          <Picker.Item label="Villa Kanangga" value="Villa Kanangga" />
          <Picker.Item label="Libertad" value="Libertad" />
          <Picker.Item label="Baan" value="Baan" />
        </Picker>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add-circle-outline" size={24} color="#FFA500" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => handleSubmit(navigation)}
        >
          <Text style={styles.submitButtonText}>Submit Request</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
