import { Injectable } from '@nestjs/common';

@Injectable()
export class TalleresService {
    getTalleresById(id: number): Promise<import("./talleresDTO").TalleresDTO[]> {
        throw new Error('Method not implemented.');
    }
    getTalleres(query: any): Promise<import("./talleresDTO").TalleresDTO[]> {
        throw new Error('Method not implemented.');
    }
  
}
