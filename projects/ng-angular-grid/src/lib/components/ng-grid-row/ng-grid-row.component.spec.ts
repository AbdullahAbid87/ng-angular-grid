import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGridRowComponent } from './ng-grid-row.component';

describe('NgGridRowComponent', () => {
  let component: NgGridRowComponent;
  let fixture: ComponentFixture<NgGridRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGridRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGridRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
