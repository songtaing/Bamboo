import { Injectable } from '@angular/core';
import { BaseComponent } from '../classes/base-component.class';
import { ICacheService } from '../interfaces/cache-service.interface';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class CacheSessionStorageService
  extends BaseComponent
  implements ICacheService
{
  constructor(logService: LogService) {
    super(logService);
    this.logTraceFrame();
  }

  get(key: string): string | null {
    this.logTraceFrame();

    return sessionStorage.getItem(key);
  }

  getKeys(): string[] {
    this.logTraceFrame();

    return Object.keys(sessionStorage);
  }

  set(key: string, value: string, expire?: Date | undefined): void {
    this.logTraceFrame();

    sessionStorage.setItem(key, value);
  }

  has(key: string): boolean {
    this.logTraceFrame();

    return sessionStorage.getItem(key) !== null;
  }

  length(): number {
    this.logTraceFrame();

    return sessionStorage.length;
  }

  remove(key: string): void {
    this.logTraceFrame();

    sessionStorage.removeItem(key);
  }

  removeAll(): void {
    this.logTraceFrame();

    sessionStorage.clear();
  }
}
