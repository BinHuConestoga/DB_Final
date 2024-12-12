"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe('Customer Integration Tests', () => {
    it('should create a Customer', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).post('/customers').send(payload);
        expect(response.status).toBe(201);
    });
    it('should retrieve a Customer', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/customers/1');
        expect(response.status).toBe(200);
    });
    it('should update a Customer', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).put('/customers/1').send(payload);
        expect(response.status).toBe(200);
    });
    it('should delete a Customer', async () => {
        const response = await (0, supertest_1.default)(app_1.default).delete('/customers/1');
        expect(response.status).toBe(200);
    });
});
