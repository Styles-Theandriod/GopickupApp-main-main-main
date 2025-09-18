import React from "react";
import { StatusBar, Text, View } from "react-native";

export default function Login() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <StatusBar hidden={true} />

      <Text>Signup Screen</Text>
    </View>
  );
}
