
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

export class EmployeeService {
    constructor(private readonly repository: Repository<Employee>) {}

    async create(data: Partial<Employee>) {
        return this.repository.save(data);
    }

    async findOne(id: number) {
        return this.repository.findOneBy({ employee_id: id });
    }

    async findAll() {
        return this.repository.find();
    }

    async update(id: number, data: Partial<Employee>) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.repository.delete(id);
    }
}
