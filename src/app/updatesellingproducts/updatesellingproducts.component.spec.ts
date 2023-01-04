import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesellingproductsComponent } from './updatesellingproducts.component';

describe('UpdatesellingproductsComponent', () => {
  let component: UpdatesellingproductsComponent;
  let fixture: ComponentFixture<UpdatesellingproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatesellingproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesellingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
