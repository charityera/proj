import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  welcomeText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: 70,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffff",
    alignSelf: "flex-start",
    marginBottom: 40,
  },
  input: {
    width: "95%",
    height: 50,
    backgroundColor: "#1E1E1E",
    borderRadius: 5,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 5,
    color: "white",
  },
  passwordContainer: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    alignSelf: "flex-start",
    borderRadius: 5,
    marginBottom: 15,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    padding: 5,
  },
  eyeIconText: {
    color: "white",
    fontSize: 18,
  },
  signInButton: {
    width: "95%",
    height: 50,
    alignSelf: "flex-start",
    backgroundColor: "#FF8C00",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPasswordText: {
    color: "#FFFFFF",
    marginBottom: 170,
  },
  googleSignInButton: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 7,
    marginBottom: 15,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  googleSignInButtonText: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#FFFFFF",
  },
  signUpLink: {
    color: "#FF8C00",
  },
});

export default styles;
