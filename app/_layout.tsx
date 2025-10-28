import React, { useEffect, useState } from "react";
import { Stack, usePathname } from "expo-router";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);

  // Load fonts
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
      });
      setLoaded(true);
    })();
  }, []);

  // Track and restore last visited route
  const [initialRoute, setInitialRoute] = useState<null | string>(null);

  useEffect(() => {
    const restoreLastRoute = async () => {
      const lastRoute = await AsyncStorage.getItem("lastRoute");
      if (lastRoute) setInitialRoute(lastRoute);
    };
    restoreLastRoute();
  }, []);

  // Listen for route changes
  const pathname = usePathname();
  useEffect(() => {
    if (pathname) {
      AsyncStorage.setItem("lastRoute", pathname);
    }
  }, [pathname]);

  if (!loaded) return null;

  return (
    <Stack
      initialRouteName={initialRoute || "index"}
      screenOptions={{ headerShown: false }}
    >
      <StatusBar style="auto" />
      <Stack.Screen name="index" />
      <Stack.Screen name="info" />
      <Stack.Screen name="tabs" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
