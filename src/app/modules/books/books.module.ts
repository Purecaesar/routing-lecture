import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BooksComponent} from "./books.component";
import {BooksRoutingModule} from "./books-routing.module";
import {AllBooksComponent} from "./components/all-books/all-books.component";
import {BookComponent} from "./components/book/book.component";
import {BookContentComponent} from "./components/book-content/book-content.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [CommonModule, BooksRoutingModule, FontAwesomeModule],
  declarations: [BooksComponent, AllBooksComponent, BookComponent, BookContentComponent]
})
export class BooksModule {

}
