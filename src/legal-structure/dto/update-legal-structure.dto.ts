import { PartialType } from '@nestjs/mapped-types';
import { CreateLegalStructureDto } from './create-legal-structure.dto';

export class UpdateLegalStructureDto extends PartialType(CreateLegalStructureDto) {}
