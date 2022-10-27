import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    findByUsername(name: string) {
        return this.findOne({ name });
    }

    findByEmail(email: string) {
        return this.findOne({ email });
    }
}