import express from 'express';
import payload from 'payload';
import cors from 'cors';

require('dotenv').config();
const app = express();

const corsOptions = {
  origin: ['http://localhost:5173', 'http://pmo.kbtu.kz', 'https://pmo.kbtu.kz'], // Replace with your allowed origins
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  credentials: true, // Allow credentials
};
app.use(cors(corsOptions));

Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

const HOST = process.env.HOST || '0.0.0.0'; // Default to localhost
const PORT = parseInt(process.env.PORT || '3001', 10);

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
  });
}

start();
