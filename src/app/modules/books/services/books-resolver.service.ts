import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Book} from "../models/book.interface";
import {map, of} from "rxjs";
import Books from "../mock/books";

@Injectable()
export class BooksResolverService implements Resolve<Book[]> {
  public resolve() {
    return of(Books);
  }
}
