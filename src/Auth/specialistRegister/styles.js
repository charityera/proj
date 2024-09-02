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
    marginBottom: 20,
    marginTop: 20,
  },
  text: {
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
  signInButton: {
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
  signInButtonText: {
    color: "white",
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
  backToLoginLink: {
    marginTop: 15,
  },
  backToLoginText: {
    color: "#FF8C00",
    fontSize: 16,
    fontWeight: "bold",
  },
  eyeIconText: {
    fontSize: 18,
  },
});

export default styles;
