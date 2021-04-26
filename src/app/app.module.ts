import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './components/app.component';
import { LoginComponent }   from './components/login.component';
import { RequestsComponent }   from './components/requests.component';
import { CreateRequestsComponent }   from './components/createRequests.component';
import {DataService} from './services/data.service';


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
    bootstrap:    [ AppComponent ],
    providers: [DataService]
})
export class AppModule { }
