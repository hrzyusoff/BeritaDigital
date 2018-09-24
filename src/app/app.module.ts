import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
// import { PageErrorComponent } from './page-error/page-error.component';
// import { TechComponent } from './content/tech/tech.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutingComponents,
    // PageErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
