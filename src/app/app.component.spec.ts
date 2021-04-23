import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ItemTextBoxModule} from './modules/item-text-box/item-text-box.module';
import {ItemTextBoxComponent} from './modules/item-text-box/item-text-box.component';

describe('AppComponent', () => {
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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
