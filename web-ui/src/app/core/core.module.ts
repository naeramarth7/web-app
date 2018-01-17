import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

/**
 * Core module containing components and services only imported by the AppModule.
 *
 * @export
 * @class CoreModule
 */
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forChild([ ]),
  ],
  declarations: [
    FooterComponent,
    FourOhFourComponent,
    NavComponent,
  ],
  exports: [
    FooterComponent,
    FourOhFourComponent,
    NavComponent,
  ],
})
export class CoreModule {

  /**
   * Creates an instance of CoreModule.
   *
   * @param {CoreModule} parentModule
   */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

}
