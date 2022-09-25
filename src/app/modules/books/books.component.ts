import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'rl-books',
  templateUrl: './books.component.html',
  styleUrls: ['books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {

}
