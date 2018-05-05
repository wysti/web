import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWystiComponent } from './about-wysti.component';

describe('AboutWystiComponent', () => {
  let component: AboutWystiComponent;
  let fixture: ComponentFixture<AboutWystiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutWystiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWystiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
