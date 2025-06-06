import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(email: string, password: string): Promise<User> {
    // eslint-disable-next-line
    const hashed: string = await bcrypt.hash(password, 10);
    const user = this.userRepository.create({ email, password: hashed });
    return this.userRepository.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user === null ? undefined : user;
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<User | undefined> {
    const user = await this.findByEmail(email);
    // eslint-disable-next-line
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return undefined;
  }
}
