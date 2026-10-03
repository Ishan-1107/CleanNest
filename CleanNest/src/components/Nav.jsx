import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();

  const getStyle = (path) => ({
    padding: '8px 16px',
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: location.pathname === path ? '#1d4ed8' : 'transparent',
    border: location.pathname === path ? '1px solid #93c5fd' : '1px solid transparent',
    borderRadius: '3px'
  });

  return (
    <nav style={{ backgroundColor: '#1e3a8a', borderBottom: '3px solid #2563eb', padding: '16px 40px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        <div style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.5px' }}>
          CleanNest Portal
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link to="/" style={getStyle('/')}>Home</Link>
          <Link to="/services" style={getStyle('/services')}>Rate Card & Booking</Link>
          <Link to="/about" style={getStyle('/about')}>Guidelines</Link>
          <Link to="/contact" style={getStyle('/contact')}>Helpdesk</Link>
        </div>
      </div>
    </nav>
  );
}