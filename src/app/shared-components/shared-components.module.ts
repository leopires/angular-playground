import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListDisplayComponent} from "./list-display/list-display.component";



@NgModule({
  declarations: [
    ListDisplayComponent
  ],
  exports: [
    ListDisplayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
