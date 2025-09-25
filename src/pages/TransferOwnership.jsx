import React, { useState } from 'react';
import { ArrowRight, Check, Wallet, Lock } from 'lucide-react';
import { mockProperties } from '../data/mockData';

export default function TransferOwnership() {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [buyerWallet, setBuyerWallet] = useState('');
  const [transferStep, setTransferStep] = useState('select');
  const [ownerSigned, setOwnerSigned] = useState(false);
  const [buyerSigned, setBuyerSigned] = useState(false);

  const currentOwner = '0x742d35Cc6Bb34AC0532a5E7D4527AD4b96Adf3B2';
  const selectedProp = mockProperties.find(p => p.id === selectedProperty);

  const handleInitiateTransfer = () => {
    setTransferStep('confirm');
  };

  const handleOwnerSign = async () => {
    setTransferStep('signing');
    // Simulate signing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setOwnerSigned(true);
  };

  const handleBuyerSign = async () => {
    // Simulate signing
    await new Promise(resolve => setTimeout(resolve, 1500));
    setBuyerSigned(true);
    setTransferStep('success');
  };

  const resetTransfer = () => {
    setSelectedProperty('');
    setBuyerWallet('');
    setTransferStep('select');
    setOwnerSigned(false);
    setBuyerSigned(false);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Transfer Ownership</h1>
          <p className="text-gray-300">Securely transfer property ownership using blockchain signatures</p>
        </div>

        {transferStep === 'select' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-6">Select Property to Transfer</h2>
              
              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Your Properties</label>
                <select
                  value={selectedProperty}
                  onChange={(e) => setSelectedProperty(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a property</option>
                  {mockProperties.filter(p => p.ownerId === '1').map(property => (
                    <option key={property.id} value={property.id} className="bg-gray-800">
                      {property.nftId} - {property.location}
                    </option>
                  ))}
                </select>
              </div>

              {selectedProperty && selectedProp && (
                <div className="mb-6 bg-white/5 p-4 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Property Details</h3>
                  <p className="text-gray-300 text-sm">NFT ID: {selectedProp.nftId}</p>
                  <p className="text-gray-300 text-sm">Location: {selectedProp.location}</p>
                  <p className="text-gray-300 text-sm">Address: {selectedProp.address}</p>
                </div>
              )}

              <div className="mb-6">
                <label className="block text-white font-medium mb-2">Buyer Wallet Address</label>
                <input
                  type="text"
                  value={buyerWallet}
                  onChange={(e) => setBuyerWallet(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="0x..."
                />
              </div>

              <button
                onClick={handleInitiateTransfer}
                disabled={!selectedProperty || !buyerWallet}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                Initiate Transfer
              </button>
            </div>
          </div>
        )}

        {transferStep === 'confirm' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-6">Confirm Transfer Details</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Wallet className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Current Owner</span>
                  </div>
                  <span className="text-gray-300 text-sm font-mono">{currentOwner.slice(0, 6)}...{currentOwner.slice(-4)}</span>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-purple-400" />
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Wallet className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">New Owner</span>
                  </div>
                  <span className="text-gray-300 text-sm font-mono">{buyerWallet.slice(0, 6)}...{buyerWallet.slice(-4)}</span>
                </div>
              </div>

              {selectedProp && (
                <div className="mb-8 p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-lg">
                  <h3 className="text-white font-medium mb-2">Property: {selectedProp.nftId}</h3>
                  <p className="text-gray-300 text-sm">{selectedProp.location}</p>
                </div>
              )}

              <div className="flex space-x-4">
                <button
                  onClick={() => setTransferStep('select')}
                  className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Back
                </button>
                <button
                  onClick={handleOwnerSign}
                  className="flex-1 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Sign as Owner
                </button>
              </div>
            </div>
          </div>
        )}

        {transferStep === 'signing' && (
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-xl font-bold text-white mb-6">Signature Process</h2>
              
              <div className="space-y-4">
                <div className={`flex items-center justify-between p-4 rounded-lg ${
                  ownerSigned ? 'bg-green-500/20 border border-green-500/30' : 'bg-white/5'
                }`}>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-purple-400" />
                    <span className="text-white font-medium">Owner Signature</span>
                  </div>
                  {ownerSigned ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <div className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full animate-spin"></div>
                  )}
                </div>

                <div className={`flex items-center justify-between p-4 rounded-lg ${
                  buyerSigned ? 'bg-green-500/20 border border-green-500/30' : 'bg-white/5'
                }`}>
                  <div className="flex items-center space-x-3">
                    <Lock className="w-5 h-5 text-blue-400" />
                    <span className="text-white font-medium">Buyer Signature</span>
                  </div>
                  {buyerSigned ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : ownerSigned ? (
                    <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <div className="w-5 h-5 bg-gray-600 rounded-full"></div>
                  )}
                </div>
              </div>

              {ownerSigned && !buyerSigned && (
                <div className="mt-6">
                  <button
                    onClick={handleBuyerSign}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Sign as Buyer
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {transferStep === 'success' && (
          <div className="space-y-6">
            <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <div className="bg-green-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-green-300 mb-2">Ownership Transferred Securely!</h2>
              <p className="text-green-200 mb-6">The property has been successfully transferred to the new owner.</p>
              
              <div className="bg-white/10 p-4 rounded-lg mb-6">
                <p className="text-white text-sm">Transaction Hash:</p>
                <p className="text-gray-300 text-xs font-mono">0xabcd1234567890abcd1234567890abcd12345678</p>
              </div>

              <button
                onClick={resetTransfer}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Transfer Another Property
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}