import { TestBed } from '@angular/core/testing';

import { ReminderCategoryService } from './reminder-category.service';

describe('ReminderCategoryService', () => {
  let service: ReminderCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReminderCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
