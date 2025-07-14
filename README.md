# RailFan - MERN Stack Application

A comprehensive railway enthusiast website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- **History Timeline**: Interactive timeline with animated train icon and scroll-triggered cards
- **Locomotives**: Detailed information about steam, diesel, and electric locomotives
- **Trains**: Comprehensive database of Indian Railways trains
- **Zones**: Information about all Indian Railway zones
- **Responsive Design**: Modern UI/UX preserved from the original design
- **Dynamic Content**: All data served from MongoDB database

## Project Structure

```
RailFan/
├── client/                 # React frontend
│   ├── public/
│   │   ├── Images/        # All static images
│   │   └── index.html
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main app component
│   └── package.json
├── server/                 # Express backend
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── server.js          # Express server
│   ├── seed.js            # Database seeding script
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Installation

### 1. Clone the repository
```bash
git clone <repository-url>
cd RailFan
```

### 2. Install dependencies

#### Frontend (React)
```bash
cd client
npm install
```

#### Backend (Express)
```bash
cd ../server
npm install
```

### 3. Environment Setup

Create a `.env` file in the server directory:
```bash
cd server
touch .env
```

Add the following to `.env`:
```
MONGODB_URI=mongodb://localhost:27017/railfan
PORT=5000
```

### 4. Database Setup

#### Option A: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Run the seed script:
```bash
cd server
node seed.js
```

#### Option B: MongoDB Atlas
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update the MONGODB_URI in `.env`
5. Run the seed script:
```bash
cd server
node seed.js
```

## Running the Application

### Development Mode

#### Start the backend server:
```bash
cd server
npm run dev
```

#### Start the React frontend (in a new terminal):
```bash
cd client
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

### Production Mode

#### Build the React app:
```bash
cd client
npm run build
```

#### Start the production server:
```bash
cd server
npm start
```

The application will be available at http://localhost:5000

## API Endpoints

### History
- `GET /api/history` - Get all history events
- `GET /api/history/:id` - Get specific history event
- `POST /api/history` - Create new history event
- `PUT /api/history/:id` - Update history event
- `DELETE /api/history/:id` - Delete history event

### Locomotives
- `GET /api/locomotives` - Get all locomotives
- `GET /api/locomotives/type/:type` - Get locomotives by type
- `GET /api/locomotives/:id` - Get specific locomotive
- `POST /api/locomotives` - Create new locomotive
- `PUT /api/locomotives/:id` - Update locomotive
- `DELETE /api/locomotives/:id` - Delete locomotive

### Trains
- `GET /api/trains` - Get all trains
- `GET /api/trains/category/:category` - Get trains by category
- `GET /api/trains/:id` - Get specific train
- `POST /api/trains` - Create new train
- `PUT /api/trains/:id` - Update train
- `DELETE /api/trains/:id` - Delete train

### Zones
- `GET /api/zones` - Get all zones
- `GET /api/zones/region/:region` - Get zones by region
- `GET /api/zones/:id` - Get specific zone
- `POST /api/zones` - Create new zone
- `PUT /api/zones/:id` - Update zone
- `DELETE /api/zones/:id` - Delete zone

## Key Features Implemented

### ✅ Completed
- [x] MERN stack conversion from static HTML
- [x] MongoDB database with all content
- [x] Express.js API with full CRUD operations
- [x] React frontend with routing
- [x] History page with timeline and animated train
- [x] Locomotives page with dynamic content
- [x] Trains and Zones pages
- [x] Preserved original UI/UX design
- [x] Removed Blogs section as requested
- [x] Added History section with scroll-triggered cards
- [x] No modals on card clicks
- [x] Same structure for locomotive types (steam, diesel, electric)

### 🎨 Design Features
- Responsive design with Tailwind CSS
- Smooth animations and transitions
- Interactive timeline with train animation
- Scroll-triggered card reveals
- Preserved original color scheme and typography
- Font Awesome icons integration

## Technologies Used

### Frontend
- React.js 18
- TypeScript
- React Router DOM
- Tailwind CSS
- Font Awesome

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- CORS

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Acknowledgments

- Original RailFan design and content
- Indian Railways for inspiration
- MERN stack community 