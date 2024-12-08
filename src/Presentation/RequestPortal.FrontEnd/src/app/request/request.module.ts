import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RequestListComponent } from './components/list/list.component';
import { CreateRequestComponent } from './components/create/create.component';
import { UpdateRequestComponent } from './components/update/update.component';
import { ViewRequestComponent } from './components/view/view.component';
import { GuardService } from '../shared/helpers/app.guard';

const routes: Routes = [
  {
    path: 'request',
    component: RequestListComponent,
    canActivate: [GuardService],
    pathMatch: 'full',
    data: {
      shouldBeAuthenticated: true,
    },
  },
  {
    path: 'request/create',
    component: CreateRequestComponent,
    canActivate: [GuardService],
    pathMatch: 'full',
    data: {
      shouldBeAuthenticated: true,
    },
  },
  {
    path: 'request/:id',
    component: ViewRequestComponent,
    canActivate: [GuardService],
    pathMatch: 'full',
    data: {
      shouldBeAuthenticated: true,
    },
  },
  {
    path: 'request/:id/update',
    component: UpdateRequestComponent,
    canActivate: [GuardService],
    pathMatch: 'full',
    data: {
      shouldBeAuthenticated: true,
    },
  },
  { path: '**', redirectTo: 'request' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [
    RequestListComponent,
    CreateRequestComponent,
    UpdateRequestComponent,
    ViewRequestComponent,
  ],
})
export class RequestModule {}
