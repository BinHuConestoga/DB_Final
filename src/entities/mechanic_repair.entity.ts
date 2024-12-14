import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Truck } from './truck.entity';

@Entity()
export class MechanicRepair {
    @PrimaryGeneratedColumn()
    repair_id!: number;

    @ManyToOne(() => Truck, (truck) => truck.repairs)
    @JoinColumn({ name: 'truck_id' })
    truck!: Truck;

    @Column()
    estimated_repair_days!: number;
}