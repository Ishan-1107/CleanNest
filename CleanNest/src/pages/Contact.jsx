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
    <div style={{ backgroundColor: '#f1f5f9', minHeight: '80vh', padding: '40px', width: '100%', boxSizing: 'border-box' }}>
      <div style={{ width: '100%', backgroundColor: '#ffffff', border: '1px solid #cbd5e1', padding: '32px', borderRadius: '4px', boxSizing: 'border-box' }}>
        <h3 style={{ margin: '0 0 12px 0', color: '#0f172a', fontSize: '1.6rem' }}>Helpdesk & Inquiries</h3>
        <p style={{ color: '#475569', fontSize: '1.1rem', margin: '0 0 24px 0' }}>
          Submit service issues or direct queries to the administrative desk.
        </p>

        {submitted && (
          <div style={{ padding: '16px', backgroundColor: '#eff6ff', border: '1px solid #93c5fd', color: '#1e40af', borderRadius: '4px', marginBottom: '24px', fontSize: '1.05rem' }}>
            Inquiry ticket recorded. Staff will review the request.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Full Name</label>
            <input ref={nameRef} type="text" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Email Address</label>
            <input type="email" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem' }} />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '8px', color: '#334155' }}>Issue Description</label>
            <textarea rows="4" required style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '4px', boxSizing: 'border-box', fontSize: '1rem', resize: 'vertical' }}></textarea>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button type="submit" style={{ backgroundColor: '#2563eb', color: '#ffffff', border: 'none', padding: '12px 24px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }}>
              Send Inquiry
            </button>
            <button type="button" onClick={() => nameRef.current.focus()} style={{ backgroundColor: 'blue', color: '#f1f5f9', border: '1px solid #cbd5e1', padding: '12px 24px', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold' }}>
              Focus Name (useRef)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}