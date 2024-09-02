import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffff",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffff",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#FF7C06",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 8,
    color: "#FFF",
    fontSize: 20,
    marginTop: 5,
  },
  image: {
    width: 500,
    height: 230,
    marginBottom: 100,
  },
});

export default styles;
