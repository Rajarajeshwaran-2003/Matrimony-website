import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

function TestimonialCard({ couple, image, message, weddingDate, location }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <FaQuoteLeft className="quote-icon left" />
        <p className="testimonial-message">{message}</p>
        <FaQuoteRight className="quote-icon right" />
      </div>
      <div className="testimonial-footer">
        <div className="couple-image">
          <img src={image} alt={couple} />
        </div>
        <div className="couple-info">
          <h4>{couple}</h4>
          <p className="wedding-info">Married on {weddingDate} in {location}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;