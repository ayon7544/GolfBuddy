import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { scale, verticalScale } from "../../utils/responsive";

export default function SignUp({ navigation }) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  // Validate inputs (for enabling/disabling button only)
  useEffect(() => {
    const newErrors = {};

    if (!userName.trim()) newErrors.userName = "User name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!confirmPassword) newErrors.confirmPassword = "Confirm your password";
    else if (confirmPassword !== password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [userName, email, password, confirmPassword]);

  const handleSignUp = () => {
    if (isValid) {
      console.log("Sign Up Data:", { userName, email, password });
      navigation.navigate("Home"); // Navigate to Home or main screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image source={require("./assets/profile.png")} style={styles.image} />

      {/* Welcome Text */}
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.subtitle}>Create your GolfMatch Club account</Text>

      {/* UserName Input */}
      <Text style={styles.label}>User Name</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="person-outline"
          size={scale(20)}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={userName}
          onChangeText={setUserName}
        />
      </View>

      {/* Email Input */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="mail-outline"
          size={scale(20)}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={scale(20)}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* Confirm Password Input */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <Ionicons
          name="lock-closed-outline"
          size={scale(20)}
          color="#888"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[
          styles.signUpButton,
          { backgroundColor: isValid ? "#059266" : "#ccc" },
        ]}
        onPress={handleSignUp}
        disabled={!isValid}
      >
        <Text style={styles.signUpTextButton}>Sign Up</Text>
      </TouchableOpacity>

      {/* Login Link */}
      <Text style={styles.footerText}>
        Already have an account?{" "}
        <Text
          style={styles.signInText}
          onPress={() => navigation.navigate("SignIn")}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: scale(20),
    paddingTop: verticalScale(70),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  headerTitle: {
    fontSize: scale(18),
    fontWeight: "bold",
    marginLeft: scale(10),
  },
  image: {
    alignSelf: "center",
    marginBottom: verticalScale(20),
    marginTop: verticalScale(30),
    resizeMode: "contain",
  },
  title: {
    fontSize: scale(22),
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: verticalScale(5),
  },
  subtitle: {
    fontSize: scale(14),
    color: "#777",
    textAlign: "center",
    marginBottom: verticalScale(20),
  },
  label: {
    fontSize: scale(14),
    fontWeight: "500",
    marginBottom: verticalScale(8),
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: scale(8),
    paddingHorizontal: scale(10),
    marginBottom: verticalScale(15),
    height: verticalScale(50),
  },
  icon: {
    marginRight: scale(8),
  },
  input: {
    flex: 1,
    fontSize: scale(14),
  },
  signUpButton: {
    paddingVertical: verticalScale(14),
    borderRadius: scale(8),
    alignItems: "center",
    marginVertical: verticalScale(20),
  },
  signUpTextButton: {
    color: "#fff",
    fontSize: scale(16),
    fontWeight: "600",
  },
  footerText: {
    textAlign: "center",
    fontSize: scale(14),
    color: "#333",
  },
  signInText: {
    color: "#21BF5B",
    fontWeight: "600",
  },
});
