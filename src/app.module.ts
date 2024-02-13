 import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import {TutorialRecienteModule}  from './tutorial-reciente/tutorial-reciente.module'
import { TalleresModule } from './talleres/talleres.module';
import { UserDTO } from './users/UsersDTO';
import { CuentaController } from './cuenta/cuenta.controller';
import { CuentaService } from './cuenta/cuenta.service';
import { CuentaModule } from './cuenta/cuenta.module';

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }), TutorialRecienteModule,TalleresModule, UserDTO, CuentaModule],
  controllers: [CuentaController],
  providers: [ CuentaService],
})
export class AppModule {}
