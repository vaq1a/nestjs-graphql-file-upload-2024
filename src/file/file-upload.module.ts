import { Module } from '@nestjs/common';
import { FileUploadResolver } from './file-upload.resolver';

@Module({
  providers: [FileUploadResolver],
})
export class FileUploadModule {}
