import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { TalleresDTO } from './talleresDTO';
import { UserDTO } from 'src/users/UsersDTO';



const url = 'http://localhost:3030/talleres'
@Injectable()
export class TalleresService {
    //get all
    async getTalleres(): Promise<any> {
        const res = await fetch(url);
        if (!res.ok) throw new BadRequestException("Fallo al obtener los datos")
        const parsed = await res.json();
        return parsed;
    }

    //get by id
    async getTalleresById(id: number): Promise<any> {
        const res = await fetch(url + id); // ¿Es la URL correcta?
         const parsed = await res.json();
            if (!Object.keys(parsed).length) // ¿Qué estructura tiene `parsed`?
            throw new NotFoundException(`El ID: ${id} no existe`);
         
        return parsed;
    }


    //get by query
    async getTallerByQuery(query: any): Promise<TalleresDTO[]> {
        try {

            let result = await this.getTalleres();
            if (query.nombre) {
                result = result.filter((taller) =>
                    taller.nombre.toUpperCase().includes(query.nombre.toUpperCase())
                )
            }

            if (query.categoria) {
                result = result.filter((taller) =>
                    taller.categoria.toUpperCase().includes(query.categoria.toUpperCase())
                )
            }

            if (query.descripcion) {
                result = result.filter((taller) =>
                    taller.descripcion.toUpperCase().includes(query.descripcion.toUpperCase())
                )
            }
            return result;
        }
        catch { throw new Error('Method not implemented.') };
    }


    //upDate
    async upDateTallerById(id: number, body: TalleresDTO): Promise<any> {
        try {
            const isTaller = await this.getTalleresById(id);
            const upDateTaller = {
                nombre: body.nombre,
                imagen: body.imagen,
                descripcion: body.descripcion,
                categoria: body.categoria
            };
            const res = await fetch(url + id, {
                method: 'Put',
                headers: {
                    'Content-Type': 'application/Json',
                },
                body: JSON.stringify(upDateTaller),
            });
            const parsed = await res.json();
            return parsed;
        }
        catch { throw new Error('Method not implemented.') };
    }

    //delete
    async deleteTaller(id: number): Promise<void> {
        try {
            const comprobation = await this.getTalleresById(id);
            const res = await fetch(url + id, {
                method: 'Delete',
            });
            if (!res.ok) throw new Error('Hubo un problema al borrar el tutorial')
        }
        catch { throw new Error('Method not implemented.') };
    }

    //create
    async createTaller(talleres: TalleresDTO): Promise<TalleresDTO> {
        try {

            const id = await this.setId();
            const { nombre, imagen, descripcion, categoria } = talleres;
            const newTaller = { id, nombre, imagen, descripcion, categoria }

            const res = await fetch(url, {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTaller),
            });
            const parsed = res.json();
            return parsed;
        }
        catch { throw new Error('Method not implemented.') }

    }

    //función que crea un nuevo id
    private async setId(): Promise<number> {
        const taller = await this.getTalleres();
        const id = taller.pop().id + 1;
        return id;
    }
}
