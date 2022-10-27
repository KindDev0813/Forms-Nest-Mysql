import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
export declare class UsersService {
    private userRipo;
    constructor(userRipo: UserRepository);
    create(createUserDto: CreateUserDto): User;
    save(createUserDto: CreateUserDto): Promise<User>;
    findAll(): string;
    findByEmail(email: string): Promise<User>;
    findByUsername(name: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
