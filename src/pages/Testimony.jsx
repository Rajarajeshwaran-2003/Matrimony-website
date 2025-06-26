import React from 'react';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';

const successStories = [
  {
    couple: 'Meena & Arjun',
    image: '/images/13.png',
    message: 'We were both skeptical about online matrimony, but HeartMatch made the process so comfortable and secure. Our first conversation lasted 6 hours! We got married in December 2023 and couldn\'t be happier.',
    weddingDate: 'December 15, 2023',
    location: 'Chennai'
  },
  {
    couple: 'Vikram & Anjali',
    image: '/images/14.png',
    message: 'After years of searching, we found each other on HeartMatch. The compatibility matching was spot-on - we share so many values and interests. Our families connected instantly too!',
    weddingDate: 'October 22, 2022',
    location: 'Mumbai'
  },
  {
    couple: 'Rahul & Priya',
    image: '/images/15.png',
    message: 'Living in different countries, we never thought we\'d meet someone compatible. HeartMatch\'s international matching brought us together. Now we\'re building our life in London!',
    weddingDate: 'June 8, 2023',
    location: 'London'
  },
  {
    couple: 'Aditya & Neha',
    image: '/images/16.png',
    message: 'We both loved that HeartMatch focuses on serious relationships. From our first date to our wedding in Goa, every moment has been magical. Thank you for bringing us together!',
    weddingDate: 'February 14, 2023',
    location: 'Goa'
  },
  {
    couple: 'Karthik & Divya',
    image: '/images/17.png',
    message: 'As doctors with hectic schedules, we had no time for traditional matchmaking. HeartMatch helped us connect meaningfully despite our busy lives. We got married within 8 months of meeting!',
    weddingDate: 'September 3, 2022',
    location: 'Bangalore'
  },
  {
    couple: 'Ravi & Shreya',
    image: '/images/18.png',
    message: 'The detailed profiles and verification process gave us confidence in each other from the start. Our families were impressed with how thorough HeartMatch is. We\'re expecting our first child next year!',
    weddingDate: 'April 18, 2021',
    location: 'Delhi'
  },
  {
    couple: 'Arjun & Meera',
    image: '/images/19.png',
    message: 'We connected over our love for classical music and travel. HeartMatch\'s interest-based matching really works! Our wedding was a beautiful fusion of our cultures.',
    weddingDate: 'November 12, 2022',
    location: 'Hyderabad'
  },
  {
    couple: 'Vishal & Ananya',
    image: '/images/20.png',
    message: 'After several disappointing experiences elsewhere, we found each other on HeartMatch. The premium membership was worth every penny - it filtered out unserious prospects.',
    weddingDate: 'May 20, 2023',
    location: 'Pune'
  },
  {
    couple: 'Suresh & Lakshmi',
    image: '/images/21.png',
    message: 'At our age (both in our 40s), we thought finding love again was impossible. HeartMatch proved us wrong! Our blended family couldn\'t be happier.',
    weddingDate: 'August 5, 2023',
    location: 'Kochi'
  },
  {
    couple: 'Nitin & Pooja',
    image: '/images/22.png',
    message: 'The personality assessment matched us perfectly. We complement each other in ways we never imagined possible. Our HeartMatch journey led to a dream wedding in Udaipur!',
    weddingDate: 'January 28, 2024',
    location: 'Udaipur'
  },
  {
    couple: 'Amit & Riya',
    image: '/images/23.png',
    message: 'As NRI professionals, we needed a platform that understood our unique needs. HeartMatch\'s global network helped us bridge the distance. Now we\'re happily settled in Canada!',
    weddingDate: 'July 17, 2023',
    location: 'Toronto'
  },
  {
    couple: 'Sanjay & Geeta',
    image: '/images/24.png',
    message: 'After 30 years of marriage (we met through family), we recommended HeartMatch to our children. They found their partners within months! Three generations of happy marriages thanks to HeartMatch.',
    weddingDate: 'March 30, 1993',
    location: 'Ahmedabad'
  }
];

function Testimony() {
  return (
    <div className="testimonials-page">
      <div className="page-header">
        <h2>Real Success Stories</h2>
        <p>Join thousands of couples who found love through HeartMatch</p>
      </div>
      
      <div className="stats-banner">
        <div className="stat-item">
          <span className="stat-number">12,487</span>
          <span className="stat-label">Successful Matches</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">94%</span>
          <span className="stat-label">Satisfaction Rate</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">63</span>
          <span className="stat-label">Countries</span>
        </div>
      </div>
      
      <div className="testimonials-grid">
        {successStories.map((story, index) => (
          <TestimonialCard key={index} {...story} />
        ))}
      </div>
      
      <div className="cta-section">
        <h3>Ready to start your own success story?</h3>
         <Link to="/register">
        <button className="cta-button">Create Your Profile Today</button>
        </Link>
      </div>
    </div>
  );
}

export default Testimony;