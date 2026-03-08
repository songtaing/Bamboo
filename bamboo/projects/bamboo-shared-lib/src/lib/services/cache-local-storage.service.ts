import { Inject, Injectable } from '@angular/core';
import { BaseComponent } from '../classes/base-component.class';
import {
  IBambooSharedLibConfig,
  LIB_CONFIG,
} from '../interfaces/bamboo-shared-lib-config.interface';
import { ICacheService } from '../interfaces/cache-service.interface';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root',
})
export class CacheLocalStorageService extends BaseComponent implements ICacheService {
  constructor(
    @Inject(LIB_CONFIG) protected override LIB_CONFIG: IBambooSharedLibConfig,
    logService: LogService
  ) {
    super(LIB_CONFIG, logService);
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
