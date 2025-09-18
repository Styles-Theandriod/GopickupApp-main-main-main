import { useRouter } from "expo-router";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";

export default function Info2() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#F8F9F8",
      }}
    >
      <StatusBar hidden={true} />

      <View
        style={{
          marginTop: 100,
          alignItems: "center",
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 56,
            fontStyle: "normal",
            textAlign: "center",
            fontWeight: "700",
            marginBottom: 20,
            color: "#424441",
          }}
        >
          Seamless Navigation{" "}
          <Text style={{ color: "#439D25" }}>Procedures</Text>
        </Text>
      </View>
      <View
        style={{ marginTop: 20, alignItems: "center", paddingHorizontal: 20 }}
      >
        <Image
          source={require("../assets/images/workers.png")}
          style={{ width: 334, height: 228 }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 150,
          gap: 100,
          width: "100%",
          paddingHorizontal: 20,
          bottom: 50,
          position: "absolute",
          justifyContent: "space-between",
          alignItems: "center",
          height: 50,
        }}
      >
        <TouchableOpacity
          style={{
            borderColor: "#00000026",
            width: 91,
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#00000026" }}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/tabs/home")}
          style={{
            borderColor: "#439D25",
            width: 91,
            borderWidth: 1,
            padding: 10,
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: "#439D25", fontWeight: "700", fontSize: 15.83 }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
