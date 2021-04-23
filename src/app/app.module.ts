import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemTextBoxModule} from './modules/item-text-box/item-text-box.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    ItemTextBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
