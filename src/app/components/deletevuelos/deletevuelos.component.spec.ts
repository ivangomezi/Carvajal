import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletevuelosComponent } from './deletevuelos.component';

describe('DeletevuelosComponent', () => {
  let component: DeletevuelosComponent;
  let fixture: ComponentFixture<DeletevuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletevuelosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletevuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
