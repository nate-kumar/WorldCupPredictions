import { TestBed, inject } from '@angular/core/testing';

import { MatchdayDataService } from './matchday-data.service';

describe('MatchdayDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchdayDataService]
    });
  });

  it('should be created', inject([MatchdayDataService], (service: MatchdayDataService) => {
    expect(service).toBeTruthy();
  }));
});
