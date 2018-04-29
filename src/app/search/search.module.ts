import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchStartComponent } from '../search-start/search-start.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SearchStartComponent
  ],
  declarations: [SearchStartComponent]
})
export class SearchModule { }
