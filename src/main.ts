import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS AWS S3 Localstack Upload')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('swagger', app, documentFactory);

  app.enableVersioning({
    prefix: 'api/',
    type: VersioningType.URI,
    defaultVersion: 'v1',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
