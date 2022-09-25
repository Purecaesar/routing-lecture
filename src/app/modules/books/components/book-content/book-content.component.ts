import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: 'rl-book-content',
  templateUrl: './book-content.component.html',
  styleUrls: ['./book-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookContentComponent {
  @Input() public name = '';
  @Input() public poster = '';
  @Input() public description = '';
  @Input() public rating = 0;

  public readonly ratingRange = [1, 2, 3, 4, 5];
}
