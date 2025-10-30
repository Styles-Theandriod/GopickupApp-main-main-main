import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  Image,
  ScrollView,
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
      </View>
      <View
        style={{ marginTop: 20, flexDirection: "row", gap: 10, marginLeft: 20 }}
      >
        <Text style={{ fontWeight: "600", color: "#374151" }}>
          Account Info
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
      {/* Name */}
      <View style={styles.row}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>Azih Monica</Text>
      </View>
      <View style={styles.divider} />

      {/* Phone */}
      <View style={styles.row}>
        <Text style={styles.label}>Phone No:</Text>
        <Text style={styles.value}>+234 000 000 0000</Text>
      </View>
      <View style={styles.divider} />

      {/* Location */}
      <View style={styles.row}>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.value}>Nigeria, Abuja</Text>
      </View>
      <View style={styles.divider} />

      {/* Email */}
      <View style={styles.row}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>Azihmonica@gmail.com</Text>
      </View>
      <View style={styles.divider} />

      {/* Last Delivery */}
      <View style={styles.row}>
        <Text style={styles.label}>Last Delivery:</Text>
        <Text style={styles.value}>May 6th, 2025</Text>
      </View>

      {/* Item Delivered */}
      <Text style={styles.subText}>
        <Text style={{ fontWeight: "600" }}>Item delivered:</Text> 2 trips of coal
      </Text>

      {/* Total Delivery */}
      <View style={styles.deliveryBox}>
        <Text style={styles.deliveryText}>
          Total Delivery: <Text style={styles.deliveryCount}>30</Text>{" "}
          <Text style={styles.successText}>Successful</Text>
        </Text>
      </View>

      {/* Warning */}
      <View style={styles.warningBox}>
        {/* <Feather name="alert-triangle" size={18} color="#EAB308" /> */}
            <Ionicons name="ellipsis-vertical" size={28} color="black" />

        <Text style={styles.warningText}>You can only edit your profile once a month.</Text>
      </View>

      {/* Delete Account */}
      <TouchableOpacity style={styles.deleteBtn}>
        {/* <MaterialIcons name="delete-outline" size={20} color="red" /> */}
            <Ionicons name="ellipsis-vertical" size={28} color="black" />
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>

      {/* Edit Button */}
      <TouchableOpacity style={styles.editBtn}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>
    </ScrollView>
      <StatusBar hidden={true} />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  label: {
    fontWeight: "700",
    fontSize: 15,
  },
  value: {
    fontSize: 15,
    color: "#333",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 5,
  },
  subText: {
    marginTop: 6,
    fontSize: 14,
    color: "#444",
  },
  deliveryBox: {
    backgroundColor: "#ECFDF5",
    padding: 12,
    borderRadius: 10,
    marginVertical: 20,
  },
  deliveryText: {
    fontWeight: "700",
    textAlign: "center",
  },
  deliveryCount: {
    fontSize: 18,
    color: "#000",
  },
  successText: {
    color: "#22C55E",
    fontWeight: "600",
  },
  warningBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFBEB",
    padding: 10,
    borderRadius: 8,
    marginBottom: 25,
  },
  warningText: {
    marginLeft: 8,
    color: "#B45309",
    fontSize: 13,
    flex: 1,
  },
  deleteBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  deleteText: {
    color: "red",
    fontWeight: "600",
    marginLeft: 6,
  },
  editBtn: {
    backgroundColor: "#16A34A",
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: "center",
  },
  editText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
