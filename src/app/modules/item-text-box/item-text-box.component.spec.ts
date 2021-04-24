import {ComponentFixture, ComponentFixtureAutoDetect, TestBed, waitForAsync} from '@angular/core/testing';

import { ItemTextBoxComponent } from './item-text-box.component';
import {FormsModule} from '@angular/forms';

describe('ItemTextBoxComponent', () => {
  let component: ItemTextBoxComponent;
  let fixture: ComponentFixture<ItemTextBoxComponent>;
  let div: HTMLDivElement;
  let ul: HTMLUListElement;
  let input: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ItemTextBoxComponent ],
      providers: [{provide: ComponentFixtureAutoDetect, useValue: true}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTextBoxComponent);
    component = fixture.componentInstance;
    div = fixture.nativeElement;
    ul = div.getElementsByTagName('ul')[0];
    input = div.getElementsByTagName('input')[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should write 3 values to item', () => {
    component.writeValue(['a', 'b', 'c']);
    expect(component.items.length).toEqual(3);
  });

  it('should remove the middle item correctly', () => {
    component.writeValue(['a', 'b', 'c']);
    component.removeItem(1);
    expect(component.items.length).toEqual(2);
    expect(component.items[0]).toBe('a');
    expect(component.items[1]).toBe('c');
  });

  it('should disable', () => {
    component.setDisabledState(true);
    expect(component.disabled).toBe(true);
  });

  it('should not remove items when disabled', () => {
    component.writeValue(['a', 'b', 'c']);
    component.setDisabledState(true);
    component.removeItem(1);
    expect(component.items.length).toEqual(3);
  });

  it('should add an item', () => {
    component.onEnter('hello');
    expect(component.items.length).toBeGreaterThan(0);
    expect(component.items[0]).toEqual('hello');
  });

  it('should not write value if the component is disabled', () => {
    component.setDisabledState(true);
    component.writeValue(['a', 'b']);
    expect(component.items.length).toEqual(0);
  });

  it('should not add an item if the component is disabled', () => {
    component.setDisabledState(true);
    component.onEnter('hello');
    expect(component.items.length).toEqual(0);
  });

  it('should remove the last item', () => {
    component.writeValue(['a', 'b', 'c']);
    component.removeLast();
    expect(component.items.length).toEqual(2);
    expect(component.items[0]).toBe('a');
    expect(component.items[1]).toBe('b');
  });

  it('should remove the last item if the component is disabled', () => {
    component.writeValue(['a', 'b', 'c']);
    component.setDisabledState(true);
    component.removeLast();
    expect(component.items.length).toEqual(3);
  });

  it('should not remove last item if text is not empty', () => {
    component.writeValue(['a', 'b', 'c']);
    component.text = 'a';
    component.removeLast();
    expect(component.items.length).toEqual(3);
  });

  it('should update the onchange method', () => {
    const changeMethod = (items: string[]) => items.length;
    component.registerOnChange(changeMethod);
    expect(component.onChange).toBe(changeMethod);
  });

  it('should update the ontouched method', () => {
    const touchMethod = () => {};
    component.registerOnTouched(touchMethod);
    expect(component.onTouched).toBe(touchMethod);
  });

  it('should be touched after write value', () => {
    component.writeValue(['']);
    expect(component.touched).toBe(true);
  });

  it('should be touched after a keydown event on the textbox', waitForAsync(() => {
    expect(component.touched).toBe(false);
    spyOn(component, 'onTouched');
    input.dispatchEvent(new KeyboardEvent('keydown', {key: 'KeyA'}));
    expect(component.onTouched).toHaveBeenCalled();
  }));

});
