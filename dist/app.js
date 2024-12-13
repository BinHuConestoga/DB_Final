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

// Import the DataSource (database configuration)
const { AppDataSource } = require('./data-source'); // Update if needed to import from your source file

const app = (0, express_1.default)();
const port = process.env.PORT || 3000;

// Initialize database connection and then start the server
AppDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');

        // Register Routes only after the DB connection is successful
        app.use('/api/employee', employee_routes_1.default);
        app.use('/api/truck', truck_routes_1.default);
        app.use('/api/mechanic_specialty', mechanic_specialty_routes_1.default);
        app.use('/api/mechanic_repair', mechanic_repair_routes_1.default);
        app.use('/api/truck_trip', truck_trip_routes_1.default);
        app.use('/api/shipment', shipment_routes_1.default);
        app.use('/api/customer', customer_routes_1.default);

        // Start the server after DB connection is successful
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log('Error during Data Source initialization:', error);
        process.exit(1); // Exit if DB connection fails
    });