import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../type';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  username: string;

  @Column({ length: 50 })
  password: string;

  @Column({ length: 500 })
  full_name: string;

  @Column('text')
  address: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.User,
  })
  role: UserRole;

  @Column()
  is_deleted: boolean;
}
