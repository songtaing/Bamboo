import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ReminderService } from './reminder.service';

describe('ReminderService', () => {
  let service: ReminderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ReminderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
