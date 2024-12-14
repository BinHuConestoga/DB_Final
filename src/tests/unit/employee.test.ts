import { EmployeeService } from '../../services/employee.service';
import { Repository } from 'typeorm';
import { Employee } from '../../entities/employee.entity';

describe('EmployeeService Unit Tests', () => {
    let service: EmployeeService;
    let repository: Partial<Repository<Employee>>;

    beforeEach(() => {
        repository = {
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new EmployeeService(repository as Repository<Employee>);
    });

    it('should create a Employee', async () => {
        const mockData = {};
        (repository.save as jest.Mock).mockResolvedValue(mockData);
        const result = await service.create(mockData);
        expect(repository.save).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });

    it('should find a Employee by ID', async () => {
        const mockData = {};
        (repository.findOne as jest.Mock).mockResolvedValue(mockData);
        const result = await service.findOne(1);
        expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockData);
    });

    it('should update a Employee', async () => {
        const mockData = {};
        (repository.update as jest.Mock).mockResolvedValue(mockData);
        await service.update(1, mockData);
        expect(repository.update).toHaveBeenCalledWith(1, mockData);
    });

    it('should delete a Employee', async () => {
        (repository.delete as jest.Mock).mockResolvedValue({ affected: 1 });
        const result = await service.remove(1);
        expect(repository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual({ affected: 1 });
    });
});