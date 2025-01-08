import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { Dog } from 'lucide-react';

interface DogFact {
  facts: string[];
}

const DogFact = () => {
  const [fact, setFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const fetchDogFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog-api.kinduff.com/api/facts');
      const data: DogFact = await response.json();
      setFact(data.facts[0]);
      setError('');
    } catch (err) {
      setError('Failed to fetch dog fact. Please try again.');
      console.error('Error fetching dog fact:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogFact();
  }, []);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        gap: 3,
        width: '100%',
        maxWidth: '600px',
        mx: 'auto',
        p: 3,
        borderRadius: 2,
        bgcolor: 'rgba(255, 255, 255, 0.05)',
      }}
    >
      <Typography variant="h6" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Dog size={24} />
        Random Dog Fact
      </Typography>
      
      <Box sx={{ 
        minHeight: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        transition: 'all 0.3s ease-in-out'
      }}>
        {loading ? (
          <CircularProgress size={24} color="primary" />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : (
          <Typography 
            variant="body1" 
            sx={{ 
              textAlign: 'center',
              lineHeight: 1.6,
              opacity: loading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out'
            }}
          >
            {fact}
          </Typography>
        )}
      </Box>

      <Button
        variant="contained"
        onClick={fetchDogFact}
        disabled={loading}
        startIcon={<Dog size={16} />}
        sx={{
          textTransform: 'none',
          mt: 2
        }}
      >
        Fetch New Fact
      </Button>
    </Box>
  );
};

export default DogFact;