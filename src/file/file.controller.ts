import { Body, Controller, Post } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateParentDto } from './dto/createfile.dto';

@Controller('parent')
export class FileController {
  constructor(private readonly parentService: FileService) {}

  @Post()
  async create(@Body() createParentDto: CreateParentDto) {
    return this.parentService.create(createParentDto);
  }
}
