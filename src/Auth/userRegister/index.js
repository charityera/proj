import React from "react";
import {
  StatusBar,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useSignUp } from "./userRegister/context";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const navigation = useNavigation();
  const {
    fullName,
    email,
    phoneNumber,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    setFullName,
    setEmail,
    setPhoneNumber,
    setPassword,
    setConfirmPassword,
    setShowPassword,
    setShowConfirmPassword,
    handleSignUp,
  } = useSignUp();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.subtitle}>Enter your account details below</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#666"
          onChangeText={setFullName}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone number"
          placeholderTextColor="#666"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          placeholderTextColor="#666"
          onChangeText={setEmail}
          value={email}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eyeIconText}>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#666"
            secureTextEntry={!showConfirmPassword}
            onChangeText={setConfirmPassword}
            value={confirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Text style={styles.eyeIconText}>
              {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={() => handleSignUp(navigation)}
        >
          <Text style={styles.signUpButtonText}>Sign-up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By creating an account I agree to the terms and conditions of our
          <Text style={styles.linkText}> Service</Text>,
          <Text style={styles.linkText}> Payments</Text>,
          <Text style={styles.linkText}> Terms of Service</Text>,
          <Text style={styles.linkText}> Privacy Policy</Text>.
        </Text>
      </ScrollView>
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}
