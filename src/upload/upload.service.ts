import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  async upload(fileName: string, file: Buffer) {
    // TODO: implement upload logic
  }
}
