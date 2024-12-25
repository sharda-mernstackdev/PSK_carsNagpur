const express = require('express');
const cors = require('cors');
const path = require('path');
const {connectDB}  = require('./db.js');
const userRoutes = require('./routes/AllRoutes.js');
const carsRoutes= require ('./routes/carRoutes.js')
const cartRoutes = require ('./routes/cartRoutes.js')
const TestDriveRoutes = require ('./routes/testDriveRoutes.js')
const newCarRoutes = require ('./routes/newCarRoutes.js')
const app = express();
const port = 3000;


// Connect to the database
connectDB();

// Define allowed origins (you can include both localhost and public IP for production)
const allowedOrigins = ['http://localhost:3001', 'http://13.126.75.239:3000','http://13.126.75.239','http://13.126.75.239:3001'];

// CORS middleware with dynamic origin handling
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Reject the request
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allow these HTTP methods
  credentials: true // Allow cookies and credentials
}));

// Middleware to parse JSON
app.use(express.json());

app.use(express.static(path.join(__dirname, "../build")));

//deploy
// Use routes
app.use("/api/users", userRoutes);
app.use("/api/cars", carsRoutes );
app.use('/api/cart', cartRoutes);
app.use('/api/testDrive', TestDriveRoutes)
app.use('/api/newCars', newCarRoutes )

	app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
