"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const employee_routes_1 = __importDefault(require("./routes/employee.routes"));
const truck_routes_1 = __importDefault(require("./routes/truck.routes"));
const mechanic_specialty_routes_1 = __importDefault(require("./routes/mechanic_specialty.routes"));
const mechanic_repair_routes_1 = __importDefault(require("./routes/mechanic_repair.routes"));
const truck_trip_routes_1 = __importDefault(require("./routes/truck_trip.routes"));
const shipment_routes_1 = __importDefault(require("./routes/shipment.routes"));
const customer_routes_1 = __importDefault(require("./routes/customer.routes"));
require("reflect-metadata");

const AppDataSource = require('./data-source').default;  // Ensure correct import

const app = (0, express_1.default)();

// Function to check if the database is available 
const waitForDatabase = async (retries = 5, delay = 5000) => {
  while (retries) {
    try {
      console.log('Initializing database connection...');
      await AppDataSource.initialize(); // Try to initialize the DB connection
      console.log("Database connected successfully!");
      return;
    } catch (error) {
      console.error(`Database connection attempt failed: ${error.message}`);
      retries -= 1;
      if (!retries) throw new Error("Database connection failed after multiple attempts");
      await new Promise(resolve => setTimeout(resolve, delay)); // Wait before retrying
    }
  }
};

waitForDatabase()
  .then(() => {
    // Middleware
    app.use(express_1.default.json());

    // Routes
    app.use('/employees', employee_routes_1.default);
    app.use('/trucks', truck_routes_1.default);
    app.use('/mechanic-specialties', mechanic_specialty_routes_1.default);
    app.use('/mechanic-repairs', mechanic_repair_routes_1.default);
    app.use('/truck-trips', truck_trip_routes_1.default);
    app.use('/shipments', shipment_routes_1.default);
    app.use('/customers', customer_routes_1.default);

    // Start the server only after the DB connection
    app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
    process.exit(1);  // Exit the application if DB connection fails 
  });

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: err.message || 'Something went wrong!' });
});

exports.default = app;