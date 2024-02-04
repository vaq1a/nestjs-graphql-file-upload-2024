import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AppResolver {
  @Query(() => String)
  async getName(): Promise<string> {
    return 'Coding by Vaq1a';
  }
}
