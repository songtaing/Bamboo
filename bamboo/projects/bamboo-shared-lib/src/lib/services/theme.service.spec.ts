import { TestBed } from '@angular/core/testing';

import { LIB_CONFIG } from '../interfaces/bamboo-shared-lib-config.interface';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: LIB_CONFIG,
          useClass: LIB_CONFIG,
        },
      ],
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
