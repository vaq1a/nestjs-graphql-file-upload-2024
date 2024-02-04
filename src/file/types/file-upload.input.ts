import { Field, InputType } from '@nestjs/graphql';
import GraphQLUpload, { FileUpload } from 'graphql-upload/GraphQLUpload.js';

@InputType()
export class FileUploadInput {
  @Field(() => GraphQLUpload)
  image: Promise<FileUpload>;
}
