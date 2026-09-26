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
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '85vh', padding: '30px 16px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        
        <h3 style={{ margin: '0 0 6px 0', color: '#0f172a' }}>Standard Tariff & Slot Allocation</h3>
        <p style={{ margin: '0 0 16px 0', fontSize: '0.9rem', color: '#475569' }}>
          Select a service row below to initialize an on-site technician appointment.
        </p>

        {/* Structured Table */}
        <div style={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', overflow: 'hidden', marginBottom: '24px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #cbd5e1', color: '#475569' }}>
                <th style={{ padding: '10px 14px' }}>Code</th>
                <th style={{ padding: '10px 14px' }}>Appliance</th>
                <th style={{ padding: '10px 14px' }}>Service Detail</th>
                <th style={{ padding: '10px 14px' }}>Duration</th>
                <th style={{ padding: '10px 14px' }}>Standard Fee</th>
                <th style={{ padding: '10px 14px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {rateCard.map((item) => (
                <tr key={item.id} style={{ borderBottom: '1px solid #e2e8f0', backgroundColor: activeItem?.id === item.id ? '#eff6ff' : '#ffffff' }}>
                  <td style={{ padding: '10px 14px', color: '#64748b' }}>#{item.id}</td>
                  <td style={{ padding: '10px 14px', fontWeight: 'bold' }}>{item.category}</td>
                  <td style={{ padding: '10px 14px' }}>{item.name}</td>
                  <td style={{ padding: '10px 14px', color: '#64748b' }}>{item.duration}</td>
                  <td style={{ padding: '10px 14px', fontWeight: 'bold' }}>₹{item.rate}</td>
                  <td style={{ padding: '10px 14px' }}>
                    <button 
                      onClick={() => { setActiveItem(item); setSuccess(false); }}
                      style={{ padding: '4px 10px', fontSize: '0.8rem', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '3px', cursor: 'pointer' }}
                    >
                      Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Embedded Booking Section at the Bottom */}
        {activeItem && (
          <div style={{ backgroundColor: '#ffffff', border: '1px solid #2563eb', borderRadius: '4px', padding: '20px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>
              Service Request Form: {activeItem.name} (Code #{activeItem.id})
            </h4>

            {success ? (
              <div style={{ padding: '10px', backgroundColor: '#eff6ff', border: '1px solid #93c5fd', color: '#1e40af', borderRadius: '3px', fontSize: '0.9rem' }}>
                Booking logged for <b>{activeItem.name}</b>. A technician will be assigned on the selected date.
                <button onClick={() => setActiveItem(null)} style={{ marginLeft: '14px', padding: '2px 8px', cursor: 'pointer' }}>Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr auto', gap: '12px', alignItems: 'end' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '4px', color: '#475569' }}>Customer Name</label>
                  <input type="text" required placeholder="Name" style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '4px', color: '#475569' }}>Contact Mobile</label>
                  <input type="tel" required placeholder="10-digit number" style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: '4px', color: '#475569' }}>Preferred Date</label>
                  <input type="date" required style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '3px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '7px 16px', borderRadius: '3px', fontWeight: 'bold', cursor: 'pointer' }}>
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