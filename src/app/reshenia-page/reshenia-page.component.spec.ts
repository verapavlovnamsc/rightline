import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResheniaPageComponent } from './reshenia-page.component';

describe('ResheniaPageComponent', () => {
  let component: ResheniaPageComponent;
  let fixture: ComponentFixture<ResheniaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResheniaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResheniaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
