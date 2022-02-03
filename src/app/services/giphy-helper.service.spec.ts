import { TestBed } from '@angular/core/testing';

import { GiphyHelperService } from './giphy-helper.service';

describe('GiphyHelperService', () => {
  let service: GiphyHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiphyHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
