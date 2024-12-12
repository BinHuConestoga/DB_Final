import request from 'supertest';
import app from '../../app';

describe('Mechanic_repair Integration Tests', () => {
    it('should create a Mechanic_repair', async () => {
        const payload = {};
        const response = await request(app).post('/mechanic_repairs').send(payload);
        expect(response.status).toBe(201);
    });

    it('should retrieve a Mechanic_repair', async () => {
        const response = await request(app).get('/mechanic_repairs/1');
        expect(response.status).toBe(200);
    });

    it('should update a Mechanic_repair', async () => {
        const payload = {};
        const response = await request(app).put('/mechanic_repairs/1').send(payload);
        expect(response.status).toBe(200);
    });

    it('should delete a Mechanic_repair', async () => {
        const response = await request(app).delete('/mechanic_repairs/1');
        expect(response.status).toBe(200);
    });
});