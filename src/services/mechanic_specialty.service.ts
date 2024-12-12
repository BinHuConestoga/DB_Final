import { Repository } from 'typeorm';
import { MechanicSpecialty } from '../entities/mechanic_specialty.entity';

export class MechanicSpecialtyService {
    constructor(private readonly repository: Repository<MechanicSpecialty>) {}

    async create(data: Partial<MechanicSpecialty>) {
        return this.repository.save(data);
    }

    async findOne(id: number) {
        return this.repository.findOneBy({ specialty_id: id });
    }

    async findAll() {
        return this.repository.find();
    }

    async update(id: number, data: Partial<MechanicSpecialty>) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.repository.delete(id);
    }
}