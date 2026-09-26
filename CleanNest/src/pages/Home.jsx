import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '80vh', padding: '30px 16px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        {/* Notice Banner */}
        <div style={{ backgroundColor: '#eff6ff', border: '1px solid #60a5fa', padding: '16px', borderRadius: '4px', marginBottom: '20px', color: '#1e40af' }}>
          <b>Notice:</b> Service slots are open for domestic air conditioners, washing appliances, and water filtration units.
        </div>

        {/* Main Content Box */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', padding: '24px' }}>
          <h2 style={{ margin: '0 0 12px 0', color: '#0f172a', fontSize: '1.4rem' }}>
            Household Appliance Service Management System
          </h2>
          <p style={{ color: '#334155', fontSize: '0.95rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>
            Welcome to the CleanNest maintenance portal. This utility provides standard fixed-rate pricing, slot reservations, and technician dispatch tracking for residential electronics in the district.
          </p>

          <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px', fontSize: '0.9rem' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '8px', fontWeight: 'bold', width: '220px', color: '#475569' }}>Supported Categories</td>
                <td style={{ padding: '8px', color: '#1e293b' }}>Split AC, Window AC, Front Load, Top Load, Multi-stage RO</td>
              </tr>
              <tr style={{ borderBottom: '1px solid #e2e8f0' }}>
                <td style={{ padding: '8px', fontWeight: 'bold', color: '#475569' }}>Service Coverage</td>
                <td style={{ padding: '8px', color: '#1e293b' }}>Thane, Mulund, Dombivli, Kalyan</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', fontWeight: 'bold', color: '#475569' }}>Operating Hours</td>
                <td style={{ padding: '8px', color: '#1e293b' }}>09:00 AM to 07:00 PM (Monday - Saturday)</td>
              </tr>
            </tbody>
          </table>

          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/services" style={{ textDecoration: 'none', backgroundColor: '#2563eb', color: '#ffffff', padding: '8px 16px', borderRadius: '3px', fontWeight: 'bold', fontSize: '0.9rem' }}>
              Open Service Directory
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', backgroundColor: '#e2e8f0', color: '#1e293b', padding: '8px 16px', borderRadius: '3px', fontWeight: 'bold', fontSize: '0.9rem' }}>
              Contact Coordinator
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}