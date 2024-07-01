import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSystemDto } from './dto/create-system.dto';
import { System } from './system.entity';

@Injectable()
export class SystemsService {
  constructor(
    @InjectRepository(System)
    private readonly systemsRepository: Repository<System>,
  ) {}

  async create(createSystemDto: CreateSystemDto): Promise<System> {
    const system = this.systemsRepository.create(createSystemDto);
    return this.systemsRepository.save(system);
  }

  async findAll(): Promise<System[]> {
    return this.systemsRepository.find();
  }

  async findOne(id: number): Promise<System | undefined> {
    return this.systemsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSystemDto: CreateSystemDto): Promise<System> {
    await this.systemsRepository.update(id, updateSystemDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.systemsRepository.delete(id);
  }
}
