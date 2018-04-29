import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOrEditMainComponent } from './new-or-edit-main.component';

describe('NewOrEditMainComponent', () => {
  let component: NewOrEditMainComponent;
  let fixture: ComponentFixture<NewOrEditMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewOrEditMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOrEditMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
