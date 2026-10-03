import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#f1f5f9', /* Added this to fix the black gap */
      minHeight: '100vh', 
      width: '100%', 
      margin: 0, 
      padding: 0, 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-between', 
      fontFamily: 'system-ui, -apple-system, sans-serif' 
    }}>
      <Nav />
      <main style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}