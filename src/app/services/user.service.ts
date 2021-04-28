import {Injectable} from "@angular/core";
import {User} from '../User'
import {LocalStorageService} from "./localStorage.service";

@Injectable()
export class UserService{

    constructor(private localStorageService: LocalStorageService){}

    static IsExistUserWithLogin(login: string): boolean {
        return LocalStorageService.IsExistUserWithLogin(login);
    }

    static getUserByLoginAndPassword(login: string, password: string): User {
        return LocalStorageService.getUserByLoginPassword(login, password);
    }

    static addUser(login: string, password: string): User {
        return LocalStorageService.addUser(login, password);
    }

}
