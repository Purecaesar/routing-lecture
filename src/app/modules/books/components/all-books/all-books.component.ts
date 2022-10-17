import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {pluck} from "rxjs";
import {Book} from "../../models/book.interface";

@Component({
  selector: 'rl-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllBooksComponent {

  public books$ = this.acr.data.pipe<Book[]>(pluck('books'));

  constructor(private readonly acr: ActivatedRoute) {
  }
}
