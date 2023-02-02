import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshippingdetailsComponent } from './addshippingdetails.component';

describe('AddshippingdetailsComponent', () => {
  let component: AddshippingdetailsComponent;
  let fixture: ComponentFixture<AddshippingdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshippingdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddshippingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
