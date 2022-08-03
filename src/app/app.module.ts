import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 import { routing } from './app.routes';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { HeroesComponent } from './heroes/heroes.component';


import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    MaincontentComponent,
    HeroesComponent,
    HeroDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
