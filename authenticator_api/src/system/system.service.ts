import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSystemDto } from './dto/create-system.dto';
import { UpdateSystemDto } from './dto/update-system.dto';
import { System } from './system.entity';

@Injectable()
export class SystemsService {
  constructor(
    @InjectRepository(System)
    private readonly systemsRepository: Repository<System>,
  ) { }

  async create(createSystemDto: CreateSystemDto): Promise<System> {
    const system = this.systemsRepository.create({
      ...createSystemDto,
      creation: new Date(),
    });
    return this.systemsRepository.save(system);
  }

  async findAll(): Promise<System[]> {
    return this.systemsRepository.find();
  }

  async findOne(id: number): Promise<System | undefined> {
    return this.systemsRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSystemDto: UpdateSystemDto): Promise<System> {
    const system = await this.findOne(id);
    const updatedSystem = this.systemsRepository.merge(system, updateSystemDto);
    return this.systemsRepository.save(updatedSystem);
  }

  async remove(id: number): Promise<void> {
    const system = await this.findOne(id);
    await this.systemsRepository.remove(system);
  }
}
