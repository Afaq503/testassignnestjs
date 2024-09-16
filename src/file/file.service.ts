import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParentDto, MetadataDto } from './dto/createfile.dto';
import { Parent } from './entities/parent.entity';
import { Metadata } from './entities/metadata.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(Parent)
    private readonly parentRepository: Repository<Parent>,
    @InjectRepository(Metadata)
    private readonly metadataRepository: Repository<Metadata>,
  ) {}

  async create(createParentDto: CreateParentDto): Promise<any> {
    const parent = new Parent();
    parent.firstname = createParentDto.firstname;
    parent.lastname = createParentDto.lastname;

    const children = createParentDto.metaData.map(meta => {
      const metadata = new Metadata();
      metadata.filename = meta.filename;
      metadata.fileUrl = this.transformFileUrl(meta.fileUrl); // Transform URL
      return metadata;
    });

    parent.children = await this.metadataRepository.save(children);

    const savedParent = await this.parentRepository.save(parent);

    return {
      id: savedParent.id,
      firstname: savedParent.firstname,
      lastname: savedParent.lastname,
      children: savedParent.children,
    };
  }

  private transformFileUrl(fileUrl: string): string {
    
    return fileUrl.replace(/^data:image\/[^;]+;base64,/, 'http://localhost:3000/');
  }
}
