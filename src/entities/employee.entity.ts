import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { MechanicSpecialty } from './mechanic_specialty.entity';
import { TruckTrip } from './truck_trip.entity';

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    employee_id!: number;

    @Column()
    name!: string;

    @Column()
    surname!: string;

    @Column()
    seniority!: number;

    @Column()
    category!: string;

    @OneToMany(() => MechanicSpecialty, (specialty) => specialty.mechanic)
    specialties!: MechanicSpecialty[];

    @OneToMany(() => TruckTrip, (trip) => trip.driver1)
    tripsAsDriver1!: TruckTrip[];

    @OneToMany(() => TruckTrip, (trip) => trip.driver2)
    tripsAsDriver2!: TruckTrip[];
}