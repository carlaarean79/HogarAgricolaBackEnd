import { Injectable } from '@nestjs/common';
const URL ='http://localhost:3030/tutoriales';
@Injectable()
export class TutorialRecienteService {
    getTutorialReciente(query: any): Promise<import("./TutorialDTO").TutorialDTO[]> {
        throw new Error('Method not implemented.');
    }
    getTutorialRecienteById(id: number): Promise<any> {
        throw new Error('Method not implemented.');
    }
}
