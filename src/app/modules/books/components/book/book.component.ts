import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {map, pluck} from "rxjs";
import {Book} from "../../models/book.interface";

@Component({
  selector: 'rl-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  public readonly book$ = this.ar.data.pipe<Book>(pluck('book'));
  public readonly book = this.ar.snapshot.data['book'] as Book;





  public readonly links$ = this.book$.pipe(
    map(({ id }) => {
      const allBooksIds = this.ar.snapshot.data['bookIds'] as number[];
      const currIdIndex = allBooksIds.findIndex(bookId => id === bookId);

      return {
        prev: allBooksIds[currIdIndex - 1],
        next: allBooksIds[currIdIndex + 1],
      };
    }),
  );

  constructor(private readonly ar: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('Component created');
  }
}
