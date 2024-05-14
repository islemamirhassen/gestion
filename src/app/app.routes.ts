
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
      },
];