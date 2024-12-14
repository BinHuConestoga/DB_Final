import request from 'supertest';
import app from '../../app';

describe('Employee Integration Tests', () => {
    it('should create a Employee', async () => {
        const payload = {};
        const response = await request(app).post('/employees').send(payload);
        expect(response.status).toBe(201);
    });

    it('should retrieve a Employee', async () => {
        const response = await request(app).get('/employees/1');
        expect(response.status).toBe(200);
    });

    it('should update a Employee', async () => {
        const payload = {};
        const response = await request(app).put('/employees/1').send(payload);
        expect(response.status).toBe(200);
    });

    it('should delete a Employee', async () => {
        const response = await request(app).delete('/employees/1');
        expect(response.status).toBe(200);
    });
});