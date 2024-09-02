import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    marginTop: 30,
    backgroundColor: "#000000",
  },
  greeting: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  statsCard: {
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    padding: 15,
    width: "45%",
    alignItems: "center",
  },
  statsText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  statsNumber: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  statsSubtext: {
    color: "#666",
    fontSize: 14,
  },
  statsStars: {
    color: "#4CAF50",
    fontSize: 20,
  },
  map: {
    flex: 1,
  },
  footer: {
    backgroundColor: "#1E1E1E",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1E1E1E",
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: "center",
  },
  menuItemText: {
    color: "white",
    fontSize: 12,
  },
});

export default styles;
