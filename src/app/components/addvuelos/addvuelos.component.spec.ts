import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddvuelosComponent } from './addvuelos.component';

describe('AddvuelosComponent', () => {
  let component: AddvuelosComponent;
  let fixture: ComponentFixture<AddvuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddvuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddvuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
