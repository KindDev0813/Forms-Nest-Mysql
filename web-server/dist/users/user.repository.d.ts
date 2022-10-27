import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserRepository extends Repository<User> {
    findByUsername(name: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
}
