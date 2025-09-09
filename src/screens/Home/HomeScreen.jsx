import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
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
        "9/18 Hole Sessions",
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
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerTitle}>GolfMatch Club</Text>
              <Text style={styles.headerSubtitle}>AI-Powered Matching</Text>
            </View>
            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconButton}>
                <Image
                  source={require("./assets/3line.png")}
                  style={styles.iconImage}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconButton}>
                <Image
                  source={require("./assets/bell.png")}
                  style={styles.iconImage}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.searchSection}>
            <View style={styles.searchBox}>
              <Image
                source={require("./assets/search.png")}
                style={styles.searchIcon}
              />
              <TextInput
                style={styles.searchInput}
                placeholder="Find Match"
                placeholderTextColor="#3B82F6"
              />
            </View>
          </View>

          <View style={styles.aiSection}>
            <View style={styles.textCard}>
              <Text style={styles.sectionTitle}>AI Golf Assistant</Text>
              <Text style={styles.sectionSubtitle}>
                Powered by advanced matching algorithms
              </Text>
              <Text style={styles.description}>
                Good morning, Test! I've analyzed your preferences and found 0
                compatible matches for today. Your skill level and playing style
                are perfect for afternoon rounds.
              </Text>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.findMatchButton}>
                <Image
                  source={require("./assets/findMatch.png")}
                  style={styles.buttonImage}
                />
                <Text style={styles.findMatchText}>Find Match</Text>
                <Text style={styles.buttonSubtext}>AI-powered matching</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.scheduleButton}>
                <Image
                  source={require("./assets/calender.png")}
                  style={styles.buttonImage}
                />
                <Text style={styles.scheduleText}>My Schedule</Text>
                <Text style={styles.buttonSubtext}>Upcoming rounds</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>AI Match Suggestions</Text>
              <TouchableOpacity style={styles.smartButton}>
                <Image
                  source={require("./assets/Ai+.png")}
                  style={styles.viewAllImage}
                />
                <Text style={styles.smartButtonText}>Smart</Text>
              </TouchableOpacity>
            </View>

            {matchSuggestions.map((match) => (
              <View key={match.id} style={styles.matchCard}>
                <View style={styles.matchHeader}>
                  <Text style={styles.matchDate}>{match.date}</Text>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{match.status}</Text>
                  </View>
                </View>

                <View style={styles.matchInfoRow}>
                  <View style={styles.infoItem}>
                    <Image
                      source={require("./assets/clock-three.png")}
                      style={styles.infoIcon}
                    />
                    <Text style={styles.matchTime}>{match.time}</Text>
                  </View>
                  <Text style={styles.dash}> • </Text>
                  <View style={styles.infoItem}>
                    <Image
                      source={require("./assets/marker.png")}
                      style={styles.infoIcon}
                    />
                    <Text style={styles.courseName}>{match.course}</Text>
                  </View>
                </View>

                <View style={styles.playerInfo}>
                  <View style={styles.playerAvatar}>
                    <Text style={styles.avatarText}>SM</Text>
                  </View>
                  <View style={styles.playerDetails}>
                    <Text style={styles.playerName}>{match.player}</Text>
                    <Text style={styles.playerHandicap}>
                      Handicap: {match.handicap}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.compatibility}>
                      {match.compatibility}
                    </Text>
                  </View>
                </View>

                <View style={styles.tags}>
                  {match.tags.map((tag, index) => (
                    <View
                      key={index}
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={require("./assets/marked.png")}
                        style={[
                          { tintColor: index === 0 ? "#A855F7" : "#059669" }, // same color as text
                        ]}
                      />
                      <Text
                        style={[
                          styles.tagText,
                          {
                            color: index === 0 ? "#A855F7" : "#059669",
                            marginLeft: 5,
                          }, // spacing
                        ]}
                      >
                        {tag}
                      </Text>
                    </View>
                  ))}
                </View>
                <View style={styles.maxPlayers}>
                  <Image source={require("./assets/users.png")} />
                  <Text style={styles.maxPlayersText}>4 Max Players</Text>
                  <TouchableOpacity style={styles.openToAll}>
                    <Text style={{ color: "#A855F7" }}>Open to All</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.matchActions}>
                  <TouchableOpacity style={styles.acceptButton}>
                    <Text style={styles.acceptText}>Accept Match</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.profileButton}>
                    <Text style={styles.profileText}>View Profile</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <MaskedView
                maskElement={
                  <Text
                    style={[
                      styles.sectionTitle,
                      { backgroundColor: "transparent" },
                    ]}
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
                  <Text style={[styles.sectionTitle, { opacity: 0 }]}>
                    AI Performance Insights
                  </Text>
                </LinearGradient>
              </MaskedView>
            </View>

            <View style={styles.insightsCard}>
              <View style={{ alignItems: "flex-end", marginBottom: scale(10) }}>
                <TouchableOpacity style={styles.generateTextContainer}>
                  <Image
                    source={require("./assets/refresh.png")}
                    style={styles.generateIcon}
                  />
                  <Text style={styles.generateTextAI}> Generate</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.insightsHeader}>
                <Image
                  source={require("./assets/performance.png")}
                  style={styles.insightsIcon}
                />
                <Text style={styles.insightsTitle}>
                  Weekly Performance Insights
                </Text>
              </View>

              <View style={styles.statsRow}>
                <View style={styles.statItem}>
                  <Text style={styles.statNumbergames}>8</Text>
                  <Text style={styles.statLabel}>Games Played</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statNumber}>92%</Text>
                  <Text style={styles.statLabel}>AVG Compatibility</Text>
                </View>
              </View>
              <View>
                <View style={styles.row}>
                  <Text style={styles.label}>Social Compatibility</Text>
                  <Text style={[styles.value, { color: "#059568" }]}>
                    Excellent
                  </Text>
                </View>
                <Progress.Bar
                  progress={0}
                  width={null}
                  color="#059669"
                  unfilledColor="#E5E5E5"
                  borderWidth={0}
                  style={styles.bar}
                />

                <View style={styles.row}>
                  <Text style={styles.label}>Social Compatibility</Text>
                  <Text style={[styles.value, { color: "#EDA50A" }]}>
                    Very Good
                  </Text>
                </View>
                <Progress.Bar
                  progress={0}
                  width={null}
                  color="#FFA500"
                  unfilledColor="#E5E5E5"
                  borderWidth={0}
                  style={styles.bar}
                />
              </View>
            </View>
            <View style={styles.insightItem}>
              <View style={styles.insightContent}>
                <View style={styles.insighFirstLine}>
                  <Image
                    source={require("./assets/brain.png")}
                    style={styles.insightIcon}
                  ></Image>
                  <Text style={styles.insightTitle}>
                    Improve Your Short Game
                  </Text>
                  <Text>(87% confidence)</Text>
                </View>
                <Text style={styles.insightText}>
                  Based on your recent rounds at Royal Dublin and Portmarnock,
                  focus on chipping practice. Your approach shots are strong,
                  but you could save 2-3 strokes per round with better short
                  game technique around the greens.
                </Text>
                <Text style={{ color: "#A855F7" }}>technique</Text>
              </View>
            </View>
            <View style={styles.insightItem}>
              <View style={styles.insightContent}>
                <View style={styles.insighFirstLine}>
                  <Image
                    source={require("./assets/brain.png")}
                    style={styles.insightIcon}
                  ></Image>
                  <Text style={styles.insightTitle}>
                    Improve Your Short Game
                  </Text>
                  <Text>(87% confidence)</Text>
                </View>
                <Text style={styles.insightText}>
                  Based on your recent rounds at Royal Dublin and Portmarnock,
                  focus on chipping practice. Your approach shots are strong,
                  but you could save 2-3 strokes per round with better short
                  game technique around the greens.
                </Text>
                <Text style={{ color: "#A855F7" }}>Social</Text>
              </View>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Upcoming Matches</Text>
            {upcomingMatches.map((match) => (
              <View key={match.id} style={styles.upcomingMatchCard}>
                <View style={styles.upcomingMatchInfo}>
                  <Text style={styles.upcomingDate}>{match.date}</Text>
                  <TouchableOpacity>
                    <Text style={{ alignSelf: "flex-end", color: "#059669" }}>
                      Confirm
                    </Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: scale(4),
                    }}
                  >
                    <Image
                      source={require("./assets/time.png")}
                      style={{
                        width: scale(16),
                        height: scale(16),
                        resizeMode: "contain",
                      }}
                    />
                    <Text style={styles.upcomingTime}>{match.time}</Text>
                    <Text style={styles.dashN}>•</Text>
                    <Text style={styles.upcomingCourse}>{match.course}</Text>
                  </View>

                  <View style={styles.upcomingPlayersContainer}>
                    <Image
                      source={require("./assets/users.png")}
                      style={styles.upcomingPlayersIcon}
                    />
                    <Text style={styles.upcomingPlayersText}>
                      {match.players} Players Confirmed
                    </Text>
                  </View>
                </View>
                <View style={styles.upcomingActions}>
                  <TouchableOpacity style={styles.groupChatButton}>
                    <Image source={require("./assets/Frame.png")} />
                    <Text style={styles.groupChatButtonText}>Group chat</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.detailsButton}>
                    <Text style={styles.detailsText}>Details</Text>
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

