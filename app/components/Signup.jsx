import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { styled } from 'nativewind';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill in all fields');
      return;
    }
    // Handle signup logic here (e.g., form validation, API call)
    Alert.alert('Signup successful!', `Email: ${email}`);
  };

  return (
    <View className="flex-1 justify-center p-5 bg-white">
      <Text className="text-2xl font-bold mb-6 text-center">Signup</Text>

      <TextInput
        className="h-12 border border-gray-300 rounded-lg px-3 mb-4"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <TextInput
        className="h-12 border border-gray-300 rounded-lg px-3 mb-6"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable
        className="bg-blue-500 py-3 rounded-lg"
        onPress={handleSignup}
      >
        <Text className="text-white text-center font-semibold">Signup</Text>
      </Pressable>
    </View>
  );
}
