import React from 'react';
import Banner from '../components/Banner';
import { FaHeart, FaShieldAlt, FaUsers, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="home-page">
      <Banner />
      
      <section className="features-section">
        <div className="section-header">
          <h2>Why Choose Matrimony?</h2>
          <p>Our unique approach to matchmaking sets us apart</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Verified Profiles</h3>
            <p>Every profile undergoes rigorous verification to ensure authenticity and safety.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaHeart />
            </div>
            <h3>Compatibility Matching</h3>
            <p>Our advanced algorithm matches you based on 29 dimensions of compatibility.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3>Community Support</h3>
            <p>Access to relationship experts and a supportive community of like-minded individuals.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaSearch />
            </div>
            <h3>Advanced Search</h3>
            <p>Filter by education, profession, interests and more to find your ideal match.</p>
          </div>
        </div>
      </section>
      
      <section className="testimonial-highlight">
        <div className="highlight-content">
          <h3>"Matrimony helped us find each other despite living on different continents. We couldn't be happier!"</h3>
          <p>- Rahul & Priya, Married June 2023</p>
          <Link to="/testimony">
          <button className="secondary-btn">Read More Success Stories</button>
          </Link>
        </div>
      </section>
      
      <section className="how-it-works">
        <div className="section-header">
          <h2>How Matrimony Works</h2>
          <p>Find your perfect match in just a few simple steps</p>
        </div>
        
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Your Profile</h3>
            <p>Tell us about yourself, your values, and what you're looking for in a partner.</p>
          </div>
          
          <div className="step">
            <div className="step-number">2</div>
            <h3>Get Matched</h3>
            <p>Our algorithm suggests compatible profiles based on your preferences.</p>
          </div>
          
          <div className="step">
            <div className="step-number">3</div>
            <h3>Connect Securely</h3>
            <p>Communicate through our secure platform until you're ready to meet.</p>
          </div>
          
          <div className="step">
            <div className="step-number">4</div>
            <h3>Meet Your Match</h3>
            <p>Take the next step when you're ready with our guidance and support.</p>
          </div>
        </div>
        
        <div className="cta-container">
          <Link to="/candidates">
          <button className="primary-btn">Get Started Now</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;