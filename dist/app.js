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

const AppDataSource = require('./data-source').default;  // Import your AppDataSource

const app = (0, express_1.default)();

// Initialize database connection first
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully!");

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

    // Start the server after DB connection
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