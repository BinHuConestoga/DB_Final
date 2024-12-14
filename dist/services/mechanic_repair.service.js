"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicRepairService = void 0;
class MechanicRepairService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        return this.repository.save(data);
    }
    async findOne(id) {
        return this.repository.findOneBy({ repair_id: id });
    }
    async findAll() {
        return this.repository.find();
    }
    async update(id, data) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }
    async remove(id) {
        return this.repository.delete(id);
    }
}
exports.MechanicRepairService = MechanicRepairService;
