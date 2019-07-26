import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoveriutComponent } from './doveriut.component';

describe('DoveriutComponent', () => {
  let component: DoveriutComponent;
  let fixture: ComponentFixture<DoveriutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoveriutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoveriutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
