import {Component, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {User} from "../User";
import {UserService} from "../services/user.service";

@Component({

    selector: 'login-app',
    template: `<div class="page-header text-center">
        <h1> Страница логина </h1>
    </div>
    
    <div class="container">


        
        <div class="row">
            <div class="form-group">
                <label>Логин</label>
                <input class="form-control" name="email" [(ngModel)]="login" #email="ngModel"
                       required pattern="[a-zA-Z_.]+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}"/>
                <div [hidden]="email.valid || email.untouched" class="alert alert-danger">
                    Некорректный email
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="form-group">
                <label>Пароль</label>
                <input class="form-control" name="pass" [(ngModel)]="password" #pass="ngModel"
                       required pattern="[a-zA-Z0-9]*"/>
                <div [hidden]="pass.valid || pass.untouched" class="alert alert-danger">
                    Пароль может содержать большие и малые буквы латинского алфавита, цифры.
                </div>
            </div>
        </div>
        
        <div class="form-group">
            <div class="row">
                <button [disabled]="email.invalid || pass.invalid"
                        class="btn btn-default" (click)="signIn(login, password)">Войти</button>
            </div>
            <div class="row">
                <button [disabled]="email.invalid || pass.invalid"
                        class="btn btn-default" (click)="addUser(login, password)">Зарегистрироваться</button>
            </div>
        </div>
        
    </div>`



})
export class LoginComponent {
    constructor(private router: Router){}

    login: string;
    password: string;

    signIn(login: string, password: string): void {
        let user = UserService.getUserByLogin(login, password);
        if (user != null){
            sessionStorage.setItem("User", JSON.stringify(user))
            this.router.navigate(['/requests']);
        } else{
            alert ("Неверный логин или пароль")
        }

    }

    addUser(login: string, password: string): void {
        let user = UserService.addUser(login, password);
        this.signIn(login,password);
    }

}
