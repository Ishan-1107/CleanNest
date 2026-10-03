import React, { useState } from 'react';

const rateCard = [
  { id: 101, category: "AC", name: "Split AC Chemical Cleaning", rate: 499, duration: "60 mins" },
  { id: 102, category: "Washing Machine", name: "Drum & Drain Descaling", rate: 399, duration: "45 mins" },
  { id: 103, category: "Water Purifier", name: "Filter Cartridge Replacement", rate: 299, duration: "30 mins" },
  { id: 104, category: "Refrigerator", name: "Cooling Coil & Gas Check", rate: 650, duration: "60 mins" }
];

export default function Services() {
  const [activeItem, setActiveItem] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '85vh', padding: '40px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', boxSizing: 'border-box' }}>
        
        <h3 style={{ margin: '0 0 10px 0', color: '#0f172a', fontSize: '1.6rem' }}>Standard Tariff & Slot Allocation</h3>
        <p style={{ margin: '0 0 24px 0', fontSize: '1.1rem', color: '#475569' }}>
          Select a service row below to initialize an on-site technician appointment.
        </p>

        <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden', marginBottom: '30px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.05rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #cbd5e1', color: '#475569' }}>
                <th style={{ padding: '16px 20px' }}>Code</th>
                <th style={{ padding: '16px 20px' }}>Appliance</th>
                <th style={{ padding: '16px 20px' }}>Service Detail</th>
                <th style={{ padding: '16px 20px' }}>Duration</th>
                <th style={{ padding: '16px 20px' }}>Standard Fee</th>
                <th style={{ padding: '16px 20px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rateCard.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: activeItem?.id === item.id ? '#eff6ff' : '#ffffff' }}>
                  <td style={{ padding: '14px 20px', color: '#64748b' }}>#{item.id}</td>
                  <td style={{ padding: '14px 20px', fontWeight: 'bold' }}>{item.category}</td>
                  <td style={{ padding: '14px 20px' }}>{item.name}</td>
                  <td style={{ padding: '14px 20px', color: '#64748b' }}>{item.duration}</td>
                  <td style={{ padding: '14px 20px', fontWeight: 'bold' }}>₹{item.rate}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <button 
                      onClick={() => { setActiveItem(item); setSuccess(false); }}
                      style={{ padding: '8px 16px', fontSize: '0.9rem', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {activeItem && (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #2563eb', borderRadius: '4px', padding: '24px', width: '100%', boxSizing: 'border-box' }}>
            <h4 style={{ margin: '0 0 16px 0', color: '#0f172a', fontSize: '1.2rem' }}>
              Service Request Form: {activeItem.name} (Code #{activeItem.id})
            </h4>

            {success ? (
              <div style={{ padding: '16px', backgroundColor: '#eff6ff', border: '1px solid #93c5fd', color: '#1e40af', borderRadius: '4px', fontSize: '1.05rem' }}>
                Booking logged for <b>{activeItem.name}</b>. A technician will be assigned on the selected date.
                <button onClick={() => setActiveItem(null)} style={{ marginLeft: '16px', padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #93c5fd', backgroundColor: '#ffffff', color: '#1e40af', fontWeight: 'bold' }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '20px', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', marginBottom: '8px', color: '#475569', fontWeight: 'bold' }}>Customer Name</label>
                  <input type="text" required placeholder="Name" style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', marginBottom: '8px', color: '#475569', fontWeight: 'bold' }}>Contact Mobile</label>
                  <input type="tel" required placeholder="10-digit number" style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.95rem', marginBottom: '8px', color: '#475569', fontWeight: 'bold' }}>Preferred Date</label>
                  <input type="date" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
                </div>
                <div>
                  <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '11px 24px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}