import { Repository } from 'typeorm';
import { Truck } from '../entities/truck.entity';

export class TruckService {
    constructor(private readonly repository: Repository<Truck>) {}

    async create(data: Partial<Truck>) {
        return this.repository.save(data);
    }

    async findOne(id: number) {
        return this.repository.findOneBy({ truck_id: id });
    }

    async findAll() {
        return this.repository.find();
    }

    async update(id: number, data: Partial<Truck>) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.repository.delete(id);
    }
}