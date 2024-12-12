import express, { Request, Response, NextFunction } from 'express';
import employeeRoutes from './routes/employee.routes';
import truckRoutes from './routes/truck.routes';
import mechanicSpecialtyRoutes from './routes/mechanic_specialty.routes';
import mechanicRepairRoutes from './routes/mechanic_repair.routes';
import truckTripRoutes from './routes/truck_trip.routes';
import shipmentRoutes from './routes/shipment.routes';
import customerRoutes from './routes/customer.routes';
import "reflect-metadata";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/employees', employeeRoutes);
app.use('/trucks', truckRoutes);
app.use('/mechanic-specialties', mechanicSpecialtyRoutes);
app.use('/mechanic-repairs', mechanicRepairRoutes);
app.use('/truck-trips', truckTripRoutes);
app.use('/shipments', shipmentRoutes);
app.use('/customers', customerRoutes);

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send({ error: err.message || 'Something went wrong!' });
});

export default app;
