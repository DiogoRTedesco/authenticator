import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../user/users.service';
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log('Validating user in AuthService:', username);
    const user = await this.usersService.findByUser(username);
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      console.log('User found and validated:', result);
      return result;
    }
    console.log('User not found or password incorrect');
    return null;
  }

  async login(user: any) {
    console.log('Logging in user:', user);
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
