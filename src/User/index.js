import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  GestureHandlerRootView,
  DrawerLayout,
} from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useUserHome } from "./context";
import styles from "./styles";

const UserHome = () => {
  const navigation = useNavigation();
  const { drawer, setDrawer, handleLogout } = useUserHome();

  const renderDrawerContent = () => (
    <View style={styles.drawerContainer}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.drawerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Text style={styles.drawerText}>Activity</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Text style={styles.drawerText}>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Text style={styles.drawerText}>Vehicles</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem}>
        <Text style={styles.drawerText}>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={handleLogout}>
        <Text style={styles.drawerText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <DrawerLayout
        drawerWidth={250}
        drawerPosition="left"
        drawerType="front"
        drawerBackgroundColor="#333"
        renderNavigationView={renderDrawerContent}
        ref={setDrawer}
      >
        <View style={styles.container}>
          <View style={styles.navbar}>
            <TouchableOpacity onPress={() => drawer.openDrawer()}>
              <Image
                source={require("../../assets/images/main-menu.png")}
                style={styles.menuIcon}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome RoadTech</Text>
            <Text style={styles.subtitle}>Roadside Heroes at your Service</Text>
          </View>
          <View style={styles.specialOffer}>
            <Image
              source={require("../../assets/images/1.png")}
              style={styles.offerImage}
            />
            <Image
              source={require("../../assets/images/2.png")}
              style={styles.offerImage}
            />
          </View>
          <View style={styles.services}>
            {[
              {
                name: "Towing",
                icon: require("../../assets/images/3.png"),
                screen: "Towing",
              },
              {
                name: "Tire change",
                icon: require("../../assets/images/5.png"),
                screen: "TireChange",
              },
              {
                name: "Refuel",
                icon: require("../../assets/images/4.png"),
                screen: "Refuel",
              },
              {
                name: "Jump",
                icon: require("../../assets/images/6.png"),
                screen: "Jump",
              },
            ].map((service, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate(service.screen)}
                style={styles.serviceButton}
              >
                <View style={styles.iconContainer}>
                  <Image source={service.icon} style={styles.serviceIcon} />
                </View>
                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.bottomSection}>
            <Image
              source={require("../../assets/images/chatbot.png")}
              style={styles.chatbotIcon}
            />
            <View style={styles.speechBubble}>
              <Text style={styles.speechText}>Need help? Ask me!</Text>
            </View>
          </View>
          <View style={styles.menuBar}>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="home-outline" size={24} color="white" />
              <Text style={styles.menuItemText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="list-outline" size={24} color="white" />
              <Text style={styles.menuItemText}>Activity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="settings-outline" size={24} color="white" />
              <Text style={styles.menuItemText}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DrawerLayout>
    </GestureHandlerRootView>
  );
};

export default UserHome;
