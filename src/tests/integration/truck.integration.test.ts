import request from 'supertest';
import app from '../../app';

describe('Truck Integration Tests', () => {
    it('should create a Truck', async () => {
        const payload = {};
        const response = await request(app).post('/trucks').send(payload);
        expect(response.status).toBe(201);
    });

    it('should retrieve a Truck', async () => {
        const response = await request(app).get('/trucks/1');
        expect(response.status).toBe(200);
    });

    it('should update a Truck', async () => {
        const payload = {};
        const response = await request(app).put('/trucks/1').send(payload);
        expect(response.status).toBe(200);
    });

    it('should delete a Truck', async () => {
        const response = await request(app).delete('/trucks/1');
        expect(response.status).toBe(200);
    });
});