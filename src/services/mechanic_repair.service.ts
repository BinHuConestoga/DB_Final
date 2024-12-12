import { Repository } from 'typeorm';
import { MechanicRepair } from '../entities/mechanic_repair.entity';

export class MechanicRepairService {
    constructor(private readonly repository: Repository<MechanicRepair>) {}

    async create(data: Partial<MechanicRepair>) {
        return this.repository.save(data);
    }

    async findOne(id: number) {
        return this.repository.findOneBy({ repair_id: id });
    }

    async findAll() {
        return this.repository.find();
    }

    async update(id: number, data: Partial<MechanicRepair>) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.repository.delete(id);
    }
}