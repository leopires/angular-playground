import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GenericListItem} from "../generic-list.models";

@Component({
  selector: 'app-generic-list-item',
  templateUrl: './generic-list-item.component.html',
  styleUrls: ['./generic-list-item.component.scss']
})
export class GenericListItemComponent {

  @Input()
  data: GenericListItem | undefined;

  @Output()
  selectedItem = new EventEmitter<GenericListItem>();

  constructor() { }

  selectItem() {
    this.selectedItem.emit(this.data);
  }
}
