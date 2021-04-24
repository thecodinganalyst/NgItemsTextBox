import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  formGroup: FormGroup = this.fb.group({items: ['']});

  constructor(private fb: FormBuilder) {
  }

  logFormGroupValues(): void {
    console.log(this.formGroup.value);
  }

  UpdateItemsTextBox(): void {
    (this.formGroup.get('items') as FormControl).setValue(['d', 'e', 'f']);
  }
}
