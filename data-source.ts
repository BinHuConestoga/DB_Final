import { DataSource } from 'typeorm';
import path from 'path';
require('dotenv').config();  // Ensure dotenv is loaded

const isProduction = process.env.NODE_ENV === 'production';

console.log("Initializing TypeORM DataSource...");

const AppDataSource = new DataSource({
  name: 'customConnection',  // Explicitly naming the connection
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'db',  // Using the db service from docker-compose
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'RoadFreightTransportation',
  synchronize: true,  // Set to false in production for safety
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

console.log("TypeORM DataSource initialized");

export default AppDataSource;