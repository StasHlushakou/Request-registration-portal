import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TopBarComponent } from './components/topBar/topBar.component.ts';

@NgModule({
  imports: [CommonModule, RouterModule, TranslateModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class SharedModule {}
