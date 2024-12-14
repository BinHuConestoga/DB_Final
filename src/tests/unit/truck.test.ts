import { TruckService } from '../../services/truck.service';
import { Repository } from 'typeorm';
import { Truck } from '../../entities/truck.entity';

describe('TruckService Unit Tests', () => {
    let service: TruckService;
    let repository: Partial<Repository<Truck>>;

    beforeEach(() => {
        repository = {
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new TruckService(repository as Repository<Truck>);
    });

    it('should create a Truck', async () => {
        const mockData = {};
        (repository.save as jest.Mock).mockResolvedValue(mockData);
        const result = await service.create(mockData);
        expect(repository.save).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });

    it('should find a Truck by ID', async () => {
        const mockData = {};
        (repository.findOne as jest.Mock).mockResolvedValue(mockData);
        const result = await service.findOne(1);
        expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockData);
    });

    it('should update a Truck', async () => {
        const mockData = {};
        (repository.update as jest.Mock).mockResolvedValue(mockData);
        await service.update(1, mockData);
        expect(repository.update).toHaveBeenCalledWith(1, mockData);
    });

    it('should delete a Truck', async () => {
        (repository.delete as jest.Mock).mockResolvedValue({ affected: 1 });
        const result = await service.remove(1);
        expect(repository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual({ affected: 1 });
    });
});