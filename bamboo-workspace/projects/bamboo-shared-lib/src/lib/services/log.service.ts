import { Injectable } from '@angular/core';
import { LogLevels } from '../enums/log-level.enum';
import { ILogService } from '../interfaces/log-service.interface';
import { Subject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LogService implements ILogService {
  constructor() {}

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
      environment.logLevel != LogLevels.none &&
      environment.logLevel >= logLevel
    ) {
      console.log(
        `[${LogLevels[logLevel].toUpperCase()}]: ${JSON.stringify(args)}`
      );
    }
  }
}
