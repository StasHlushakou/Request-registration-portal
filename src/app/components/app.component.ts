import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient} from '@angular/common/http';
import {Rate} from "../Rate";


@Component({
    selector: 'home-app',
    template: `
        <div class="container text-center">
            
            
            <div class="row">
                <div class="col">
                    <h1 i18n>Портал учета заявок</h1>
                </div>
            </div>


            <div class="row">
                <div class="col text-left" i18n>
                    Текущий курс USD : {{rate.Cur_OfficialRate}}
                </div>

                <div class="col text-right">
                    <button class="btn btn-primary" (click)="logOut()" [hidden]="isLogIn()" i18n>Выйти</button>
                </div>
            </div>
            
        </div>

        <router-outlet></router-outlet>    
        
    `
})

export class AppComponent {

    rate: Rate;

    constructor(private router: Router, private http: HttpClient){}

    ngOnInit(){
        this.http.get('https://www.nbrb.by/api/exrates/rates/431').subscribe((data:Rate) => this.rate = data, (error:any) => this.rate = new Rate());
    }

    isLogIn(){
        return this.router.url.endsWith("login")
    }

    logOut(){
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
}
