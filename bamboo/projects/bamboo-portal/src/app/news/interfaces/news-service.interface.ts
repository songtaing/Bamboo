import { INews } from './news.interface';
import { IService } from '../../shared/interfaces/service.interface';
import { BaseService } from '../../shared/classes/base-service.class';

export interface INewsService extends IService<INews, number> {}
