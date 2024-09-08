import { Module } from '@nestjs/common';
import { LegalStructureService } from './legal-structure.service';
import { LegalStructureController } from './legal-structure.controller';
import { LegalStructure } from './entities/legal-structure.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      LegalStructure,
    ]),
  ],
  controllers: [LegalStructureController],
  providers: [LegalStructureService],
})
export class LegalStructureModule {}
