import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BooksComponent} from "./books.component";
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {BookComponent} from "./components/book/book.component";
import {BookResolverService} from "./services/book-resolver.service";
import {BooksResolverService} from "./services/books-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    data: {
      bookIds: [1, 2, 3, 4],
    },
    children: [
      {
        path: 'all',
        component: AllBooksComponent,
        resolve: {
          books: BooksResolverService,
        }
      },
      {
        path: ':id',
        component: BookComponent,
        resolve: {
          book: BookResolverService
        },
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'all',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  providers: [BookResolverService, BooksResolverService],
  exports: [RouterModule],
})
export class BooksRoutingModule {

}
