import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatevuelosComponent } from './updatevuelos.component';

describe('UpdatevuelosComponent', () => {
  let component: UpdatevuelosComponent;
  let fixture: ComponentFixture<UpdatevuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatevuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatevuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
