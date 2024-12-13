"use strict";
import express from "express";
import employeeRoutes from "./routes/employee.routes";
import truckRoutes from "./routes/truck.routes";
import mechanicSpecialtyRoutes from "./routes/mechanic_specialty.routes";
import mechanicRepairRoutes from "./routes/mechanic_repair.routes";
import truckTripRoutes from "./routes/truck_trip.routes";
import shipmentRoutes from "./routes/shipment.routes";
import customerRoutes from "./routes/customer.routes";
import "reflect-metadata";

// Import the DataSource (database configuration)
import AppDataSource from './data-source';  // Corrected to use ESModule import

const app = express();
const port = process.env.PORT || 3000;

// Initialize database connection and then start the server
AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');

    // Register Routes only after the DB connection is successful
    app.use('/api/employee', employeeRoutes);
    app.use('/api/truck', truckRoutes);
    app.use('/api/mechanic_specialty', mechanicSpecialtyRoutes);
    app.use('/api/mechanic_repair', mechanicRepairRoutes);
    app.use('/api/truck_trip', truckTripRoutes);
    app.use('/api/shipment', shipmentRoutes);
    app.use('/api/customer', customerRoutes);

    // Start the server after DB connection is successful
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log('Error during Data Source initialization:', error);
    process.exit(1); // Exit if DB connection fails
  });