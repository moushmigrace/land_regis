import React, { useState } from 'react';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import MapInterface from './pages/MapInterface';
import RegisterProperty from './pages/RegisterProperty';
import TransferOwnership from './pages/TransferOwnership';
import Dashboard from './pages/Dashboard';
import { Page } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onPageChange={setCurrentPage} />;
      case 'map':
        return <MapInterface />;
      case 'register':
        return <RegisterProperty />;
      case 'transfer':
        return <TransferOwnership />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <LandingPage onPageChange={setCurrentPage} />;
    }
  };

  const showSidebar = currentPage !== 'landing';

  return (
    <div className="font-['Inter',sans-serif] antialiased">
      <Layout 
        currentPage={currentPage} 
        onPageChange={setCurrentPage}
        showSidebar={showSidebar}
      >
        {renderPage()}
      </Layout>
    </div>
  );
}

export default App;