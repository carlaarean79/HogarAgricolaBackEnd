import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';



async function bootstrap() {

  const appTutorial = await NestFactory.create(AppModule);
   // Configura CORS
   appTutorial.enableCors({
    origin: '*' // Esto permite solicitudes desde cualquier origen
  });
  appTutorial.useGlobalPipes(new ValidationPipe({whitelist:true, /*forbidNonWhitelisted:true*/}))

  await appTutorial.listen(3001);
}
bootstrap();
