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
  title: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginBottom: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffff",
    alignSelf: "flex-start",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    marginBottom: 15,
    color: "white",
  },
  passwordContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    alignSelf: "flex-start",
    borderRadius: 10,
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
  backToLoginText: {
    color: "#FF8C00",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpButton: {
    width: "100%",
    height: 50,
    alignSelf: "flex-start",
    backgroundColor: "#FF8C00",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    color: "white",
    fontSize: 16,
    marginVertical: 10,
  },
  googleSignInButton: {
    width: "100%",
    height: 50,
    alignSelf: "flex-start",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  googleSignInButtonText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
  },
  termsText: {
    color: "#666",
    fontSize: 12,
    textAlign: "center",
    marginTop: 20,
  },
  linkText: {
    color: "#FF8C00",
    textDecorationLine: "underline",
  },
});

export default styles;
