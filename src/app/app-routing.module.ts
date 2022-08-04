import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import "@angular/compiler";


const routes: Routes = [
{path:'heroes', component:HeroesComponent},

{path:'dashboard', component:DashboardComponent}, //router link must show here.
{path:'product', component:ProductComponent}, //router link must show here.
{path:'contact', component:ContactComponent}, //router link must show here.

{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];


@NgModule({
  imports: [
    CommonModule,
     

  ],
  declarations: []
})

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

   
 }
