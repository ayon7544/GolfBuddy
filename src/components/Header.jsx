import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { scale, verticalScale } from "../utils/responsive";
export default function Header({ title, subtitle }) {
  const insets = useSafeAreaInsets();

  return (

      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(20),
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
    backgroundColor:"#059669",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    marginTop: 2,
  },
});
