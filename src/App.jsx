import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import hdHand from './assets/hand.png'; // Your image
import LoveStory from './LoveStory'; // Import the LoveStory component

// Global Styles
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Dancing+Script&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    height: 100%;
    font-family: 'Poppins', sans-serif;
    overflow: hidden; /* Prevent scrollbars from showing up */
  }
`;

// Styled Components for App
const AppContainer = styled.div`
  display: flex;
  flex-direction: column; /* Stack content vertically */
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #ff85a2, #fce4d6); /* Love-themed background */
  text-align: center;
  padding: 20px; /* Add some padding to the container for mobile screens */
`;

const MessageContainer = styled.div`
  padding: 40px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent white background */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  max-width: 80%;
  width: 500px;
  margin-bottom: 30px; /* Space between text and the image */

  @media (max-width: 600px) {
    width: 100%; /* Full width on mobile */
    padding: 30px; /* Less padding on mobile */
  }
`;

const LoveTitle = styled.h1`
  font-size: 3rem;
  font-family: 'Dancing Script', cursive; /* A love font */
  color: #e4007f; /* Love red/pink */
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 2rem; /* Smaller title on mobile */
  }
`;

const LoveMessage = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
  color: #333;

  @media (max-width: 600px) {
    font-size: 1rem; /* Smaller message text on mobile */
  }
`;

const FloatingText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: #e4007f;
  margin-top: 20px;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px); /* Move up */
    }
    100% {
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    font-size: 1.2rem; /* Smaller floating text on mobile */
  }
`;

const HandImage = styled.img`
  width: 250px;
  margin-top: 20px; /* Space between the message and the image */
  border-radius: 50%; /* Fully rounded corners (circle) */
  transition: 0.3s ease-in-out; /* Smooth transition for hover effect */

  @media (max-width: 600px) {
    width: 200px; /* Scale down the image on mobile */
  }

  &:hover {
    transform: scale(1.1); /* Slightly scale the image */
    box-shadow: 0 0 20px 5px rgba(255, 0, 127, 0.7); /* Glow effect */
  }
`;

// Main App Component
function App() {
  const navigate = useNavigate(); // useNavigate hook to programmatically navigate

  const handleImageClick = () => {
    navigate('/love-story'); // Navigate to /love-story on image click
  };

  return (
    <>
      {/* Inject global styles */}
      <GlobalStyle />
      <AppContainer>
        <MessageContainer>
          <LoveTitle>Welcome My Love</LoveTitle>
          <LoveMessage>
            It's been 6 years since we met for the first time so closely and became friends.
          </LoveMessage>
        </MessageContainer>

        {/* Floating Text */}
        <FloatingText>✨ Together Forever ✨</FloatingText>

        {/* Couple hand image */}
        <HandImage
          src={hdHand} // Imported image
          alt="Couple Hand"
          onClick={handleImageClick} // Trigger on image click to navigate
        />
      </AppContainer>
    </>
  );
}

// App Wrapper with Routes
function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/love-story" element={<LoveStory />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;
