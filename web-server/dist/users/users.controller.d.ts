import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findAll(): string;
    findbyUsername(body: {
        username: string;
        email: string;
        password: string;
    }, session: Record<string, any>): Promise<CreateUserDto>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
