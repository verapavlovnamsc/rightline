import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreimushestvaComponent } from './preimushestva.component';

describe('PreimushestvaComponent', () => {
  let component: PreimushestvaComponent;
  let fixture: ComponentFixture<PreimushestvaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreimushestvaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreimushestvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
