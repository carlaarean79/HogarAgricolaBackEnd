import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from './UsersDTO';
import { error } from 'console';


const url = 'http://localhost:3030/users'
@Injectable()
export class UsersService {
    //get all
    async getUsers(): Promise<any> {
        const res = await fetch(url);
        if (!res.ok) throw new BadRequestException('Fallo al obtener los datos');
        const parsed = await res.json();
        return parsed;
    }

    //delete
    async deleteUser(id: number): Promise<any> {
        const res = await fetch(url);
        if(!res.ok) throw new BadRequestException('Fallo al borrar los datos');
        const parsed = await res.json();
        return parsed;
    }

    //update
    async upDateUsersById(id: number): Promise<any> {
        try {
            const res = await fetch(url + id)
            const parsed = await res.json();
            if (!Object.keys(parsed).length) {
                throw new NotFoundException(`El ID: ${id} no existe`);
            }

            return parsed;
        } catch (error) {
            throw new BadRequestException('Fallo al actualizar los datos');
        }
    }


    //create
    async createUsers(users: UserDTO): Promise<UserDTO> {
        try {

            const id = await this.setId();
            const { nombre, apellido, direccion, edad, email, contraseña, hobby, ocupacion, preferencias } = users;
            const newUser = { id, nombre, apellido, direccion, edad, email, contraseña, hobby, ocupacion, preferencias }

            const res = await fetch(url, {
                method: 'Post',
                headers: {
                    'Content type': 'aplication/json',
                },
                body: JSON.stringify(newUser),
            });
            const parsed = res.json();
            return parsed;
        }
        catch { throw new Error('Method not implemented.') }
    }

    //get by query
    async getUsersByQuery(query: any): Promise<any> {
        try {
            let result = await this.getUsers();
            if (query.nombre) {
                result = result.filter((user) => {
                    user.nombre.toUpperCase().includes(query.nombre.toUpperCase())
                })
            }

            if (query.apellido) {
                result = result.filter((user) => {
                    user.apellido.toUpperCase().includes(query.apellido.toUpperCase())
                })
            }

            if (query.direccion) {
                result = result.filter((user) => {
                    user.direccion.toUpperCase().includes(query.direccion.toUpperCase())
                })
            }
            if (query.edad) {
                result = result.filter((user) => {
                    user.edad.toUpperCase().includes(query.edad.toUpperCase())
                })
            }

            if (query.email) {
                result = result.filter((user) => {
                    user.email.toUpperCase().includes(query.email.toUpperCase())
                })
            }

            if (query.hobby) {
                result = result.filter((user) => {
                    user.hobby.toUpperCase().includes(query.hobby.toUpperCase())
                })
            }
            if (query.ocupacion) {
                result = result.filter((user) => {
                    user.ocupacion.toUpperCase().includes(query.ocupacion.toUpperCase())
                }
                )
            }
            if (query.preferencias) {
                result = result.filter((user) => {
                    user.preferencias.toUpperCase().includes(query.preferencias.toUpperCase())
                }
                )
            }

        }
        catch { throw new Error('método no implementado') }


    }
      //función que crea un nuevo id
      private async setId(): Promise<number> {
        const taller = await this.getUsers();
        const id = taller.pop().id + 1;
        return id;
    }
}