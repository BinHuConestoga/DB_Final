import request from 'supertest';
import app from '../../app';

describe('Truck_trip Integration Tests', () => {
    it('should create a Truck_trip', async () => {
        const payload = {};
        const response = await request(app).post('/truck_trips').send(payload);
        expect(response.status).toBe(201);
    });

    it('should retrieve a Truck_trip', async () => {
        const response = await request(app).get('/truck_trips/1');
        expect(response.status).toBe(200);
    });

    it('should update a Truck_trip', async () => {
        const payload = {};
        const response = await request(app).put('/truck_trips/1').send(payload);
        expect(response.status).toBe(200);
    });

    it('should delete a Truck_trip', async () => {
        const response = await request(app).delete('/truck_trips/1');
        expect(response.status).toBe(200);
    });
});