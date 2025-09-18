import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <StatusBar style="auto" />
      <Stack.Screen name="index" />
      <Stack.Screen name="info" />
      <Stack.Screen name="tabs/" />   {/* ✅ just "tabs", not "tabs/layout" */}
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
