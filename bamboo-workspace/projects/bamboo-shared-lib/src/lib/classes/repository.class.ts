import { IDataFilter } from "../interfaces/data-filter.interface";
import { IPayload } from "../interfaces/payload.interface";
import { IRepository } from "../interfaces/repository.interface";
import { LogService } from "../services/log-service/log.service";
import { BaseComponent } from "./base-component.class";

export class Repository<T, K> extends BaseComponent implements IRepository<T, K> {
    private _repo: T[] = [];

    constructor(logService: LogService) {
        super(logService);
        this.logTraceFrame();
    }

    add(data: T): T {
        this.logTraceFrame();

        this._repo.push(data);

        return this._repo[this._repo.length - 1];
    }
    search(filter: IDataFilter): IPayload<T> {
        this.logTraceFrame();

        throw new Error("Method not implemented.");
    }
    getAll(): T[] {
        this.logTraceFrame();

        return this._repo;
    }
    getById(id: K): T {
        this.logTraceFrame();

        throw new Error("Method not implemented.");
    }
    update(id: K, data: T): T {
        this.logTraceFrame();

        throw new Error("Method not implemented.");
    }
    delete(id: K): boolean {
        this.logTraceFrame();

        throw new Error("Method not implemented.");
    }

}