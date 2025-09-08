import React, { useState } from "react";
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
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import {
  scale,
  verticalScale,
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
} from "../../utils/responsive";

const HomeScreen = () => {
  const matchSuggestions = [
    {
      id: 1,
      date: "Sunday, Jun 8",
      time: "09:00 AM-12:00 PM",
      course: "Royal Dublin Golf Club",
      player: "Sean Murphy",
      handicap: "18+ Advanced",
      status: "Pending",
      tags: [
        "AI Compatibility Analysis",
        "9/18 Hole Sessions",
        "Playing style similarities",
      ],
      compatibility: "THIS MATCH",
    },
    {
      id: 2,
      date: "Sunday, Jun 8",
      time: "10:00 AM-01:00 PM",
      course: "Royal Dublin Golf Club",
      player: "Sean Murphy",
      handicap: "18+ Advanced",
      status: "Pending",
      tags: [
        "AI Compatibility Analysis",
        "9/18 Hole Sessions",
        "Playing style similarities",
      ],
      compatibility: "THIS MATCH",
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
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>GolfMatch Club</Text>
          <Text style={styles.headerSubtitle}>Find your next golf buddy</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("./assets/3line.png")} // your image path
              style={styles.iconImage}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={require("./assets/bell.png")} // your image path
              style={styles.iconImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search and AI Assistant Section */}
  <View style={styles.searchSection}>
  <View style={styles.searchBox}>
    <Image
      source={require("./assets/search.png")} // Replace with your image path
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
          <Text style={styles.sectionTitle}>AI Golf Assistant</Text>
          <Text style={styles.sectionSubtitle}>
            Powered by advanced matching algorithms
          </Text>
          <Text style={styles.description}>
            Book tee-ing with like-minded golfers in your area and beyond, get
            personal coaching tips and insights. Experience golf like never
            before today. Your skill level progresses with each shot.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.findMatchButton}>
              <Text style={styles.findMatchText}>Find Match</Text>
              <Text style={styles.buttonSubtext}>Advanced matching</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.scheduleButton}>
              <Text style={styles.scheduleText}>📅</Text>
              <Text style={styles.scheduleButtonText}>My Schedule</Text>
              <Text style={styles.buttonSubtext}>Upcoming sessions</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Match Suggestions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Match Suggestions</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
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

              <Text style={styles.matchTime}>{match.time}</Text>
              <Text style={styles.courseName}>{match.course}</Text>

              <View style={styles.playerInfo}>
                <View style={styles.playerAvatar}>
                  <Text style={styles.avatarText}>SM</Text>
                </View>
                <View style={styles.playerDetails}>
                  <Text style={styles.playerName}>{match.player}</Text>
                  <Text style={styles.playerHandicap}>
                    Handicap: {match.handicap}
                  </Text>
                  <Text style={styles.compatibility}>
                    {match.compatibility}
                  </Text>
                </View>
              </View>

              <View style={styles.tags}>
                {match.tags.map((tag, index) => (
                  <View key={index} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
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

        {/* Performance Insights */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Performance Insights</Text>
            <TouchableOpacity>
              <Text style={styles.generateText}>⚡ Generate</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.insightsCard}>
            <Text style={styles.insightsTitle}>
              Weekly Performance Insights
            </Text>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>8</Text>
                <Text style={styles.statLabel}>Games Played</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>92%</Text>
                <Text style={styles.statLabel}>AVG Compatibility</Text>
              </View>
            </View>

            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statExcellent}>Excellent</Text>
                <Text style={styles.statLabel}>Social Compatibility</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statVeryGood}>Very Good</Text>
                <Text style={styles.statLabel}>Social Compatibility</Text>
              </View>
            </View>

            <View style={styles.insightItem}>
              <Text style={styles.insightIcon}>🎯</Text>
              <View style={styles.insightContent}>
                <Text style={styles.insightTitle}>
                  Improve Your Short Game (87% confidence)
                </Text>
                <Text style={styles.insightText}>
                  Based on your recent rounds at Royal Dublin Golf Club, your
                  short game is the area with most potential...
                </Text>
              </View>
            </View>

            <View style={styles.insightItem}>
              <Text style={styles.insightIcon}>🏌️</Text>
              <View style={styles.insightContent}>
                <Text style={styles.insightTitle}>
                  Improve Your Short Game (87% confidence)
                </Text>
                <Text style={styles.insightText}>
                  Based on your recent rounds at Royal Dublin Golf Club and
                  performance, focus on chipping practice...
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Upcoming Matches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Matches</Text>

          {upcomingMatches.map((match) => (
            <View key={match.id} style={styles.upcomingMatchCard}>
              <View style={styles.upcomingMatchInfo}>
                <Text style={styles.upcomingDate}>{match.date}</Text>
                <Text style={styles.upcomingTime}>{match.time}</Text>
                <Text style={styles.upcomingCourse}>{match.course}</Text>
                <Text style={styles.upcomingPlayers}>
                  👥 {match.players} Players Confirmed
                </Text>
              </View>

              <View style={styles.upcomingActions}>
                <TouchableOpacity style={styles.groupChatButton}>
                  <Text style={styles.groupChatText}>👥 Group Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.detailsText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: scale(20),
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
    color: "black",
  },
  iconButton: {
    padding: scale(5),
  },
  icon: {
    fontSize: scale(18),
  },
  content: {
    flex: 1,
    padding: scale(20),
  },
  searchSection: {
    paddingVertical: verticalScale(16),
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: scale(50),
    paddingHorizontal:scale(20),
    borderColor: "black",
    borderWidth: scale(0.5),
    height: scale(50),
  },

  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },

  aiSection: {
    backgroundColor: "#f8f9fa",
    padding: scale(20),
    borderRadius: scale(15),
    marginBottom: verticalScale(30),
  },
  sectionTitle: {
    fontSize: scale(18),
    fontWeight: "600",
    color: "#000",
    marginBottom: verticalScale(5),
  },
  sectionSubtitle: {
    fontSize: scale(14),
    color: "#666",
    marginBottom: verticalScale(10),
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
    backgroundColor: "#10B981",
    padding: scale(15),
    borderRadius: scale(10),
    alignItems: "center",
  },
  findMatchText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: scale(16),
  },
  iconImage: {
    width: scale(24),
    height: scale(24),
    resizeMode: "contain",
    color: "black",
  },
  scheduleButton: {
    flex: 1,
    backgroundColor: "#3B82F6",
    padding: scale(15),
    borderRadius: scale(10),
    alignItems: "center",
  },
  scheduleText: {
    fontSize: scale(16),
    marginBottom: verticalScale(2),
  },
  scheduleButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: scale(14),
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
    marginBottom: verticalScale(15),
  },
  viewAllText: {
    color: "#3B82F6",
    fontSize: scale(14),
  },
  generateText: {
    color: "#10B981",
    fontSize: scale(14),
  },
  matchCard: {
    backgroundColor: "#fff",
    borderRadius: scale(15),
    padding: scale(20),
    marginBottom: verticalScale(15),
    borderWidth: 1,
    borderColor: "#f0f0f0",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: verticalScale(2) },
    shadowOpacity: 0.05,
    shadowRadius: scale(8),
    elevation: 2,
  },
  matchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  matchDate: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "#000",
  },
  statusBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: scale(8),
    paddingVertical: verticalScale(4),
    borderRadius: scale(12),
  },
  statusText: {
    fontSize: scale(12),
    color: "#D97706",
    fontWeight: "500",
  },
  matchTime: {
    fontSize: scale(14),
    color: "#666",
    marginBottom: verticalScale(2),
  },
  courseName: {
    fontSize: scale(14),
    color: "#666",
    marginBottom: verticalScale(15),
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
    color: "#666",
    marginBottom: verticalScale(2),
  },
  compatibility: {
    fontSize: scale(12),
    color: "#8B5CF6",
    fontWeight: "500",
  },
  tags: {
    flexDirection: "row",
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
  },
  matchActions: {
    flexDirection: "row",
    gap: scale(10),
  },
  acceptButton: {
    flex: 1,
    backgroundColor: "#10B981",
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
    padding: scale(20),
    borderWidth: 1,
    borderColor: "#f0f0f0",
  },
  insightsTitle: {
    fontSize: scale(16),
    fontWeight: "600",
    color: "#000",
    marginBottom: verticalScale(15),
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(15),
  },
  statItem: {
    flex: 1,
    alignItems: "center",
  },
  statNumber: {
    fontSize: scale(24),
    fontWeight: "700",
    color: "#000",
    marginBottom: verticalScale(4),
  },
  statLabel: {
    fontSize: scale(12),
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
    gap: scale(12),
  },
  insightIcon: {
    fontSize: scale(20),
  },
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: scale(14),
    fontWeight: "600",
    color: "#000",
    marginBottom: verticalScale(4),
  },
  insightText: {
    fontSize: scale(12),
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
    marginBottom: verticalScale(2),
  },
  upcomingTime: {
    fontSize: scale(12),
    color: "#666",
    marginBottom: verticalScale(2),
  },
  upcomingCourse: {
    fontSize: scale(12),
    color: "#666",
    marginBottom: verticalScale(4),
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
    padding: scale(10),
    borderRadius: scale(8),
    alignItems: "center",
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
    fontSize: scale(12),
    fontWeight: "500",
  },
});

export default HomeScreen;
