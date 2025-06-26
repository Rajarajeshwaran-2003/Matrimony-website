import React from 'react';
import { FaHeart, FaRegHeart, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

function CandidateCard({ name, age, city, education, profession, photo, interests }) {
  const [isLiked, setIsLiked] = React.useState(false);

  return (
    <div className="candidate-card">
      <div className="card-image">
        <img src={photo} alt={name} />
        <button 
          className="like-btn" 
          onClick={() => setIsLiked(!isLiked)}
          aria-label={isLiked ? "Unlike profile" : "Like profile"}
        >
          {isLiked ? <FaHeart className="liked" /> : <FaRegHeart />}
        </button>
      </div>
      <div className="card-content">
        <h3>{name}, {age}</h3>
        <div className="card-detail">
          <FaMapMarkerAlt className="detail-icon" />
          <span>{city}</span>
        </div>
        <div className="card-detail">
          <FaGraduationCap className="detail-icon" />
          <span>{education}</span>
        </div>
        <div className="card-detail">
          <FaBriefcase className="detail-icon" />
          <span>{profession}</span>
        </div>
        <div className="interests">
          {interests.map((interest, index) => (
            <span key={index} className="interest-tag">{interest}</span>
          ))}
        </div>
        <button className="view-profile-btn">View Full Profile</button>
      </div>
    </div>
  );
}

export default CandidateCard;