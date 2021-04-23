import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({

    selector: 'requests-app',
    template: `<div class="page-header text-center">
        <h1> Страница заявок </h1>
    </div>
    
    
    <div class="container-fluid">
        
    </div>
    
        
        
    `
})
export class RequestsComponent {
    constructor(private router: Router){}

}
