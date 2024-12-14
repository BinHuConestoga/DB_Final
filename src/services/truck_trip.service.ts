import { Repository } from 'typeorm';
import { TruckTrip } from '../entities/truck_trip.entity';

export class TruckTripService {
    constructor(private readonly repository: Repository<TruckTrip>) {}

    async create(data: Partial<TruckTrip>) {
        return this.repository.save(data);
    }

    async findOne(id: number) {
        return this.repository.findOne({
            where: { trip_id: id },
            relations: ['truck', 'driver1', 'driver2', 'shipment']
        });
    }

    async findAll() {
        return this.repository.find({
            relations: ['truck', 'driver1', 'driver2', 'shipment']
        });
    }

    async update(id: number, data: Partial<TruckTrip>) {
        await this.repository.update(id, data);
        return this.findOne(id);
    }

    async remove(id: number) {
        return this.repository.delete(id);
    }
}