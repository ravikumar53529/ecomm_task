import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadminproductsComponent } from './addadminproducts.component';

describe('AddadminproductsComponent', () => {
  let component: AddadminproductsComponent;
  let fixture: ComponentFixture<AddadminproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadminproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddadminproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
