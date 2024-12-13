import { DataSource } from 'typeorm';
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'db',  // Make sure this matches your docker container name
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'RoadFreightTransportation',
  synchronize: true,  // Set to false in production
  logging: true,
  entities: isProduction
    ? [
        path.join(__dirname, 'dist', 'entities', 'customer.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'employee.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'mechanic_repair.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'mechanic_specialty.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'shipment.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'truck.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'truck_trip.entity.js'),
      ]import { DataSource } from 'typeorm';
import path from 'path';
require('dotenv').config();  // Ensure dotenv is loaded

const isProduction = process.env.NODE_ENV === 'production';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'db',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'RoadFreightTransportation',
  synchronize: true,  // Set to false in production
  logging: true,
  entities: isProduction
    ? [
        path.join(__dirname, 'dist', 'entities', 'customer.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'employee.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'mechanic_repair.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'mechanic_specialty.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'shipment.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'truck.entity.js'),
        path.join(__dirname, 'dist', 'entities', 'truck_trip.entity.js'),
      ]
    : [
        path.join(__dirname, 'src', 'entities', 'customer.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'employee.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'mechanic_repair.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'mechanic_specialty.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'shipment.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'truck.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'truck_trip.entity.ts'),
      ],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
    : [
        path.join(__dirname, 'src', 'entities', 'customer.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'employee.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'mechanic_repair.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'mechanic_specialty.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'shipment.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'truck.entity.ts'),
        path.join(__dirname, 'src', 'entities', 'truck_trip.entity.ts'),
      ],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;