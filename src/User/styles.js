import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 50,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  menuIcon: {
    width: 20,
    height: 20,
  },
  header: {
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  welcomeText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  specialOffer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignSelf: "center",
  },
  offerImage: {
    width: "50%",
    height: 60,
    borderRadius: 5,
  },
  services: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  serviceButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
    height: 100,
    marginVertical: 9,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  serviceIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  serviceText: {
    color: "white",
    fontSize: 14,
    marginBottom: 5,
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  chatbotIcon: {
    width: 50,
    height: 50,
  },
  speechBubble: {
    borderRadius: 10,
    padding: 10,
    marginLeft: 10,
  },
  speechText: {
    color: "white",
    fontSize: 14,
  },
  illustration: {
    width: 100,
    height: 100,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  drawerItem: {
    paddingVertical: 15,
  },
  drawerText: {
    color: "white",
    fontSize: 18,
  },
  menuBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
    backgroundColor: "black",
    paddingVertical: 10,
  },
  menuItem: {
    alignItems: "center",
    paddingHorizontal: 10,
  },
  menuItemText: {
    color: "white",
    fontSize: 12,
  },
});

export default styles;
