import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { System } from '../system/system.entity';
import { User } from '../user/user.entity';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionsRepository: Repository<Permission>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    @InjectRepository(System)
    private readonly systemsRepository: Repository<System>,
  ) {}

  async create(createPermissionDto: CreatePermissionDto): Promise<Permission> {
    const { userId, systemId, level } = createPermissionDto;

    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const system = await this.systemsRepository.findOne({ where: { id: systemId } });
    if (!system) {
      throw new Error('System not found');
    }

    const permission = this.permissionsRepository.create({
      user,
      system,
      level,
    });

    return this.permissionsRepository.save(permission);
  }

  async findAll(): Promise<Permission[]> {
    return this.permissionsRepository.find({ relations: ['user', 'system'] });
  }

  async findOne(id: number): Promise<Permission | undefined> {
    return this.permissionsRepository.findOne({ where: { id }, relations: ['user', 'system'] });
  }

  async update(id: number, updatePermissionDto: CreatePermissionDto): Promise<Permission> {
    const permission = await this.findOne(id);
    if (!permission) {
      throw new Error('Permission not found');
    }

    const { userId, systemId, level } = updatePermissionDto;

    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error('User not found');
    }

    const system = await this.systemsRepository.findOne({ where: { id: systemId } });
    if (!system) {
      throw new Error('System not found');
    }

    permission.user = user;
    permission.system = system;
    permission.level = level;

    return this.permissionsRepository.save(permission);
  }

  async remove(id: number): Promise<void> {
    await this.permissionsRepository.delete(id);
  }
}
