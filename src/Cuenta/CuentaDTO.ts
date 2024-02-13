import { IsNumber, IsString } from "class-validator";

export class CuentaDtO{
    
    @IsNumber()
    id:number;
    @IsString()
    nombre:string;
    @IsString()
    imagen:string;
    @IsString()
    descripcion:string;
    @IsString()
    categoria:string;
}