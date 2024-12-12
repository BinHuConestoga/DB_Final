import request from 'supertest';
import app from '../../app';

describe('Shipment Integration Tests', () => {
    it('should create a Shipment', async () => {
        const payload = {};
        const response = await request(app).post('/shipments').send(payload);
        expect(response.status).toBe(201);
    });

    it('should retrieve a Shipment', async () => {
        const response = await request(app).get('/shipments/1');
        expect(response.status).toBe(200);
    });

    it('should update a Shipment', async () => {
        const payload = {};
        const response = await request(app).put('/shipments/1').send(payload);
        expect(response.status).toBe(200);
    });

    it('should delete a Shipment', async () => {
        const response = await request(app).delete('/shipments/1');
        expect(response.status).toBe(200);
    });
});