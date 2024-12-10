import { Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { FilmsComponent } from './components/films/films.component';

export const routes: Routes = [
  {
    path: 'startwars',
    component: MainComponent,
    children: [
      {
        path: 'filmes',
        component: FilmsComponent,
      },
      { path: '', redirectTo: '/startwars/filmes', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: '/startwars', pathMatch: 'full' },
  { path: '**', redirectTo: '/startwars' },
];
