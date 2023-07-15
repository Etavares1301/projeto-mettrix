import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { SearchComponent } from './components/search/search.component';



@NgModule({
  declarations: [
    TableComponent,
    SearchComponent
  ],
  exports:[
    TableComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
