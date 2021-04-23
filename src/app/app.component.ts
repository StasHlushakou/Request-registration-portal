import { Component} from '@angular/core';
import {Router} from '@angular/router';

class User {
    readonly _id : number;
    readonly _login: string;
    readonly _password: string;

    constructor(id : number, login: string, password: string) {
        this._id = id;
        this._login = login;
        this._password = password;
    }
}

@Component({
    selector: 'home-app',
    template: `        
        <div class="text-center">
        <h1>Портал учета заявок</h1>
            
        <div class="container-fluid">
            <a routerLink="/login">login   </a>
            <a routerLink="/requests">requests   </a>
            <a routerLink="/requests/create">create requests</a>
        </div>

        <router-outlet></router-outlet>

    <button (click)="logOut()">Log out</button>
    </div>
    
    
    
    `
})

export class AppComponent {
    user : User;

    ngOnInit() {this.user = null}
    constructor(private router: Router){}

    logOut(){
        this.user = null;
        this.router.navigate(['']);
    }
}
