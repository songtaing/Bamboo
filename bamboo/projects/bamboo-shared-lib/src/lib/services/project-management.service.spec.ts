import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ProjectManagementService } from './project-management.service';

describe('ProjectManagementService', () => {
  let service: ProjectManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ProjectManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
