import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RequestService} from '../services/request.service';
import {Request} from "../Request";

@Component({

    selector: 'show-request-app',
    template: `<div class="page-header text-center">
        <h1> Страница просмотра заявки </h1>
    </div>




    <table class="table table-striped">
        <thead>
        <tr>
            <th>Дата</th>
            <th>Тема</th>
            <th>Описание</th>
        </tr>
        <tr>
            <td>{{request._date}}</td>
            <td>{{request._theme}}</td>
            <td>{{request._description}}</td>
            <td><button class="btn btn-default" (click)="deleteRequest(request._id)">Удалить заявку</button></td>
        </tr>
        </thead>
        <td><button class="btn btn-default" (click)="back()">Назад</button></td>
    </table>
    
    
    `
})
export class ShowRequestComponent {


    userId: number;
    request: Request;



    constructor(private router: Router, private activateRoute: ActivatedRoute){
        this.userId = JSON.parse(sessionStorage.getItem("User"))._id;
        this.request = RequestService.getRequestById(this.userId, activateRoute.snapshot.params['id']);
        if (this.request == null){
            this.router.navigate(['/requests']);
        }
    }


    back(){
        this.router.navigate(['/requests']);
    }

    deleteRequest(requestId: number){
        let isdelete = confirm(`Вы уверены, что хотите удалить заявку № ${requestId}?`)
        if (isdelete) {
            RequestService.removeRecordById(requestId) ;
            this.router.navigate(['/requests']);
        }
    }



}
