import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResheniaComponent } from './reshenia.component';

describe('ResheniaComponent', () => {
  let component: ResheniaComponent;
  let fixture: ComponentFixture<ResheniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResheniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResheniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
