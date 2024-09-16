import { IsArray, IsNotEmpty, IsString } from 'class-validator';
// Parent DTO
export class CreateParentDto {
  @IsNotEmpty()
  @IsString()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  lastname: string;

  @IsArray()
  metaData: MetadataDto[];
}
// MetaDataDTO
export class MetadataDto {
  @IsNotEmpty()
  @IsString()
  filename: string;

  @IsNotEmpty()
  @IsString()
  fileUrl: string;
}
