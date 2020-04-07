import { TestBed } from '@angular/core/testing';

import { MapTextService } from './map-text.service';

describe('MapTextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapTextService = TestBed.get(MapTextService);
    expect(service).toBeTruthy();
  });
});
