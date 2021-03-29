import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGridContainerComponent } from './ng-grid-container.component';

describe('NgGridContainerComponent', () => {
  let component: NgGridContainerComponent;
  let fixture: ComponentFixture<NgGridContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgGridContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGridContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
