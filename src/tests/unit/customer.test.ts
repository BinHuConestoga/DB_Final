import { CustomerService } from '../../services/customer.service';
import { Repository } from 'typeorm';
import { Customer } from '../../entities/customer.entity';

describe('CustomerService Unit Tests', () => {
    let service: CustomerService;
    let repository: Partial<Repository<Customer>>;

    beforeEach(() => {
        repository = {
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new CustomerService(repository as Repository<Customer>);
    });

    it('should create a Customer', async () => {
        const mockData = {};
        (repository.save as jest.Mock).mockResolvedValue(mockData);
        const result = await service.create(mockData);
        expect(repository.save).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });

    it('should find a Customer by ID', async () => {
        const mockData = {};
        (repository.findOne as jest.Mock).mockResolvedValue(mockData);
        const result = await service.findOne(1);
        expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockData);
    });

    it('should update a Customer', async () => {
        const mockData = {};
        (repository.update as jest.Mock).mockResolvedValue(mockData);
        await service.update(1, mockData);
        expect(repository.update).toHaveBeenCalledWith(1, mockData);
    });

    it('should delete a Customer', async () => {
        (repository.delete as jest.Mock).mockResolvedValue({ affected: 1 });
        const result = await service.remove(1);
        expect(repository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual({ affected: 1 });
    });
});