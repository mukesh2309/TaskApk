import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Home from "./src/screens/Home";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
            <StatusBar
              translucent={true}
              backgroundColor="#211134"
              style="light"
            />
            <Stack.Navigator>
              <Stack.Screen name="home" component={Home}
                options={{
                  headerShown: false
                }}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
