import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { User } from '../models/user.model';

@Component({
  selector: 'angular-cologne-resolver-page',
  templateUrl: './resolver-page.component.html',
  styleUrls: ['./resolver-page.component.scss'],
})
export class ResolverPageComponent {
  cards: User[] = [];
  placeholderCards = new Array(15);

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(
      ({ users }) => (this.cards = users ?? null)
    );
  }
}
