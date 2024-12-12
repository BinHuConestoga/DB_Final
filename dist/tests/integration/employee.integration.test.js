"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe('Employee Integration Tests', () => {
    it('should create a Employee', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).post('/employees').send(payload);
        expect(response.status).toBe(201);
    });
    it('should retrieve a Employee', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/employees/1');
        expect(response.status).toBe(200);
    });
    it('should update a Employee', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).put('/employees/1').send(payload);
        expect(response.status).toBe(200);
    });
    it('should delete a Employee', async () => {
        const response = await (0, supertest_1.default)(app_1.default).delete('/employees/1');
        expect(response.status).toBe(200);
    });
});
