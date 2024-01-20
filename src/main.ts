import { NestFactory } from '@nestjs/core';
import { TutorialRecienteModule } from './tutorial-reciente/tutorial-reciente.module';



async function bootstrap() {

  const appTutorial = await NestFactory.create(TutorialRecienteModule);
   // Configura CORS
   appTutorial.enableCors({
    origin: '*' // Esto permite solicitudes desde cualquier origen
  });

  await appTutorial.listen(3001);
}
bootstrap();
