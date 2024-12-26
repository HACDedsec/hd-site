import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import for navigation
import './LoveStory.css';
import first from './assets/first.jpg';
import enj from './assets/enj.jpg';
import mov from './assets/mov.jpg';
import movie from './assets/movie.jpg';
import my from './assets/my.jpg';
import piz from './assets/piz.jpg';

const LoveStory = () => {
  const navigate = useNavigate(); // Hook for navigation

  const timelineData = [
    {
      year: '2018-19-20',
      message: 'That was the day everything changed—the day we met, became best friends, and spent an unforgettable time together.',
      images: [first, enj, piz, mov, movie, my],
    },
  ];

  const handleNext = () => {
    navigate('/deep-love'); // Navigate to the next page
  };

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Timeline Section */}
        <div className="timeline-section">
          {timelineData.map((data, index) => (
            <div className="year-box" key={index}>
              <h2 className="year-title">{data.year}</h2>
              <p className="year-message">{data.message}</p>
              <div className="year-images">
                {data.images.map((img, i) => (
                  <img key={i} src={img} alt={`Year ${data.year} Image ${i + 1}`} className="year-image" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Love Message Section */}
        <div className="love-message-section">
          <h3>Our Journey of Love</h3>
          <p>
            I still remember seeing your smile for the first time. It was the most beautiful thing I’d ever seen, and
            since that day, you’re the only person I want to see every day.<br />
            You’re my dream girl, and being with you feels like the luckiest thing in the world.<br />
            From that day, my love for you has only grown. When you held my hand for the first time, it felt like I had
            everything I ever needed. All I want is to see you happy, hold you close, and stay in the most peaceful
            place—your arms. You’re my happiness, my home, my everything.<br />
            I will forever love you, my sweetest, most wonderful love. Forever yours, my sweet, sweet lovely sweetuuuuuuuuuuuuuu 💖
          </p>
        </div>

        {/* Next Button */}
        <button className="next-button " style={{marginTop: "20px"}} onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default LoveStory;
