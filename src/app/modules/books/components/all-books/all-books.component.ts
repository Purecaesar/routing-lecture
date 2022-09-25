import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: 'rl-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllBooksComponent {

}
