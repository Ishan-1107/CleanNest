import React from 'react';

const rules = [
  { term: "Work Verification", desc: "Customers must perform a trial run with the technician prior to releasing payment." },
  { term: "Genuine Components", desc: "Any hardware parts replaced must carry manufacturer warranty stamps." },
  { term: "Receipt Generation", desc: "A service summary sheet is generated for every completed task reference." }
];

export default function About() {
  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '80vh', padding: '40px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', padding: '32px', borderRadius: '4px', boxSizing: 'border-box' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#0f172a', fontSize: '1.5rem' }}>Operating Guidelines & Terms</h3>
        <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: '1.6', margin: '0 0 24px 0' }}>
          CleanNest operates as a local utility registry. Technicians work on predefined hourly scopes to avoid disputes over pricing or diagnostic time.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {rules.map((r, index) => (
            <div key={index} style={{ padding: '16px', borderLeft: '4px solid #2563eb', backgroundColor: '#f8fafc' }}>
              <div style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '1.1rem' }}>{r.term}</div>
              <div style={{ color: '#475569', fontSize: '1rem', marginTop: '6px' }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}