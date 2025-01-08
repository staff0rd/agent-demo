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
              animation: `${rotate} 40s linear infinite`,
              width: '300px',
              height: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg 
              viewBox="-10 -10 120 120" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', height: '100%' }}
            >
              {/* Body */}
              <circle cx="50" cy="55" r="35" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Head */}
              <circle cx="50" cy="25" r="18" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Ears */}
              <path d="M35 15 Q30 5 40 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M65 15 Q70 5 60 15" fill="none" stroke="currentColor" strokeWidth="2"/>
              
              {/* Eyes */}
              <circle cx="43" cy="22" r="2.5" fill="currentColor"/>
              <circle cx="57" cy="22" r="2.5" fill="currentColor"/>
              
              {/* Nose */}
              <circle cx="50" cy="28" r="3.5" fill="currentColor"/>
              
              {/* Spots */}
              <circle cx="35" cy="45" r="8" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="65" cy="60" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="45" cy="70" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              
              {/* Tail - now more curved and playful */}
              <path d="M80 50 Q95 40 90 25" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              
              {/* Legs - slightly thicker and more spaced */}
              <line x1="30" y1="85" x2="30" y2="100" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="43" y1="85" x2="43" y2="100" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="57" y1="85" x2="57" y2="100" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="70" y1="85" x2="70" y2="100" stroke="currentColor" strokeWidth="2.5"/>
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