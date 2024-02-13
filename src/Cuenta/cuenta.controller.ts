import { Body, Controller, Get, HttpCode, ParseIntPipe, Post } from '@nestjs/common';
import { CuentaService } from './cuenta.service';
import { CuentaDtO } from './CuentaDTO';

@Controller('cuenta')
export class CuentaController {
    constructor(private readonly cuenta: CuentaService){}
@Get()
@HttpCode(200)
    getTallerGuardado():Promise<any>{
        return this.cuenta.getTallerGuardado()
    }

   
//post create

@Post()
@HttpCode(204)
createCuenta(@Body() cuentaDto: CuentaDtO): Promise<any>{
    return this.cuenta.createCuenta(cuentaDto);
}
}