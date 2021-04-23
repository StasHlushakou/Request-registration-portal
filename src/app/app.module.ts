import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { LoginComponent }   from './login.component';
import { RequestsComponent }   from './requests.component';
import { CreateRequestsComponent }   from './createRequests.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: 'login', component: LoginComponent},
    { path: 'requests/create', component: CreateRequestsComponent},
    { path: 'requests', component: RequestsComponent},
    { path: '**', redirectTo: 'login' }
];


@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent , LoginComponent, RequestsComponent, CreateRequestsComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
