import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Items = () => {
  return (
     <View style={{ marginTop: 30, flex: 1 }}>
                   
                    <View
                      style={{
                        backgroundColor: "white",
                        padding: 10,
                        borderRadius: 12,
                        shadowColor: "#000",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.1,
                        shadowRadius: 6,
                        elevation: 3,
                      }}
                    >
                      <View
                        style={{
                          borderWidth: 0.98,
                          borderColor: "#C4C4C4",
                          padding: 10,
                          borderRadius: 12,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 17.57, fontWeight: 700 }}>
                            Coal
                          </Text>
                          <TouchableOpacity>
                            <Image
                              source={require("../assets/images/Drop Down.png")}
                              style={{
                                width: 27.72929573059082,
                                height: 27.72929573059082,
                                marginLeft: 20,
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                        <View
                          style={{
                            // backgroundColor: "red",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 10,
                          }}
                        >
                          <View>
                            <Text>Available</Text>
                            <Text>N 7,300,000 per trip</Text>
                          </View>
                          <View>
                            <TouchableOpacity
                              style={{
                                backgroundColor: "#439D25",
                                borderRadius: 12,
                                padding: 10,
                                borderColor: "white",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                              }}
                            >
                              <Text
                                style={{ color: "white", fontWeight: "600" }}
                              >Add to Chart</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
  )
}

export default Items
