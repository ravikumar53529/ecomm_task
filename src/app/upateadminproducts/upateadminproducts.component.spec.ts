import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpateadminproductsComponent } from './upateadminproducts.component';

describe('UpateadminproductsComponent', () => {
  let component: UpateadminproductsComponent;
  let fixture: ComponentFixture<UpateadminproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpateadminproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpateadminproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
