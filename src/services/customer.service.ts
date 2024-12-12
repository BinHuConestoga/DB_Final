import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';

export class CustomerService {
    constructor(private readonly repository: Repository<Customer>) {}

    async create(data: Partial<Customer>) {
        return this.repository.save(data);
    }

    async findOne(id: number) {
        return this.repository.findOneBy({ customer_id: id });
    }

    async findAll() {
        return this.repository.find();
    }

    async update(id: number, data: Partial<Customer>) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.repository.delete(id);
    }
}