import { HttpModule, Module } from '@nestjs/common';
import { UserRepoMongoose } from './infra/repository/implementation/user.repository';
import {
  UserRepoModuleConfig,
  userRepoProviderName,
} from './infra/repository/repo.module.config';

@Module({
  controllers: [],

  imports: [UserRepoModuleConfig.toImport.Entity(), HttpModule],

  providers: [
    UserRepoMongoose,
    { provide: userRepoProviderName, useClass: UserRepoMongoose },
  ],

  exports: [{ provide: userRepoProviderName, useClass: UserRepoMongoose }],
})
export class UserModule {}