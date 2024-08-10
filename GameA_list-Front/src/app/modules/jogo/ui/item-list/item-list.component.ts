import { Component, Input } from '@angular/core';
import { jogo } from "../../jogo.model";



@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: []
})
export class ItemListComponent {

  @Input() jogo!: jogo;
}
