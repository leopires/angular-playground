import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericListComponent } from './generic-list/generic-list.component';
import { GenericListItemComponent } from './generic-list/generic-list-item/generic-list-item.component';

@NgModule({
  declarations: [GenericListComponent, GenericListItemComponent],
  exports: [GenericListComponent],
  imports: [CommonModule],
})
export class SharedComponentsModule {}
