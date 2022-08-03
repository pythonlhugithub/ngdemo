//import { ModuleWithProviders } from '@angular/core';    
import { Routes, RouterModule } from '@angular/router';  
import {MaincontentComponent } from './maincontent/maincontent.component';  
import { NavbarComponent } from './navbar/navbar.component';  
import { SidebarComponent } from './sidebar/sidebar.component';  
import { ModuleWithProviders } from '@angular/core';
export const appRoutes: Routes = [  
    { path: '', redirectTo: 'app-root', pathMatch: 'full' },    
    { path: 'app-maincontent', component: MaincontentComponent },    
    { path: 'app-navbar', component: NavbarComponent },    
    { path: 'app-sidbar', component: SidebarComponent },   
];  
 
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);  