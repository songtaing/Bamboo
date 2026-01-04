import { LogLevels } from '../enums/log-level.enum';

export interface ILogService {
  error(...args: any[]): void;
  warn(...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
  trace(...args: any[]): void;
  entry(data: any, logLevel: LogLevels): void;
}
