import React from 'react';
import './DeepLove.css';
import park1 from './assets/park1.jpg';
import cafe3 from './assets/cafe3.jpg';
import pune1 from './assets/pune1.jpg';
import pune2 from './assets/pune2.jpg';
import cafe4 from './assets/cafe4.jpg';
import park3 from './assets/park3.jpg';
import cafe1 from './assets/cafe1.jpg';
import cafe2 from './assets/cafe2.jpg';
import love1 from './assets/love1.jpg';
import love2 from './assets/love2.jpg';
import rom from './assets/rom.jpg';
import rom2 from './assets/rom2.jpg';
import styled, { createGlobalStyle } from 'styled-components';


const DeepLove = () => {

  const LoveTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Dancing Script', cursive; /* A love font */
  color: #e4007f; /* Love red/pink */
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 2rem; /* Smaller title on mobile */
  }
`;
  const sections = [
    {
      date: 'MAY-2023',
      place: 'Nexus one - Ahmedabad ',
      activity: 'The day we first met after long time and spend entire day together and i was almost lost in your eyes.',
      images: [park1, cafe3],
    },
    {
      activity: 'Another day spend with you and it made me fall in love with you entirely and you also first time got so close to me kissed my hand and expressed those feelings.',
      images: [park3, cafe2],
    },
    {
      date: ' June 2023',
      activity: 'Our first coffee date, really lovely close up and i was lost in you cant think of anythign else just you 24/7.',
      images: [cafe1, cafe4],
    },
    {
      date: ' Aug 2023',
      activity: 'I First time came to pune to spend time with you and we went to Mahabaleshwar for a romentic trip together such a lovey experince of life',
      images: [pune1, pune2],
    },
    {
      date: ' May 2024',
      activity: 'You first time visited my home and we made our first love on this day really awesome feeling such a lovey day',
      images: [love1, love2],
    },
    {
      date: ' Sept 2024',
      activity: 'I first time spend my Birthday with love of my life really awesome experience first time travelled through flight and had such a romentic time together in Pune',
      images: [rom, rom2],
    },
  ];

  return (
    <>
    <div className="deep-love-container">
      {sections.map((section, index) => (
        <div key={index} className="section">
          <div className="section-header">
            <h2 className="section-date">{section.date}</h2>
            <h3 className="section-place">{section.place}</h3>
            <p className="section-activity">{section.activity}</p>
          </div>
          <div className="section-images">
            {section.images.map((img, i) => (
              <img key={i} src={img} alt={`Section ${index + 1} Image ${i + 1}`} className="section-image" />
            ))}
          </div>
        </div>
      ))}
    </div>

<LoveTitle className='center-text'>Love Your Infinite my Darling drashtuuuuuuuuuuuuuuuuu😘🫶</LoveTitle>
</>
  );
};

export default DeepLove;
