import React from 'react';

export default function Badge({ status, className = '' }) {
  const styles = {
    verified: 'bg-green-500/20 text-green-300 border-green-500/30',
    pending: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    disputed: 'bg-red-500/20 text-red-300 border-red-500/30'
  };

  const labels = {
    verified: 'Verified',
    pending: 'Pending',
    disputed: 'Disputed'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${styles[status]} ${className}`}>
      {labels[status]}
    </span>
  );
}