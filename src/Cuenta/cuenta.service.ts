import { BadRequestException, Get, Injectable, NotFoundException } from '@nestjs/common';
import { CuentaDtO } from './CuentaDTO';

const url = 'http://localhost:3030/cuenta'
@Injectable()
export class CuentaService {
    async getTutorialGuardado(): Promise<CuentaDtO[]> {
        const res = await fetch(url);
        if (!res.ok) throw new BadRequestException('Fallo al obtener los datos');
        const parsed = await res.json();
        console.log(parsed);
        
        return parsed;
    }
    async getTutorialGuardadoById(id: number): Promise<any> {
        const res = await fetch(`${url}/${id}`);
        const parsed = await res.json();
        if(!Object.keys(parsed).length){
            throw new NotFoundException(`Tutorial con ${id} no existe`)
        }
        return parsed;
    }
    
    
    
    async createtutorialCuenta(tutorialCuenta: CuentaDtO): Promise<CuentaDtO> {
        try {
            
            const id = await this.setId();
            const { nombre, imagen, descripcion, categoria } = tutorialCuenta;
            const newTutorialCuenta = { id, ...tutorialCuenta }
            
            const res = await fetch(url, {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTutorialCuenta),
            });
            const parsed = res.json();
            return parsed;
        }
        catch { throw new Error('Method not implemented.') }
    }
    
    private async setId(): Promise<number> {
        const taller = await this.getTutorialGuardado();
        const id = taller.pop().id + 1;
        return id;
    }
    
    async upDateTutorialCuenta(id:number, cuentaDto:CuentaDtO): Promise<any> {
        const isTutorialGuardado = await this.getTutorialGuardadoById(id);
        const newTutorialGuardado = {
            nombre:cuentaDto.nombre,
            imagen:cuentaDto.imagen,
            descripcion:cuentaDto.descripcion,
            categoria:cuentaDto.categoria
        }
        const res = await fetch(`${url}/${id}`,{
            method:'Put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTutorialGuardado),
        });
        const parsed = await res.json();
        return parsed
    }
    
    
    async deleteTutorialCuenta(id: number): Promise<void> {
        const isTutorialGuardado = await this.getTutorialGuardadoById(id);
        const res = await fetch(`${url}/${id}`, 
        { method: 'DELETE' }); // Envía una solicitud DELETE al servidor
        if (!res.ok) {
            throw new Error('Fallo al eliminar el tutorial');
        }
        // Si se alcanza este punto, la eliminación fue exitosa
        return; // Devuelve void ya que no hay datos adicionales para devolver
    }
}

