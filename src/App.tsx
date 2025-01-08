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
            }}
          >
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Main body - more rounded like Spot */}
              <path 
                d="M 20 50 
                   Q 20 30 40 30 
                   L 70 30 
                   Q 90 30 90 50
                   Q 90 70 70 70
                   L 40 70
                   Q 20 70 20 50"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                strokeLinejoin="round"
              />
              
              {/* Head - characteristic side view */}
              <path 
                d="M 70 30
                   Q 85 30 85 45
                   Q 85 60 70 60
                   Q 55 60 55 45
                   Q 55 30 70 30"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              
              {/* Ear */}
              <path 
                d="M 75 35
                   Q 85 25 80 40"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              
              {/* Eye */}
              <circle cx="75" cy="45" r="2" fill="currentColor"/>
              
              {/* Nose */}
              <circle cx="82" cy="50" r="2" fill="currentColor"/>
              
              {/* Spots - characteristic round spots */}
              <circle cx="35" cy="45" r="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="55" cy="55" r="5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              
              {/* Simple tail */}
              <path 
                d="M 20 50
                   Q 10 50 15 40" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              
              {/* Legs - simple lines like in the books */}
              <line x1="35" y1="70" x2="35" y2="85" stroke="currentColor" strokeWidth="2"/>
              <line x1="75" y1="70" x2="75" y2="85" stroke="currentColor" strokeWidth="2"/>
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