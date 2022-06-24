import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'angular-cologne-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() title = 'Foo';
  @Input() imageUrl = 'https://placekitten.com/300/200';
}
