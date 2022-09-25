import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve} from "@angular/router";
import {Book} from "../models/book.interface";
import books from '../mock/books';
import {delay, map, of} from "rxjs";

@Injectable()
export class BookResolverService implements Resolve<Book | null> {
  public resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id') || 0;

    return of<Book[]>(books).pipe(
      delay(300),
      map(books => books.find(book => book.id === +id) || null),
    );
  }
}
