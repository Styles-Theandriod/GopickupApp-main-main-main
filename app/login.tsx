import GoogleLogInButton from "@/components/GoogleLogInButton";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function Login() {
  const router = useRouter();
  

  

  
  return (
    <View
      style={{
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#439D25",
        flex: 1,
      }}
    >
      <StatusBar hidden={true} />
      <View style={Styles.centered}>
        <Image
          source={require("../assets/images/GoPickUpWhite .png")}
          style={{ width: 190.74, height: 76 }}
        />
        <View style={Styles.LoginContainer}>
          <View style={Styles.MainLogin}>
            <View style={{ width: "90%" }}>
              <Text
                style={{
                  marginBottom: 22,
                  fontWeight: "700",
                  fontSize: 22.52,
                  marginTop: 15,
                  color: "white",
                }}
              >
                Login
              </Text>
              <View>
                <Text style={{ color: "white" }}>Email:</Text>
                <TextInput
                  // value={email}
                  // onChangeText={setEmail}
                  style={{
                    height: 40,
                    borderColor: "white",
                    borderBottomWidth: 0.25,
                    width: "100%",
                  }}
                />
              </View>
              <View>
                <Text style={{ marginTop: 22, color: "white" }}>Password:</Text>
                <TextInput
                  secureTextEntry
                  // value={password}
                  // onChangeText={setPassword}
                  style={{
                    height: 40,
                    borderColor: "white",
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
              <Text style={{ color: "white", fontWeight: "700", fontSize: 9 }}>
                Forget Password
              </Text>
            </TouchableOpacity>
            <GoogleLogInButton
              onPress={() => {
                // TODO: Implement Google sign-in logic here
                console.log("Google Sign-In pressed");
              }}
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  // handleLogin();
                }}
                style={{
                  marginTop: 22,
                  backgroundColor: "white",
                  width: 134,
                  height: 50,
                  borderRadius: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  // marginLeft: 30,
                  flexDirection: "row",
                }}
              >
                <Image
                  source={require("../assets/images/mynaui_face-id-solid.png")}
                  style={{ width: 20, height: 20, tintColor: "#439D25" }}
                />{" "}
                <Text
                  style={{
                    color: "#439D25",
                    fontWeight: "700",
                    fontSize: 19.11,
                    marginLeft: 5,
                  }}
                >
                  Face ID
                </Text>
              </TouchableOpacity>

                <TouchableOpacity
                onPress={() => {
                  router.push("/info2");
                }}
                style={{
                  marginTop: 22,
                  backgroundColor: "#439D25",
                  width: 134,
                  height: 50,
                  borderRadius: 100,
                  borderWidth: 1,
                  borderColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 10,
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
    marginTop: 140,
  },
  LoginContainer: {
    marginTop: 20,
    width: 309,
    height: 281.4,
  },
  MainLogin: {
    width: 305,
    // height: 281,
    backgroundColor: "#439D25",
    borderRadius: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 4 },
    elevation: 5,
    marginHorizontal: "auto",
    marginTop: 50,
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
