import { Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class UploadService {
  private readonly s3Client: S3Client;

  constructor() {
    this.s3Client = new S3Client({
      endpoint: '', // TODO: replace with your endpoint
      region: '', // TODO: replace with your region
      credentials: {
        accessKeyId: '', // TODO: replace with your access key ID
        secretAccessKey: '', // TODO: replace with your secret access key
      },
    });
  }

  async upload(fileName: string, file: Buffer) {
    await this.s3Client.send(
      new PutObjectCommand({
        Bucket: '', // TODO: replace with your bucket name
        Key: fileName,
        Body: file,
      }),
    );
  }
}
