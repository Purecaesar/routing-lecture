import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'books',
    loadChildren: () => import('./modules/books/books.module').then(m => m.BooksModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'books',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
