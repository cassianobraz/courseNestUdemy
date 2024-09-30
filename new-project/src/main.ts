import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //! Remove chaves não validadas no DTO
      forbidNonWhitelisted: true, //! Erro para chaves não validadas
      transform: false, //! Transforma os dados de acordo com o DTO
    }),
  );

  await app.listen(3000);
}
bootstrap();
