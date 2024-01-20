import { Injectable } from '@nestjs/common';

@Injectable()
export class MacrameService {
    getTallerMacrameById(id: number): Promise<import("./MacrameDTO").MacrameDTO[]> {
        throw new Error('Method not implemented.');
    }
    getTallerMacrame(query: any): Promise<import("./MacrameDTO").MacrameDTO[]> {
        throw new Error('Method not implemented.');
    }
}
