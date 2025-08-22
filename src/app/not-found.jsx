"use client";
import React from 'react';

export default function NotFound() {
  return (
    <div style={{ background: '#18181b', minHeight: '100vh', color: '#f3f4f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
      <img src="/globe.svg" alt="Not Found" style={{ width: '120px', height: '120px', marginBottom: '32px', filter: 'invert(90%)' }} />
      <h1 style={{ color: '#e0e7ff', fontSize: '2.5rem', marginBottom: '16px' }}>404 - Page Not Found</h1>
      <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '24px', textAlign: 'center' }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a href="/" style={{ color: '#6366f1', textDecoration: 'underline', fontWeight: 'bold', fontSize: '1rem' }}>Go to Home</a>
    </div>
  );
}
