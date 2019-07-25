import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoSotrudnikiComponent } from './photo-sotrudniki.component';

describe('PhotoSotrudnikiComponent', () => {
  let component: PhotoSotrudnikiComponent;
  let fixture: ComponentFixture<PhotoSotrudnikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoSotrudnikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoSotrudnikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
