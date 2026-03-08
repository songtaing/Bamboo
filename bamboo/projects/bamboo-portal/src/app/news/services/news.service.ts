import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/classes/base-service.class';
import { INews } from '../interfaces/news.interface';
import { INewsService } from '../interfaces/news-service.interface';
import { LogService } from '../../shared/services/log.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, of } from 'rxjs';
import { IDataFilter } from '../../shared/interfaces/filters/data-filter.interface';
import { IPayload } from '../../shared/interfaces/payload.interface';
import { INewsSearchFilter } from '../interfaces/news-search-filter.interface';

@Injectable({
  providedIn: 'root',
})
export class NewsService
  extends BaseService<INews, number>
  implements INewsService
{
  private _mockRepo: INews[] = [];

  constructor(logService: LogService, http: HttpClient) {
    super(logService, `${environment.apiDomainUri}/news`, http);

    this.logTraceFrame();
    this.generateMockRepo();
  }

  generateMockRepo(): void {
    this.logTraceFrame();

    for (let x = 1; x <= 99999; x++) {
      this._mockRepo.push({
        newsId: x,
        author: `Mock Author ${x}`,
        title: `Mock Title ${x}`,
        content: `Mock Description ${x}`,
      });
    }
  }

  override getAll(): Observable<INews[]> {
    this.logTraceFrame();

    return of(this._mockRepo);
  }

  override search(
    filter: IDataFilter<INewsSearchFilter>
  ): Observable<IPayload<INews>> {
    const start: number = filter.pageIndex * filter.pageSize;
    const end: number = start + filter.pageSize;

    const payload: IPayload<INews> = {
      results: this._mockRepo.slice(start, end),
      totalCount: this._mockRepo.length,
    };

    return of(payload);
  }
}
