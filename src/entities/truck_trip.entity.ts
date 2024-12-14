import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Truck } from './truck.entity';
import { Employee } from './employee.entity';
import { Shipment } from './shipment.entity';

@Entity()
export class TruckTrip {
    @PrimaryGeneratedColumn()
    trip_id!: number;

    @ManyToOne(() => Truck, (truck) => truck.trips)
    @JoinColumn({ name: 'truck_id' })
    truck!: Truck;

    @ManyToOne(() => Employee, (employee) => employee.tripsAsDriver1)
    @JoinColumn({ name: 'driver1_id' })
    driver1!: Employee;

    @ManyToOne(() => Employee, (employee) => employee.tripsAsDriver2, { nullable: true })
    @JoinColumn({ name: 'driver2_id' })
    driver2!: Employee;

    @ManyToOne(() => Shipment, (shipment) => shipment)
    @JoinColumn({ name: 'shipment_id' })
    shipment!: Shipment;
}