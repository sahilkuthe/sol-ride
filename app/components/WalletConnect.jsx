import React from 'react';
import { Button } from 'react-native';

export default function WalletConnect() {
  const connectWallet = async () => {
    console.log('Connecting to Solana wallet');
  };

  return <Button title="Connect Wallet" onPress={connectWallet} />;
}