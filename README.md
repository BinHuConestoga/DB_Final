# Road Freight Transportation System

This project is a backend system for a road freight transportation company. It includes:
- A PostgreSQL database with tables for trucks, employees, customers, shipments, and more.
- CRUD APIs for interacting with the database.
- Unit and integration tests.
- Migration scripts to populate the database with initial data.
- Docker configuration for containerized deployment.

## Setup

### Prerequisites
- Node.js
- PostgreSQL
- Docker and Docker Compose

### Setup
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start the services using Docker Compose:
   ```
   docker-compose up
   ```
4. Apply database migrations:
   ```
   psql -U postgres -d RoadFreightTransportation -f migration.sql
   ```

### Testing
Run unit tests:
```
npm test
```

Run integration tests:
```
npm run integration-tests
```