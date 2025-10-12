import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../shared/classes/base-service.class';
import { LogService } from '../../shared/services/log.service';
import { IReminderCategory } from '../interfaces/reminder-category.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReminderCategoryService extends BaseService<
  IReminderCategory,
  string
> {
  constructor(logService: LogService, http: HttpClient) {
    super(logService, `${environment.apiDomainUri}/reminder-categories`, http);
  }

  override getAll(): Observable<IReminderCategory[]> {
    let mockCategories: IReminderCategory[] = [];

    mockCategories.push({
      categoryId: '1',
      categoryName: 'None',
    });

    mockCategories.push(
      ...[
        {
          categoryId: '1',
          categoryName: 'None',
        },
        {
          categoryId: '2',
          categoryName: 'Birthday',
        },
        {
          categoryId: '3',
          categoryName: 'Maintainence',
        },
      ]
    );

    return of(mockCategories);
  }
}
