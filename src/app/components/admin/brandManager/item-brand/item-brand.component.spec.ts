import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBrandComponent } from './item-brand.component';

describe('ItemBrandComponent', () => {
  let component: ItemBrandComponent;
  let fixture: ComponentFixture<ItemBrandComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemBrandComponent]
    });
    fixture = TestBed.createComponent(ItemBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
