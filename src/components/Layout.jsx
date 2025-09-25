import React from 'react';
import { Home, MapPin, Plus, ArrowRightLeft, LayoutDashboard, LogOut } from 'lucide-react';

export default function Layout({ children, currentPage, onPageChange, showSidebar = false }) {
  const menuItems = [
    { id: 'landing', label: 'Home', icon: Home },
    { id: 'map', label: 'Map View', icon: MapPin },
    { id: 'register', label: 'Register Property', icon: Plus },
    { id: 'transfer', label: 'Transfer Ownership', icon: ArrowRightLeft },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  ];

  if (!showSidebar) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex">
      {/* Sidebar */}
      <div className="w-64 bg-black/20 backdrop-blur-xl border-r border-white/10">
        <div className="p-6">
          <h2 className="text-white text-xl font-bold mb-8">Land Registry</h2>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 mt-8">
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}