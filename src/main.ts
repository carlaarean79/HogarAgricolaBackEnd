import { NestFactory } from '@nestjs/core';
import { TutorialRecienteModule } from './tutorial-reciente/tutorial-reciente.module';


async function bootstrap() {
  const app = await NestFactory.create(TutorialRecienteModule);

   // Configura CORS
   app.enableCors({
    origin: '*' // Esto permite solicitudes desde cualquier origen
  });
  await app.listen(3000);
}
bootstrap();
