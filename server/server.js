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

// Use routes
app.use('/api/history', historyRoutes);
app.use('/api/locomotives', locomotiveRoutes);
app.use('/api/trains', trainRoutes);
app.use('/api/zones', zoneRoutes);

// Serve static files from the React app
app.use('/Images', express.static(path.join(__dirname, '../client/public/Images')));

// Catch all handler: send back React's index.html file for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 