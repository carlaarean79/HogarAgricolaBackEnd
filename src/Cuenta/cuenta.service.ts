import { BadRequestException, Get, Injectable } from '@nestjs/common';
import { CuentaDtO } from './CuentaDTO';

const url = 'http://localhost:3030/tallerGuardadoCuenta'
@Injectable()
export class CuentaService {
   async getTallerGuardado(): Promise<[CuentaDtO]> {
        const res = await fetch(url);
        if (!res.ok) throw new BadRequestException('Fallo al obtener los datos');
        const parsed = await res.json();
        return parsed;
    }

 
    
    async createCuenta(tallerGuardadoCuenta: CuentaDtO): Promise<CuentaDtO> {
        try {

            const id = await this.setId();
            const { nombre, imagen, descripcion, categoria } = tallerGuardadoCuenta;
            const newTallerGuardadoCuenta = { id, nombre, imagen, descripcion, categoria }

            const res = await fetch(url, {
                method: 'Post',
                headers: {
                    'Content type': 'application/json',
                },
                body: JSON.stringify(newTallerGuardadoCuenta),
            });
            const parsed = res.json();
            return parsed;
        }
        catch { throw new Error('Method not implemented.') }
    }
    
    private async setId(): Promise<number> {
        const taller = await this.getTallerGuardado();
        const id = taller.pop().id + 1;
        return id;
    }
    
}
