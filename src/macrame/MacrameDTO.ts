import {IsNumber, IsString} from 'class-validator';

export class MacrameDTO {
    
    @IsNumber()
    id: number;
    @IsString()
    nombre: string;
    @IsString()
    img:string;
}