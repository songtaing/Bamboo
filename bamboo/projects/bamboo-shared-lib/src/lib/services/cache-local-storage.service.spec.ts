import { TestBed } from '@angular/core/testing';
import { CacheLocalStorageService } from './cache-local-storage.service';

describe('CacheService', () => {
  let service: CacheLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
