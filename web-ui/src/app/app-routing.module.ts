import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FourOhFourComponent } from 'app/core/four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'reports', loadChildren: 'app/reports/reports.module#ReportsModule' },
  { path: '**', component: FourOhFourComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
