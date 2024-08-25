import {Component, Output, EventEmitter} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: []
})
export class SearchBarComponent {


  @Output() searchText = new EventEmitter<string>();


  search(event: KeyboardEvent) {
    let text: string = (event.target as HTMLInputElement).value;
    this.searchText.emit(text);
  }
}
