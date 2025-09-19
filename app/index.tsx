import GoogleSignInButton from "@/components/GoogleSignInButton";
import { useRouter } from "expo-router";
import { Image, StatusBar, Text, View } from "react-native";
import Button from "../components/Button";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, backgroundColor: "#439D25" }}>
      <View style={Styles.centered}>
        <Image
          source={require("../assets/images/GoPickUpWhite .png")}
          style={{ width: 211, height: 84 }}
        />
        <StatusBar hidden={true} />
      </View>
      <View style={Styles.centered}>
        <Button
          style={{ borderWidth: 1, borderColor: "white" }}
          textStyle={{color:'white'}}
          title="Login"
          onPress={() => router.push("/login")}
          variant="outlined"
        />
        <Button
          style={{ backgroundColor: "white" }}
          textStyle={{color:'#439D25'}}
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
        <Text style={{ color: "white" }}>Keep Moving</Text>
      </View>
      {/* <Image
        source={require("../assets/images/GreenMovement.png")}
        style={{ width: 430, height: 300, marginTop: 80 }}
      /> */}
    </View>
  );
}

const Styles = {
  centered: {
    alignItems: "center" as const,
    marginTop: 150,
  },
};
