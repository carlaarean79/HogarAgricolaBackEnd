import {IsNumber, IsString} from 'class-validator';

export class TutorialDTO {
    
    @IsNumber()
    id: number;
    @IsString()
    nombre: string;
    @IsString()
    img:string;
}