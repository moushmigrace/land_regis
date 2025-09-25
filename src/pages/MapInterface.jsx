import React, { useState } from 'react';
import { mockProperties } from '../data/mockData';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import { MapPin, FileText, Calendar } from 'lucide-react';

export default function MapInterface() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleParcelClick = (property) => {
    setSelectedProperty(property);
    setShowModal(true);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Interactive Land Map</h1>
        <p className="text-gray-300">Click on any land parcel to view property details</p>
      </div>

      {/* Map Container */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
        <div className="relative bg-green-100 rounded-xl h-96 overflow-hidden border-2 border-green-200">
          {/* Map Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300">
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2220%22%20cy%3D%2220%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          {/* Land Parcels */}
          {mockProperties.map((property) => (
            <button
              key={property.id}
              onClick={() => handleParcelClick(property)}
              className="absolute group transform hover:scale-105 transition-all duration-300"
              style={{
                left: `${property.coordinates?.x}px`,
                top: `${property.coordinates?.y}px`,
              }}
            >
              <div className={`w-20 h-16 rounded-lg border-2 shadow-lg cursor-pointer transition-all duration-300 ${
                property.status === 'verified' 
                  ? 'bg-green-500/80 border-green-600 hover:bg-green-400/90' 
                  : property.status === 'pending'
                  ? 'bg-yellow-500/80 border-yellow-600 hover:bg-yellow-400/90'
                  : 'bg-red-500/80 border-red-600 hover:bg-red-400/90'
              }`}>
                <div className="text-xs text-white font-medium p-1 text-center">
                  {property.nftId}
                </div>
              </div>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {property.ownerName}
              </div>
            </button>
          ))}

          {/* Map Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Legend</h4>
            <div className="space-y-1 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-gray-700">Verified</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span className="text-gray-700">Pending</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-gray-700">Disputed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Property Details Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Property Details"
      >
        {selectedProperty && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge status={selectedProperty.status} />
              <span className="text-sm text-gray-300">{selectedProperty.nftId}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{selectedProperty.location}</span>
              </div>
              
              <div className="text-white">
                <strong>Owner:</strong> {selectedProperty.ownerName}
              </div>
              
              <div className="text-white">
                <strong>Address:</strong> {selectedProperty.address}
              </div>

              <div className="flex items-center space-x-2 text-gray-300">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  Registered: {selectedProperty.registrationDate.toLocaleDateString()}
                </span>
              </div>

              <div>
                <div className="flex items-center space-x-2 text-white mb-2">
                  <FileText className="w-4 h-4" />
                  <strong>Documents ({selectedProperty.documents.length})</strong>
                </div>
                <div className="space-y-1">
                  {selectedProperty.documents.map((doc) => (
                    <div key={doc.id} className="text-sm text-gray-300 bg-white/5 p-2 rounded">
                      {doc.name} ({doc.type.toUpperCase()})
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}