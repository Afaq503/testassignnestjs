import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './entities/parent.entity';
import { Metadata } from './entities/metadata.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parent, Metadata])],
  providers: [FileService],
  controllers: [FileController],
})
export class FileModule {}
