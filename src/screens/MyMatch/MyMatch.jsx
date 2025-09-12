import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MyMatch() {
  return (
    <View style={styles.container}>
      <Text>Privacy Policy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
