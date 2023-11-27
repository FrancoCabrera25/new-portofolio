import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/Home.component').then(
      (m) => m.HomeComponent
    ),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/About.component').then(
      (m) => m.AboutComponent
    ),
  },
];
