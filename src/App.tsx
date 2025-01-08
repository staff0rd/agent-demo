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
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              {/* Face */}
              <circle cx="50" cy="50" r="30" fill="#000000"/>
              
              {/* Ears */}
              <circle cx="25" cy="25" r="15" fill="#000000"/>
              <circle cx="75" cy="25" r="15" fill="#000000"/>
              
              {/* Face area */}
              <path 
                d="M 35 40 
                   Q 50 65 65 40" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="3"
              />
              
              {/* Eyes */}
              <ellipse cx="40" cy="45" rx="8" ry="12" fill="#FFFFFF"/>
              <ellipse cx="60" cy="45" rx="8" ry="12" fill="#FFFFFF"/>
              <circle cx="43" cy="48" r="3" fill="#000000"/>
              <circle cx="63" cy="48" r="3" fill="#000000"/>
              
              {/* Nose */}
              <ellipse cx="50" cy="52" rx="5" ry="3" fill="#FFFFFF"/>
              
              {/* Mouth */}
              <path 
                d="M 35 58 
                   Q 50 65 65 58" 
                fill="none" 
                stroke="#FFFFFF" 
                strokeWidth="3"
              />

              {/* Classic pie-cut eyes */}
              <path 
                d="M 35 45 
                   L 45 45" 
                stroke="#000000" 
                strokeWidth="1"
              />
              <path 
                d="M 55 45 
                   L 65 45" 
                stroke="#000000" 
                strokeWidth="1"
              />
              
              {/* Classic details */}
              <line x1="48" y1="52" x2="52" y2="52" stroke="#000000" strokeWidth="1"/>
              
              {/* White circles at ear bases for classic look */}
              <circle cx="25" cy="30" r="3" fill="#FFFFFF"/>
              <circle cx="75" cy="30" r="3" fill="#FFFFFF"/>
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