import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakdobrComponent } from './kakdobr.component';

describe('KakdobrComponent', () => {
  let component: KakdobrComponent;
  let fixture: ComponentFixture<KakdobrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakdobrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakdobrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
