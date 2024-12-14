"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const employee_service_1 = require("../../services/employee.service");
describe('EmployeeService Unit Tests', () => {
    let service;
    let repository;
    beforeEach(() => {
        repository = {
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new employee_service_1.EmployeeService(repository);
    });
    it('should create a Employee', async () => {
        const mockData = {};
        repository.save.mockResolvedValue(mockData);
        const result = await service.create(mockData);
        expect(repository.save).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });
    it('should find a Employee by ID', async () => {
        const mockData = {};
        repository.findOne.mockResolvedValue(mockData);
        const result = await service.findOne(1);
        expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockData);
    });
    it('should update a Employee', async () => {
        const mockData = {};
        repository.update.mockResolvedValue(mockData);
        await service.update(1, mockData);
        expect(repository.update).toHaveBeenCalledWith(1, mockData);
    });
    it('should delete a Employee', async () => {
        repository.delete.mockResolvedValue({ affected: 1 });
        const result = await service.remove(1);
        expect(repository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual({ affected: 1 });
    });
});
