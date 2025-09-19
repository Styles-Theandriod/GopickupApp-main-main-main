import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: () => void;
};

const GoogleLogInButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Text style={styles.text}>Continue with Google</Text>
        <Image
          source={require("../assets/images/GoogleLogo.png")}
          style={{ width: 22.9, height: 22.9 }}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginTop: 18,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 10.73,
    color: "white",
    opacity: 63,
    fontWeight: "500",
    marginRight: 10,
  },
});

export default GoogleLogInButton;
