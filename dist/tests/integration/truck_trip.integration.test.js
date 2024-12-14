"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe('Truck_trip Integration Tests', () => {
    it('should create a Truck_trip', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).post('/truck_trips').send(payload);
        expect(response.status).toBe(201);
    });
    it('should retrieve a Truck_trip', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/truck_trips/1');
        expect(response.status).toBe(200);
    });
    it('should update a Truck_trip', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).put('/truck_trips/1').send(payload);
        expect(response.status).toBe(200);
    });
    it('should delete a Truck_trip', async () => {
        const response = await (0, supertest_1.default)(app_1.default).delete('/truck_trips/1');
        expect(response.status).toBe(200);
    });
});
