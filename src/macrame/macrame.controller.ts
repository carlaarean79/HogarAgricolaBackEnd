import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Query } from '@nestjs/common';
import { MacrameService } from './macrame.service';
import { MacrameDTO } from './MacrameDTO';


@Controller('macrame')
export class MacrameController {
    constructor(private readonly tallerMacrame: MacrameService){}
    @Get()
    @HttpCode(200)
    getTallerMacrame(@Query() query: any): Promise<MacrameDTO[]>{
        return this.tallerMacrame.getTallerMacrame(query);
    }
    @Get('/:id')
    @HttpCode(200)
    getTallerMacrameById(@Param('id',new ParseIntPipe({
        errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
    }))id:number): Promise<MacrameDTO[]>{
        return this.tallerMacrame.getTallerMacrameById(id);
    }
}
