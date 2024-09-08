import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LegalStructureService } from './legal-structure.service';
import { CreateLegalStructureDto } from './dto/create-legal-structure.dto';
import { UpdateLegalStructureDto } from './dto/update-legal-structure.dto';

@Controller('legal-structure')
export class LegalStructureController {
  constructor(private readonly legalStructureService: LegalStructureService) {}

  @Post()
  create(@Body() createLegalStructureDto: CreateLegalStructureDto) {
    return this.legalStructureService.create(createLegalStructureDto);
  }

  @Get()
  findAll() {
    return this.legalStructureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.legalStructureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLegalStructureDto: UpdateLegalStructureDto) {
    return this.legalStructureService.update(+id, updateLegalStructureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.legalStructureService.remove(+id);
  }
}
