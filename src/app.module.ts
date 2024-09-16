import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LegalStructureModule } from './legal-structure/legal-structure.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LegalStructure } from './legal-structure/entities/legal-structure.entity';
import { FileModule } from './file/file.module';
import { Parent } from './file/entities/parent.entity';
import { Metadata } from './file/entities/metadata.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (ConfigService: ConfigService) => ({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: +ConfigService.get('DB_PORT'),
        username: ConfigService.get('DB_USERNAME'),
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        entities: [LegalStructure, Parent, Metadata],
        // do not use synchronise: ture in real Project
        synchronize: true,
        // logging:true
      }),
    }),
    LegalStructureModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
