import {Component, OnInit, Output} from '@angular/core';
import {getClassName} from "../helpers/object-helpers";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent {

  public readonly name: string;


  constructor() {
    this.name = getClassName(this);
  }

}
