import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {RequestService} from '../services/request.service';

@Component({

    selector: 'create-requests-app',
    template: `
    <div class="container text-center">

        <div class="row">
            <input class="form-control" [(ngModel)]="theme"   maxlength="50" placeholder = "Тема" />
        </div>
        
        <div class="row">
            <input class="form-control" [(ngModel)]="description" maxlength="500" placeholder="Описание" />
        </div>
        
        <div class="row">
            <div class="col text-left">
                <button class="btn btn-primary" (click)="createRequest(theme, description)">Создать запрос</button>
            </div>

            <div class="col text-right">
                <button class="btn btn-primary" (click)="back()">Назад</button>
            </div>
        </div>
        
    </div>
    
    
    `
})
export class CreateRequestsComponent {
    constructor(private router: Router){}

    userId: number;
    theme: string;
    description: string;


    createRequest(theme: string, description: string){
        RequestService.addRequest(this.userId,theme, description);
        this.router.navigate(['/requests']);
    }

    back(){
        this.router.navigate(['/requests']);
    }

    ngOnInit(){
        this.userId = JSON.parse(sessionStorage.getItem("User"))._id;
    }



}
