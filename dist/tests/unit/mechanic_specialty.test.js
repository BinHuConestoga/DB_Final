"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mechanic_specialty_service_1 = require("../../services/mechanic_specialty.service");
describe('MechanicSpecialtyService Unit Tests', () => {
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
        service = new mechanic_specialty_service_1.MechanicSpecialtyService(repository);
    });
    it('should create a MechanicSpecialty', async () => {
        const mockData = {};
        repository.save.mockResolvedValue(mockData);
        const result = await service.create(mockData);
        expect(repository.save).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });
    it('should find a MechanicSpecialty by ID', async () => {
        const mockData = {};
        repository.findOne.mockResolvedValue(mockData);
        const result = await service.findOne(1);
        expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockData);
    });
    it('should update a MechanicSpecialty', async () => {
        const mockData = {};
        repository.update.mockResolvedValue(mockData);
        await service.update(1, mockData);
        expect(repository.update).toHaveBeenCalledWith(1, mockData);
    });
    it('should delete a MechanicSpecialty', async () => {
        repository.delete.mockResolvedValue({ affected: 1 });
        const result = await service.remove(1);
        expect(repository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual({ affected: 1 });
    });
});
