import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@mui/system';
import DogFact from './components/DogFact';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

function App() {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          py: 4,
          px: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              writingMode: 'vertical-rl',
              transform: 'rotate(180deg)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Agent
          </Typography>

          <Box
            sx={{
              animation: `${rotate} 40s linear infinite`, // Doubled from 20s to 40s
              width: '300px',
              height: '300px',
            }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Body */}
              <circle cx="50" cy="55" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Head */}
              <circle cx="50" cy="25" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Ears */}
              <path d="M40 15 L35 5 L45 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M60 15 L65 5 L55 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Eyes */}
              <circle cx="45" cy="22" r="2" fill="currentColor"/>
              <circle cx="55" cy="22" r="2" fill="currentColor"/>
              
              {/* Nose */}
              <circle cx="50" cy="27" r="3" fill="currentColor"/>
              
              {/* Spots */}
              <circle cx="35" cy="45" r="5" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="65" cy="60" r="7" fill="none" stroke="currentColor" strokeWidth="1"/>
              <circle cx="45" cy="70" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
              
              {/* Tail */}
              <path d="M75 45 Q85 35 80 25" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Legs */}
              <line x1="35" y1="85" x2="35" y2="95" stroke="currentColor" strokeWidth="2"/>
              <line x1="45" y1="85" x2="45" y2="95" stroke="currentColor" strokeWidth="2"/>
              <line x1="55" y1="85" x2="55" y2="95" stroke="currentColor" strokeWidth="2"/>
              <line x1="65" y1="85" x2="65" y2="95" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </Box>

          <Typography 
            variant="h2" 
            sx={{ 
              writingMode: 'vertical-rl',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontWeight: 'bold',
              color: 'primary.main'
            }}
          >
            Demo
          </Typography>
        </Box>
        
        <DogFact />
      </Box>
    </Container>
  );
}

export default App;