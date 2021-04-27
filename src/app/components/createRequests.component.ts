import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {RequestService} from '../services/request.service';

@Component({

    selector: 'requests-app',
    template: `<div class="page-header text-center">
        <h1> Страница создания заявок </h1>
    </div>




    <div class="container">
        
        <div class="row">
            <input class="form-control" [(ngModel)]="theme" placeholder = "Тема" />
        </div>
        
        <div class="row">
            <input class="form-control" [(ngModel)]="description" placeholder="Описание" />
        </div>
        
        <div class="row">
            <button class="btn btn-default" (click)="createRequest(theme, description)">Создать запрос</button>
            <button class="btn btn-default" (click)="back()">Назад</button>
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
