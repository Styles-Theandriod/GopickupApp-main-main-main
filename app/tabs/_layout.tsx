import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName: React.ComponentProps<typeof Ionicons>["name"] = "home-outline";

          if (route.name === "home") iconName = "home-outline";
          else if (route.name === "explore") iconName = "search-outline";
          else if (route.name === "notifications") iconName = "notifications-outline";
          else if (route.name === "profile") iconName = "person-outline";
          else if (route.name === "settings") iconName = "globe-outline";

          return <Ionicons name={iconName} size={25} color={color} />; // ✅ bigger icon
        },
        tabBarActiveTintColor: "#439D25",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 72, // ✅ taller tab bar
          paddingBottom: 8,
          paddingTop: 8,
          paddingHorizontal:20
        },
        tabBarLabelStyle: {
          fontSize: 9.76, // ✅ slightly bigger label
          fontWeight: "600",
        },
        headerShown: false,
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="explore" options={{ title: "Explore" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
      <Tabs.Screen name="notifications" options={{ title: "Notification" }} />
      <Tabs.Screen name="settings" options={{ title: "Map" }} />
    </Tabs>
  );
}
