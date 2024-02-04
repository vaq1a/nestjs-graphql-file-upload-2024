import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { FileUploadInput } from './types/file-upload.input';
import { join } from 'path';
import { createWriteStream, existsSync, mkdirSync } from 'fs';

@Resolver(() => Boolean)
export class FileUploadResolver {
  @Mutation(() => Boolean)
  async uploadImage(@Args('files') { image }: FileUploadInput) {
    const file = await image;

    const dirPath = join(__dirname, '/uploads');

    // Synchronous check if file/directory exists in Node.js
    if (!existsSync(dirPath)) {
      // The fs.mkdirSync() method is used to create a directory Synchronously
      mkdirSync(dirPath, { recursive: true });
    }

    return new Promise((resolve, reject) => {
      file
        .createReadStream()
        .pipe(createWriteStream(`${dirPath}/${file.filename}`))
        .on('finish', () => {
          console.log('image created in directory');

          resolve(true);
        })
        .on('error', (error) => {
          console.log('image load error: ', error);
          reject(false);
        });
    });
  }
}
