import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
    name: 'credentials',
})
export class Credential {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        unique: true,
        length: 20,
    })
    username: string;

    @Column({
        length: 30,
    })
    password: string;
}
