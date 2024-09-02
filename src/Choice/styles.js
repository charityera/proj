import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 8,
    marginBottom: 40,
  },
  dropdownText: {
    color: "#fff",
    fontSize: 18,
    marginHorizontal: 20,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    marginHorizontal: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#444",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    width: "80%",
    marginBottom: 25,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    marginLeft: 20,
  },
});

export default styles;
