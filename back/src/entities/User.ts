import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Credential } from './Credential';
import { Appointment } from './Appointment';

@Entity({
    name: 'users',
})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        length: 60,
    })
    name: string;

    @Column({
        unique: true,
        length: 100,
    })
    email: string;

    @Column('date')
    birthdate: Date;

    @Column({
        unique: true,
        type: 'int',
    })
    nDni: number;

    @OneToOne(() => Credential)
    @JoinColumn()
    credential: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    appointments: Appointment[];
}
