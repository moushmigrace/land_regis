import React, { useState } from 'react';
import { Upload, FileText, Image, Video, Check } from 'lucide-react';

interface FormData {
  ownerName: string;
  propertyId: string;
  location: string;
  address: string;
  documents: File[];
}

export default function RegisterProperty() {
  const [formData, setFormData] = useState<FormData>({
    ownerName: '',
    propertyId: '',
    location: '',
    address: '',
    documents: []
  });
  const [isDragOver, setIsDragOver] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setFormData({
      ...formData,
      documents: [...formData.documents, ...files]
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData({
        ...formData,
        documents: [...formData.documents, ...files]
      });
    }
  };

  const removeDocument = (index: number) => {
    setFormData({
      ...formData,
      documents: formData.documents.filter((_, i) => i !== index)
    });
  };

  const getFileIcon = (file: File) => {
    if (file.type.includes('pdf')) return FileText;
    if (file.type.includes('image')) return Image;
    if (file.type.includes('video')) return Video;
    return FileText;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        ownerName: '',
        propertyId: '',
        location: '',
        address: '',
        documents: []
      });
    }, 3000);
  };

  return (
    <div className="p-8 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Register Property</h1>
          <p className="text-gray-300">Create a blockchain-backed property certificate</p>
        </div>

        {isSuccess && (
          <div className="mb-8 bg-green-500/20 border border-green-500/30 rounded-2xl p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-500 rounded-full p-2">
                <Check className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-green-300 font-semibold">Property Registered Successfully!</h3>
                <p className="text-green-200 text-sm">NFT minted and ownership recorded on blockchain</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Property Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-white font-medium mb-2">Owner Name</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter owner name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Property ID</label>
                <input
                  type="text"
                  name="propertyId"
                  value={formData.propertyId}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="e.g., BLR-EC-001"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-white font-medium mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="City, State"
                required
              />
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Property Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Complete address"
                required
              />
            </div>
          </div>

          {/* File Upload Section */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-6">Upload Documents</h2>
            
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                isDragOver 
                  ? 'border-purple-400 bg-purple-500/20' 
                  : 'border-white/30 hover:border-white/50'
              }`}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-white mb-2">Drag and drop files here, or click to browse</p>
              <p className="text-gray-400 text-sm mb-4">Supports PDF, Images, and Videos</p>
              
              <input
                type="file"
                multiple
                onChange={handleFileSelect}
                accept=".pdf,.jpg,.jpeg,.png,.mp4,.mov"
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg cursor-pointer hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Choose Files
              </label>
            </div>

            {/* Uploaded Files List */}
            {formData.documents.length > 0 && (
              <div className="mt-6 space-y-2">
                <h3 className="text-white font-medium">Uploaded Documents:</h3>
                {formData.documents.map((file, index) => {
                  const Icon = getFileIcon(file);
                  return (
                    <div key={index} className="flex items-center justify-between bg-white/5 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Icon className="w-5 h-5 text-gray-400" />
                        <span className="text-white text-sm">{file.name}</span>
                        <span className="text-gray-400 text-xs">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeDocument(index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Minting NFT...</span>
              </div>
            ) : (
              'Mint NFT & Register Property'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}