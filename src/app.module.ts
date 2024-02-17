 import { Module } from '@nestjs/common';
 import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {TutorialRecienteModule}  from './tutorial-reciente/tutorial-reciente.module'
import { TalleresModule } from './talleres/talleres.module';
import { CuentaModule } from './cuenta/cuenta.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }), TutorialRecienteModule,TalleresModule, UsersModule, CuentaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
