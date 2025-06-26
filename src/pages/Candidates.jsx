import React, { useState } from 'react';
import CandidateCard from '../components/CandidateCard';

const allCandidates = [
  {
    name: 'Ravi Kumar',
    age: 28,
    city: 'Chennai, Tamil Nadu',
    education: 'Master of Computer Applications',
    profession: 'Senior Software Engineer',
    photo: '/images/1.png',
    interests: ['Technology', 'Travel', 'Photography', 'Cooking']
  },
  {
    name: 'Priya Sharma',
    age: 26,
    city: 'Coimbatore, Tamil Nadu',
    education: 'MBA in Marketing',
    profession: 'Marketing Manager',
    photo: '/images/6.png',
    interests: ['Reading', 'Dancing', 'Yoga', 'Social Work']
  },
  {
    name: 'Arjun Patel',
    age: 30,
    city: 'Bangalore, Karnataka',
    education: 'B.Tech in Mechanical Engineering',
    profession: 'Project Manager',
    photo: '/images/2.png',
    interests: ['Cars', 'Cricket', 'Hiking', 'Music']
  },
  {
    name: 'Ananya Reddy',
    age: 27,
    city: 'Hyderabad, Telangana',
    education: 'MS in Data Science',
    profession: 'Data Scientist',
    photo: '/images/3.png',
    interests: ['AI Research', 'Chess', 'Painting', 'Gardening']
  },
  {
    name: 'Vikram Singh',
    age: 32,
    city: 'Delhi',
    education: 'CA',
    profession: 'Chartered Accountant',
    photo: '/images/4.png',
    interests: ['Finance', 'Golf', 'Wine Tasting', 'Travel']
  },
  {
    name: 'Meena Iyer',
    age: 29,
    city: 'Mumbai, Maharashtra',
    education: 'BDS',
    profession: 'Dentist',
    photo: '/images/8.png',
    interests: ['Dental Health', 'Dancing', 'Fashion', 'Movies']
  },
  {
    name: 'Aditya Joshi',
    age: 31,
    city: 'Pune, Maharashtra',
    education: 'Ph.D in Biotechnology',
    profession: 'Research Scientist',
    photo: '/images/9.png',
    interests: ['Biotech', 'Marathon', 'Blogging', 'Volunteering']
  },
  {
    name: 'Neha Gupta',
    age: 25,
    city: 'Kolkata, West Bengal',
    education: 'B.Com, M.Com',
    profession: 'Financial Analyst',
    photo: '/images/5.png',
    interests: ['Investing', 'Reading', 'Baking', 'Badminton']
  },
  {
    name: 'Rahul Malhotra',
    age: 33,
    city: 'Chandigarh',
    education: 'LLB',
    profession: 'Corporate Lawyer',
    photo: '/images/7.png',
    interests: ['Law', 'Politics', 'Debating', 'Gym']
  },
  {
    name: 'Divya Nair',
    age: 28,
    city: 'Kochi, Kerala',
    education: 'B.Arch',
    profession: 'Architect',
    photo: '/images/10.png',
    interests: ['Design', 'Sketching', 'Sustainability', 'Classical Dance']
  },
  {
    name: 'Karthik Menon',
    age: 30,
    city: 'Trivandrum, Kerala',
    education: 'MBBS, MD',
    profession: 'Cardiologist',
    photo: '/images/11.png',
    interests: ['Medicine', 'Cricket', 'Photography', 'Cooking']
  },
  {
    name: 'Shreya Chatterjee',
    age: 27,
    city: 'Guwahati, Assam',
    education: 'MA in English Literature',
    profession: 'Content Strategist',
    photo: '/images/12.png',
    interests: ['Writing', 'Poetry', 'Theater', 'Travel']
  }
];

function Candidates() {
  const [filteredCandidates, setFilteredCandidates] = useState(allCandidates);
  const [searchTerm, setSearchTerm] = useState('');
  const [ageRange, setAgeRange] = useState([25, 35]);
  const [selectedCity, setSelectedCity] = useState('All');

  const cities = ['All', ...new Set(allCandidates.map(c => c.city.split(',')[0]))];

  const handleSearch = () => {
    const results = allCandidates.filter(candidate => {
      const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          candidate.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          candidate.interests.some(i => i.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesAge = candidate.age >= ageRange[0] && candidate.age <= ageRange[1];
      const matchesCity = selectedCity === 'All' || candidate.city.startsWith(selectedCity);
      
      return matchesSearch && matchesAge && matchesCity;
    });
    
    setFilteredCandidates(results);
  };

  return (
    <div className="candidates-page">
      <div className="page-header">
        <h2>Find Your Perfect Match</h2>
        <p>Browse through our verified profiles to find someone special</p>
      </div>
      
      <div className="search-filters">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search by name, profession or interests..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        
        <div className="filter-controls">
          <div className="filter-group">
            <label>Age Range: {ageRange[0]} - {ageRange[1]}</label>
            <input 
              type="range" 
              min="22" 
              max="45" 
              value={ageRange[0]} 
              onChange={(e) => setAgeRange([parseInt(e.target.value), ageRange[1]])}
            />
            <input 
              type="range" 
              min="22" 
              max="45" 
              value={ageRange[1]} 
              onChange={(e) => setAgeRange([ageRange[0], parseInt(e.target.value)])}
            />
          </div>
          
          <div className="filter-group">
            <label>City:</label>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="candidates-grid">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate, idx) => (
            <CandidateCard key={idx} {...candidate} />
          ))
        ) : (
          <div className="no-results">
            <h3>No candidates match your search criteria</h3>
            <p>Try adjusting your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Candidates;