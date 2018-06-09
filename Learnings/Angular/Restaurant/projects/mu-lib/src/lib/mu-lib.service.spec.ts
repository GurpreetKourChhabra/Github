import { TestBed, inject } from '@angular/core/testing';

import { MuLibService } from './mu-lib.service';

describe('MuLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MuLibService]
    });
  });

  it('should be created', inject([MuLibService], (service: MuLibService) => {
    expect(service).toBeTruthy();
  }));
});
