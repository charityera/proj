import React from "react";
import {
  StatusBar,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SignInProvider, useSignIn } from "./context";
import styles from "./styles";

export default function SignIn() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    handleSignIn,
  } = useSignIn();
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.text}>Login to your account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email or phone number"
          placeholderTextColor="#666"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#666"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Text style={styles.eyeIconText}>{showPassword ? "👁️" : "👁️‍🗨️"}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.signInButton}
          onPress={() => handleSignIn(navigation)}
        >
          <Text style={styles.signInButtonText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleSignInButton}>
          <Image
            style={styles.googleIcon}
            source={{
              uri: "https://img.icons8.com/color/48/000000/google-logo.png",
            }}
          />
          <Text style={styles.googleSignInButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signUpText}>
            Don’t have an account?{" "}
            <Text style={styles.signUpLink}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="light" />
    </KeyboardAvoidingView>
  );
}
