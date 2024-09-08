import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLegalStructureDto } from './dto/create-legal-structure.dto';
import { UpdateLegalStructureDto } from './dto/update-legal-structure.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LegalStructure } from './entities/legal-structure.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LegalStructureService {
  constructor(
    @InjectRepository(LegalStructure)
    private readonly legalStructureRepository: Repository<LegalStructure>,
  ) {}

  async create(createLegalStructureDto: CreateLegalStructureDto) {
    // return 'This action adds a new legalStructure';
    const legalStructure = this.legalStructureRepository.create(
      createLegalStructureDto,
    );
    return await this.legalStructureRepository.save(legalStructure);
  }

  async findAll() {
    // return `This action returns all legalStructure`;
    return await this.legalStructureRepository.find({
    });
  }

  async findOne(id: number) {
    // return `This action returns a #${id} legalStructure`;
    const legalStructure = await this.legalStructureRepository.findOne({
      where: { id },
    });
    if (!legalStructure) {
      throw new NotFoundException(`Legal Structure with ID ${id} not found`);
    }
    return legalStructure;
  }

  async update(id: number, updateLegalStructureDto: UpdateLegalStructureDto) {
    // return `This action updates a #${id} legalStructure`;
    await this.legalStructureRepository.update(id, updateLegalStructureDto);
    const updatedLegalStructure = await this.findOne(id);
    return updatedLegalStructure;
  }

  async remove(id: number) {
    // return `This action removes a #${id} legalStructure`;
    const legalStructure = await this.findOne(id);
    await this.legalStructureRepository.remove(legalStructure);
  }
}
