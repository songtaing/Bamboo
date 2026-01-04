import { IDataFilter } from './filters/data-filter.interface';
import { IPayload } from './payload.interface';

export interface IRepository<T, K> {
  add(data: T): T;
  search(filter: IDataFilter): IPayload<T>;
  getAll(): T[];
  getById(id: K): T;
  update(id: K, data: T): T;
  delete(id: K): boolean;
}
