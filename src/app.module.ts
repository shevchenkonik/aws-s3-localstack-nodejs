import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { UploadModule } from './upload/upload.module';
import { QrGeneratorModule } from './qr-generator/qr-generator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        AWS_ACCESS_KEY: Joi.string().required(),
        AWS_S3_BUCKET: Joi.string().required(),
        AWS_S3_GATEWAY: Joi.string().required(),
        AWS_S3_REGION: Joi.string().required(),
        AWS_SECRET_ACCESS_KEY: Joi.string().required(),
        AWS_USERNAME: Joi.string().required(),
      }),
      isGlobal: true,
    }),
    UploadModule,
    QrGeneratorModule,
  ],
})
export class AppModule {}
