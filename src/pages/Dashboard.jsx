import React from 'react';
import { Calendar, MapPin, ArrowRight, TrendingUp } from 'lucide-react';
import { mockProperties, mockTransactions, mockUser } from '../data/mockData';
import Badge from '../components/Badge';

export default function Dashboard() {
  const userProperties = mockProperties.filter(p => p.ownerId === mockUser.id);
  const userTransactions = mockTransactions.filter(t => 
    t.fromOwner === mockUser.name || t.toOwner === mockUser.name
  );

  const stats = [
    { label: 'Total Properties', value: userProperties.length, icon: MapPin, color: 'from-blue-600 to-purple-600' },
    { label: 'Verified Properties', value: userProperties.filter(p => p.status === 'verified').length, icon: Badge, color: 'from-green-600 to-blue-600' },
    { label: 'Total Transactions', value: userTransactions.length, icon: ArrowRight, color: 'from-purple-600 to-pink-600' },
    { label: 'Portfolio Value', value: '₹2.4M', icon: TrendingUp, color: 'from-yellow-600 to-orange-600' }
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-300">Welcome back, {mockUser.name}</p>
        <p className="text-sm text-gray-400 font-mono">{mockUser.walletAddress}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 shadow-xl">
              <div className={`bg-gradient-to-r ${stat.color} rounded-xl w-12 h-12 flex items-center justify-center mb-4`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* My Properties */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">My Properties</h2>
          <div className="space-y-4">
            {userProperties.map((property) => (
              <div key={property.id} className="bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{property.nftId}</h3>
                    <p className="text-gray-300 text-sm">{property.location}</p>
                  </div>
                  <Badge status={property.status} />
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Registered {property.registrationDate.toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{property.documents.length} docs</span>
                  </div>
                </div>
              </div>
            ))}
            {userProperties.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No properties registered yet
              </div>
            )}
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white mb-6">Transaction History</h2>
          <div className="space-y-4">
            {userTransactions.map((transaction) => (
              <div key={transaction.id} className="bg-white/5 p-4 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium capitalize">
                    {transaction.action}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    transaction.status === 'completed' 
                      ? 'bg-green-500/20 text-green-300' 
                      : transaction.status === 'pending'
                      ? 'bg-yellow-500/20 text-yellow-300'
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {transaction.status}
                  </span>
                </div>
                <div className="text-sm text-gray-300 mb-2">
                  Property: {mockProperties.find(p => p.id === transaction.propertyId)?.nftId}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{transaction.date.toLocaleDateString()}</span>
                  {transaction.action === 'transfer' && (
                    <span>
                      {transaction.fromOwner} → {transaction.toOwner}
                    </span>
                  )}
                </div>
              </div>
            ))}
            {userTransactions.length === 0 && (
              <div className="text-center py-8 text-gray-400">
                No transactions yet
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="group bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-4 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300">
            <div className="text-white font-medium mb-1">Register New Property</div>
            <div className="text-gray-300 text-sm">Add a new property to blockchain</div>
            <ArrowRight className="w-4 h-4 text-purple-400 mt-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-gradient-to-r from-green-600/20 to-blue-600/20 border border-green-500/30 rounded-xl p-4 hover:from-green-600/30 hover:to-blue-600/30 transition-all duration-300">
            <div className="text-white font-medium mb-1">Transfer Ownership</div>
            <div className="text-gray-300 text-sm">Securely transfer property</div>
            <ArrowRight className="w-4 h-4 text-green-400 mt-2 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="group bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-xl p-4 hover:from-orange-600/30 hover:to-red-600/30 transition-all duration-300">
            <div className="text-white font-medium mb-1">View Map</div>
            <div className="text-gray-300 text-sm">Explore property locations</div>
            <ArrowRight className="w-4 h-4 text-orange-400 mt-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}