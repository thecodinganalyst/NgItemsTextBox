# ItemsTextBox

This is an Angular component of a textbox which allows users to input an array of text, and is compatible with Angular Reactive Forms.
This component is exactly like the Chips component in Angular Material, as such this component is created for demonstration purpose only.

## Usage Example

Import the `ReactiveFormsModule` and `ItemsTextBoxModule` into your app module

```javascript
import {ItemTextBoxModule} from 'items-text-box';
import {ReactiveFormsModule} from '@angular/forms';
```

In the angular template, add the `item-text-box` tag wherever you need it to be. Example below shows usage with [Angular ReactiveForm](https://angular.io/guide/reactive-forms)
```javascript
<item-text-box formControlName="items" id="itemsTextBox"></item-text-box>
```

## Sample Usage

### app.component.ts
```javascript
import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  formGroup: FormGroup = this.fb.group({items: [['a','b','c']]});

  constructor(private fb: FormBuilder) {
  }

  logFormGroupValues(): void {
    console.log(this.formGroup.value);
  }

  UpdateItemsTextBox(): void {
    (this.formGroup.get('items') as FormControl).setValue(['d', 'e', 'f']);
  }
}
```

### app.component.html
```javascript
<form [formGroup]="formGroup" (ngSubmit)="logFormGroupValues()" (keydown.enter)="$event.preventDefault()">
  <label for="itemsTextBox">Items: </label>
  <item-text-box formControlName="items" id="itemsTextBox"></item-text-box>
  <button type="button" (click)="UpdateItemsTextBox()">Update ItemsTextBox</button>
  <button type="submit">Submit</button>
</form>
```

### app.module.ts
```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ItemTextBoxModule} from 'items-text-box';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ItemTextBoxModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
