import Ionicons from "@expo/vector-icons/Ionicons";
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

const profile = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9F8" }}>
      {/* Header */}
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
        <Text style={{ fontSize: 30.91, fontWeight: "bold" }}>Profile</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" size={28} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Header close*/}

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View
          style={{
            borderWidth: 1,
            width: 366,
            paddingTop: 14,
            paddingRight: 23,
            paddingLeft: 23,
            paddingBottom: 14,
            borderRadius: 39,
            flexDirection: "row",
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
                  fontSize: 10,
                }}
              >
                User ID
              </Text>
              <Text>D422Q7827</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 20, flexDirection: "row", gap: 10 }}>
          <Ionicons name="person" size={28} color="white" style={{}} />
          <Text>Account Info</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          // gap: 10,
          backgroundColor: "white",
          paddingVertical: 12,
          paddingHorizontal: 14,
          borderRadius: 10,
          marginHorizontal: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <Text style={{ width: 80, color: "#374151", fontWeight: "600" }}>Name</Text>
        <TextInput
          style={{
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: "#E5E7EB",
        paddingVertical: 6,
        fontSize: 16,
        color: "#111827",
          }}
          placeholder="John Doe"
          placeholderTextColor="#9CA3AF"
          underlineColorAndroid="transparent"
        />
      </View>
      <StatusBar hidden={true} />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
