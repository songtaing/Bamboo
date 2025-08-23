import { IPageFilter } from './page-filter.interface';
import { ISearchFilter } from './search-filter.interface';
import { ISortFilter } from './sort-filter.interface';

export interface IDataFilter<T>
  extends IPageFilter,
    ISearchFilter,
    ISortFilter {
  custom?: T;
}
