import { Module } from '@nestjs/common';

import { AppLogger } from './lib';

@Module({
  imports: [],
  controllers: [],
  providers: [AppLogger],
})
export class AppModule {}
