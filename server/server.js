const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/railfan', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import routes
const historyRoutes = require('./routes/history');
const locomotiveRoutes = require('./routes/locomotives');
const trainRoutes = require('./routes/trains');
const zoneRoutes = require('./routes/zones');
const steamLocomotivesRoutes = require('./routes/steamLocomotives');
const dieselLocomotivesRoutes = require('./routes/dieselLocomotives');
const electricLocomotivesRoutes = require('./routes/electricLocomotives');

// Use routes
app.use('/api/history', historyRoutes);
app.use('/api/locomotives', locomotiveRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/zones', zoneRoutes);
app.use('/api/steam-locomotives', steamLocomotivesRoutes);
app.use('/api/diesel-locomotives', dieselLocomotivesRoutes);
app.use('/api/electric-locomotives', electricLocomotivesRoutes);

// Serve static files from the React app
app.use('/Images', express.static(path.join(__dirname, '../client/public/Images')));

// Serve React app for all non-API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api/')) return next();
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 