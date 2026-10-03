import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '80vh', padding: '40px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #60a5fa', padding: '20px', borderRadius: '4px', marginBottom: '24px', color: '#1e40af', fontSize: '1.1rem' }}>
          <b style={{ marginRight: '8px' }}>Notice:</b> 
          Service slots are open for domestic air conditioners, washing appliances, and water filtration units.
        </div>

        <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '32px', boxSizing: 'border-box' }}>
          <h2 style={{ margin: '0 0 16px 0', color: '#0f172a', fontSize: '1.8rem' }}>
            Household Appliance Service Management System
          </h2>
          <p style={{ color: '#334155', fontSize: '1.1rem', lineHeight: '1.6', margin: '0 0 24px 0' }}>
            Welcome to the CleanNest maintenance portal. This utility provides standard fixed-rate pricing, slot reservations, and technician dispatch tracking for residential electronics in the district.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '30px', fontSize: '1.05rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', width: '250px', color: '#475569' }}>Supported Categories</td>
                <td style={{ padding: '12px', color: '#1e293b' }}>Split AC, Window AC, Front Load, Top Load, Multi-stage RO</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#475569' }}>Service Coverage</td>
                <td style={{ padding: '12px', color: '#1e293b' }}>Thane, Mulund, Dombivli, Kalyan</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: 'bold', color: '#475569' }}>Operating Hours</td>
                <td style={{ padding: '12px', color: '#1e293b' }}>09:00 AM to 07:00 PM (Monday - Saturday)</td>
              </tr>
            </tbody>
          </table>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Link to="/services" style={{ textDecoration: 'none', backgroundColor: '#2563eb', color: '#ffffff', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem' }}>
              Open Service Directory
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', backgroundColor: '#e2e8f0', color: '#1e293b', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1rem' }}>
              Contact Coordinator
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}