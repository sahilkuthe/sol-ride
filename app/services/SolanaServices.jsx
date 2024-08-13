import { Connection, PublicKey, Transaction } from '@solana/web3.js';

const SOLANA_NETWORK = 'devnet';
const connection = new Connection(SOLANA_NETWORK);

export const requestRide = async (pickup, destination, price) => {
  console.log('Requesting ride on Solana:', { pickup, destination, price });
};

export const connectWallet = async () => {
  console.log('Connecting to Solana wallet');
};