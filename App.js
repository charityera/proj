import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProvider } from "./src/WelcomePage/context";
import { SignUpProvider as ClientSignUpProvider } from "./src/Auth/userRegister/context";
import { SignUpProvider as SpecialistSignUpProvider } from "./src/Auth/specialistRegister/context";
import { SignInProvider } from "./src/Auth/signIn/context";
import { UserHomeProvider } from "./src/User/context";
import WelcomePage from "./src/WelcomePage";
import Choice from "./src/Choice";
import SignUp from "./src/Auth";
import SignIn from "./src/Auth/signIn";
import SpecialistSignUp from "./src/Auth/specialistRegister";
import UserHomeWrapper from "./src/User";
import Towing from "./src/User/Towing";
import SpecialistHome from "./src/Specialist";
import { SpecialistProvider } from "./src/Specialist/context";
import { TowingProvider } from "./src/User/Towing/context";
import LocationProvider from "./src/User/Location/context";
import LocationScreen from "./src/User/Location";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AppProvider>
          <ClientSignUpProvider>
            <SpecialistSignUpProvider>
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={WelcomePage} />
                <Stack.Screen name="Choice" component={Choice} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="SignIn">
                  {() => (
                    <SignInProvider>
                      <SignIn />
                    </SignInProvider>
                  )}
                </Stack.Screen>
                <Stack.Screen name="Location">
                  {() => (
                    <LocationProvider>
                      <LocationScreen />
                    </LocationProvider>
                  )}
                </Stack.Screen>
                <Stack.Screen name="SpecialistSignUp">
                  {() => (
                    <SpecialistSignUpProvider>
                      <SpecialistSignUp />
                    </SpecialistSignUpProvider>
                  )}
                </Stack.Screen>
                <Stack.Screen name="UserHome">
                  {() => (
                    <UserHomeProvider>
                      <UserHomeWrapper />
                    </UserHomeProvider>
                  )}
                </Stack.Screen>
                <Stack.Screen name="SpecialistHome">
                  {() => (
                    <SpecialistProvider>
                      <SpecialistHome />
                    </SpecialistProvider>
                  )}
                </Stack.Screen>
                <Stack.Screen name="Towing">
                  {() => (
                    <TowingProvider>
                      <Towing />
                    </TowingProvider>
                  )}
                </Stack.Screen>
              </Stack.Navigator>
            </SpecialistSignUpProvider>
          </ClientSignUpProvider>
        </AppProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
