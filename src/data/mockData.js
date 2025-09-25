export const mockUser = {
  id: '1',
  name: 'Rajesh Kumar',
  walletAddress: '0x742d35Cc6Bb34AC0532a5E7D4527AD4b96Adf3B2',
  properties: ['prop-1', 'prop-2']
};

export const mockProperties = [
  {
    id: 'prop-1',
    nftId: 'NFT-BLR-001',
    ownerId: '1',
    ownerName: 'Rajesh Kumar',
    location: 'Bangalore, Karnataka',
    address: 'Plot 42, Electronic City, Bangalore',
    documents: [
      {
        id: 'doc-1',
        name: 'Sale Deed',
        type: 'pdf',
        hash: 'QmX1a2b3c4d5e6f7g8h9i0j',
        uploadDate: new Date('2024-01-15')
      },
      {
        id: 'doc-2',
        name: 'Property Survey',
        type: 'image',
        hash: 'QmY2b3c4d5e6f7g8h9i0j1k',
        uploadDate: new Date('2024-01-15')
      }
    ],
    status: 'verified',
    registrationDate: new Date('2024-01-15'),
    lastUpdated: new Date('2024-01-15'),
    coordinates: { x: 150, y: 200 }
  },
  {
    id: 'prop-2',
    nftId: 'NFT-MUM-002',
    ownerId: '1',
    ownerName: 'Rajesh Kumar',
    location: 'Mumbai, Maharashtra',
    address: 'Flat 3B, Andheri East, Mumbai',
    documents: [
      {
        id: 'doc-3',
        name: 'Registration Certificate',
        type: 'pdf',
        hash: 'QmZ3c4d5e6f7g8h9i0j1k2l',
        uploadDate: new Date('2024-02-20')
      }
    ],
    status: 'pending',
    registrationDate: new Date('2024-02-20'),
    lastUpdated: new Date('2024-02-20'),
    coordinates: { x: 300, y: 150 }
  },
  {
    id: 'prop-3',
    nftId: 'NFT-DEL-003',
    ownerId: '2',
    ownerName: 'Priya Sharma',
    location: 'Delhi, NCR',
    address: 'House 15, Dwarka Sector 10, Delhi',
    documents: [
      {
        id: 'doc-4',
        name: 'Property Papers',
        type: 'pdf',
        hash: 'QmA4d5e6f7g8h9i0j1k2l3m',
        uploadDate: new Date('2024-01-10')
      }
    ],
    status: 'disputed',
    registrationDate: new Date('2024-01-10'),
    lastUpdated: new Date('2024-01-10'),
    coordinates: { x: 450, y: 100 }
  }
];

export const mockTransactions = [
  {
    id: 'tx-1',
    propertyId: 'prop-1',
    fromOwner: 'System',
    toOwner: 'Rajesh Kumar',
    date: new Date('2024-01-15'),
    action: 'registration',
    status: 'completed'
  },
  {
    id: 'tx-2',
    propertyId: 'prop-2',
    fromOwner: 'System',
    toOwner: 'Rajesh Kumar',
    date: new Date('2024-02-20'),
    action: 'registration',
    status: 'pending'
  },
  {
    id: 'tx-3',
    propertyId: 'prop-1',
    fromOwner: 'Rajesh Kumar',
    toOwner: 'Amit Patel',
    date: new Date('2024-03-01'),
    action: 'transfer',
    status: 'pending'
  }
];