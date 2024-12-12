import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MechanicRepair } from './mechanic_repair.entity';
import { TruckTrip } from './truck_trip.entity';

@Entity()
export class Truck {
    @PrimaryGeneratedColumn()
    truck_id!: number;

    @Column()
    brand!: string;

    @Column('float')
    load!: number;

    @Column('float')
    capacity!: number;

    @Column()
    year!: number;

    @Column()
    number_of_repairs!: number;

    @OneToMany(() => MechanicRepair, (repair) => repair.truck)
    repairs!: MechanicRepair[];

    @OneToMany(() => TruckTrip, (trip) => trip.truck)
    trips!: TruckTrip[];
}