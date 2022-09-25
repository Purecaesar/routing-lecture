import {ChangeDetectionStrategy, Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {pluck} from "rxjs";
import {Book} from "../../models/book.interface";

@Component({
  selector: 'rl-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  public readonly book$ = this.ar.data.pipe<Book>(pluck('book'));

  constructor(private readonly ar: ActivatedRoute) {
  }
}
