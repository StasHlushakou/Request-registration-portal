import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({

    selector: 'login-app',
    template: `<div class="page-header text-center">
        <h1> Страница логина </h1>
    </div>
    
    
    <div class="container">
        
        <div class="row">
            <input class="form-control " [(ngModel)]="login" placeholder = "Логин" />
        </div>

        <div class="row">
            <input class="form-control" [(ngModel)]="password" placeholder="Пароль" />
        </div>
        
        <div class="row">
            <button class="btn btn-default center-block " (click)="signIn(login, password)">Войти</button>
            <button class="btn btn-default center-block" (click)="addUser(login, password)">Зарегистрироваться</button>
        </div>
        
    </div>`



})
export class LoginComponent {
    constructor(private router: Router){}

    login: string;
    password: string;



    signIn(login: string, password: string): void {
        alert(login + ' ' + password)
        this.router.navigate(['/requests']);
    }

    addUser(login: string, password: string): void {
        alert("reg")
        this.router.navigate(['/requests']);
    }

}
