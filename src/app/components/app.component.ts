import {Component} from '@angular/core';
import {Router} from '@angular/router';


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

            
            
    </div>
    
    
    
    `
})

export class AppComponent {
    constructor(private router: Router){}

    logOut(){
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
}
