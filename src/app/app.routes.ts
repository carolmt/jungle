import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoPageComponent } from './info-page/info-page.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'info',
        component: InfoPageComponent,
        title: 'Info',
    },
];