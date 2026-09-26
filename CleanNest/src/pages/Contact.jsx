import React, { useState, useRef } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const nameRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '80vh', padding: '30px 16px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', padding: '24px', borderRadius: '4px' }}>
        <h3 style={{ margin: '0 0 10px 0', color: '#0f172a' }}>Helpdesk & Inquiries</h3>
        <p style={{ color: '#475569', fontSize: '0.9rem', margin: '0 0 20px 0' }}>
          Submit service issues or direct queries to the administrative desk.
        </p>

        {submitted && (
          <div style={{ padding: '10px', backgroundColor: '#eff6ff', border: '1px solid #93c5fd', color: '#1e40af', borderRadius: '3px', marginBottom: '16px', fontSize: '0.9rem' }}>
            Inquiry ticket recorded. Staff will review the request.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ maxWidth: '450px' }}>
          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>Full Name</label>
            <input ref={nameRef} type="text" required style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '3px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '12px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>Email Address</label>
            <input type="email" required style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '3px', boxSizing: 'border-box' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '4px' }}>Issue Description</label>
            <textarea rows="3" required style={{ width: '100%', padding: '6px', border: '1px solid #cbd5e1', borderRadius: '3px', boxSizing: 'border-box' }}></textarea>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '8px 16px', borderRadius: '3px', fontWeight: 'bold', cursor: 'pointer' }}>
              Send Inquiry
            </button>
            <button type="button" onClick={() => nameRef.current.focus()} style={{ backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', padding: '8px 12px', borderRadius: '3px', cursor: 'pointer', fontSize: '0.85rem' }}>
              Focus Name (useRef)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}