import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { scale, verticalScale } from "../../utils/responsive";
import Header from "../../components/Header";

const friendsData = [
  {
    id: "1",
    name: "Marvin McKinney",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "2",
    name: "Floyd Miles",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d",
  },
  {
    id: "3",
    name: "Leslie Alexander",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
  },
  {
    id: "4",
    name: "Jenny Wilson",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
  },
  {
    id: "5",
    name: "Wade Warren",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
  },
  {
    id: "s",
    name: "Marvin McKinney",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "d",
    name: "Floyd Miles",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d",
  },
  {
    id: "f",
    name: "Leslie Alexander",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
  },
  {
    id: "a",
    name: "Jenny Wilson",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
  },
  {
    id: "r",
    name: "Wade Warren",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
  },
  {
    id: "6",
    name: "Marvin McKinney",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    id: "7",
    name: "Floyd Miles",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026702d",
  },
  {
    id: "8",
    name: "Leslie Alexander",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026703d",
  },
  {
    id: "9",
    name: "Jenny Wilson",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
  },
  {
    id: "10",
    name: "Wade Warren",
    handicap: "8.0",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026706d",
  },
];

const requestData = [
  {
    id: "r1",
    name: "Alice Johnson",
    handicap: "7.5",
    status: "Intermediate",
    avatar: "https://i.pravatar.cc/150?u=r1",
  },
  {
    id: "r2",
    name: "Bob Smith",
    handicap: "8.2",
    status: "Advanced",
    avatar: "https://i.pravatar.cc/150?u=r2",
  },
  {
    id: "r3",
    name: "Charlie Brown",
    handicap: "6.8",
    status: "Beginner",
    avatar: "https://i.pravatar.cc/150?u=r3",
  },
];

const FriendsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("friends");

  const FriendCard = ({ friend }) => (
    <View style={styles.friendCard}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: friend.avatar }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{friend.name}</Text>
        <Text style={styles.details}>
          Handicap: {friend.handicap} • {friend.status}
        </Text>
      </View>
      <TouchableOpacity style={styles.chatButton}>
        <Text style={styles.chatButtonText}>Chat</Text>
      </TouchableOpacity>
    </View>
  );
  const RequestCard = ({ request }) => (
    <View style={styles.friendCard}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: request.avatar }} style={styles.avatar} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{request.name}</Text>
        <Text style={styles.details}>
          Handicap: {request.handicap} • {request.status}
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.chatButton, { backgroundColor: "#059669" }]}
      >
        <Text style={styles.chatButtonText}>Accept</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <Header
        title="Friends"
        subtitle="Connect with golf partners"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === "friends" && styles.activeTab]}
            onPress={() => setActiveTab("friends")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "friends" && styles.activeTabText,
              ]}
            >
              Friends ({friendsData.length})
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === "requests" && styles.activeTab]}
            onPress={() => setActiveTab("requests")}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === "requests" && styles.activeTabText,
              ]}
            >
              Requests ({requestData.length})
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {activeTab === "friends"
            ? friendsData.map((friend) => (
                <FriendCard key={friend.id} friend={friend} />
              ))
            : requestData.map((req) => (
                <RequestCard key={req.id} request={req} />
              ))}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(15),
    backgroundColor: "#f5f5f5",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: scale(10),
    padding: scale(10),
    marginBottom: verticalScale(10),
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: verticalScale(5),
    borderRadius: scale(10),
    borderWidth: scale(0.5),
    borderColor: "black",
    margin: scale(5),
  },
  activeTab: {
    backgroundColor: "#111827",
  },
  tabText: {
    fontSize: scale(16),
    fontWeight: "bold",
    color: "#111827",
  },
  activeTabText: {
    color: "#fff",
  },
  scrollView: {
    flex: 1,
  },
  friendCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: scale(10),
    padding: scale(15),
    marginBottom: verticalScale(10),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatarContainer: {
    width: scale(50),
    height: verticalScale(50),
    borderRadius: scale(25),
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  infoContainer: {
    flex: 1,
    marginLeft: scale(15),
  },
  name: {
    fontSize: scale(18),
    fontWeight: "600",
    color: "#333",
  },
  details: {
    fontSize: scale(14),
    color: "#666",
  },
  chatButton: {
    backgroundColor: "#3B82F6",
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(18),
    borderRadius: scale(10),
  },
  chatButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: scale(16),
  },
});

export default FriendsScreen;
