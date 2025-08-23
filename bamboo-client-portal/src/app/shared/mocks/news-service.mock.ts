import { Observable, of } from "rxjs";
import { IDataFilter } from "../interfaces/data-filter.interface";
import { INewsArticle } from "../interfaces/news-article.interface";
import { INewsService } from "../interfaces/news-service.interface";
import { IPayload } from "../interfaces/payload.interface";
import { IRepository } from "../interfaces/repository.interface";
import { Repository } from "../models/repository.class";
import { BaseService } from "../models/base-service.class";
import { LogService } from "../services/log-service/log.service";

export class NewsServiceMock implements INewsService
{
    private _repo: Repository<INewsArticle, number>;

    constructor(logService: LogService) {
        this._repo = new Repository(logService);
    }
    
    add(data: INewsArticle): Observable<INewsArticle> {
        return of(this._repo.add(data));
    }
    search(filter: IDataFilter): Observable<IPayload<INewsArticle>> {
        return of(this._repo.search(filter));
    }
    getAll(): Observable<INewsArticle[]> {
        return of(this._repo.getAll());
    }
    getById(id: number): Observable<INewsArticle> {
        return of(this._repo.getById(id));
    }
    update(id: number, data: INewsArticle): Observable<INewsArticle> {
        return of(this._repo.update(id, data));
    }
    delete(id: number): Observable<boolean> {
        return of(this._repo.delete(id));
    }
    
}