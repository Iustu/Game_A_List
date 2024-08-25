import { Component, Input } from '@angular/core';
import { biblioteca } from '../../biblioteca.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: []
})
export class ItemListComponent {

  @Input() biblioteca!: biblioteca;
}
