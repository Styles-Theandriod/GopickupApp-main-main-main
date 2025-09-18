import GoogleSignInButton from "@/components/GoogleSignInButton";
import { useRouter } from "expo-router";
import { Image, StatusBar, Text, View } from "react-native";
import Button from "../components/Button";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View>
      <View style={Styles.centered}>
        <Image
          source={require("../assets/images/GoPickUp Logo.png")}
          style={{ width: 190.74, height: 76 }}
        />
        <StatusBar hidden={true} />
      </View>
      <View style={Styles.centered}>
        <Button
          title="Login"
          onPress={() => router.push("/login")}
          variant="outlined"
        />
        <Button
          title="Sign Up"
          onPress={() => router.push("/signup")}
          variant="filled"
        />
        <GoogleSignInButton onPress={() => {}} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          alignItems: "center",
          marginBottom: 50,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#424441BD" }}>Keep Moving</Text>
      </View>
      <Image
        source={require("../assets/images/GreenMovement.png")}
        style={{ width: 430, height: 300, marginTop: 80 }}
      />
    </View>
  );
}

const Styles = {
  centered: {
    alignItems: "center" as const,
    marginTop: 150,
  },
};
