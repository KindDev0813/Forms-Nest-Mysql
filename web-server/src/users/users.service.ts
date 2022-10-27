import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UsersService {
  constructor(private userRipo: UserRepository) { }

  create(createUserDto: CreateUserDto) {
    const customer = this.userRipo.create([{ ...createUserDto }]);
    return customer[0]
  }

  async save(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRipo.save(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  findByEmail(email: string): Promise<User> {
    return this.userRipo.findByEmail(email);
  }

  findByUsername(name: string): Promise<User> {
    return this.userRipo.findByUsername(name);
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
