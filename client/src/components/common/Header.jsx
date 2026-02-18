import React from 'react';
import { Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/index.css'; // Ensure styles are loaded

const Header = () => {
  return (
    <header>
      {/* Top Bar: Subscribe - Logo - Icons */}
      <div className="container" style={{ padding: '20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        <div className="left-section">
          <button style={{ 
            backgroundColor: 'var(--primary-red)', 
            color: 'white', 
            border: 'none', 
            padding: '10px 20px', 
            fontSize: '14px', 
            fontWeight: 'bold', 
            cursor: 'pointer' 
          }}>
            Subscribe
          </button>
        </div>

        <div className="logo-section" style={{ textAlign: 'center' }}>
          {/* Using text for now, you can replace with an <img> tag later */}
          <Link to="/">
            <h1 className="serif-title" style={{ fontSize: '40px', letterSpacing: '1px', textTransform: 'uppercase' }}>
              The Art Newspaper
            </h1>
          </Link>
        </div>

        <div className="right-section" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}>
            <Search size={18} />
            <span>Search</span>
          </div>
          <Link to="/login" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <User size={18} />
            <span>Sign in</span>
          </Link>
        </div>
      </div>

      {/* Navigation Line */}
      <nav style={{ borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', padding: '15px 0' }}>
        <ul className="container" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          listStyle: 'none', 
          gap: '30px', 
          fontSize: '14px',
          fontWeight: '500',
          textTransform: 'uppercase'
        }}>
          <li><Link to="/category/market">Art Market</Link></li>
          <li><Link to="/category/museums">Museums & Heritage</Link></li>
          <li><Link to="/category/exhibitions">Exhibitions</Link></li>
          <li><Link to="/category/books">Books</Link></li>
          <li><Link to="/category/podcasts">Podcasts</Link></li>
          <li><Link to="/category/tech">Technology</Link></li>
        </ul>
      </nav>

      {/* Red Promotional Banner (Optional) */}
      <div style={{ backgroundColor: '#A83232', color: 'white', textAlign: 'center', padding: '10px', fontSize: '14px' }}>
        Enjoy 8 weeks of The Art Newspaper for free // <strong>Unlock unrestricted digital access today</strong>
      </div>
    </header>
  );
};

export default Header;