import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {ItemTextBoxModule} from './modules/item-text-box/item-text-box.module';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        ItemTextBoxModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should update the item list', () => {
    app.UpdateItemsTextBox();
    const items = app.formGroup.get('items') as FormControl;
    const itemsValue: string[] = items.value as string[];
    expect(itemsValue.length).toEqual(3);
  });

});
