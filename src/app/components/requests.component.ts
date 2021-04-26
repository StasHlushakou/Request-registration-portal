import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../services/data.service';
import {Record} from "../Record";

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
            <tr *ngFor="let rec of records" (click)="openRecord(rec._id)">
                <td>{{rec._date}}</td>
                <td>{{rec._theme}}</td>
                <td><button class="btn btn-default" (click)="deleteRequest(rec._id)">Удалить заявку</button></td>
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
    constructor(private router: Router, private dataService: DataService){}

    records: Record[] = [];


    addRequest(){
        this.router.navigate(['/requests/create']);
    }

    deleteRequest(requestId: number){
        let isdelete = confirm(`Вы уверены, что хотите удалить заявку № ${requestId}?`)
        if (isdelete) {
            this.dataService.removeRecordById(requestId);
            this.records = this.dataService.getRecordsByUserId(1);
        }
    }

    ngOnInit(){
        this.records = this.dataService.getRecordsByUserId(1);
    }

    openRecord(recordId: number){
        alert(recordId)
    }



}
