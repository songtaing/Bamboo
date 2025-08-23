import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDataFilter } from '../interfaces/filters/data-filter.interface';
import { IPayload } from '../interfaces/payload.interface';
import { IService } from '../interfaces/service.interface';
import { LogService } from '../services/log.service';
import { BaseRoot } from './base-root.class';

export abstract class BaseService<T, K>
  extends BaseRoot
  implements IService<T, K>
{
  private _apiUri: string;
  private _http: HttpClient;

  constructor(logService: LogService, apiUri: string, http: HttpClient) {
    super(logService);
    this.logTraceFrame();

    this._apiUri = apiUri;
    this._http = http;

    this.logService.debug('apiUri', this._apiUri);
  }

  add(data: T): Observable<T> {
    this.logTraceFrame();
    return this._http.post<T>(this._apiUri, data);
  }

  search(filter: IDataFilter<unknown>): Observable<IPayload<T>> {
    this.logTraceFrame();
    return this._http.post<IPayload<T>>(`${this._apiUri}/search`, {});
  }

  getAll(): Observable<T[]> {
    this.logTraceFrame();
    return this._http.get<T[]>(this._apiUri);
  }

  getById(id: K): Observable<T> {
    this.logTraceFrame();
    return this._http.get<T>(`${this._apiUri}/${id}`);
  }

  update(id: K, data: T): Observable<T> {
    this.logTraceFrame();
    return this._http.put<T>(`${this._apiUri}/${id}`, data);
  }

  delete(id: K): Observable<boolean> {
    this.logTraceFrame();
    return this._http.delete<boolean>(`${this._apiUri}/${id}`);
  }
}
