import GoogleLogInButton from "@/components/GoogleLogInButton";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRouter } from "expo-router";
export default function Login() {
  const router = useRouter();
  return (
    
    <View
    style={{
      // justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F8F9F8",
      flex: 1,
    }}
    >
    <StatusBar hidden={true} />
      <View style={Styles.centered}>
        <Image
          source={require("../assets/images/GoPickUp Logo.png")}
          style={{ width: 190.74, height: 76 }}
        />
        <View style={Styles.LoginContainer}>
          <View style={Styles.MainLogin}>
            <View style={{ width: "90%" }}>
              <Text
                style={{ marginBottom: 22, fontWeight: "700", fontSize: 22.52 }}
              >
                Login
              </Text>
              <View>
                <Text style={{ color: "#00000075" }}>Email:</Text>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderBottomWidth: 0.25,
                    width: "100%",
                  }}
                />
              </View>
              <View>
                <Text style={{ marginTop: 22, color: "#00000075" }}>
                  Password:
                </Text>
                <TextInput
                  style={{
                    height: 40,
                    borderColor: "gray",
                    borderBottomWidth: 0.25,
                    width: "100%",
                  }}
                />
              </View>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 22,
              }}
            >
              <Text
                style={{ color: "#2B6019", fontWeight: "700", fontSize: 9 }}
              >
                Forget Password
              </Text>
            </TouchableOpacity>
            <GoogleLogInButton
              onPress={() => {
                // TODO: Implement Google sign-in logic here
                console.log("Google Sign-In pressed");
              }}
            />
          </View>
          <TouchableOpacity
            onPress={() => router.push("/info")}
            style={{
              marginTop: 22,
              backgroundColor: "#439D25",
              width: 96,
              height: 39,
              borderRadius: 100,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 30,
            }}
          >
            <Text
              style={{ color: "white", fontWeight: "700", fontSize: 19.11 }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#424441BD", opacity: 0.8, fontWeight: 700 }}>
          Keep Moving
        </Text>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  centered: {
    alignItems: "center",
    marginTop: 100,
  },
  LoginContainer: {
    marginTop: 20,
    width: 309,
    height: 281.4,
  },
  MainLogin: {
    width: 260,
    // height: 281,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "#2B60190D",
    shadowOffset: { width: 4, height: 4 },
    elevation: 5,
    marginHorizontal: "auto",
    marginTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
