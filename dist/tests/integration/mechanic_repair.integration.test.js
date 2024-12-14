"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../app"));
describe('Mechanic_repair Integration Tests', () => {
    it('should create a Mechanic_repair', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).post('/mechanic_repairs').send(payload);
        expect(response.status).toBe(201);
    });
    it('should retrieve a Mechanic_repair', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/mechanic_repairs/1');
        expect(response.status).toBe(200);
    });
    it('should update a Mechanic_repair', async () => {
        const payload = {};
        const response = await (0, supertest_1.default)(app_1.default).put('/mechanic_repairs/1').send(payload);
        expect(response.status).toBe(200);
    });
    it('should delete a Mechanic_repair', async () => {
        const response = await (0, supertest_1.default)(app_1.default).delete('/mechanic_repairs/1');
        expect(response.status).toBe(200);
    });
});
