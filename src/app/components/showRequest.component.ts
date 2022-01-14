import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {RequestService} from '../services/request.service';
import {Request} from "../Request";

@Component({

    selector: 'show-request-app',
    template: `

        
    <div class="container text-center">

        <table class="table table-striped table-bordered">
            <tr>
                <th i18n>Дата</th>
                <th class="text-left">{{request._date}}</th>
            </tr>
            <tr>
                <th i18n>Тема</th>
                <th class="text-left">{{request._theme}}</th>
            </tr>
            <tr>
                <th i18n>Описание</th>
                <th class="text-left">{{request._description}}</th>
            </tr>

        </table>

        <div class="row">
            <div class="col text-left">
                <button class="btn btn-primary" (click)="deleteRequest(request._id)" i18n>Удалить заявку</button>
            </div>

            <div class="col text-right">
                <button class="btn btn-primary" (click)="back()" i18n>Назад</button>
            </div>
        </div>
        

        
    </div>
        
        
    
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
