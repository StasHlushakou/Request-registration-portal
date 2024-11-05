import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HelloPageComponent } from './components/helloPage/helloPage.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: HelloPageComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [HelloPageComponent],
})
export class GlobalFeedModule {}
