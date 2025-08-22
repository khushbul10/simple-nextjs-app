"use client";
import React from 'react';

export default function Loading() {
  return (
    <div style={{ background: '#18181b', minHeight: '100vh', color: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: '32px', animation: 'spin 1.2s linear infinite' }}>
        <circle cx="40" cy="40" r="36" stroke="#6366f1" strokeWidth="8" strokeDasharray="56 56" />
      </svg>
      <h2 style={{ color: '#e0e7ff', fontSize: '1.5rem', marginBottom: '8px' }}>Loading...</h2>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        svg { display: block; }
      `}</style>
    </div>
  );
}
