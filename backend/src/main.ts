import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppLogger, CustomValidationPipe } from './lib';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(AppLogger));
  app.useGlobalPipes(new CustomValidationPipe());

  await app.listen(3000);
}
bootstrap();
