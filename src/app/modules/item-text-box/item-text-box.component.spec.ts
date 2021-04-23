import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTextBoxComponent } from './item-text-box.component';

describe('ItemTextBoxComponent', () => {
  let component: ItemTextBoxComponent;
  let fixture: ComponentFixture<ItemTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTextBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
