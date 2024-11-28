import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RequestListComponent } from './components/list/list.component';
import { CreateRequestComponent } from './components/create/create.component';
import { UpdateRequestComponent } from './components/update/update.component';
import { ViewRequestComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    component: RequestListComponent,
  },
  {
    path: 'create',
    component: CreateRequestComponent,
  },
  {
    path: ':id',
    component: ViewRequestComponent,
  },
  {
    path: ':id/update',
    component: UpdateRequestComponent,
  },
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
