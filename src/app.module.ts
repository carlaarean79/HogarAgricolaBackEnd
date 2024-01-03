import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {TutorialRecienteModule}  from './tutorial-reciente/tutorial-reciente.module'

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }), TutorialRecienteModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}
