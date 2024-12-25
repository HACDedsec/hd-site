import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import first from './assets/first.jpg'; // Importing the first image properly
import enj from './assets/enj.jpg'; // Add imports for other images
import mov from './assets/mov.jpg'; // Add imports for other images
import movie from './assets/movie.jpg'; // Add imports for other images
import my from './assets/my.jpg'; // Add imports for other images
import piz from './assets/piz.jpg'; // Add imports for other images
// import image10 from './assets/image10.jpg'; // Add imports for other images
// import image11 from './assets/image11.jpg'; // Add imports for other images
// import image12 from './assets/image12.jpg'; // Add imports for other images

// Styled Components for LoveStory
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100vw;
  background: linear-gradient(135deg, #ff85a2, #fce4d6); /* Love-themed background */
  text-align: center;
  padding: 20px;
  overflow-y: auto; /* Allow scrolling */
`;

const FloatingArrow = styled.div`
  position: absolute;
  bottom: 20px; /* Position at the bottom of the screen */
  font-size: 2.5rem;
  color: #fff;
  background: linear-gradient(135deg, #e4007f, #ff1493); /* Gradient arrow */
  padding: 10px 20px;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: float 2s ease-in-out infinite;
  transform-origin: center;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px); /* Slightly move up */
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    background: linear-gradient(135deg, #ff1493, #e4007f); /* Reversed gradient on hover */
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    font-size: 2rem; /* Slightly smaller arrow for mobile */
    bottom: 10px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 30px;
  text-align: center;
  margin-top: 40px;
`;

const YearBox = styled.div`
  margin: 50px 0;
  padding: 30px;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px); /* Slight hover effect */
  }
`;

const YearTitle = styled.h2`
  font-family: 'Dancing Script', cursive, sans-serif; /* Lovely font for year */
  color: #e4007f;
  font-size: 3rem;
  margin-bottom: 10px;

  @media (max-width: 600px) {
    font-size: 2.5rem; /* Smaller title on mobile */
  }
`;

const YearMessage = styled.p`
  font-family: 'Great Vibes', cursive, sans-serif; /* Lovely font for message */
  font-size: 1.3rem;
  font-weight: 300;
  color: #333;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 1rem; /* Smaller message on mobile */
  }
`;

const YearImages = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const YearImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 20px; /* Increased border radius for rounder images */
  object-fit: cover;
  transition: 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 0, 127, 0.7); /* Shadow around images */
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(255, 0, 127, 0.7); /* Hover effect for scale */
  }

  @media (max-width: 600px) {
    width: 250px;
    height: 250px;
  }
`;

// Loving message section with heart border design
const LoveMessageSection = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 40px;
  margin-top: 80px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  font-family: 'Dancing Script', cursive, sans-serif;
  
  /* Heart Border Design */
  border: 10px solid transparent;
  border-image: url('https://img.icons8.com/ios-filled/50/ff1493/heart.png') 30 stretch;
  border-radius: 20px;
  
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

  @media (max-width: 600px) {
    padding: 20px;
    
    h3 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.2rem;
    }
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
      message: 'That was the day everything changed—the day we met, became best friends, and spent an unforgettable time together. ',
      images: [first,enj,piz, mov, movie, my], // Properly imported images
    },
    // {
    //   year: 2023,
    //   message: 'We took the leap and started dating! & started the journey of love',
    //   images: [image7, image8, image9], // Properly imported images
    // },
    // {
    //   year: 2024,
    //   message: 'The year of love and adventures.',
    //   images: [image10, image11, image12], // Properly imported images
    // },
    // More years...
  ];

  return (
    <AppContainer>

      {/* Timeline Section */}
      <TimelineSection>
        {timelineData.map((data, index) => (
          <YearBox key={index}>
            {/* Year and Message Section */}
            <YearTitle>{data.year}</YearTitle>
            <YearMessage>{data.message}</YearMessage>

            {/* Year Images */}
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
        I still remember seeing your smile for the first time. It was the most beautiful thing I’d ever seen, and since that day, you’re the only person I want to see every day.<br/> &nbsp; You’re my dream girl, and being with you feels like the luckiest thing in the world.
<br/>
From that day, my love for you has only grown. When you hold my hand for the first time, it felt like I had everything I ever needed. All I want is to see you happy, hold you close, and stay in the most peaceful place—your arms. You’re my happiness, my home, my everything.
            <br/>
            I will forever love you, my sweetest, most wonderful love.
          Forever yours, my sweet, sweet lovely sweetuuuuuuuuuuuuuu 💖
        </p>
      </LoveMessageSection>
    </AppContainer>
  );
};

export default LoveStory;
