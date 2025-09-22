export interface Property {
  id: string;
  nftId?: string;
  ownerId: string;
  ownerName: string;
  location: string;
  address: string;
  documents: Document[];
  status: 'verified' | 'pending' | 'disputed';
  registrationDate: Date;
  lastUpdated: Date;
  coordinates?: { x: number; y: number };
}

export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'image' | 'video';
  hash: string;
  uploadDate: Date;
}

export interface Transaction {
  id: string;
  propertyId: string;
  fromOwner: string;
  toOwner: string;
  date: Date;
  action: 'registration' | 'transfer' | 'dispute' | 'verification';
  status: 'completed' | 'pending' | 'failed';
}

export interface User {
  id: string;
  name: string;
  walletAddress: string;
  properties: string[];
}

export type Page = 'landing' | 'map' | 'register' | 'transfer' | 'dashboard';