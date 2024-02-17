import { Controller, Get, HttpCode,Post,Put, Delete, HttpStatus, Query, Param, ParseIntPipe, Body } from '@nestjs/common';
import { UserDTO } from './UsersDTO';
import { UsersService } from './users.service';

@Controller('users/')
export class UsersController {
constructor(private readonly userService: UsersService){}

//get all
@Get()
@HttpCode(200)
getUsers(): Promise<UserDTO[]>{
    return this.userService.getUsers();
}

//get by query

 /* @Get()
@HttpCode(200)
getUsersByQuery(@Query() query:any): Promise<UserDTO[]>{
    return this.userService.getUsersByQuery(query);
}  */

//get by id
@Get('/:id')
@HttpCode(200)
getUsersById(@Param('id', new ParseIntPipe({
    errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
}))id:number):Promise<any>{
    return this.userService.getUsersById(id);
}

//create
@Post()
@HttpCode(201)
createUsers(@Body() userDto: UserDTO): Promise<any>{
    return this.userService.createUsers(userDto);
}

//update
 @Put('/:id')
async upDateTallerById(
    @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number,
    @Body() userDto: UserDTO
): Promise<any> {
    return this.userService.upDateUsersById(id,userDto);
}
 
//delete
@Delete('/:id')
@HttpCode(204)
deleteUsers(@Param('id', new ParseIntPipe({
    errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE
}))id:number): Promise<void>{
    return this.userService.deleteUser(id);
}



}
