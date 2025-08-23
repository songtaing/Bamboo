import { Injectable, afterNextRender, afterRender } from '@angular/core';
import { BaseComponent } from '../classes/base-component.class';
import { ICacheService } from '../interfaces/cache-service.interface';
import { LogService } from './log.service';
import { CacheLocalStorageService } from './cache-local-storage.service';
import { CacheSessionStorageService } from './cache-session-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CacheManagerService
  extends BaseComponent
  implements ICacheService
{
  private cache!: ICacheService;

  constructor(logService: LogService) {
    super(logService);
    this.logTraceFrame();

    this.cache = this.generateCacheService(logService);
  }

  private generateCacheService(logService: LogService): ICacheService {
    this.logTraceFrame();

    try {
      if (localStorage) {
        return new CacheLocalStorageService(logService);
      } else {
        return new CacheSessionStorageService(logService);
      }
    } catch {
      return new CacheSessionStorageService(logService);
    }
  }

  get(key: string): string | null {
    this.logTraceFrame();

    return this.cache.get(key);
  }

  getKeys(): string[] {
    this.logTraceFrame();

    return this.cache.getKeys();
  }

  set(key: string, value: string, expire?: Date | undefined): void {
    this.logTraceFrame();

    this.cache.set(key, value, expire);
  }

  has(key: string): boolean {
    this.logTraceFrame();

    return this.cache.has(key);
  }

  length(): number {
    this.logTraceFrame();

    return this.cache.length();
  }

  remove(key: string): void {
    this.logTraceFrame();

    this.cache.remove(key);
  }

  removeAll(): void {
    this.logTraceFrame();

    this.cache.removeAll();
  }
}
