/* import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { MacrameService } from './macrame/macrame.service';
import { MacrameController } from './macrame/macrame.controller';
import { MacrameModule } from './macrame/macrame.module';
import {TutorialRecienteModule}  from './tutorial-reciente/tutorial-reciente.module'

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }), TutorialRecienteModule],
  controllers: [],
  providers: [ ],
})
export class AppModule {}
 */