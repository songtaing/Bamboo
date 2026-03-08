import { Inject, Injectable } from '@angular/core';
import { BaseComponent } from '../classes/base-component.class';
import {
  IBambooSharedLibConfig,
  LIB_CONFIG,
} from '../interfaces/bamboo-shared-lib-config.interface';
import { ICacheService } from '../interfaces/cache-service.interface';
import { CacheLocalStorageService } from './cache-local-storage.service';
import { CacheSessionStorageService } from './cache-session-storage.service';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class CacheManagerService extends BaseComponent implements ICacheService {
  private cache!: ICacheService;

  constructor(
    @Inject(LIB_CONFIG) protected override LIB_CONFIG: IBambooSharedLibConfig,
    logService: LogService
  ) {
    super(LIB_CONFIG, logService);
    this.logTraceFrame();

    this.cache = this.generateCacheService(logService);
  }

  private generateCacheService(logService: LogService): ICacheService {
    this.logTraceFrame();

    try {
      if (localStorage) {
        return new CacheLocalStorageService(this.LIB_CONFIG, logService);
      } else {
        return new CacheSessionStorageService(this.LIB_CONFIG, logService);
      }
    } catch {
      return new CacheSessionStorageService(this.LIB_CONFIG, logService);
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
