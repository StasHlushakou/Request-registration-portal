import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {Rate} from "../Rate";


@Component({
    selector: 'home-app',
    template: `
        <div class="page-header text-center">

            <div class="container">
                <h1>Портал учета заявок</h1>
        
                <table class="table table-striped">
                    <tr>
                        <th>{{rate.Cur_OfficialRate}}</th>
                        <th><button class="btn btn-default col" (click)="logOut()">Выйти</button></th>
                    </tr>
                </table>
                    
                <div class="container-fluid">
                    <a routerLink="/login">login   </a>
                    <a routerLink="/requests">requests   </a>
                    <a routerLink="/requests/create">create requests</a>
                </div>
                    
                <router-outlet></router-outlet>
            </div>
        </div>
        
    
    
    
    `
})

export class AppComponent {

    rate: Rate;

    constructor(private router: Router, private http: HttpClient){}

    ngOnInit(){
        this.http.get('https://www.nbrb.by/api/exrates/rates/145').subscribe((data:Rate) => this.rate=data);
    }


    logOut(){
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
}
