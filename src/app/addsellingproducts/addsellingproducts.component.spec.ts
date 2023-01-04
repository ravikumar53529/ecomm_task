import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsellingproductsComponent } from './addsellingproducts.component';

describe('AddsellingproductsComponent', () => {
  let component: AddsellingproductsComponent;
  let fixture: ComponentFixture<AddsellingproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsellingproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsellingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
