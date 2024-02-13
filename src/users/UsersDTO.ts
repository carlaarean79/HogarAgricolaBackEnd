import { IsNumber, IsString } from "class-validator";

export class UserDTO {
    @IsNumber()
    id:number;
    @IsString()
    nombre:string;
    @IsString()
    apellido:string;
    @IsString()
    direccion:string;
    @IsString()
    edad:string;
    @IsString()
    email:string;
    @IsString()
    contraseña:string;
    @IsString()
    hobby:string;
    @IsString()
    ocupacion:string;
    @IsString()
    preferencias:string
}