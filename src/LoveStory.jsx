import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Importing images (Make sure these are correctly located in the `src/assets` folder)
import first from './assets/first.jpg'; 
import enj from './assets/enj.jpg'; 
import mov from './assets/mov.jpg'; 
import movie from './assets/movie.jpg'; 
import my from './assets/my.jpg'; 
import piz from './assets/piz.jpg';

// Styled Components for LoveStory
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh; /* Ensure full viewport height */
  width: 100%;
  background: linear-gradient(135deg, #ff85a2, #fce4d6); /* Gradient background */
  text-align: center;
  padding: 20px;
  overflow-y: auto;
  box-sizing: border-box;
  
  /* Add background image if needed */
  background-image: url('https://example.com/your-background-image.jpg'); /* Replace with your background URL */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Make background fixed */
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
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  transition: 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 0, 127, 0.7);
  }
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
  
  h3 {
    color: #e4007f;
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    font-weight: 300;
    color: #333;
  }
`;

const LoveStory = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to check if the user has scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sample data for timeline gallery
  const timelineData = [
    {
      year: '2018-19-20',
      message: 'That was the day everything changed—the day we met, became best friends, and spent an unforgettable time together.',
      images: [first, enj, piz, mov, movie, my], // Use your images here
    },
  ];

  return (
    <AppContainer>
      {/* Timeline Section */}
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

      {/* Final Love Message Section */}
      <LoveMessageSection>
        <h3>Our Journey of Love</h3>
        <p>
          I still remember seeing your smile for the first time. It was the most beautiful thing I’d ever seen, and since that day, you’re the only person I want to see every day.<br />
          You’re my dream girl, and being with you feels like the luckiest thing in the world.<br />
          From that day, my love for you has only grown. When you hold my hand for the first time, it felt like I had everything I ever needed. All I want is to see you happy, hold you close, and stay in the most peaceful place—your arms. You’re my happiness, my home, my everything.<br />
          I will forever love you, my sweetest, most wonderful love.<br />
          Forever yours, my sweet, sweet lovely sweetuuuuuuuuuuuuuu 💖
        </p>
      </LoveMessageSection>

      {/* Floating Arrow */}
      <FloatingArrow>↓</FloatingArrow>
    </AppContainer>
  );
};

export default LoveStory;
