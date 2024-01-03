import { Module } from '@nestjs/common';
import { TutorialRecienteController } from './tutorial-reciente.controller';
import { TutorialRecienteService } from './tutorial-reciente.service';

@Module({
    controllers: [TutorialRecienteController],
    providers: [TutorialRecienteService],
})
export class TutorialRecienteModule {}
