import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Shipment {
    @PrimaryGeneratedColumn()
    shipment_id!: number;

    @ManyToOne(() => Customer, (customer) => customer.shipments)
    @JoinColumn({ name: 'customer_id' })
    customer!: Customer;

    @Column('float')
    weight!: number;

    @Column('float')
    value!: number;

    @Column()
    origin!: string;

    @Column()
    destination!: string;
}