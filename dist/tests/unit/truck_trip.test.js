"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const truck_trip_service_1 = require("../../services/truck_trip.service");
describe('TruckTripService Unit Tests', () => {
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
        service = new truck_trip_service_1.TruckTripService(repository);
    });
    it('should create a TruckTrip', async () => {
        const mockData = {};
        repository.save.mockResolvedValue(mockData);
        const result = await service.create(mockData);
        expect(repository.save).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });
    it('should find a TruckTrip by ID', async () => {
        const mockData = {};
        repository.findOne.mockResolvedValue(mockData);
        const result = await service.findOne(1);
        expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockData);
    });
    it('should update a TruckTrip', async () => {
        const mockData = {};
        repository.update.mockResolvedValue(mockData);
        await service.update(1, mockData);
        expect(repository.update).toHaveBeenCalledWith(1, mockData);
    });
    it('should delete a TruckTrip', async () => {
        repository.delete.mockResolvedValue({ affected: 1 });
        const result = await service.remove(1);
        expect(repository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual({ affected: 1 });
    });
});
