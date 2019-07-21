import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcompanyPageComponent } from './aboutcompany-page.component';

describe('AboutcompanyPageComponent', () => {
  let component: AboutcompanyPageComponent;
  let fixture: ComponentFixture<AboutcompanyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutcompanyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
