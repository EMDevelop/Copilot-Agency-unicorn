import { UserService } from './user.service';
export declare class AuthController {
    private readonly userService;
    constructor(userService: UserService);
    register(email: string, password: string): Promise<{
        id: number;
        email: string;
    }>;
    login(email: string, password: string): Promise<{
        id: number;
        email: string;
    }>;
}
