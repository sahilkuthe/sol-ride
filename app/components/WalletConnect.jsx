import React from 'react';
import { Button } from 'react-native';
import "node-libs-expo/globals"
import "react-native-url-polyfill/auto"
import "react-native-get-random-values"
import { useSDK } from "@metamask/sdk-react"
const { connect, disconnect, account, chainId, ethereum } = useSDK()

export default function WalletConnect() {
  const connectWallet = async () => {
    try {
      await connect()
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }
  useEffect(() => {
    // Use the account and chainId returned by useSDK.
    if (account && chainId) {
      // Handle account and network changes.
    }
  }, [account, chainId])
  
  const disconnectWallet = async () => {
    await disconnect()
  }

  return <Button title="Connect Wallet" onPress={connectWallet} />;
}