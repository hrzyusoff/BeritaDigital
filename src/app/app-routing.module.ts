import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { TechComponent } from './content/tech/tech.component';

const routes: Routes = [
  { path: 'tech', component: TechComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [TechComponent]
