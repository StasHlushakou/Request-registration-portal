import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {RequestService} from '../services/request.service';

@Component({

    selector: 'create-requests-app',
    template: `
    <div class="container text-center">

        <div class="row">
            <input class="form-control" [(ngModel)]="theme" (focus)="resetThemeAlert()" maxlength="50" i18n-placeholder placeholder = "Тема" autocomplete="off"/>
        </div>
        <div [hidden]="!isThemeAlert" class="alert alert-danger" i18n>
            Тема должна содержать не менее 3 и не более 50 символов.</div>
        
        <div class="row">
            <input class="form-control" [(ngModel)]="description" (focus)="resetDescriptionAlert()" maxlength="500" i18n-placeholder placeholder="Описание" autocomplete="off"/>
        </div>
        <div [hidden]="!isDescriptionAlert" class="alert alert-danger" i18n>
            Описание должно содержать не менее 3 и не более 500 символов.</div>
        
        <div class="row">
            <input  class="form-control" type="date" [(ngModel)]="date">
        </div>
        
        <div class="row">
            <div class="col text-left">
                <button class="btn btn-primary" (click)="createRequest(theme, description, date)" i18n>Создать запрос</button>
            </div>

            <div class="col text-right">
                <button class="btn btn-primary" (click)="back()" i18n>Назад</button>
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
    date: Date;

    isThemeAlert: boolean;
    isDescriptionAlert: boolean;

    createRequest(theme: string, description: string, date: Date): void{
        if (this.theme.length < 3 || this.theme.length > 50){
            this.isThemeAlert = true;
            return;
        }
        if (this.description.length < 3 || this.description.length > 500){
            this.isDescriptionAlert = true;
            return;
        }
        date = new Date(date)
        RequestService.addRequest(this.userId,theme, description, date);
        this.router.navigate(['/requests']);
    }

    back(){
        this.router.navigate(['/requests']);
    }

    ngOnInit(){
        this.userId = JSON.parse(sessionStorage.getItem("User"))._id;
        this.isThemeAlert = false;
        this.isDescriptionAlert = false;
    }

    resetThemeAlert(){
        this.isThemeAlert = false;
    }

    resetDescriptionAlert(){
        this.isDescriptionAlert = false;
    }

}
