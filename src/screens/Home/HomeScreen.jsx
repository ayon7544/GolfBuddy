import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale, verticalScale } from "../../utils/responsive";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import * as Progress from "react-native-progress";

const HomeScreen = () => {
  const matchSuggestions = [
    {
      id: 1,
      date: "Sunday, Jun 8",
      time: "10:00 AM",
      course: "Royal Dublin Golf Club",
      player: "Sean Murphy",
      handicap: "18+ Advanced",
      status: "Pending",
      tags: [
        "AI Compatibility Analysis",
        "Skill level ass",
        "Playing style similarities",
      ],
      compatibility: "75% Match",
    },
    {
      id: 2,
      date: "Sunday, Jun 8",
      time: "10:00 AM",
      course: "Royal Dublin Golf Club",
      player: "Sean Murphy",
      handicap: "8.0 Advanced",
      status: "Pending",
      tags: [
        "AI Compatibility Analysis",
        "9/18 Hole Sessions",
        "Playing style similarities",
      ],
      compatibility: "75% Match",
    },
  ];

  const upcomingMatches = [
    {
      id: 1,
      date: "Saturday, Jun 14",
      time: "09:30 AM",
      course: "Killeen Manor Golf Club",
      players: 4,
      status: "Confirmed",
    },
    {
      id: 2,
      date: "Saturday, Jun 14",
      time: "01:30 PM",
      course: "Killeen Manor Golf Club",
      players: 2,
      status: "Confirmed",
    },
    {
      id: 3,
      date: "Saturday, Jun 14",
      time: "03:30 PM",
      course: "Killeen Manor Golf Club",
      players: 2,
      status: "Confirmed",
    },
  ];

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View className="flex-1 bg-white">
        <ScrollView
          className="flex-1"
          style={{ padding: scale(10) }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View
            className="flex-row justify-between items-center"
            style={{ paddingTop: scale(30) }}
          >
            <View>
              <Text
                className="font-semibold text-black"
                style={{ fontSize: scale(18) }}
              >
                GolfMatch Club
              </Text>
              <Text
                className="text-gray-500"
                style={{
                  fontSize: scale(14),
                  marginTop: verticalScale(4),
                }}
              >
                AI-Powered Matching
              </Text>
            </View>
            <View className="flex-row" style={{ gap: scale(10) }}>
              <TouchableOpacity style={{ padding: scale(5) }}>
                <Image
                  source={require("./assets/3line.png")}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: scale(5) }}>
                <Image
                  source={require("./assets/bell.png")}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Search Section */}
          <View style={{ paddingVertical: verticalScale(16) }}>
            <View
              className="flex-row items-center rounded-full border border-gray-500"
              style={{
                paddingHorizontal: scale(20),
                height: scale(50),
              }}
            >
              <Image
                source={require("./assets/search.png")}
                style={{
                  width: scale(18),
                  height: scale(18),
                  marginRight: scale(8),
                  resizeMode: "contain",
                }}
              />
              <TextInput
                className="flex-1 text-black"
                style={{ fontSize: scale(15) }}
                placeholder="Find Match"
                placeholderTextColor="#3B82F6"
              />
            </View>
          </View>

          {/* AI Section */}
          <View
            className="rounded-2xl"
            style={{ marginBottom: verticalScale(30) }}
          >
            <View
              className="rounded-2xl border border-gray-300"
              style={{
                padding: scale(15),
                borderWidth: 1,
                marginVertical: verticalScale(15),
              }}
            >
              <Text
                className="font-semibold text-black"
                style={{
                  fontSize: scale(20),
                  marginBottom: verticalScale(8),
                }}
              >
                AI Golf Assistant
              </Text>
              <Text
                className="text-gray-500 italic"
                style={{
                  fontSize: scale(14),
                  marginBottom: verticalScale(10),
                }}
              >
                Powered by advanced matching algorithms
              </Text>
              <Text
                className="text-gray-500"
                style={{
                  fontSize: scale(14),
                  lineHeight: verticalScale(20),
                  marginBottom: verticalScale(20),
                }}
              >
                Good morning, Test! I've analyzed your preferences and found 0
                compatible matches for today. Your skill level and playing style
                are perfect for afternoon rounds.
              </Text>
            </View>

            <View className="flex-row " style={{ gap: scale(10) }}>
              <TouchableOpacity
                className="flex-1 bg-green-500 rounded-2xl items-center justify-center"
                style={{ padding: scale(15) }}
              >
                <Image
                  source={require("./assets/findMatch.png")}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    marginBottom: verticalScale(5),
                    resizeMode: "contain",
                  }}
                />
                <Text
                  className="text-white font-semibold"
                  style={{ fontSize: scale(16) }}
                >
                  Find Match
                </Text>
                <Text
                  className="text-white/80"
                  style={{
                    fontSize: scale(12),
                    marginTop: verticalScale(2),
                  }}
                >
                  AI-powered matching
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-1 bg-blue-500 items-center rounded-2xl"
                style={{ padding: scale(15) }}
              >
                <Image
                  source={require("./assets/calender.png")}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    marginBottom: verticalScale(5),
                    resizeMode: "contain",
                  }}
                />
                <Text
                  className="text-white font-semibold"
                  style={{
                    fontSize: scale(16),
                    marginBottom: verticalScale(2),
                  }}
                >
                  My Schedule
                </Text>
                <Text
                  className="text-white/80"
                  style={{
                    fontSize: scale(12),
                    marginTop: verticalScale(2),
                  }}
                >
                  Upcoming rounds
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* AI Match Suggestions */}
          <View style={{ marginBottom: verticalScale(30) }}>
            <View
              className="flex-row justify-between items-center"
              style={{
                marginBottom: verticalScale(10),
                paddingLeft: scale(10),
              }}
            >
              <Text
                className="font-semibold text-black"
                style={{ fontSize: scale(20) }}
              >
                AI Match Suggestions
              </Text>
              <TouchableOpacity className="flex-row items-center">
                <Image
                  source={require("./assets/Ai+.png")}
                  style={{
                    width: scale(14),
                    height: scale(14),
                    resizeMode: "contain",
                    paddingRight: scale(30),
                  }}
                />
                <Text
                  className="text-purple-600"
                  style={{ fontSize: scale(12) }}
                >
                  Smart
                </Text>
              </TouchableOpacity>
            </View>

            {matchSuggestions.map((match) => (
              <View
                key={match.id}
                className="bg-white rounded-3xl border border-gray-100"
                style={{
                  padding: scale(15),
                  marginBottom: verticalScale(15),
                  borderWidth: 1,
                }}
              >
                <View className="flex-row justify-between items-center">
                  <Text
                    className="font-semibold text-black"
                    style={{ fontSize: scale(16) }}
                  >
                    {match.date}
                  </Text>
                  <View
                    className="bg-yellow-100 rounded-full"
                    style={{
                      padding: scale(5),
                      paddingHorizontal: scale(15),
                    }}
                  >
                    <Text
                      className="text-yellow-800 font-medium"
                      style={{ fontSize: scale(12) }}
                    >
                      {match.status}
                    </Text>
                  </View>
                </View>

                <View className="flex-row items-center">
                  <View
                    className="flex-row items-center"
                    style={{ gap: scale(4) }}
                  >
                    <Image
                      source={require("./assets/clock-three.png")}
                      style={{
                        width: scale(12),
                        height: scale(12),
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      className="text-gray-700"
                      style={{ fontSize: scale(12) }}
                    >
                      {match.time}
                    </Text>
                  </View>
                  <Text
                    className="text-gray-500"
                    style={{
                      fontSize: scale(30),
                      marginHorizontal: scale(4),
                    }}
                  >
                    •
                  </Text>
                  <View
                    className="flex-row items-center"
                    style={{ gap: scale(4) }}
                  >
                    <Image
                      source={require("./assets/marker.png")}
                      style={{
                        width: scale(12),
                        height: scale(12),
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      className="text-gray-700"
                      style={{ fontSize: scale(12) }}
                    >
                      {match.course}
                    </Text>
                  </View>
                </View>

                <View
                  className="flex-row items-center"
                  style={{
                    marginBottom: verticalScale(15),
                    gap: scale(12),
                  }}
                >
                  <View
                    className="rounded-full bg-gray-200 justify-center items-center"
                    style={{
                      width: scale(40),
                      height: scale(40),
                    }}
                  >
                    <Text
                      className="font-semibold text-gray-700"
                      style={{ fontSize: scale(14) }}
                    >
                      SM
                    </Text>
                  </View>
                  <View className="flex-1">
                    <Text
                      className="font-medium text-black"
                      style={{
                        fontSize: scale(16),
                        marginBottom: verticalScale(2),
                      }}
                    >
                      {match.player}
                    </Text>
                    <Text
                      className="text-gray-500"
                      style={{
                        fontSize: scale(14),
                        paddingTop: scale(5),
                        marginBottom: verticalScale(2),
                      }}
                    >
                      Handicap: {match.handicap}
                    </Text>
                  </View>
                  <View>
                    <Text
                      className="text-purple-600 font-medium"
                      style={{ fontSize: scale(12) }}
                    >
                      {match.compatibility}
                    </Text>
                  </View>
                </View>

                <View
                  className="flex-col"
                  style={{
                    gap: scale(8),
                    marginBottom: verticalScale(15),
                  }}
                >
                  {match.tags.map((tag, index) => (
                    <View key={index} className="flex-row items-center">
                      <Image
                        source={require("./assets/marked.png")}
                        style={{
                          tintColor: index === 0 ? "#A855F7" : "#059669",
                        }}
                      />
                      <Text
                        className={
                          index === 0 ? "text-purple-600" : "text-emerald-600"
                        }
                        style={{
                          fontSize: scale(12),
                          paddingLeft: scale(10),
                        }}
                      >
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>

                <View
                  className="flex-row w-full"
                  style={{ paddingTop: verticalScale(10) }}
                >
                  <Image source={require("./assets/users.png")} />
                  <Text
                    className="text-gray-500"
                    style={{
                      paddingLeft: scale(10),
                      paddingBottom: scale(20),
                    }}
                  >
                    4 Max Players
                  </Text>
                  <TouchableOpacity className="ml-auto">
                    <Text className="text-purple-600">Open to All</Text>
                  </TouchableOpacity>
                </View>

                <View className="flex-row" style={{ gap: scale(10) }}>
                  <TouchableOpacity
                    className="flex-1 bg-emerald-600 rounded-2 items-center rounded-2xl "
                    style={{ padding: scale(12) }}
                  >
                    <Text
                      className="text-white font-semibold text-3xl"
                      style={{ fontSize: scale(16) }}
                    >
                      Accept Match
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-1 rounded-2 border border-gray-300 items-center rounded-2xl"
                    style={{
                      paddingHorizontal: scale(20),
                      paddingVertical: scale(12),
                      borderWidth: 1,
                    }}
                  >
                    <Text
                      className="text-gray-700 font-medium text-3xl"
                      style={{ fontSize: scale(16) }}
                    >
                      View Profile
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          {/* AI Performance Insights */}
          <View style={{ marginBottom: verticalScale(30) }}>
            <View
              className="flex-row justify-between items-center"
              style={{
                marginBottom: verticalScale(10),
                paddingLeft: scale(10),
              }}
            >
              <MaskedView
                maskElement={
                  <Text
                    className="font-semibold text-black"
                    style={{
                      backgroundColor: "transparent",
                      fontSize: scale(20),
                    }}
                  >
                    AI Performance Insights
                  </Text>
                }
              >
                <LinearGradient
                  colors={["#E74AFF", "#4A00B3"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text
                    className="font-semibold"
                    style={{
                      opacity: 0,
                      fontSize: scale(20),
                    }}
                  >
                    AI Performance Insights
                  </Text>
                </LinearGradient>
              </MaskedView>
            </View>

            <View
              className="bg-white rounded-2xl  border-gray-100"
              style={{ padding: scale(10) }}
            >
              <View className="items-end" style={{ marginBottom: scale(10) }}>
                <TouchableOpacity
                  className="rounded-2 border flex-row items-center ml-auto"
                  style={{
                    padding: scale(10),
                    paddingHorizontal: scale(20),
                    borderWidth: scale(0.1),
                  }}
                >
                  <Image
                    source={require("./assets/refresh.png")}
                    style={{
                      width: scale(20),
                      height: scale(20),
                      resizeMode: "contain",
                    }}
                  />
                  <Text
                    className="text-purple-600 border  border-gray-50 p-4 rounded-2xl"
                    style={{ fontSize: scale(14) }}
                  >
                    {" "}
                    Generate
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                className="flex-row items-center"
                style={{
                  gap: scale(10),
                  marginBottom: verticalScale(15),
                }}
              >
                <Image
                  source={require("./assets/performance.png")}
                  style={{
                    width: scale(24),
                    height: scale(24),
                    resizeMode: "contain",
                  }}
                />
                <Text
                  className="font-bold text-black"
                  style={{
                    fontSize: scale(14),
                    marginBottom: verticalScale(15),
                  }}
                >
                  Weekly Performance Insights
                </Text>
              </View>

              <View
                className="flex-row justify-between items-center"
                style={{ marginBottom: verticalScale(15) }}
              >
                <View className="items-center">
                  <Text
                    className="font-bold text-emerald-600"
                    style={{
                      fontSize: scale(30),
                      marginBottom: verticalScale(4),
                    }}
                  >
                    8
                  </Text>
                  <Text
                    className="text-gray-500 text-center"
                    style={{ fontSize: scale(14) }}
                  >
                    Games Played
                  </Text>
                </View>
                <View className="items-center">
                  <Text
                    className="font-bold text-purple-600"
                    style={{
                      fontSize: scale(30),
                      marginBottom: verticalScale(4),
                    }}
                  >
                    92%
                  </Text>
                  <Text
                    className="text-gray-500 text-center"
                    style={{ fontSize: scale(14) }}
                  >
                    AVG Compatibility
                  </Text>
                </View>
              </View>

              <View>
                <View
                  className="flex-row justify-between"
                  style={{ marginBottom: scale(8) }}
                >
                  <Text
                    className="text-gray-500"
                    style={{ fontSize: scale(14) }}
                  >
                    Social Compatibility
                  </Text>
                  <Text
                    className="font-semibold text-emerald-600"
                    style={{ fontSize: scale(14) }}
                  >
                    Excellent
                  </Text>
                </View>
                <Progress.Bar
                  progress={0}
                  width={null}
                  color="#059669"
                  unfilledColor="#E5E5E5"
                  borderWidth={0}
                  style={{
                    height: scale(10),
                    marginBottom: scale(30),
                  }}
                />

                <View
                  className="flex-row justify-between"
                  style={{ marginBottom: scale(8) }}
                >
                  <Text
                    className="text-gray-500"
                    style={{ fontSize: scale(14) }}
                  >
                    Social Compatibility
                  </Text>
                  <Text
                    className="font-semibold text-yellow-500"
                    style={{ fontSize: scale(14) }}
                  >
                    Very Good
                  </Text>
                </View>
                <Progress.Bar
                  progress={0}
                  width={null}
                  color="#FFA500"
                  unfilledColor="#E5E5E5"
                  borderWidth={0}
                  style={{
                    height: scale(10),
                    marginBottom: scale(30),
                  }}
                />
              </View>
            </View>
          </View>
          <View
            className=" items-start rounded-2.5 border border-yellow-200 rounded-2xl"
            style={{
              paddingHorizontal: scale(10),
              paddingVertical: scale(10),
              gap: scale(12),
              borderWidth: scale(1),
            }}
          >
            <View className="flex-row items-center" style={{ gap: 8 }}>
              <Image source={require("./assets/brain.png")} />
              <Text
                className="font-semibold text-black pl-1"
                style={{
                  fontSize: scale(14),
                  marginBottom: verticalScale(4),
                }}
              >
                Improve Your Short Game
              </Text>
              <Text className="pl-1" style={{ fontSize: scale(12) }}>
                (87% confidence)
              </Text>
            </View>
            <View className="">
              <Text
                className="text-gray-500"
                style={{
                  fontSize: scale(13),
                  lineHeight: verticalScale(16),
                }}
              >
                Based on your recent rounds at Royal Dublin and Portmarnock,
                focus on chipping practice. Your approach shots are strong, but
                you could save 2-3 strokes per round with better short game
                technique around the greens.
              </Text>
              <Text className="text-purple-600">technique</Text>
            </View>
          </View>

          <View
            className=" items-start rounded-2.5 border border-yellow-200 rounded-2xl"
            style={{
              marginTop: verticalScale(15),
              paddingHorizontal: scale(10),
              paddingVertical: scale(10),
              gap: scale(12),
              borderWidth: scale(1),
            }}
          >
            <View className="flex-row items-center" style={{ gap: 8 }}>
              <Image source={require("./assets/brain.png")} />
              <Text
                className="font-semibold text-black"
                style={{
                  fontSize: scale(14),
                  marginBottom: verticalScale(4),
                }}
              >
                Improve Your Short Game
              </Text>
              <Text style={{ fontSize: scale(14) }}>(87% confidence)</Text>
            </View>
            <View className="">
              <Text
                className="text-gray-500"
                style={{
                  fontSize: scale(13),
                  lineHeight: verticalScale(16),
                }}
              >
                Based on your recent rounds at Royal Dublin and Portmarnock,
                focus on chipping practice. Your approach shots are strong, but
                you could save 2-3 strokes per round with better short game
                technique around the greens.
              </Text>
              <Text className="text-purple-600">Social</Text>
            </View>
          </View>
          {/* Upcoming Matches */}
          <View className="pt-4" style={{ marginBottom: verticalScale(30) }}>
            <Text
              className="font-semibold text-black"
              style={{
                fontSize: scale(20),
                marginBottom: verticalScale(8),
              }}
            >
              Upcoming Matches
            </Text>
            {upcomingMatches.map((match) => (
              <View
                key={match.id}
                className="bg-white rounded-3xl border border-gray-100"
                style={{
                  padding: scale(15),
                  marginBottom: verticalScale(10),
                  borderWidth: 1,
                }}
              >
                <View style={{ marginBottom: verticalScale(12) }}>
                  <Text
                    className="font-semibold text-black"
                    style={{ fontSize: scale(14) }}
                  >
                    {match.date}
                  </Text>
                  <TouchableOpacity>
                    <Text className="self-end text-emerald-600">Confirm</Text>
                  </TouchableOpacity>
                  <View
                    className="flex-row items-center"
                    style={{ gap: scale(4) }}
                  >
                    <Image
                      source={require("./assets/time.png")}
                      style={{
                        width: scale(16),
                        height: scale(16),
                        resizeMode: "contain",
                      }}
                    />
                    <Text
                      className="text-gray-500"
                      style={{ fontSize: scale(12) }}
                    >
                      {match.time}
                    </Text>
                    <Text
                      className="text-gray-500"
                      style={{
                        fontSize: scale(30),
                        marginHorizontal: scale(4),
                      }}
                    >
                      •
                    </Text>
                    <Text
                      className="text-gray-500"
                      style={{ fontSize: scale(12) }}
                    >
                      {match.course}
                    </Text>
                  </View>

                  <View
                    className="flex-row items-center"
                    style={{
                      gap: 4,
                      paddingTop: scale(20),
                    }}
                  >
                    <Image
                      source={require("./assets/users.png")}
                      style={{
                        width: 16,
                        height: 16,
                        resizeMode: "contain",
                      }}
                    />
                    <Text className="text-gray-500" style={{ fontSize: 14 }}>
                      {match.players} Players Confirmed
                    </Text>
                  </View>
                </View>

                <View className="flex-row" style={{ gap: scale(10) }}>
                  <TouchableOpacity
                    className="flex-1 bg-blue-500 flex-row rounded-2 items-center justify-center rounded-2xl"
                    style={{
                      padding: scale(10),
                      gap: scale(15),
                    }}
                  >
                    <Image source={require("./assets/Frame.png")} />
                    <Text
                      className="text-white"
                      style={{ fontSize: scale(17) }}
                    >
                      Group chat
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="rounded-2 border border-gray-300 items-center rounded-2xl"
                    style={{
                      paddingHorizontal: scale(15),
                      paddingVertical: scale(10),
                      borderWidth: 1,
                    }}
                  >
                    <Text
                      className="text-gray-700 font-medium"
                      style={{ fontSize: scale(17) }}
                    >
                      Details
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
