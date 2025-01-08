import express from 'express';
import { exec } from 'child_process';
import { createServer } from 'vite';

const app = express();
app.use(express.json());

const PORT = 3001;

// Function to pull changes and restart Vite
const updateAndRestart = async () => {
  console.log('🔄 Received webhook, pulling changes...');
  
  exec('git pull', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error pulling changes: ${error}`);
      return;
    }
    console.log(`Git pull output: ${stdout}`);
    
    // Run npm install in case dependencies changed
    exec('npm install', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error running npm install: ${error}`);
        return;
      }
      console.log(`npm install output: ${stdout}`);
      
      console.log('✅ Updates completed');
    });
  });
};

// GitHub webhook endpoint
app.post('/webhook', (req, res) => {
  // You might want to add GitHub webhook secret validation here
  updateAndRestart();
  res.status(200).send('Webhook received');
});

// Start the webhook server
app.listen(PORT, () => {
  console.log(`🚀 Webhook server running on port ${PORT}`);
});