import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemTextBoxComponent } from './item-text-box.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    ItemTextBoxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ItemTextBoxComponent
  ]
})
export class ItemTextBoxModule { }
