import { LogLevels } from '../app/shared/enums/log-level.enum';
import { IEnvironment } from '../app/shared/interfaces/environment.interface';

export class Environment implements IEnvironment {
  apiDomainUri: string = 'http://www.songtaing.com';
  logLevel: LogLevels = LogLevels.warn;
}
export const environment = new Environment();
