import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function RideRequest() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleRequest = () => {
    console.log('Requesting ride from', pickup, 'to', destination);
    
  };

  return (
    <View className="p-4">
      <TextInput
        className="border border-gray-300 p-2 mb-2 rounded"
        placeholder="Pickup Location"
        value={pickup}
        onChangeText={setPickup}
      />
      <TextInput
        className="border border-gray-300 p-2 mb-2 rounded"
        placeholder="Destination"
        value={destination}
        onChangeText={setDestination}
      />
      <Button title="Request Ride" onPress={handleRequest} />
    </View>
  );
}