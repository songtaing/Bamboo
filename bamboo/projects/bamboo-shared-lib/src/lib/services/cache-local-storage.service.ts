import { Injectable } from '@angular/core';
import { ICacheService } from '../interfaces/cache-service.interface';
import { BaseComponent } from '../classes/base-component.class';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class CacheLocalStorageService
  extends BaseComponent
  implements ICacheService
{
  constructor(logService: LogService) {
    super(logService);
    this.logTraceFrame();
  }

  get(key: string): string | null {
    this.logTraceFrame();

    return localStorage.getItem(key);
  }

  getKeys(): string[] {
    this.logTraceFrame();

    return Object.keys(localStorage);
  }

  set(key: string, value: string, expire?: Date | undefined): void {
    this.logTraceFrame();

    localStorage.setItem(key, value);
  }

  has(key: string): boolean {
    this.logTraceFrame();

    return localStorage.getItem(key) !== null;
  }

  length(): number {
    this.logTraceFrame();

    return localStorage.length;
  }

  remove(key: string): void {
    this.logTraceFrame();

    localStorage.removeItem(key);
  }

  removeAll(): void {
    this.logTraceFrame();

    localStorage.clear();
  }
}
