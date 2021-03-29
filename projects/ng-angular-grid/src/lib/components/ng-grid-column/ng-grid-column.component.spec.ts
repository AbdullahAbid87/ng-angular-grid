import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGridColumnComponent } from './ng-grid-column.component';

describe('NgGridColumnComponent', () => {
  let component: NgGridColumnComponent;
  let fixture: ComponentFixture<NgGridColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGridColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGridColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
