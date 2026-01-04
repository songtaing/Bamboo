import { TestBed } from '@angular/core/testing';

import { CacheSessionStorageService } from './cache-session-storage.service';

describe('CacheSessionStorageService', () => {
  let service: CacheSessionStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheSessionStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
