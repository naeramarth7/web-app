import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

import { CardHeaderToolbarComponent } from './card-header-toolbar/card-header-toolbar.component';
import { PageContentComponent } from './page-content/page-content.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
  ],
  declarations: [
    CardHeaderToolbarComponent,
    PageContentComponent,
  ],
  exports: [
    CardHeaderToolbarComponent,
    PageContentComponent,
  ],
})
export class SharedModule { }
