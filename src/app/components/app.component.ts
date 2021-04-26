import { Component} from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../User'


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
