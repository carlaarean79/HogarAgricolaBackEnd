import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { UserDTO } from './UsersDTO';

const url = 'http://localhost:3030/users';

@Injectable()
export class UsersService {
    async getUsersById(id: number): Promise<any> {
        const response = await fetch(`${url}/${id}`);
        const parsed = await response.json();
        if (!Object.keys(parsed).length) {
            // Handle error
            throw new NotFoundException(`Menu con id ${id} no existe`);
        }
        return parsed;
    }

    async getUsers(): Promise<any> {
        const res = await fetch(url);
        if (!res.ok) 
            // Handle error
            throw new BadRequestException("Fallo el fetch")
            const parsed = await res.json();
            return parsed;
    }

    async deleteUser(id: number): Promise<void> {
        const isUser = await this.getUsersById(id);
        const response = await fetch(`${url}/${id}`, { method: 'DELETE' });
        if (!response.ok) {
            // Handle error
            throw new Error('Fallo al borrar los datos');
        }
           }

    async upDateUsersById(id: number, userDto: UserDTO): Promise<any> {
        const isUser = await this.getUsersById(id);
        const newUser= {
            nombre: userDto.nombre,
            apelllido: userDto.apellido,
            direccion:userDto.direccion,
            edad: userDto.edad,
            email: userDto.email,
            contraseña: userDto.contraseña,
            ocupacion:userDto.ocupacion,
            hobby: userDto.hobby,
            preferencias:userDto.preferencias
        }
        const res = await fetch(`${url}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
        const parsed = await res.json();
        return parsed;
    }

    async createUsers(user: UserDTO): Promise<UserDTO> {
        const id = await this.setId();
        const {nombre,apellido,direccion,edad,email,contraseña,ocupacion,hobby,preferencias} = user
        const newUser = {id, ...user };
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        });
        const parsed = res.json();
        return parsed;
    }
    private async setId(): Promise<number> {
        const menu = await this.getUsers();
        const id = menu.pop().id + 1;
        return id;
      }
}
