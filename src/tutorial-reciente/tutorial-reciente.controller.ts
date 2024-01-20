import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { TutorialRecienteService } from './tutorial-reciente.service';
import { TutorialDTO } from './TutorialDTO';

@Controller('tutorial-reciente')
export class TutorialRecienteController {
    constructor(private readonly recienteService: TutorialRecienteService){}
    @Get('/:id')
    @HttpCode(200)
    getTutorialRecienteById(@Param('id',new ParseIntPipe({
        errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
    }))id:number): Promise<TutorialDTO> {
     return this.recienteService.getTutorialRecienteById(id);
    }
    @Get()
    @HttpCode(200)
    getTutorialReciente(@Query() query: any): Promise<TutorialDTO[]>{
        return this.recienteService.getTutorialReciente(query);
    }
}
