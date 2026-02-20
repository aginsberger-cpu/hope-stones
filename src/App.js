import React, { useState } from 'react';
import { Heart, Search, Home, MessageCircle, User, Settings, Info } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh', direction: 'rtl' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#fff', padding: '15px', textAlign: 'center', borderBottom: '1px solid #ddd', position: 'sticky', top: 0, zIndex: 100 }}>
        <h1 style={{ margin: 0, color: '#ff4d6d', fontSize: '24px' }}>אבן תקווה</h1>
      </header>

      {/* Main Content */}
      <main style={{ padding: '20px', paddingBottom: '80px' }}>
        {activeTab === 'home' && (
          <div>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '15px', marginBottom: '20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <h2>ברוכים הבאים</h2>
              <p>כאן תוכלו למצוא תמיכה, תקווה וקהילה מחבקת.</p>
            </div>
            <button style={{ width: '100%', padding: '15px', backgroundColor: '#ff4d6d', color: 'white', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold' }}>
              התחל שיחה עכשיו
            </button>
          </div>
        )}
        
        {activeTab === 'search' && <div><h2>חיפוש תמיכה</h2><p>חפשו קהילות או מטפלים באזורכם.</p></div>}
        {activeTab === 'info' && <div><h2>מידע ועזרה</h2><p>כלים ומשאבים להתמודדות וצמיחה.</p></div>}
      </main>

      {/* Navigation Bar */}
      <nav style={{ position: 'fixed', bottom: 0, width: '100%', backgroundColor: '#fff', display: 'flex', justifyContent: 'space-around', padding: '10px 0', borderTop: '1px solid #ddd' }}>
        <button onClick={() => setActiveTab('home')} style={{ background: 'none', border: 'none', color: activeTab === 'home' ? '#ff4d6d' : '#666' }}>
          <Home />
          <div style={{ fontSize: '12px' }}>בית</div>
        </button>
        <button onClick={() => setActiveTab('search')} style={{ background: 'none', border: 'none', color: activeTab === 'search' ? '#ff4d6d' : '#666' }}>
          <Search />
          <div style={{ fontSize: '12px' }}>חיפוש</div>
        </button>
        <button onClick={() => setActiveTab('info')} style={{ background: 'none', border: 'none', color: activeTab === 'info' ? '#ff4d6d' : '#666' }}>
          <Info />
          <div style={{ fontSize: '12px' }}>מידע</div>
        </button>
      </nav>
    </div>
  );
};

export default App;
