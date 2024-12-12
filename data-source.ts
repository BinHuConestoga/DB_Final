import { DataSource } from 'typeorm';
import { Customer } from './entities/customer.entity';
import { Employee } from './entities/employee.entity';
import { MechanicRepair } from './entities/mechanic_repair.entity';
import { MechanicSpecialty } from './entities/mechanic_specialty.entity';
import { Shipment } from './entities/shipment.entity';
import { Truck } from './entities/truck.entity';
import { TruckTrip } from './entities/truck_trip.entity';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'db',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'RoadFreightTransportation',
  synchronize: true,  // Caution with synchronize in production
  logging: true,
  entities: [
    Customer,
    Employee,
    MechanicRepair,
    MechanicSpecialty,
    Shipment,
    Truck,
    TruckTrip,  // Add all your entities here
  ],
});

export default AppDataSource;