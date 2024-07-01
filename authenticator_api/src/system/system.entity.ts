import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Permission } from '../permission/permission.entity';

@Entity()
export class System {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  url: string;

  @CreateDateColumn()
  creation: Date;

  @UpdateDateColumn()
  updated: Date;

  @OneToMany(() => Permission, permission => permission.system)
  permissions: Permission[];

  @BeforeInsert()
  @BeforeUpdate()
  validateUrl() {
    try {
      new URL(this.url);
    } catch (_) {
      throw new Error('Invalid URL');
    }
  }
}
