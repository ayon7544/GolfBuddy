import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';

export default function EditProfileScreen({ navigation }) {
  // State for all form fields
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    bio: '',
    handicap: '',
    playingStyle: '',
    homeClub: '',
    clubCrest: '',
    preferredTime: '',
  });

  const [profileImage, setProfileImage] = useState(null);

  // Function to update form data
  const updateFormField = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Function to handle image selection
  const pickImage = async () => {
    try {
      // Request permission
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Permission Required',
          'Sorry, we need camera roll permissions to change your profile picture.'
        );
        return;
      }

      // Launch image picker
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };

  // Function to take photo with camera
  const takePhoto = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      
      if (status !== 'granted') {
        Alert.alert(
          'Permission Required',
          'Sorry, we need camera permissions to take a photo.'
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'Failed to take photo. Please try again.');
    }
  };

  // Function to show image picker options
  const showImagePickerOptions = () => {
    Alert.alert(
      'Select Profile Picture',
      'Choose how you want to update your profile picture',
      [
        { text: 'Camera', onPress: takePhoto },
        { text: 'Photo Library', onPress: pickImage },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  // Function to handle save
  const handleSave = () => {
    // Validate required fields
    if (!formData.userName.trim()) {
      Alert.alert('Validation Error', 'Please enter your name.');
      return;
    }

    if (!formData.email.trim()) {
      Alert.alert('Validation Error', 'Please enter your email.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    // Here you would typically save the data to your backend or local storage
    console.log('Saving profile data:', { ...formData, profileImage });
    
    Alert.alert(
      'Success', 
      'Profile updated successfully!',
      [{ text: 'OK', onPress: () => navigation.goBack() }]
    );
  };

  // Function to handle cancel
  const handleCancel = () => {
    Alert.alert(
      'Discard Changes',
      'Are you sure you want to discard your changes?',
      [
        { text: 'Keep Editing', style: 'cancel' },
        { text: 'Discard', onPress: () => navigation.goBack() },
      ]
    );
  };

  return (
    <ScrollView
      className="flex-1 bg-white"
      contentContainerStyle={{ paddingBottom: 200 }}
    >
      {/* Header */}
      <View className="bg-[#059669] h-32 w-full justify-end">
        <View className="flex-row items-center pl-4 h-20">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
            <Image
              source={require("./assets/backArrow.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text className="text-white text-xl ml-2">Edit Profile</Text>
        </View>
      </View>

      {/* Profile Image */}
      <View className="bg-[#34D399] h-[13.79%] w-full relative">
        <View className="absolute top-[85%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <Image
            source={
              profileImage 
                ? { uri: profileImage } 
                : require("./assets/image.jpg")
            }
            className="w-24 h-24 rounded-full border-2 border-[#ffffff]"
          />
          <TouchableOpacity 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#949393CF] w-10 h-10 rounded-full flex items-center justify-center"
            onPress={showImagePickerOptions}
          >
            <Image
              source={require("./assets/camera.png")}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Input Fields */}
      <View className="px-4 pt-20">
        {/* User Name */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">User Name *</Text>
          <TextInput
            placeholder="Enter your name"
            value={formData.userName}
            onChangeText={(text) => updateFormField('userName', text)}
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Email */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Email *</Text>
          <TextInput
            placeholder="Enter your email"
            value={formData.email}
            onChangeText={(text) => updateFormField('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Bio */}
        <View className="w-full mb-5 relative">
          <Text className="font-PopinsRegular mb-2">BIO</Text>

          {/* Lines */}
          <View className="absolute inset-0 justify-between">
            {[...Array(8)].map((_, i) => (
              <View
                key={i}
                style={{ height: "12.5%" }}
              />
            ))}
          </View>

          {/* TextInput */}
          <TextInput
            placeholder="Write a short bio"
            value={formData.bio}
            onChangeText={(text) => updateFormField('bio', text)}
            multiline
            maxLength={500}
            className="w-full h-32 border border-[#D5D5D5] rounded-lg px-3 py-2 text-base text-black font-PopinsRegular bg-transparent"
            style={{ textAlignVertical: "top" }}
          />
          <Text className="text-gray-400 text-xs mt-1 text-right">
            {formData.bio.length}/500
          </Text>
        </View>

        {/* Handicap */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Handicap</Text>
          <TextInput
            placeholder="Enter your handicap"
            value={formData.handicap}
            onChangeText={(text) => updateFormField('handicap', text)}
            keyboardType="numeric"
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Playing Style */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Playing Style</Text>
          <TextInput
            placeholder="Enter your playing style"
            value={formData.playingStyle}
            onChangeText={(text) => updateFormField('playingStyle', text)}
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Home Club */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Home Club</Text>
          <TextInput
            placeholder="Enter your home club"
            value={formData.homeClub}
            onChangeText={(text) => updateFormField('homeClub', text)}
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Club Crest */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Club Crest</Text>
          <TextInput
            placeholder="Enter your club crest"
            value={formData.clubCrest}
            onChangeText={(text) => updateFormField('clubCrest', text)}
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Preferred Time */}
        <View className="w-full mb-5">
          <Text className="font-PopinsRegular mb-2">Preferred Time</Text>
          <TextInput
            placeholder="Enter your preferred time"
            value={formData.preferredTime}
            onChangeText={(text) => updateFormField('preferredTime', text)}
            className="w-full h-14 border border-[#D5D5D5] rounded-lg px-3 text-base text-black font-PopinsRegular"
          />
        </View>

        {/* Action Buttons */}
        <View className="flex-row justify-center w-full mb-5 px-4 py-10">
          <TouchableOpacity
            className="bg-[#059669] w-[44%] py-3 rounded-lg mr-2"
            onPress={handleSave}
          >
            <Text className="text-white font-PopinsRegular text-center text-2xl">
              Save
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#960C05] w-[44%] py-3 rounded-lg ml-2"
            onPress={handleCancel}
          >
            <Text className="text-white font-PopinsRegular text-center text-2xl">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}