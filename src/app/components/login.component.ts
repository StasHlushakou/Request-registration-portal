import {Component, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {User} from "../User";
import {UserService} from "../services/user.service";

@Component({

    selector: 'login-app',
    template: `        
    <div class="container text-center">

        <div class="form-group">
            
            <label>Логин</label>
            
            <input class="form-control" name="email" [(ngModel)]="login" #email="ngModel" autocomplete="on"
                   required pattern="[a-zA-Z_.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}" (focus)="resetLogin()"/>
            
            <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
                Некорректный email</div>
            
            <div [hidden]="!incorrectLogin" class="alert alert-danger">Пользователь с таким email уже существует.</div>

            <label>Пароль</label>
            
            <input class="form-control" name="pass" [(ngModel)]="password" #pass="ngModel" autocomplete="off"
                   required pattern="[a-zA-Z0-9]*" (focus)="resetPass()"/>
            
            <div [hidden]="pass.valid || pass.untouched" class="alert alert-danger">
                Пароль может содержать большие и малые буквы латинского алфавита, цифры.</div>
            
            <div [hidden]="!incorrectPassword" class="alert alert-danger">Неверный пароль.</div>

            <div class="row">
                <div class="col">
                    <button class="btn btn-primary" [disabled]="email.invalid || pass.invalid"
                            (click)="signIn(login, password)">Войти</button>
                </div>

                <div class="col">
                    <button class="btn btn-primary" [disabled]="email.invalid || pass.invalid"
                            (click)="addUser(login, password)">Зарегистрироваться</button>
                </div>
            </div>
            
        </div>
    </div>`



})
export class LoginComponent {
    constructor(private router: Router){
        this.incorrectLogin = false;
        this.incorrectPassword = false;
    }

    login: string;
    password: string;
    incorrectLogin: boolean;
    incorrectPassword: boolean;

    signIn(login: string, password: string): void {
        let user = UserService.getUserByLoginAndPassword(login, password);
        if (user != null){
            sessionStorage.setItem("User", JSON.stringify(user))
            this.router.navigate(['/requests']);
        } else{
            this.incorrectPassword = true;
        }

    }

    addUser(login: string, password: string): void {
        if (UserService.IsExistUserWithLogin(login)){
            this.incorrectLogin = true;
        } else{
            UserService.addUser(login, password);
            this.signIn(login,password);
        }

    }

    resetPass(){
        this.incorrectPassword = false;
    }

    resetLogin(){
        this.incorrectLogin = false;
    }

}
