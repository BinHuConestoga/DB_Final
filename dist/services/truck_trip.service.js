"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TruckTripService = void 0;
class TruckTripService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        return this.repository.save(data);
    }
    async findOne(id) {
        return this.repository.findOne({
            where: { trip_id: id },
            relations: ['truck', 'driver1', 'driver2', 'shipment']
        });
    }
    async findAll() {
        return this.repository.find({
            relations: ['truck', 'driver1', 'driver2', 'shipment']
        });
    }
    async update(id, data) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        return this.repository.delete(id);
    }
}
exports.TruckTripService = TruckTripService;
