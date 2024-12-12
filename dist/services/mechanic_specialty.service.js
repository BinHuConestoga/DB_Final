"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MechanicSpecialtyService = void 0;
class MechanicSpecialtyService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(data) {
        return this.repository.save(data);
    }
    async findOne(id) {
        return this.repository.findOneBy({ specialty_id: id });
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
exports.MechanicSpecialtyService = MechanicSpecialtyService;
