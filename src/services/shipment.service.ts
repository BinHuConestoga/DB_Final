import { Repository } from 'typeorm';
import { Shipment } from '../entities/shipment.entity';

export class ShipmentService {
    constructor(private readonly repository: Repository<Shipment>) {}

    async create(data: Partial<Shipment>) {
        return this.repository.save(data);
    }

    async findOne(id: number) {
        return this.repository.findOneBy({ shipment_id: id });
    }

    async findAll() {
        return this.repository.find();
    }

    async update(id: number, data: Partial<Shipment>) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.repository.delete(id);
    }
}