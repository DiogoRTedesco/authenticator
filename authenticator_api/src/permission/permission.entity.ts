import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { System } from '../system/system.entity';
import { User } from '../user/user.entity';
import { PermissionLevel } from './permission-level.enum';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.permissions, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => System, system => system.permissions, { onDelete: 'CASCADE' })
  system: System;

  @Column({ type: 'enum', enum: PermissionLevel })
  level: PermissionLevel;

  @Column()
  creation: Date;

  @Column()
  expiration: Date;
}

