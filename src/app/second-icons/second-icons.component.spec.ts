import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondIconsComponent } from './second-icons.component';

describe('SecondIconsComponent', () => {
  let component: SecondIconsComponent;
  let fixture: ComponentFixture<SecondIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
