import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const map = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 30.91, fontWeight: "bold" }}>Map</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View
          style={{
            borderWidth: 1,
            width: 366,
            height: 64,
            paddingLeft: 23,
            borderRadius: 39,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../../assets/images/myImage.jpg")}
            style={{
              width: 45,
              height: 45,
              borderRadius: 100,
              marginRight: 20,
            }}
          />
          <View>
            <Text style={{ color: "#1E1E1E", fontWeight: "600" }}>
              John Doe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: "white",
                  backgroundColor: "#439D25",
                  fontSize: 15,
                  // height: 11.23,
                  // width: 37.93,
                  textAlign: "center",
                  paddingHorizontal: 4,
                  borderRadius: 100,
                  fontWeight: "600",
                }}
              >
                User ID
              </Text>
              <Text
                style={{ color: "#1E1E1E", fontWeight: "300", marginLeft: 4 }}
              >
                D422Q7827
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        {/* <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} */}
        />
      </View>
      <StatusBar hidden={true} />
    </View>
  );
};

export default map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
