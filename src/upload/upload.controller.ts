import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller({ path: 'uploads' })
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('/images')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 10 }), // 10 MB
          new FileTypeValidator({ fileType: /^image/ }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    await this.uploadService.upload(file.originalname, file.buffer);
  }
}
