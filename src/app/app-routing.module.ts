import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BmaComponent } from './bma/bma.component';


const routes: Routes = [
  {path: '', redirectTo: '/bma', pathMatch: 'full'},
  {path: 'bma', component: BmaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
