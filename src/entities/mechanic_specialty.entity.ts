import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Employee } from './employee.entity';

@Entity()
export class MechanicSpecialty {
    @PrimaryGeneratedColumn()
    specialty_id!: number;

    @ManyToOne(() => Employee, (employee) => employee.specialties)
    @JoinColumn({ name: 'mechanic_id' })
    mechanic!: Employee;

    @Column()
    vehicle_brand!: string;
}