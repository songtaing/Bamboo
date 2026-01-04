import { Injectable } from '@angular/core';
import { BaseService } from '../classes/base-service.class';
import { IProjectManagementItem } from '../interfaces/project-management-item.interface';
import { IProjectManagementService } from '../interfaces/project-management-service.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LogService } from './log.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectManagementService
  extends BaseService<IProjectManagementItem, number>
  implements IProjectManagementService
{
  constructor(logService: LogService, http: HttpClient) {
    super(logService, `${environment.apiDomainUri}/project-management`, http);

    this.logTraceFrame();
  }

  /*
  ======================================
  TESTING PURPOSES ONLY!
  ======================================
  */

  private _mockRepo: IProjectManagementItem[] = [
    {
      id: 1,
      name: 'Project 1',
      prirmaryContactName: 'John Doe',
      prirmaryContactPhone: '555-555-5555',
      projectNumber: '12345',
    },
    {
      id: 2,
      name: 'Project 2',
      prirmaryContactName: 'Jane Doe',
      prirmaryContactPhone: '555-555-5555',

      projectNumber: '12345',
    },
  ];

  override add(
    data: IProjectManagementItem
  ): Observable<IProjectManagementItem> {
    this.logTraceFrame();

    data.id = this._mockRepo.length + 1;

    this._mockRepo.push(data);

    return of(data);
  }

  override getAll(): Observable<IProjectManagementItem[]> {
    this.logTraceFrame();

    return of(this._mockRepo);
  }

  override getById(id: number): Observable<IProjectManagementItem> {
    this.logTraceFrame();

    const found = this._mockRepo.find((x) => x.id === id);

    if (found) {
      return of(found);
    }

    return of();
  }
}
