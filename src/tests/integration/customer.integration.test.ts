import request from 'supertest';
import app from '../../app';

describe('Customer Integration Tests', () => {
    it('should create a Customer', async () => {
        const payload = {};
        const response = await request(app).post('/customers').send(payload);
        expect(response.status).toBe(201);
    });

    it('should retrieve a Customer', async () => {
        const response = await request(app).get('/customers/1');
        expect(response.status).toBe(200);
    });

    it('should update a Customer', async () => {
        const payload = {};
        const response = await request(app).put('/customers/1').send(payload);
        expect(response.status).toBe(200);
    });

    it('should delete a Customer', async () => {
        const response = await request(app).delete('/customers/1');
        expect(response.status).toBe(200);
    });
});