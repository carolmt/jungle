import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () =>
            import('./home/home.component').then(
                (c)=> c.HomeComponent
            ),
    },
    {
        path:'info',
        loadComponent: () =>
            import('./info-page/info-page.component').then(
                (c)=> c.InfoPageComponent
            ),    }   
];
