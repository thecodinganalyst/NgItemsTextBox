import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator} from '@angular/forms';
import {isNull} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'item-text-box',
  templateUrl: './item-text-box.component.html',
  styleUrls: ['./item-text-box.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    multi: true,
    useExisting: forwardRef(() => ItemTextBoxComponent)
  }, {
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: forwardRef(() => ItemTextBoxComponent)
  }]
})
export class ItemTextBoxComponent implements OnInit, ControlValueAccessor, Validator  {

  items: string[] = [];
  text = '';
  touched = false;
  disabled = false;

  onChange = (items: string[]) => {};
  onTouched = () => { this.touched = true; };

  removeItem(item: number): void {
    if (this.disabled) { return; }
    this.items.splice(item, 1);
    this.copyAndEmit();
  }

  ngOnInit(): void {
  }

  onEnter(value: string): void {
    if (this.disabled) { return; }
    this.items.push(value);
    this.text = '';
    this.copyAndEmit();
  }

  removeLast(): void {
    if (this.disabled) { return; }
    if (this.text.length === 0) {
      this.items.pop();
      this.copyAndEmit();
    }
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(items: string[]): void {
    if (!this.disabled) {
      this.onTouched();
      this.items = items ? items : [];
      this.copyAndEmit();
    }
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return null;
  }

  private copyAndEmit(): void {
    this.items = this.items.slice(0);
    this.onChange(this.items);
    this.onTouched();
  }

}
