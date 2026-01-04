import { LogLevels } from '../enums/log-level.enum';

export interface IEnvironment {
  logLevel: LogLevels;
  apiDomainUri: string;
}
