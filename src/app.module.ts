 import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {TutorialRecienteModule}  from './tutorial-reciente/tutorial-reciente.module'
import { TalleresModule } from './talleres/talleres.module';

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }), TutorialRecienteModule,TalleresModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}
