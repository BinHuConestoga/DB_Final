import { ShipmentService } from '../../services/shipment.service';
import { Repository } from 'typeorm';
import { Shipment } from '../../entities/shipment.entity';

describe('ShipmentService Unit Tests', () => {
    let service: ShipmentService;
    let repository: Partial<Repository<Shipment>>;

    beforeEach(() => {
        repository = {
            save: jest.fn(),
            findOne: jest.fn(),
            find: jest.fn(),
            update: jest.fn(),
            delete: jest.fn(),
        };
        service = new ShipmentService(repository as Repository<Shipment>);
    });

    it('should create a Shipment', async () => {
        const mockData = {};
        (repository.save as jest.Mock).mockResolvedValue(mockData);
        const result = await service.create(mockData);
        expect(repository.save).toHaveBeenCalledWith(mockData);
        expect(result).toEqual(mockData);
    });

    it('should find a Shipment by ID', async () => {
        const mockData = {};
        (repository.findOne as jest.Mock).mockResolvedValue(mockData);
        const result = await service.findOne(1);
        expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
        expect(result).toEqual(mockData);
    });

    it('should update a Shipment', async () => {
        const mockData = {};
        (repository.update as jest.Mock).mockResolvedValue(mockData);
        await service.update(1, mockData);
        expect(repository.update).toHaveBeenCalledWith(1, mockData);
    });

    it('should delete a Shipment', async () => {
        (repository.delete as jest.Mock).mockResolvedValue({ affected: 1 });
        const result = await service.remove(1);
        expect(repository.delete).toHaveBeenCalledWith(1);
        expect(result).toEqual({ affected: 1 });
    });
});