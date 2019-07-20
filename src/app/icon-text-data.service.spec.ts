import { TestBed } from '@angular/core/testing';

import { IconTextDataService } from './icon-text-data.service';

describe('IconTextDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IconTextDataService = TestBed.get(IconTextDataService);
    expect(service).toBeTruthy();
  });
});
