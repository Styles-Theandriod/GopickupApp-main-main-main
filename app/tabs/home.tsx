import Items from "@/components/Items";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const [selected, setSelected] = useState("Buy Material");
  const [visible, setVisible] = useState(false);

  const tabs = [
    "Buy Material",
    "Natural Resources",
    "Post a Request",
    "Track My Delivery",
  ];
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9F8" }}>
      <StatusBar hidden={true} />
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text style={{ fontSize: 30.91, fontWeight: "bold" }}>Home</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/myImage.jpg")}
            style={{
              width: 25,
              height: 25,
              borderRadius: 100,
              marginRight: 20,
            }}
          />
          <View>
            <Text>Azih Monica</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  backgroundColor: "#439D25",
                  fontSize: 10,
                  marginRight: 10,
                  textAlign: "center",
                  paddingHorizontal: 8,
                  color: "white",
                  borderRadius: 5,
                }}
              >
                User ID
              </Text>
              <Text>D422Q7827</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={require("../../assets/images/Settings.png")}
              style={{
                width: 20,
                height: 20,
                marginLeft: 20,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ✅ Scrollable content */}
      <ScrollView
        style={{ flex: 1, marginHorizontal: 15, marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <TextInput
          style={{
            width: "100%",
            height: 50,
            borderRadius: 27,
            borderWidth: 2,
            paddingHorizontal: 30,
            marginTop: 10,
            borderColor: "#439D25",
          }}
          placeholder="Search"
          cursorColor={"#439D25"}
          placeholderTextColor={"black"}
        />

        {/* Coal Card */}
        <View
          style={{
            backgroundColor: "#439D250D",
            width: "100%",
            height: 126,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: 10,
          }}
        >
          <View>
            <Text style={{ fontWeight: "900", marginBottom: 10 }}>Coal</Text>
            <Text>Available</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "black",
                borderRadius: 30,
                alignItems: "center",
                justifyContent: "center",
                width: 84,
                height: 36,
                marginTop: 10,
              }}
              onPress={() => setVisible(true)}
            >
              <Text style={{ color: "white" }}>Buy</Text>
            </TouchableOpacity>
          </View>
          {/* Modal Begining */}
          <Modal
            visible={visible}
            transparent={false} // make it full screen
            animationType="slide"
            onRequestClose={() => setVisible(false)}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "white", // solid background, not transparent
                padding: 20,
              }}
            >
              {/* Header */}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Ionicons name="close" size={28} color="black" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setVisible(false)}>
                  <Image
                    source={require("../../assets/images/Settings.png")}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 20,
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* Content */}
              <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: 700 }}>
                Natural Resources
              </Text>
              <ScrollView>
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
                <Items />
              </ScrollView>
              {/* Footer */}
              <TouchableOpacity
                onPress={() => setVisible(false)}
                style={{
                  backgroundColor: "#439D25",
                  padding: 15,
                  borderRadius: 12,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontWeight: "600", fontSize: 16 }}
                >
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>

          {/* Modal End */}

          <Image
            source={require("../../assets/images/Rock.png")}
            style={{
              width: 184,
              height: 111,
              marginLeft: 20,
            }}
          />
        </View>

        {/* GoMarket Banner */}
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../../assets/images/GoMarket.png")}
            style={{
              width: "100%",
              height: 101,
              borderRadius: 10,
            }}
          />
        </View>

        {/* Tabs */}
        <View style={{ marginTop: 20 }}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
          >
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab}
                onPress={() => setSelected(tab)}
                style={[
                  styles.button,
                  selected === tab && styles.selectedButton,
                ]}
              >
                <Text
                  style={[styles.text, selected === tab && styles.selectedText]}
                >
                  {tab}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Cards Row */}
        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={styles.card}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontWeight: "700", fontSize: 15 }}>
                Ready to {"\n"}Ship?
              </Text>
              <Image
                source={require("../../assets/images/Location Logo.png")}
                style={{ width: 38, height: 38 }}
              />
            </View>
            <Text style={{ marginTop: 10, fontWeight: "700", fontSize: 15 }}>
              Post a load
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 12 }}>
              Delivery and Pickup{"\n"}anywhere in Nigeria.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontWeight: "700", fontSize: 15 }}>
                Book a {"\n"}driver
              </Text>
              <Image
                source={require("../../assets/images/Van.png")}
                style={{ width: 38, height: 38 }}
              />
            </View>
            <Text style={{ marginTop: 10, fontWeight: "700", fontSize: 12 }}>
              Our Dispatch Equipment
            </Text>
            <Text style={{ fontWeight: "400", fontSize: 12 }}>
              Van, Pick Up, Truck, Flat bed, Trailer and Tipper.
            </Text>
          </TouchableOpacity>
        </View>

        {/* Register Vendor Card */}
        <View style={styles.vendorCard}>
          <Image
            source={require("../../assets/images/Futures 1.png")}
            style={{ width: 68.94, height: 62.85, marginRight: 10 }}
          />
          <View>
            <Text style={{ fontSize: 13, fontWeight: "800" }}>
              Register as a building material vendor.
            </Text>
            <Text style={{ fontSize: 11, fontWeight: "400" }}>
              Begin your journey to great business values
            </Text>
          </View>
        </View>
        <Image
          source={require("../../assets/images/Truck GoPick 1.png")}
          style={{
            width: 349,
            height: 183,
            marginTop: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 12,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: 349,
            height: 71,
            backgroundColor: "#CDEBC9",
            padding: 20,
          }}
        >
          <View
            style={{
              borderWidth: 0.98,
              borderColor: "white",
              width: "100%",
              flexDirection: "row",
              padding: 5,
            }}
          >
            <Image
              source={require("../../assets/images/Futures 1.png")}
              style={{
                width: 36.227294921875,
                height: 36.227294921875,
                marginLeft: 13,
              }}
            />

            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 11, fontWeight: "700" }}>
                Are you a Driver?
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "700" }}>
                Register to drive with Go pickup
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#439D2521",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  selectedButton: {
    borderWidth: 2,
    borderColor: "#439D25",
  },
  text: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  selectedText: {
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#439D2517",
    width: 169,
    height: 125,
    padding: 15,
    borderRadius: 10,
  },
  vendorCard: {
    width: 349,
    height: 112.85,
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    marginTop: 20,
  },
});
