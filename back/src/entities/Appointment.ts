import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

export enum AppointmentStatus {
    ACTIVE = 'active',
    CANCELLED = 'cancelled',
}

@Entity({
    name: 'appointments',
})
export class Appointment {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('date')
    date: Date;

    @Column('time')
    time: string;

    @Column({
        length: 100,
    })
    description: string;

    @Column({
        type: 'enum',
        enum: AppointmentStatus,
        default: AppointmentStatus.ACTIVE,
    })
    status: AppointmentStatus;

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
}
