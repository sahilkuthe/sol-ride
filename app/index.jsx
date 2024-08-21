import React from 'react';
import { View, Text } from 'react-native';
import Map from './components/Map';
import RideRequest from './components/RideRequest';
import WalletConnect from './components/WalletConnect';
import Signup from './components/Signup';

export default function Home() {
  return (
    <View className="flex-1">
      {/* <Signup/> */}
      <WalletConnect/>
    </View>
  );
}