import { TestBed } from '@angular/core/testing';

import { BoatListService } from './boat-list.service';

describe('BoatListService', () => {
  let service: BoatListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoatListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
