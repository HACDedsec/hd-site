import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Images (make sure they are correctly placed in the public/assets folder or properly imported)
import first from './assets/first.jpg'; 
import enj from './assets/enj.jpg'; 
import mov from './assets/mov.jpg'; 
import movie from './assets/movie.jpg'; 
import my from './assets/my.jpg'; 
import piz from './assets/piz.jpg';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #ff85a2, #fce4d6);
  text-align: center;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
`;

const FloatingArrow = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 2.5rem;
  color: #fff;
  background: linear-gradient(135deg, #e4007f, #ff1493);
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
  animation: float 2s ease-in-out infinite;
  transform-origin: center;

  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  }

  &:hover {
    background: linear-gradient(135deg, #ff1493, #e4007f);
    transform: translateY(-5px);
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 30px;
  text-align: center;
`;

const YearBox = styled.div`
  margin: 50px 0;
  padding: 30px;
  position: relative;
  transition: all 0.3s ease;
`;

const YearTitle = styled.h2`
  font-family: 'Dancing Script', cursive, sans-serif;
  color: #e4007f;
  font-size: 3rem;
`;

const YearMessage = styled.p`
  font-family: 'Great Vibes', cursive, sans-serif;
  font-size: 1.3rem;
  color: #333;
`;

const YearImages = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const YearImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 4px 15px rgba(255, 0, 127, 0.7);
`;

const LoveMessageSection = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  margin-top: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Dancing Script', cursive, sans-serif;
  border: 10px solid transparent;
  border-image: url('https://img.icons8.com/ios-filled/50/ff1493/heart.png') 30 stretch;
`;

const LoveStory = () => {
  const timelineData = [
    {
      year: '2018-19-20',
      message: 'That was the day everything changed—the day we met, became best friends, and spent an unforgettable time together.',
      images: [first, enj, piz, mov, movie, my],
    },
  ];

  return (
    <AppContainer>
      <TimelineSection>
        {timelineData.map((data, index) => (
          <YearBox key={index}>
            <YearTitle>{data.year}</YearTitle>
            <YearMessage>{data.message}</YearMessage>
            <YearImages>
              {data.images.map((img, i) => (
                <YearImage key={i} src={img} alt={`${data.year} image ${i + 1}`} />
              ))}
            </YearImages>
          </YearBox>
        ))}
      </TimelineSection>
      <LoveMessageSection>
        <h3>Our Journey of Love</h3>
        <p>Our love story...</p>
      </LoveMessageSection>
      <FloatingArrow>↓</FloatingArrow>
    </AppContainer>
  );
};

export default LoveStory;
