import { Module } from '@nestjs/common';
import { join } from 'path';
import process from 'process';
import { ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { FileUploadModule } from './file/file-upload.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      upload: false,
    }),
    FileUploadModule,
  ],
  providers: [AppResolver],
})
export class AppModule {}
