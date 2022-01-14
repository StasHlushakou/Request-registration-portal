import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {RequestService} from '../services/request.service';
import {Request} from "../Request";

@Component({

    selector: 'requests-app',
    template: `    
    
    <div class="container text-center">

        <table class="table table-striped">
            <thead>
            <tr>
                <th i18n>Дата</th>
                <th i18n>Тема</th>
                <th></th>
            </tr>
            <tr *ngFor="let req of requests" (click)="openRequest(req._id)">
                <td>{{req._date}}</td>
                <td>{{req._theme}}</td>
                <td class="text-right"><button class="btn btn-primary" (click)="deleteRequest(req._id)" i18n>Удалить заявку</button></td>
            </tr>
            </thead>

        </table>

        <button class="btn btn-primary" (click)="addRequest()" i18n>Создать новый запрос</button>
    </div>
    
    
    
    `,

})
export class RequestsComponent {
    constructor(private router: Router){}

    requests: Request[] = [];
    userId: number;

    addRequest(){
        this.router.navigate(['/requests/create']);
    }

    deleteRequest(requestId: number){
        event.stopPropagation()
        let isdelete = confirm(`Вы уверены, что хотите удалить заявку № ${requestId}?`)
        if (isdelete) {
            RequestService.removeRecordById(requestId) ;
            this.requests = RequestService.getRecordsByUserId(this.userId);
        }
    }

    ngOnInit(){
        this.userId = JSON.parse(sessionStorage.getItem("User"))._id;
        this.requests = RequestService.getRecordsByUserId(this.userId);
    }

    openRequest(requestId: number){
        this.router.navigate(['/requests/' + requestId]);
    }



}
