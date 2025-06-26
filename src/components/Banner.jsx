import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1>Discover Your Soulmate</h1>
        <p className="tagline">Where Lasting Connections Begin</p>
        <div className="cta-buttons">
          <Link to="/candidates">
            <button className="primary-btn">Browse Profiles</button>
          </Link>
          <Link to="/register">
            <button className="secondary-btn">Create Profile</button>
          </Link>
        </div>
      </div>
      <div className="banner-stats">
        <div className="stat-item">
          <span className="stat-number">10,000+</span>
          <span className="stat-label">Successful Matches</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">50+</span>
          <span className="stat-label">Cities Covered</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Customer Satisfaction</span>
        </div>
      </div>
    </div>
  );
}

export default Banner;