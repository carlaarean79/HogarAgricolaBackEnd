import {IsNumber, IsString} from 'class-validator';

export class TalleresDTO {
    
    @IsNumber()
    id: number;
    @IsString()
    nombre: string;
    @IsString()
    img:string;
}