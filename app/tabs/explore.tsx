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

const Explore = () => {
  const cards = [
    {
      id: 1,
      title: "Shippers",
      description:
        "Strengthen your supply chain \nwith real-time market visibility \nand seamless access to a \nvast, reliable carrier network.",
      image: require("../../assets/images/Carry.png"),
    },
    {
      id: 2,
      title: "Carriers",
      description:
        "Access the most suitable loads \nfor your trucks at the right \nplace, wherever you operate.",
      image: require("../../assets/images/Move.png"),
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#F8F9F8" }}>
      <StatusBar hidden={true} />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={28} color="gray" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Customer Service */}
        <View style={styles.smallCard}>
          <Image
            source={require("../../assets/images/Customer services.png")}
            style={styles.smallCardImage}
          />
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.smallCardTitle}>Customer Service</Text>
            <Text style={styles.smallCardSubtitle}>Help Center</Text>
          </View>
        </View>

        {/* Track Delivery */}
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "700" }}>Track Delivery</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter product serial number"
              cursorColor="#439D25"
              placeholderTextColor="black"
            />
            <TouchableOpacity style={styles.trackButton}>
              <Text style={{ color: "white" }}>Track</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Refer a Friend */}
        <View style={styles.referCard}>
          <Image
            source={require("../../assets/images/Friends & Gifts.png")}
            style={styles.referImage}
          />
          <View>
            <Text style={{ fontSize: 13.67, fontWeight: "800" }}>
              Refer a friend
            </Text>
            <Text style={{ fontSize: 13.07, fontWeight: "300" }}>
              And get Bonus
            </Text>
          </View>
        </View>

        {/* Vendor Card */}
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

        {/* Save More Card */}
        <View style={styles.saveMoreCard}>
          <Image
            source={require("../../assets/images/Coin Bag.png")}
            style={{ width: 44.9, height: 56, marginLeft: 13 }}
          />
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontSize: 20, fontWeight: "900", marginRight: 10 }}
              >
                Save more after
              </Text>
              <Image
                source={require("../../assets/images/Number 3.png")}
                style={{ width: 30, height: 30 }}
              />
            </View>
            <Text style={{ fontSize: 11, fontWeight: "300" }}>
              successful deliveries
            </Text>
          </View>
        </View>

        {/* Cards Section */}
        <View style={styles.container}>
          {cards.map((card) => (
            <View key={card.id} style={styles.card}>
              <Image source={card.image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <View>
                  <Text style={styles.cardTitle}>{card.title}</Text>
                  <Text style={styles.cardDescription}>{card.description}</Text>
                </View>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Visit site</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        {/* Footer */}
        <Text style={styles.version}>App Version: 2.14</Text>
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    height: 75,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 30.91,
    fontWeight: "bold",
  },
  smallCard: {
    flexDirection: "row",
    alignItems: "center",
    height: 71,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 10,
  },
  smallCardImage: {
    width: 36,
    height: 36,
    marginLeft: 13,
  },
  smallCardTitle: {
    fontSize: 11.23,
    fontWeight: "900",
  },
  smallCardSubtitle: {
    fontSize: 11.23,
    fontWeight: "300",
  },
  input: {
    width: "100%",
    height: 50,
    borderRadius: 27,
    borderWidth: 2,
    paddingHorizontal: 30,
    marginTop: 10,
    borderColor: "#439D25",
  },
  trackButton: {
    backgroundColor: "#439D25",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 84,
    height: 36,
    position: "absolute",
    right: 10,
    top: 17,
  },
  referCard: {
    flexDirection: "row",
    height: 78,
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 20,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  referImage: {
    width: 115,
    height: 64,
    marginLeft: 13,
  },
  vendorCard: {
    width: "100%",
    height: 112.85,
    padding: 20,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    elevation: 3,
    marginTop: 20,
  },
  saveMoreCard: {
    width: "100%",
    height: 80,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#439D25",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  card: {
    width: 170,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 120,
  },
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between", // keeps button at bottom
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "700",
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 10,
    color: "#555",
  },
  button: {
    backgroundColor: "#439D25",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
    alignSelf: "flex-end", // left aligned
    marginTop:10
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "600",
  },
  version: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 20,
    color: "gray",
    fontSize: 13,
  },
});
