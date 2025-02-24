import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [UploadController],
  providers: [UploadService],
  imports: [ConfigModule],
})
export class UploadModule {}
