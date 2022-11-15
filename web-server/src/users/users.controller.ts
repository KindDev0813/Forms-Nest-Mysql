import { Controller, Get, Post, Body, Patch, Param, Delete, Session, HttpStatus, HttpException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
const bcrypt = require('bcrypt');

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/signup')
  async create(@Body() createUserDto: CreateUserDto) {
    const customer = this.usersService.create(createUserDto)
    if (customer) {
      const hash = bcrypt.hashSync(createUserDto.password, 10);
      customer.password = hash
      return await this.usersService.save(customer)
    }
    throw new HttpException('not valid request', HttpStatus.INTERNAL_SERVER_ERROR);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/login')
  async findbyUsername(
    @Body() body: { username: string, email: string, password: string },
    @Session() session: Record<string, any>
  ) {
    let user :CreateUserDto;
    if (body.username) {
      user = await this.usersService.findByUsername(body.username)
    }
    else {
      user = await this.usersService.findByEmail(body.email)
    }
    if (user && bcrypt.compareSync(body.password, user.password)) {
      session.user = user
      user.password = undefined
      return user
    }
    throw new HttpException(body.username, HttpStatus.NOT_FOUND);
  }

  @Get('/logout')
  logout(@Session() session:Record<string,any>){
    const name= session.user.name
    session.user= undefined
    return `${name} has loged out`
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
