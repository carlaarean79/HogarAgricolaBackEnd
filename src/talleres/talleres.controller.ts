import { Controller, Get, HttpCode, HttpStatus, Param, ParseArrayPipe, ParseIntPipe, Query } from '@nestjs/common';
import { TalleresService } from './talleres.service';
import { TalleresDTO } from './talleresDTO';

@Controller('talleres')
export class TalleresController {
    constructor(private readonly talleres: TalleresService){}

    @Get()
    @HttpCode(200)
    getTalleres(@Query() query:any): Promise<TalleresDTO[]>{
        return this.talleres.getTalleres(query);
    }
    @Get('/:id')
    @HttpCode(200)
    getTalleresById(@Param('id', new ParseIntPipe({
        errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
    }))id:number): Promise<TalleresDTO[]>{
        return this.talleres.getTalleresById(id);
    }
}
