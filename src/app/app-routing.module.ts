import { NgModule } from '@angular/core';
import {RouteReuseStrategy, RouterModule, Routes} from '@angular/router';
import {ReuseStrategy} from "./modules/books/services/reuse-strategy";

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
  providers: [
    // {
    //   provide: RouteReuseStrategy,
    //   useClass: ReuseStrategy,
    // }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
