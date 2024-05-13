
import { Routes } from '@angular/router';
import { HomeComponent } from './article/home/home.component';
import { EditComponent } from './article/edit/edit.component';
import { CreateComponent } from './article/create/create.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'article/home',
        pathMatch: 'full'
       },
        {
          path: 'article/home',
          component: HomeComponent,
        },
        {
          path:'article/edit/:id',
          component: EditComponent,
        },
        {
          path: 'article/create',
          component: CreateComponent,
        }
];