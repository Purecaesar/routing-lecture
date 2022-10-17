import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router} from "@angular/router";
import {Book} from "../models/book.interface";
import books from '../mock/books';
import {delay, map, of, tap} from "rxjs";

@Injectable()
export class BookResolverService implements Resolve<Book | null> {
  constructor(private readonly router: Router) {}

  public resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id') || 0;

    return of<Book[]>(books).pipe(
      delay(300),
      map(books => {
        const currBook = books.find(book => book.id === +id);
        if (!currBook) {
          alert(`There is no book with ${id} id`);
          void this.router.navigate(['all']);

          return null;
        }

        return currBook;
      }),
      tap(() => console.log('Data resolved!')),
    );
  }
}