const styles = StyleSheet.create({
  dashN: {
    fontSize: scale(30),
    color: "#6B7280",
    marginHorizontal: scale(4),
  },
  groupChatButtonText: {
    fontSize: scale(17),
    color: "white",
  },
  insighFirstLine: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  bar: {
    height: scale(10),
    marginBottom: scale(30),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: scale(8),
  },
  label: {
    fontSize: scale(14),
    color: "#666",
  },
  value: {
    fontSize: scale(14),
    fontWeight: "600",
  },
  openToAll: {
    marginLeft: "auto",
  },
  maxPlayersText: {
    paddingLeft: scale(10),
    paddingBottom: scale(20),
    color: "#666",
  },
  maxPlayers: {
    paddingTop: verticalScale(10),
    flexDirection: "row",
    width: "100%",
  },
  generateTextContainer: {
    padding: scale(10),
    paddingHorizontal: scale(20),
    borderRadius: scale(8),
    borderWidth: scale(0.1),
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto", // ← this pushes it to the right
  },

  generateIcon: {
    width: scale(20), // adjust size to match emoji visually
    height: scale(20),
    resizeMode: "contain",
  },
  generateTextAI: {
    color: "#A855F7",
    fontSize: scale(15),
  },
  dash: {
    fontSize: scale(30),
    color: "#6B7280",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    paddingTop: scale(30),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: scale(18),
    fontWeight: "600",
    color: "#000",
  },
  headerSubtitle: {
    fontSize: scale(14),
    color: "#7F7F7F",
    marginTop: verticalScale(4),
  },
  headerIcons: {
    flexDirection: "row",
    gap: scale(10),
  },
  iconButton: {
    padding: scale(5),
  },
  iconImage: {
    width: scale(24),
    height: scale(24),
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    padding: scale(10),
  },
  searchSection: {
    paddingVertical: verticalScale(16),
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scale(50),
    paddingHorizontal: scale(20),
    borderColor: "black",
    borderWidth: scale(0.1),
    height: scale(50),
  },
  searchIcon: {
    width: scale(18),
    height: scale(18),
    marginRight: scale(8),
    resizeMode: "contain",
  },
  searchInput: {
    flex: 1,
    fontSize: scale(15),
    color: "#000",
  },
  aiSection: {
    borderRadius: scale(15),
    marginBottom: verticalScale(30),
  },
  textCard: {
    borderRadius: scale(20),
    padding: scale(15),
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginVertical: verticalScale(15),
  },
  sectionTitle: {
    fontSize: scale(20),
    fontWeight: "600",
    color: "#000",
    marginBottom: verticalScale(8),
  },
  sectionSubtitle: {
    fontSize: scale(14),
    color: "#666",
    marginBottom: verticalScale(10),
    fontStyle: "italic",
  },
  description: {
    fontSize: scale(14),
    color: "#666",
    lineHeight: verticalScale(20),
    marginBottom: verticalScale(20),
  },
  buttonRow: {
    flexDirection: "row",
    gap: scale(10),
  },
  findMatchButton: {
    flex: 1,
    backgroundColor: "#22C35D",
    borderRadius: scale(10),
    alignItems: "center",
    justifyContent: "center",
    padding: scale(15),
  },
  scheduleButton: {
    flex: 1,
    backgroundColor: "#3B82F6",
    padding: scale(15),
    borderRadius: scale(10),
    alignItems: "center",
  },
  findMatchText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: scale(16),
  },
  scheduleText: {
    fontSize: scale(16),
    marginBottom: verticalScale(2),
    color: "#fff",
    fontWeight: "600",
  },
  buttonImage: {
    width: scale(24),
    height: scale(24),
    marginBottom: verticalScale(5),
    resizeMode: "contain",
  },
  buttonSubtext: {
    fontSize: scale(12),
    color: "rgba(255,255,255,0.8)",
    marginTop: verticalScale(2),
  },
  section: {
    marginBottom: verticalScale(30),
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(10),
    paddingLeft: scale(10),
  },
  smartButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  smartButtonText: {
    fontSize: scale(12),
    color: "#8B5CF6",
  },
  viewAllImage: {
    width: scale(14),
    height: scale(14),
    resizeMode: "contain",
    paddingRight: scale(30),
  },
  generateText: {
    color: "#10B981",
    fontSize: scale(14),
  },
  matchCard: {
    backgroundColor: "#fff",
    borderRadius: scale(12),
    padding: scale(15),
    marginBottom: verticalScale(15),
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  matchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  matchDate: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "#000",
  },
  statusBadge: {
    backgroundColor: "#FBF7BB",
    padding: scale(5),
    paddingHorizontal: scale(15),
    borderRadius: scale(100),
  },
  statusText: {
    fontSize: scale(12),
    color: "#5D4913",
    fontWeight: "500",
  },
  matchInfoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(4),
  },
  infoIcon: {
    width: scale(12),
    height: scale(12),
    resizeMode: "contain",
  },
  matchIcon: {
    width: scale(4),
    height: scale(4),
    resizeMode: "contain",
    marginHorizontal: scale(8),
  },
  matchTime: {
    fontSize: scale(12),
    color: "#333",
  },
  courseName: {
    fontSize: scale(12),
    color: "#333",
  },
  playerInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(15),
    gap: scale(12),
  },
  playerAvatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontSize: scale(14),
    fontWeight: "600",
    color: "#374151",
  },
  playerDetails: {
    flex: 1,
  },
  playerName: {
    fontSize: scale(16),
    fontWeight: "500",
    color: "#000",
    marginBottom: verticalScale(2),
  },
  playerHandicap: {
    fontSize: scale(14),
    paddingTop: scale(5),
    color: "#666",
    marginBottom: verticalScale(2),
  },
  compatibility: {
    fontSize: scale(12),
    color: "#8B5CF6",
    fontWeight: "500",
  },
  tags: {
    flexDirection: "column",
    flexWrap: "wrap",
    gap: scale(8),
    marginBottom: verticalScale(15),
  },
  tag: {
    backgroundColor: "#EFF6FF",
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(12),
  },
  tagText: {
    fontSize: scale(12),
    color: "#2563EB",
    paddingLeft: scale(10),
  },
  matchActions: {
    flexDirection: "row",
    gap: scale(10),
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#059568",
    padding: scale(12),
    borderRadius: scale(8),
    alignItems: "center",
  },
  acceptText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: scale(14),
  },
  profileButton: {
    flex: 1,
    paddingHorizontal: scale(20),
    paddingVertical: scale(12),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
  },
  profileText: {
    color: "#374151",
    fontWeight: "500",
    fontSize: scale(14),
  },
  insightsCard: {
    backgroundColor: "#fff",
    borderRadius: scale(15),
    padding: scale(10),
    borderColor: "#f0f0f0",
  },
  insightsTitle: {
    fontSize: scale(14),
    fontWeight: "600",
    color: "#000",
    marginBottom: verticalScale(15),
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(15),
    alignItems: "center",
  },
  statItem: {
    // flex: 1,
    alignItems: "center",
    // backgroundColor: "red",
  },
  statNumber: {
    fontSize: scale(30),
    fontWeight: "700",
    color: "#725CD9",
    marginBottom: verticalScale(4),
  },
  statNumbergames: {
    fontSize: scale(30),
    fontWeight: "700",
    color: "#059669",
    marginBottom: verticalScale(4),
  },
  statLabel: {
    fontSize: scale(14),
    color: "#666",
    textAlign: "center",
  },
  statExcellent: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "#10B981",
    marginBottom: verticalScale(4),
  },
  statVeryGood: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "#F59E0B",
    marginBottom: verticalScale(4),
  },
  insightItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: verticalScale(15),
    paddingHorizontal: scale(10),
    paddingVertical: scale(10),
    gap: scale(12),
    borderRadius: scale(10),
    borderWidth: scale(1),
    borderColor: "rgba(237, 165, 10, 0.3)", // 30% opacity
  },
  insightIcon: {
    // fontSize: scale(50),
    // margin: scale(5),
  },
  insightContent: {
    flex: 1,
  },

  insightsHeader: {
    flexDirection: "row",
    alignItems: "center", // vertically center the image & text
    gap: scale(10), // add space between image and text (or use margin)
    marginBottom: verticalScale(15),
  },
  insightsIcon: {
    width: scale(24), // adjust size as needed
    height: scale(24),
    resizeMode: "contain",
  },
  insightsTitle: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "#000",
  },
  insightTitle: {
    fontSize: scale(14),
    fontWeight: "600",
    color: "#000",
    marginBottom: verticalScale(4),
  },
  insightText: {
    fontSize: scale(13),
    color: "#666",
    lineHeight: verticalScale(16),
  },
  upcomingMatchCard: {
    backgroundColor: "#fff",
    borderRadius: scale(12),
    padding: scale(15),
    marginBottom: verticalScale(10),
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  upcomingMatchInfo: {
    marginBottom: verticalScale(12),
  },
  upcomingDate: {
    fontSize: scale(14),
    fontWeight: "600",
    color: "#000",
  },
  upcomingTime: {
    fontSize: scale(12),
    color: "#666",
  },
  upcomingCourse: {
    fontSize: scale(12),
    color: "#666",
  },
  upcomingPlayers: {
    fontSize: scale(12),

    color: "#666",
  },
  upcomingActions: {
    flexDirection: "row",
    gap: scale(10),
  },
  groupChatButton: {
    flex: 1,
    backgroundColor: "#3B82F6",
    flexDirection: "row",
    padding: scale(10),
    borderRadius: scale(8),
    gap: scale(15),
    alignItems: "center",
    justifyContent: "center",
  },
  groupChatText: {
    color: "#fff",
    fontSize: scale(12),
    fontWeight: "500",
  },
  detailsButton: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
    borderRadius: scale(8),
    borderWidth: 1,
    borderColor: "#D1D5DB",
    alignItems: "center",
  },
  detailsText: {
    color: "#374151",
    fontSize: scale(17),
    fontWeight: "500",
  },
  upcomingPlayersContainer: {
    flexDirection: "row", // horizontal alignment
    alignItems: "center", // vertical alignment
    gap: 4, // optional spacing between image and text
    paddingTop: scale(20),
  },

  upcomingPlayersIcon: {
    width: 16, // adjust to your icon size
    height: 16,
    resizeMode: "contain",
  },

  upcomingPlayersText: {
    fontSize: 14,
    color: "#666", // your desired color
  },
});

export default HomeScreen;
