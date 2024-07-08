import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaDtO } from './CuentaDTO';

@Controller('cuenta')
export class CuentaController {
    constructor(private readonly cuentaService: CuentaService){}
//get all
    @Get()
@HttpCode(200)
    getTutorialGuardado():Promise<CuentaDtO[]>{
        return this.cuentaService.getTutorialGuardado();
    }

    @Get('/:id')
    @HttpCode(200)
    getTutorialGuardadoById(@Param('id', new ParseIntPipe({
        errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
    }))id:number): Promise<any>{
        return this.cuentaService.getTutorialGuardadoById(id);
    }
   
//post create

 @Post()
@HttpCode(204)
createTutorialCuenta(@Body() cuentaDto: CuentaDtO): Promise<any>{
    return this.cuentaService.createtutorialCuenta(cuentaDto);
} 

//update
@Put('/:id')
upDateTutorialCuenta(@Param('id', new ParseIntPipe({
    errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
}))id:number, @Body() cuentaDto: CuentaDtO): Promise<any>{
    return this.cuentaService.upDateTutorialCuenta(id, cuentaDto)
}

@Delete('/:id')
@HttpCode(204)
deleteTutorialCuenta(@Param('id', new ParseIntPipe(
    {errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE}))id:number):
    Promise<any>{
        return this.cuentaService.deleteTutorialCuenta(id);
    }
}