import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { ContentDetailComponent } from './content/content-detail/content-detail.component';
import { TechComponent } from './content/tech/tech.component';
import { TechDetailComponent } from './content/tech/tech-detail/tech-detail.component';
import { PageErrorComponent } from './page-error/page-error.component';

//configure specific to non specific
//if there is no root page just make it redirect'
//patchMatch ada prefix-masuk apa apa pun it is still going to redirect page and full
const routes: Routes = [
  { path: '', redirectTo: '/all', pathMatch: 'full'},
  { path: 'all', component: ContentComponent },
  { path: 'all/:id', component: ContentComponent },
  { path: 'tech', component: TechComponent},
  { path: '**', component: PageErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  ContentComponent, ContentDetailComponent,
  TechComponent, TechDetailComponent,
  PageErrorComponent
];
