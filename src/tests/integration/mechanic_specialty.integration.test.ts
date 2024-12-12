import request from 'supertest';
import app from '../../app';

describe('Mechanic_specialty Integration Tests', () => {
    it('should create a Mechanic_specialty', async () => {
        const payload = {};
        const response = await request(app).post('/mechanic_specialtys').send(payload);
        expect(response.status).toBe(201);
    });

    it('should retrieve a Mechanic_specialty', async () => {
        const response = await request(app).get('/mechanic_specialtys/1');
        expect(response.status).toBe(200);
    });

    it('should update a Mechanic_specialty', async () => {
        const payload = {};
        const response = await request(app).put('/mechanic_specialtys/1').send(payload);
        expect(response.status).toBe(200);
    });

    it('should delete a Mechanic_specialty', async () => {
        const response = await request(app).delete('/mechanic_specialtys/1');
        expect(response.status).toBe(200);
    });
});