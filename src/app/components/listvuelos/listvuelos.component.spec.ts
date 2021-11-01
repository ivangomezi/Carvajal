import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvuelosComponent } from './listvuelos.component';

describe('ListvuelosComponent', () => {
  let component: ListvuelosComponent;
  let fixture: ComponentFixture<ListvuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
