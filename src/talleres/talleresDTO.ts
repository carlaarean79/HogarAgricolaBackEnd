import {IsNumber, IsString} from 'class-validator';

export class TalleresDTO {
    
    @IsNumber()
    id: number;
    @IsString()
    nombre: string;
    @IsString()
    imagen:string;
    @IsString()
    categoria: string;
    @IsString()
    descripcion:string
}