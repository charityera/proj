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
    marginTop: 30,
  },
  subheading: {
    fontSize: 16,
    color: "gray",
    alignSelf: "flex-start",
    marginBottom: 20,
  },
  label: {
    color: "white",
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
  scheduleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  radio: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  radioSelected: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    borderColor: "#FFA500",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#333",
  },
  radioText: {
    color: "white",
    marginLeft: 5,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  addButtonText: {
    color: "#FFA500",
    marginLeft: 5,
  },
  notesInput: {
    width: "100%",
    height: 80,
    backgroundColor: "#333",
    color: "white",
    padding: 10,
    borderRadius: 5,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  noteText: {
    color: "gray",
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 30,
  },
  submitButton: {
    width: "100%",
    height: 50,
    alignSelf: "flex-start",
    backgroundColor: "#FF8C00",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
