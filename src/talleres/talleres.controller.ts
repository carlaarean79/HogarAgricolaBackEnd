import { Controller, Get,Post, HttpCode, HttpStatus, Param, ParseArrayPipe, ParseIntPipe, Query, Body, Delete, Put } from '@nestjs/common';
import { TalleresService } from './talleres.service';
import { TalleresDTO } from './talleresDTO';

@Controller('talleres')
export class TalleresController {
    constructor(private readonly talleres: TalleresService){}
//get all
    @Get()
    @HttpCode(200)
    getTalleres(): Promise<TalleresDTO[]>{
        return this.talleres.getTalleres();
    }
    //get by query
    @Get()
    @HttpCode(200)
    getTallerByQuery(@Query() query: any): Promise<TalleresDTO[]>{
        return this.talleres.getTallerByQuery(query)
    }
//get by id
    @Get('/:id')
    @HttpCode(200)
    getTalleresById(@Param('id', new ParseIntPipe({
        errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
    }))id:number): Promise<TalleresDTO[]>{
        return this.talleres.getTalleresById(id);
    }

    @Post()
    @HttpCode(201)
    createTaller(@Body() tallerDto: TalleresDTO): Promise<any>{
        return this.talleres.createTaller(tallerDto)
    }
    @Delete('/:id')
    @HttpCode(204)
    deleteTaller(@Param('id', new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
    id:number): Promise<any>{
        return this.talleres.deleteTaller(id);
    }
    @Put('/:id')
    upDateTallerById(@Param('id',new ParseIntPipe({errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE}))
    id:number, @Body() tallerDTO: TalleresDTO):Promise<any>{
        return this.talleres.upDateTallerById(id, tallerDTO)
    }
}
