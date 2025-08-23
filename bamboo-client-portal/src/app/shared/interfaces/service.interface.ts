import { Observable } from 'rxjs';
import { IPayload } from './payload.interface';
import { IDataFilter } from './filters/data-filter.interface';

export interface IService<T, K> {
  add(data: T): Observable<T>;
  search(filter: IDataFilter<unknown>): Observable<IPayload<T>>;
  getAll(): Observable<T[]>;
  getById(id: K): Observable<T>;
  update(id: K, data: T): Observable<T>;
  delete(id: K): Observable<boolean>;
}
