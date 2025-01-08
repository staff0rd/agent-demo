import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Define rotation animation
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
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          py: 4,
          px: 2,
        }}
      >
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
            animation: `${rotate} 20s linear infinite`,
            width: '300px',
            height: '300px',
          }}
        >
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            {/* Outer ring */}
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Inner patterns */}
            <g opacity="0.7">
              {[0, 60, 120].map((rotation) => (
                <path
                  key={rotation}
                  d="M50 5 L95 50 L50 95 L5 50 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  vectorEffect="non-scaling-stroke"
                  transform={`rotate(${rotation}, 50, 50)`}
                />
              ))}
            </g>
            
            {/* Center elements */}
            <circle 
              cx="50" 
              cy="50" 
              r="25" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="0.75"
              vectorEffect="non-scaling-stroke"
            />
            <circle 
              cx="50" 
              cy="50" 
              r="10" 
              fill="currentColor"
            />
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
    </Container>
  );
}

export default App;