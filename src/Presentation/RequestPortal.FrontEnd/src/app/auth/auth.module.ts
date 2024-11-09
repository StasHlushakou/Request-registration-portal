import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: 'auth/register',
    component: RegisterComponent,
  },
  {
    path: 'auth/login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    TranslateModule,
  ],
  declarations: [RegisterComponent, LoginComponent],
})
export class AuthModule {}
