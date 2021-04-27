import { Component } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {RequestService} from '../services/request.service';
import {Request} from "../Request";

@Component({

    selector: 'requests-app',
    template: `<div class="page-header text-center">
        <h1> Страница заявок </h1>
    </div>
    
    
    <div class="container">

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Дата</th>
                <th>Тема</th>
                <th>Описание</th>
            </tr>
            <tr *ngFor="let req of requests" (click)="openRecord(req._id)">
                <td>{{req._date}}</td>
                <td>{{req._theme}}</td>
                <td><button class="btn btn-default" (click)="deleteRequest(req._id)">Удалить заявку</button></td>
            </tr>
            </thead>
            <tbody>

            </tbody>
        </table>

        <button class="btn btn-default" (click)="addRequest()">Создать новый запрос</button>
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
        let isdelete = confirm(`Вы уверены, что хотите удалить заявку № ${requestId}?`)
        if (isdelete) {
            RequestService.removeRecordById(requestId);
            this.requests = RequestService.getRecordsByUserId(this.userId);
        }
    }

    ngOnInit(){
        this.userId = JSON.parse(sessionStorage.getItem("User"))._id;
        this.requests = RequestService.getRecordsByUserId(this.userId);
    }

    openRecord(recordId: number){
        alert(recordId)
    }



}
