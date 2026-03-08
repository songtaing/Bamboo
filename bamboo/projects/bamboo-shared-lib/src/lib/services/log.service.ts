import { Inject, Injectable } from '@angular/core';
import { LogLevels } from '../enums/log-level.enum';
import { ILogService } from '../interfaces/log-service.interface';
import { Subject } from 'rxjs';
import {
  LIB_CONFIG,
  IBambooSharedLibConfig,
} from '../interfaces/bamboo-shared-lib-config.interface';

@Injectable({
  providedIn: 'root',
})
export class LogService implements ILogService {
  constructor(@Inject(LIB_CONFIG) private LIB_CONFIG: IBambooSharedLibConfig) {}

  error(...args: any[]): void {
    this.entry(args, LogLevels.error);
  }

  warn(...args: any[]): void {
    this.entry(args, LogLevels.warn);
  }

  info(...args: any[]): void {
    this.entry(args, LogLevels.info);
  }

  debug(...args: any[]): void {
    this.entry(args, LogLevels.debug);
  }

  trace(...args: any[]): void {
    this.entry(args, LogLevels.trace);
  }

  entry(args: any, logLevel: LogLevels): void {
    let log$ = new Subject<any>();

    if (
      this.LIB_CONFIG.environment.logLevel != LogLevels.none &&
      this.LIB_CONFIG.environment.logLevel >= logLevel
    ) {
      console.log(`[${LogLevels[logLevel].toUpperCase()}]: ${JSON.stringify(args)}`);
    }
  }
}
