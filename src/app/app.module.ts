import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './components/app.component';
import { LoginComponent }   from './components/login.component';
import { RequestsComponent }   from './components/requests.component';
import { CreateRequestsComponent }   from './components/createRequests.component';
import { ShowRequestComponent } from './components/showRequest.component';
import {LocalStorageService} from './services/localStorage.service';
import {UserService} from './services/user.service';
import {RequestService} from './services/request.service';
import {LoginGuard} from "./guards/login.guard";
import {RequestsGuard} from "./guards/requests.guard";

import { HttpClientModule }   from '@angular/common/http';


// определение маршрутов
const appRoutes: Routes =[
    { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
    { path: 'requests/create', component: CreateRequestsComponent, canActivate: [RequestsGuard]},
    { path: 'requests/:id', component: ShowRequestComponent, canActivate: [RequestsGuard]},
    { path: 'requests', component: RequestsComponent, canActivate: [RequestsGuard]},
    { path: '**', redirectTo: 'login' }
];


@NgModule({
    imports:        [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule],
    declarations:   [ AppComponent , LoginComponent, RequestsComponent, CreateRequestsComponent, ShowRequestComponent ],
    bootstrap:      [ AppComponent ],
    providers:      [LocalStorageService, UserService, RequestService, LoginGuard, RequestsGuard]
})
export class AppModule { }
