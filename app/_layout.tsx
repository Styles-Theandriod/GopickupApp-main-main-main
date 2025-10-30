import * as Font from "expo-font";
import { Stack, usePathname, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RootLayout() {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Load custom fonts
  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
      });
      setLoaded(true);
    })();
  }, []);

  // Restore last visited route
  useEffect(() => {
    (async () => {
      const lastRoute = await AsyncStorage.getItem("lastRoute");
      if (lastRoute && lastRoute !== pathname) {
        router.replace(lastRoute as any);
      }
    })();
  }, []);

  // Save route whenever it changes
  // useEffect(() => {
  //   if (pathname) {
  //     AsyncStorage.setItem("lastRoute", pathname);
  //   }
  // }, [pathname]);

  // if (!loaded) return null;

  return (
      <Stack screenOptions={{ headerShown: false }}>
        <StatusBar style="auto" />
        <Stack.Screen name="index" />
        <Stack.Screen name="info" />
        <Stack.Screen name="tabs" />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
