import React from 'react';

const rules = [
  { term: "Work Verification", desc: "Customers must perform a trial run with the technician prior to releasing payment." },
  { term: "Genuine Components", desc: "Any hardware parts replaced must carry manufacturer warranty stamps." },
  { term: "Receipt Generation", desc: "A service summary sheet is generated for every completed task reference." }
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '80vh', padding: '30px 16px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', padding: '24px', borderRadius: '4px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Operating Guidelines & Terms</h3>
        <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.6', margin: '0 0 20px 0' }}>
          CleanNest operates as a local utility registry. Technicians work on predefined hourly scopes to avoid disputes over pricing or diagnostic time.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {rules.map((r, index) => (
            <div key={index} style={{ padding: '12px', borderLeft: '3px solid #2563eb', backgroundColor: '#f8fafc' }}>
              <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '0.9rem' }}>{r.term}</div>
              <div style={{ color: '#475569', fontSize: '0.85rem', marginTop: '2px' }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}